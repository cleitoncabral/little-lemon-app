import footer from '../assets/restauranfood.jpg'

const Footer = () => {
  return (
    <footer>
      <img src={footer} alt="" />
      <ul>
        <li>Doormat Navigation</li>
        <li>
          <a href="test.com">Home</a>
        </li>
        <li>
          <a href="test.com">About</a>
        </li>
        <li>
          <a href="test.com">menu</a> 
        </li>
        <li>
          <a href="test.com">Reservations</a>
        </li>
        <li>
          <a href="test.com">Order Online</a>
        </li>
        <li>
          <a href="test.com">Login</a>
        </li>
      </ul>
      <ul>
        <li>Contact</li>
        <li>
          <a href="test.com">Adress</a>
        </li>
        <li>
          <a href="test.com">phone number</a>
        </li>
        <li>
          <a href="test.com">email</a> 
        </li>
      </ul>
      <ul>
        <li>Social Media Links</li>
        <li>
          <a href="test.com">Adress</a>
        </li>
        <li>
          <a href="test.com">phone number</a>
        </li>
        <li>
          <a href="test.com">email</a> 
        </li>
      </ul>
    </footer>
  )
}

export default Footer