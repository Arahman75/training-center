import { useEffect, useState } from "react";
import { getStoredCart } from "../components/utilities/fakedb";

const useCart =(courses)=>{
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = courses.find(course => course.id ===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    
    },[courses]);

    return [
        cart,
        setCart
    ]
    
}
export default useCart;