import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { CartProvider } from "./context/CartContext.tsx"
import { ProductsProvider } from "./context/ProductsContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>
)
