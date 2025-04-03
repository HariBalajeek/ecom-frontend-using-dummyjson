import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        async function getProducts(){
            try{
                const response = await 
                axios.get("https://dummyjson.com/products")
                const updatedProducts = response.data.products.map(product=> ({
                    ...product,
                    stock: product.stock,

                }))
                setProducts(updatedProducts)
            }
            catch(error){
                console.error('Error fetching products',error)
            }
        }
        getProducts()
    },[])

    //addproducts to the cart
    const addToCart = (product)=>{
        setProducts((prevProducts)=>
        prevProducts.map((item) =>
        item.id === product.id ? {...item,stock:item.stock - 1}: item
    ))

    setCart((prevCart)=> {
        const existingItem = prevCart.find((item)=> item.id === product.id)
    if(existingItem){
        return prevCart.map((item)=>
        item.id === product.id ? {...item, quantity: item.quantity + 1}: item
    )
    }
    else{
        return [...prevCart, {...product, quantity: 1}]
    }
    }
)
    }
    const removeFromCart = (productId) =>{
        setProducts((prevProducts)=>
            prevProducts.map((item) =>
            item.id === productId ? {...item, stock: item.stock + 1}: item)
    )

    setCart((prevCart)=>
    prevCart.map((item)=>
    item.id === productId ? {...item, quantity: item.quantity - 1}: item)
.filter((item)=> item.quantity>0))
    }
    return (
        <CartContext.Provider value={{products,addToCart,removeFromCart,cart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)