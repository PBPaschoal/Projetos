<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Configurações do e-mail
    $to = "fjobstack@pbpaschoal.com";
    $subject = "Mensagem do formulario FJOBSTACK";
    $message = "Nome: " . $nome . "\n\n";
    $message .= "E-mail: " . $email . "\n\n";
    $message .= "Mensagem: " . $mensagem;

    // Envio do e-mail
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Obrigado! Sua mensagem foi enviada com sucesso.";
    } else {
        echo "Desculpe, ocorreu um erro ao enviar a mensagem.";
    }
}
?>
