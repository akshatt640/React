

const Card = (props) => {
    console.log(props)
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="not found this image" />
        <h2>{props.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Card
