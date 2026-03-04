<?php

// Allow CORS so the Angular dev server can call this script
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$destination = trim($data['destination'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// TODO: Change this to your actual destination email address
$to = 'julroubens2005@gmail.com';
$subject = 'New contact form submission from The Trip Expert';

$bodyLines = [
    "You have received a new message from the contact form on The Trip Expert.",
    "",
    "Name: {$name}",
    "Email: {$email}",
    "Destination: {$destination}",
    "",
    "Message:",
    $message,
    "",
    "Sent on: " . date('Y-m-d H:i:s')
];

$body = implode("\n", $bodyLines);

$headers = [];
$headers[] = 'From: ' . $email;
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$success = mail($to, $subject, $body, implode("\r\n", $headers));

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}

