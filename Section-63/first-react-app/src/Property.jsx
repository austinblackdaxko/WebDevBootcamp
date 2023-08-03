export default function Property({name, rating, price}) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>${price}/night</h3>
      <h4>Rating: {rating} ⭐</h4>
    </div>
  )
}