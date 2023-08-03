import Property from "./Property"
import "./PropertyList.css"
export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map(property => {
         return <Property
          name={property.name}
          rating={property.rating}
          price={property.price}
          key={property.id}
        />
      })}
    </div>
  )

}