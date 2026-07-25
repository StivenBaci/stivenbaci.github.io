<?php
/**
 * ALVEX Handel GmbH – contact form handler.
 *
 * DSGVO note: runs on the IONOS webspace. Personal data submitted here is
 * processed only on this EU host and e-mailed to the company mailbox. No
 * third-party or non-EU processor is involved. An AVV (Art. 28 DSGVO) with
 * IONOS covers the hosting.
 *
 * IMPORTANT: `$from` must be an address on the alvexhandel.com domain so that
 * IONOS can SPF/DKIM-sign the mail (this is what keeps it out of spam). It is
 * fine to use the existing info@ mailbox as the sender; the visitor's own
 * address goes into Reply-To so you can just hit "Reply".
 */

// --- Configuration ---------------------------------------------------------
$recipient = 'info@alvexhandel.com';        // where enquiries are delivered
$from      = 'info@alvexhandel.com';        // sender – an address on the domain

// --- Language-aware redirect targets ---------------------------------------
$lang       = (isset($_POST['lang']) && $_POST['lang'] === 'en') ? 'en' : 'de';
$successUrl = ($lang === 'en') ? '/en/thank-you/' : '/danke/';
$errorUrl   = ($lang === 'en') ? '/en/#kontakt'   : '/#kontakt';

// --- Only accept POST ------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /');
    exit;
}

// --- Honeypot: if filled, it's a bot. Pretend success, send nothing. -------
if (!empty($_POST['website'])) {
    header('Location: ' . $successUrl);
    exit;
}

// --- Collect + sanitise (strip CR/LF to prevent header injection) ----------
function clean_field($v) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d", "%0A", "%0D"], '', (string) $v));
}

$name      = clean_field($_POST['name']    ?? '');
$firma     = clean_field($_POST['firma']   ?? '');
$email     = clean_field($_POST['email']   ?? '');
$telefon   = clean_field($_POST['telefon'] ?? '');
$nachricht = trim($_POST['nachricht'] ?? '');
$consent   = isset($_POST['datenschutz']);

// --- Server-side validation ------------------------------------------------
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$consent) {
    header('Location: ' . $errorUrl);
    exit;
}

// --- Build the message -----------------------------------------------------
$subject = 'Neue Angebotsanfrage über alvexhandel.com';

$body  = "Neue Anfrage über das Kontaktformular (alvexhandel.com)\n";
$body .= "--------------------------------------------------------\n\n";
$body .= "Name:      " . $name . "\n";
$body .= "Firma:     " . ($firma !== '' ? $firma : '-') . "\n";
$body .= "E-Mail:    " . $email . "\n";
$body .= "Telefon:   " . ($telefon !== '' ? $telefon : '-') . "\n";
$body .= "Sprache:   " . $lang . "\n\n";
$body .= "Nachricht:\n" . ($nachricht !== '' ? $nachricht : '-') . "\n";

$headers  = 'From: ALVEX Website <' . $from . ">\r\n";
$headers .= 'Reply-To: ' . $name . ' <' . $email . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$sent = @mail($recipient, $encodedSubject, $body, $headers);

// --- Redirect --------------------------------------------------------------
header('Location: ' . ($sent ? $successUrl : $errorUrl));
exit;
