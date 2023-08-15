import logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li><a href="test.com">Home</a></li>
          <li><a href="test.com">About</a></li>
          <li><a href="test.com">Menu</a></li>
          <li><a href="test.com">Reservations</a></li>
          <li><a href="test.com">Order Online</a></li>
          <li><a href="test.com">Login</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header