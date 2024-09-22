<?php
// script_de_traitement.php

// Configuration de l'adresse email de destination
$destinataire = 'vlada.boche@yahoo.fr';

// Vérification que le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupération et assainissement des données du formulaire
    $nom = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $telephone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $message = htmlspecialchars(trim($_POST['message']));

    // Validation des champs obligatoires
    if (!empty($nom) && !empty($email) && !empty($message)) {
        // Validation de l'email
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Préparation de l'email
            $sujet = "Nouveau message de votre site web de la part de $nom";
            $contenu = "Nom : $nom\n";
            $contenu .= "Email : $email\n";
            if (!empty($telephone)) {
                $contenu .= "Téléphone : $telephone\n";
            }
            $contenu .= "Message :\n$message\n";

            // En-têtes de l'email
            $headers = "From: \"$nom\" <$email>\r\n";
            $headers .= "Reply-To: $email\r\n";
            $headers .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";

            // Envoi de l'email
            $envoi = mail($destinataire, $sujet, $contenu, $headers);

            if ($envoi) {
                // Redirection vers une page de succès ou affichage d'un message
                echo '<p>Votre message a été envoyé avec succès. Merci de nous avoir contactés !</p>';
            } else {
                echo '<p>Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.</p>';
            }
        } else {
            echo '<p>Veuillez entrer une adresse email valide.</p>';
        }
    } else {
        echo '<p>Veuillez remplir tous les champs obligatoires.</p>';
    }
} else {
    // Si le script est accédé directement sans soumission de formulaire
    echo '<p>Accès direct non autorisé.</p>';
}

// Après l'envoi réussi de l'email
if ($envoi) {
    // Redirection vers la page de remerciement
    header('Location: merci.html');
    exit();
} else {
    echo '<p>Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.</p>';
}

?>
