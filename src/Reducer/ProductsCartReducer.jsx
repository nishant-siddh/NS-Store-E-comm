import { useEffect } from "react"

const ProductCartReducer = (state, action) => {
    switch (action.type) {
        case "Set_Products_To_Cart":
            const {id, productQuantity, selectedProductColor, productData} = action.payload;

            // console.log(productData);
            const cartProduct = {
                id: id + selectedProductColor,
                name: productData.name,
                productQuantity,
                selectedProductColor,
                image: productData.image[0].url,
                price: productData.price,
                maxProductQuantity: productData.stock,
                description: productData.description
            }

            const product = cartProduct;
            console.log(product,'hi');

            state.allProductsCart.map(item => {
                if(cartProduct.id === item.id){
                    return 1;
                }
            })


            return {
                ...state,
                allProductsCart: [...state.allProductsCart, cartProduct],
                productQuantity: productQuantity
            }
    
        default:
            return state;
    }
}

export default ProductCartReducer;