import useCart from "../hooks/useCart"
import { useState, ReactElement, ChangeEvent ,memo} from "react"
import { ReducerAction, ReducerActionType } from "../context/CartContext"
import { CartItemType } from "../context/CartContext"

type CartLineItemProps = {
  item: CartItemType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
}
const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: CartLineItemProps) => {
  const img: string = new URL(`../assets/${item.sku}.jpg`, import.meta.url).href
  const lineTotal: number = item.qty * item.price
  const highestQty: number = 20 > item.qty ? 20 : item.qty
  const optionValues: number[] = [...Array(highestQty).keys()].map((i) => i + 1)
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val} selected={val === item.qty}>
        {val}
      </option>
    )
  })
  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    })
  }
  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    })
  const content = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart__img" />
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price per Item">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price)}</div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select aria-label="Item Quantity" onChange={onChangeQty} name="itemQty" id="itemQty" className="cart__select" >
        {options}
      </select>
      <div className="cart__item-subtotal">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(lineTotal)}</div>
      <button aria-label="Remove Item from Cart" title="Remove Item from Cart" className="cart__button" onClick={onRemoveFromCart}>
      ❌
      </button>
    </li>
  )
  return content
}

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false)
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()
  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT })
    setConfirm(true)
  }
  const pageContent = confirm ? (
    <h2>Thanks for order</h2>
  ) : (
    <>
      <h2 className="offScreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return <CartLineItem key={item.sku} item={item} dispatch={dispatch} REDUCER_ACTIONS={REDUCER_ACTIONS} />
        })}
      </ul>
      <div className="cart__totals">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button className="cart__submit" onClick={onSubmitOrder} disabled={!totalItems}>
          Place Order
        </button>
      </div>
    </>
  )
  return <main className="main main--cart">{pageContent}</main>
}
export default Cart
