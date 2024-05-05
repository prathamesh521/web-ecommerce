import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

type CartItemProps = {
    cartItem: any;
  };


const CartItem = ({ cartItem }: CartItemProps) => {
    const { photo, productId, name, price, quantity } = cartItem;

    const decrementHandler = (cartItem: any) => {};
    const incrementHandler = (cartItem: any) => {};
    const removeHandler = (productId: string) => {};
  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button onClick={() => decrementHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler(cartItem)}>+</button>
      </div>

      <button onClick={() => removeHandler(productId)}>
        <FaTrash />
      </button>
    </div>
  )
}

export default CartItem