import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, name, weight, quantity, price, image} = cartItemDetails

      const onClickDecrement = () => {
        if (quantity > 0) {
          decrementCartItemQuantity(id)
        }
      }

      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }

      const onRemoveCartItem = () => {
        removeCartItem(id)
      }

      return (
        <li className="cart-item" data-testid="cartItem">
          <img className="cart-product-image" src={image} alt={name} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{name}</p>
              <p className='cart-product-bran"'>{weight}</p>
              <p>{price}</p>
            </div>
            <div
              className="cart-quantity-container"
              data-testid="item-quantity"
            >
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="decrement-quantity"
                onClick={onClickDecrement}
                aria-label="Decrement quantity"
              >
                -
              </button>
              <p className="cart-quantity" data-testid="item-quantity">
                {quantity}
              </p>
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="increment-quantity"
                onClick={onClickIncrement}
                aria-label="Increment quantity"
              >
                +
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            data-testid="remove"
            aria-label="Remove item from cart"
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
