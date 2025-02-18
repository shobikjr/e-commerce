import { createContext, useContext, useEffect, useState } from "react";
import { 
    addItemToCart, 
    checkoutCart, 
    deleteItemFromCart, 
    fetchCart, 
    updateCartItemQuantity 
} from "../Services/Cart";


const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartId, setCartId] = useState(null);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const removeItem = async (id) => {
        const updatedCart = cart.filter(order => order.product._id !== id);
        await deleteItemFromCart(id);
        await fetchCartItems();
        setCart(updatedCart);
    };

    const addToCart = async (product) => {
        const newProd = {
            product_id: product._id,
            quantity: 1,
            sub_total: product.price,
            cart_id: cartId
        };
        const existingProduct = cart.find(cart => cart.product._id === product._id);

        if (existingProduct) {
            existingProduct.quantity++;
            existingProduct.sub_total += Number(product.price);
        }
        await addItemToCart(newProd);
        await fetchCartItems();
    };

    const incrementQuantity = async (prodId) => {
        const cartProd = cart.find(c => c.product._id === prodId);
        if (cartProd) {
            const updatedCart = {
                ...cartProd,
                quantity: cartProd.quantity + 1,
                sub_total: cartProd.sub_total + cartProd.product.price
            };
            await updateCartItemQuantity(cartId, updatedCart.product._id, updatedCart.quantity);
            await fetchCartItems();
            setCart(prev => prev.map(c => c.product._id === prodId ? updatedCart : c));
        }
    };

    const decrementQuantity = async (id) => {
        const cartProd = cart.find(order => order.product._id === id);
        if (cartProd && cartProd.quantity > 1) {
            const updatedCart = {
                ...cartProd,
                quantity: cartProd.quantity - 1,
                sub_total: cartProd.sub_total - cartProd.product.price
            };
            await updateCartItemQuantity(cartId, updatedCart.product._id, updatedCart.quantity);
            await fetchCartItems();
            setCart(prev => prev.map(c => c.product._id === id ? updatedCart : c));
        }
    };

    const fetchCartItems = async () => {
        const cartResponse = await fetchCart();
        if (cartResponse) {
            setCart(cartResponse.items);
            setCartTotal(cartResponse.cart_total);
            setCartId(cartResponse._id);
        }
    };

    const cartCheckout = async () => {
        await checkoutCart();
        await fetchCartItems();
    };

    return (
        <CartContext.Provider value={{
            cartList: cart,
            orderLength: cart.length,
            addToCart,
            removeItemFromCart: removeItem,
            incrementQuantity,
            decrementQuantity,
            cartTotal,
            cartCheckout
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
};