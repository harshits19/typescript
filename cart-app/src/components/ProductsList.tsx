import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProducts"
import { ProductType } from "../context/ProductsContext"
import { ReducerAction, ReducerActionType,CartItemType } from "../context/CartContext"
import { ReactElement, ChangeEvent } from "react"

type ProductProps = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  itemQty: number | undefined
}
const Product = ({ product, dispatch, REDUCER_ACTIONS, itemQty }: ProductProps): ReactElement => {
  const img: string = new URL(`../assets/${product.sku}.jpg`, import.meta.url).href
  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })
  const itemInCart = itemQty ? "Added Item in Cart ✅" : null

  const highestQty: number = 20
  const optionValues: number[] = [...Array(highestQty).keys()].map((i) => i + 1)
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val} selected={val === itemQty}>
        {val}
      </option>
    )
  })
  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...product, qty: Number(e.target.value) },
    })
  }

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} className="product__img" alt={product.name} />
      <p className="">
        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)} {itemInCart}
      </p>
      {!itemQty ? (
        <button onClick={onAddToCart}>Add to Cart</button>
      ) : (
        <>
          <label htmlFor="itemQty" className="offscreen">
            Item Quantity
          </label>
          <select aria-label="Item Quantity" onChange={onChangeQty} name="itemQty" id="itemQty" className="cart__select">
            {options}
          </select>
        </>
      )}
    </article>
  )
  return content
}

const ProductsList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart()
  const { products } = useProducts()

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>
  if (products?.length) {
    pageContent = products.map((product) => {
      const Item: CartItemType | undefined = cart.find((item) => item.sku === product.sku)
      const itemQty: number | undefined = Item?.qty
      return <Product key={product.sku} product={product} dispatch={dispatch} REDUCER_ACTIONS={REDUCER_ACTIONS} itemQty={itemQty} />
    })
  }
  return <main className="main main--products">{pageContent}</main>
}
export default ProductsList
