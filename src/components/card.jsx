const Card = ({path, title, price, text}) => {
  return (
   <article className="card">
    <img src={path} alt="" />
    <section>
        <div>
            <h5>{title}</h5>
            <span>{price}</span>
        </div>
        
        <p>{text}</p>
        <p><strong>Order Online</strong></p>
    </section>
   </article>
  )
}

export default Card