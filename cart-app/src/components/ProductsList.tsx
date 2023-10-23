import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProducts"
import { UseProductsContextType, ProductType } from "../context/ProductsContext"
import { ReducerAction, ReducerActionType } from "../context/CartContext"
import { ReactElement } from "react"

type ProductProps = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  inCart: boolean
}
const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: ProductProps): ReactElement => {
  const img: string = new URL(`../assets/${product.sku}.jpg`, import.meta.url).href
  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })
  const itemInCart = inCart ? "Added Item in Cart ✅" : null
  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} className="product__img" alt={product.name} />
      <p className="">
        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
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
      const inCart: boolean = cart.some((item) => item.sku === product.sku)
      return <Product key={product.sku} product={product} dispatch={dispatch} REDUCER_ACTIONS={REDUCER_ACTIONS} inCart={inCart} />
    })
  }
  return <main className="main main--products">{pageContent}</main>
}
export default ProductsList
