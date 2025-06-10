import Image from 'next/image'
import Navbar from './Navbar'

export default function Header({ page }) {
  return (
    <header>
      <Image src="/images/vb.jpg" width={150} height={150} alt="Vlada BOCHE" className="profile-img" />
      <h1>Vlada BOCHE</h1>
      <h2>Coach de Vie</h2>
      <h3 className="sous-titre">Coach de reconversion</h3>
      <Navbar current={page} />
    </header>
  )
}
