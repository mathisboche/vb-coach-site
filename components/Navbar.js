import Link from 'next/link'

export default function Navbar({ current }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a className={current === 'home' ? 'active' : ''}>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className={current === 'contact' ? 'active' : ''}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
