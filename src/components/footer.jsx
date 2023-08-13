import footer from '../assets/restauranfood.jpg'

const Footer = () => {
  return (
    <footer>
      <img src={footer} alt="" />
      <ul>
        <li>Doormat Navigation</li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">menu</a> 
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
      <ul>
        <li>Contact</li>
        <li>
          <a href="">Adress</a>
        </li>
        <li>
          <a href="">phone number</a>
        </li>
        <li>
          <a href="">email</a> 
        </li>
      </ul>
      <ul>
        <li>Social Media Links</li>
        <li>
          <a href="">Adress</a>
        </li>
        <li>
          <a href="">phone number</a>
        </li>
        <li>
          <a href="">email</a> 
        </li>
      </ul>
    </footer>
  )
}

export default Footer