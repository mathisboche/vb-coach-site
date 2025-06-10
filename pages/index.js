import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vlada BOCHE - Coach de Vie</title>
        <meta name="description" content="Coaching professionnel et personnel" />
      </Head>
      <Header page="home" />
      <main>
        <section id="presentation">
          <h2>Bienvenue</h2>
          <p>
            Je vous accompagne dans votre évolution professionnelle et personnelle pour atteindre vos objectifs et révéler votre potentiel.
          </p>
          <p className="cta">
            <Link href="/contact" legacyBehavior>
              <a className="button">Prendre rendez-vous</a>
            </Link>
          </p>
        </section>

        <section id="about">
          <h2>À propos de Vlada</h2>
          <p>
            Diplômée d'État en psychologie en Ukraine et certifiée en Programmation Neuro‑Linguistique (IFPNL), j’accompagne depuis plus de cinq ans les personnes en quête d'épanouissement professionnel et personnel.
          </p>
          <p>
            Je suis également formée à l’orientation scolaire (SISEM) et aux bilans de compétences (Repère).
          </p>
          <p>
            Basée à Montrouge, je propose des séances en présentiel ou à distance afin de m'adapter à votre rythme.
          </p>
        </section>

        <section id="services">
          <h2>Mes services</h2>
          <ul className="services-list">
            <li>Coaching de reconversion professionnelle</li>
            <li>Orientation scolaire et professionnelle</li>
            <li>Bilan de compétences</li>
            <li>Ateliers de développement personnel</li>
            <li>Accompagnement en cas de deuil, rupture ou burn-out</li>
            <li>Suivi personnalisé et bienveillant</li>
          </ul>
        </section>

        <section id="approche">
          <h2>Mon approche</h2>
          <p>
            J'utilise des méthodes reconnues de coaching, une écoute active et des outils de développement personnel pour vous guider pas à pas.
          </p>
          <p>
            Chaque accompagnement est unique afin de lever vos blocages et atteindre vos objectifs.
          </p>
        </section>

        <section id="temoignages">
          <h2>Témoignages</h2>
          <blockquote>
            « Grâce à l'accompagnement de Vlada, j'ai pu changer de voie et retrouver confiance en moi. » — Marie
          </blockquote>
          <blockquote>
            « Une coach à l'écoute qui sait poser les bonnes questions pour avancer. » — Julien
          </blockquote>
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
            <i className="fa-brands fa-tiktok"></i>
            <a href="https://www.tiktok.com/@vlada.kochh" target="_blank" rel="noopener noreferrer">TikTok</a>
          </p>
          <p>
            <i className="fa-brands fa-linkedin-in"></i>
            <a href="https://www.linkedin.com/in/vlada-boche/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <p>
            <i className="fa-solid fa-chess"></i>
            <a href="https://ratings.fide.com/profile/651010780" target="_blank" rel="noopener noreferrer">Profil FIDE</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
