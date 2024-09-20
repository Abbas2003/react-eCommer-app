import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()


function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const items = localStorage.getItem("cartItems");
        if (items) {
          setCartItems([...JSON.parse(items)]);
        }
        setIsLoaded(false);
      }, []);
    
      useEffect(() => {
        if (!isLoaded) {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
      }, [cartItems]);

    function addItemToCart(item){
        const arr = [...cartItems]
        const itemIndex = arr.findIndex((data) => data.id == item.id)
        if(itemIndex == -1){
            arr.push({ ...item, quantity: 1})
        } else {
            arr[itemIndex].quantity += 1;
        }
        console.log("Item", item);
    }

    function updateCart(id, type){
        const arr = [...cartItems]
        const itemIndex = arr.findIndex((data) => data.id == id)
        if(type == "plus"){
            arr[itemIndex].quantity ++;
        } else {
            arr[itemIndex].quantity --;
        }
        setCartItems([...arr])
    }

    function removeItemFromCart(id){
        const arr = [...cartItems]
        const itemIndex = cartItems.findIndex((data) => data.id === id)
        arr.splice(itemIndex, 1)
        setCartItems([...arr])
    }

    function isItemAdded(id){
        const arr = cartItems
        const itemIndex = cartItems.findIndex((data) => data.id === id)
        if(itemIndex == -1){
            return null
        } else {
            return arr[itemIndex]
        }
        setCartItems([...arr])
    }

    console.log("cartItems", cartItems);
    


    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, isItemAdded, updateCart }}>
            {children}
        </CartContext.Provider> 
    )
}


export default CartContextProvider;