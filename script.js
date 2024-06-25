document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire

        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://formspree.io/f/{your-form-id}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            if (response.ok) {
                window.location.href = 'thankyou.html'; // Rediriger vers la page de remerciement personnalisée
            } else {
                console.error('Erreur lors de la soumission du formulaire', response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire', error);
        }
    });
});
