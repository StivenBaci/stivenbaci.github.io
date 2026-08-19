<?php
/**
 * Kontaktformular-Verarbeitung – L&B Bausanierung
 * Für klassisches PHP-Hosting (IONOS). Keine externen Abhängigkeiten.
 *
 * Das Formular sendet direkt: Der Interessent klickt "Anfrage absenden",
 * dieses Skript verschickt die Anfrage per E-Mail an $recipient. Als Reply-To
 * wird die E-Mail-Adresse des Interessenten gesetzt – eine Antwort geht damit
 * direkt an ihn zurück.
 *
 * VOR LIVEGANG PRÜFEN/ANPASSEN:
 *  - $recipient   : Empfänger-Adresse (wohin die Anfragen gehen)
 *  - $fromAddress : Absender-Adresse AUF DER EIGENEN DOMAIN
 *                   (IONOS verlangt das; sonst landet die Mail im Spam / wird abgelehnt)
 *  - $siteUrl     : echte Domain
 */

$recipient   = 'info@lundb-bausanierung.de';    // [PLATZHALTER] Empfänger
$fromAddress = 'kontakt@lundb-bausanierung.de'; // [PLATZHALTER] Absender auf eigener Domain
$siteUrl     = 'https://www.lundb-bausanierung.de'; // [PLATZHALTER] Domain

function redirect($url) { header('Location: ' . $url); exit; }
function clean($v) { return trim(str_replace(["\r", "\n"], ' ', (string)$v)); }

// Nur POST verarbeiten
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    redirect($siteUrl . '/');
}

// Honeypot: von Bots ausgefüllt -> stillschweigend als "Erfolg" behandeln
if (!empty($_POST['bot-field'])) {
    redirect($siteUrl . '/danke/');
}

$name      = clean($_POST['name'] ?? '');
$email     = clean($_POST['email'] ?? '');
$telefon   = clean($_POST['telefon'] ?? '');
$nachricht = trim($_POST['nachricht'] ?? '');
$consent   = isset($_POST['datenschutz']);

$errors = [];
if ($name === '') $errors[] = 'name';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($nachricht === '') $errors[] = 'nachricht';
if (!$consent) $errors[] = 'datenschutz';
if ($errors) {
    redirect($siteUrl . '/?status=fehler#kontakt');
}

// Nachrichtentext
$body  = "Neue Anfrage über die Website\n";
$body .= "=================================\n\n";
$body .= "Name:    $name\n";
$body .= "E-Mail:  $email\n";
$body .= "Telefon: " . ($telefon !== '' ? $telefon : '-') . "\n";
$body .= "Datum:   " . date('d.m.Y H:i') . " Uhr\n\n";
$body .= "Nachricht:\n" . $nachricht . "\n";

$subject        = 'Angebotsanfrage von ' . $name;
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$fromName       = 'L&B Website';

$headers   = [];
$headers[] = 'From: =?UTF-8?B?' . base64_encode($fromName) . '?= <' . $fromAddress . '>';
$headers[] = 'Reply-To: ' . $email; // Antwort geht direkt an den Interessenten
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: base64';

$msg = chunk_split(base64_encode($body));

$ok = @mail($recipient, $encodedSubject, $msg, implode("\r\n", $headers));

redirect($ok ? ($siteUrl . '/danke/') : ($siteUrl . '/?status=fehler#kontakt'));
