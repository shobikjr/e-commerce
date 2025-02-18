import { api } from "../api/api";

export const fetchCart = async () => {
    try {
        const response = await api().get('/carts');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addItemToCart = async (data) => {
    try {
        console.log("service");
        const response = await api().post('/carts', data);
        console.log("response", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteItemFromCart = async (cartId) => {
    try {
        const response = await api().delete(`/carts/${cartId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateCartItemQuantity = async (cartId, productId, quantity) => {
    try {
        const response = await api().patch(`/carts/${cartId}`, { quantity, product_id: productId });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const checkoutCart = async () => {
    try {
        const response = await api().post('/carts/checkout');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
