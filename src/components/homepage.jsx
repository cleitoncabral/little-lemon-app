import {Link} from 'react-router-dom'
import img from '../assets/restauranfood.jpg'
import imgLemon from '../assets/lemon-dessert.jpg'
import imgSalad from '../assets/greek-salad.jpg'
import Card from './card'
const Homepage = () => {
  return (
    <main>
        <article className='heroSection'>
          <section>
            <h2>Little Lemon</h2>
            <h5>Chicago</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <img src={img} alt="" />
        </article>

        <article className='specialSection'>
          <section>
            <h3>This week specials</h3>
            <Link to="/booking"><button>Online Menu</button></Link>
          </section>
          <section className='card-section'>
            <Card path={imgLemon} title={'Greek salada'} price={'$12.55'} text={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '} />
            <Card path={imgSalad} title={'Greek salada'} price={'$12.55'} text={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '} />
            <Card path={imgLemon} title={'Greek salada'} price={'$12.55'} text={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '} />
          </section>


        </article>
        <section></section>
        <section></section>
    </main>
  )
}

export default Homepage