import Nav from "./Nav"
import useCart from "../hooks/useCart"
import { ReactElement } from "react"

type HeaderProps = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({ viewCart, setViewCart }: HeaderProps) => {
  const { totalItems, totalPrice } = useCart()

  const content: ReactElement = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Harshits</h1>
        <div className="header__price-box">
          <p>Total Items:{totalItems}</p>
          <p>Total Price:{totalPrice}</p>
        </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </div>
    </header>
  )
  return content
}
export default Header
