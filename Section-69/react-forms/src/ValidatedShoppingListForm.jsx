// Section 69 663 - Form Validation From Scratch
import { useState } from "react";
export default function ValidatedShoppingListForm({addItem}) {

  const [formData, setFormData] = useState({ product: "", quantity: 0});
  const [productIsValid, setProductIsValid] = useState(false);
  const validate = (product) => {
    if(product.length === 0) {
      setProductIsValid(false)
    }
    else {
      setProductIsValid(true)
    }
  }
  const handleChange = (evt) => {
    if(evt.target.name === "product") {
      validate(evt.target.value);
    }
    setFormData(currData => {
      return {
        ...currData,
        [evt.target.name] : evt.target.value
      }
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productIsValid) {
      addItem(formData);
      setFormData({product: "", quantity: 1})
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product">Product Name: </label>
        <input 
          type="text"
          placeholder="product name"
          name="product"
          id="product"
          onChange={handleChange}
          value={formData.product} />
        {!productIsValid && <span style={{color: "red"}}>Product name cannot be empty</span>}
        <label htmlFor="quantity">Quantity: </label>
        <input 
          type="number"
          placeholder="1"
          name="quantity"
          id="quantity"
          onChange={handleChange}
          value={formData.quantity} />
        <button>Add Item</button>
      </form>
    </div>
  )
}