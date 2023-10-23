import { ReactElement, createContext, useEffect, useState } from "react"

//create a type first
export type ProductType = {
  sku: string
  name: string
  price: number
}

// const InitialState: ProductType[] = []

const InitialState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
]

export type UseProductsContextType = {
  products: ProductType[]
}
const InitialProductsContext = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(InitialProductsContext)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  /* useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((res) => {
          return res.json()
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err)
        })
      return data
    }
    fetchProducts().then((products) => setProducts(products))
  }, []) */

  const [products, setProducts] = useState<ProductType[]>(InitialState)

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
}

export default ProductsContext

/* Summary what we done here
1. create a type and initial state for Prouducts List
2. create a provider for products context

host json on server
on terminal
$ npx json-server -w "file dir w file name" -p "port num"
>> $ npx json-server -w data/products.json -p 3500

*/
