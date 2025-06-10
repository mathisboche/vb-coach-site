import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Vlada BOCHE, Coach de Vie</title>
      </Head>
      <Header page="contact" />
      <main>
        <section id="contact">
          <h2>Contact</h2>
          <p>Pour plus d'informations ou pour réserver une session, veuillez me contacter :</p>
          <p>
            <i className="fa-solid fa-envelope"></i> <strong>Email :</strong>{' '}
            <a href="mailto:vlada.boche@yahoo.fr">vlada.boche@yahoo.fr</a>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> <strong>Téléphone :</strong>{' '}
            <a href="tel:+33618688843">+33 6 18 68 88 43</a>
          </p>
          <p>
            <i className="fa-brands fa-whatsapp"></i> <strong>WhatsApp :</strong>{' '}
            <a href="https://wa.me/33664443538?text=Bonjour%20Vlada%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20vos%20services." target="_blank" rel="noopener noreferrer">Cliquez ici</a>
          </p>
        </section>

        <section id="infos">
          <h2>Informations pratiques</h2>
          <p>
            <i className="fa-solid fa-location-dot"></i> 202 Avenue Marx Dormoy, 92120 Montrouge. Séances en présentiel ou à distance.
          </p>
          <p>
            <i className="fa-solid fa-clock"></i> Disponibilités du lundi au vendredi, de 9h à 18h.
          </p>
          <p>
            <i className="fa-solid fa-euro-sign"></i> Première séance 57&nbsp;€, tarif normal 80&nbsp;€.
          </p>
        </section>

        <section id="formulaire">
          <h2>Envoyer un message</h2>
          <form>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </section>

        <section id="reseaux">
          <h2>Réseaux Sociaux</h2>
          <p>Suivez-moi sur :</p>
          <p>
            <i className="fa-brands fa-facebook-f"></i>
            <a href="https://www.facebook.com/profile.php?id=100009659551709" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
          <p>
            <i className="fa-brands fa-instagram"></i>
            <a href="https://www.instagram.com/vlada.boche/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <p>
            <i className="fa-brands fa-linkedin-in"></i>
            <a href="https://www.linkedin.com/in/vlada-boche/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
