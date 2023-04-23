const ProductCartReducer = (state, action) => {
    switch (action.type) {

        case "Set_Products_To_Cart":
            const {id, productQuantity, selectedProductColor, productData} = action.payload;

            const existingProduct = state.allProductsCart.find((item) => item.id === id + selectedProductColor)
            
            if(existingProduct){
                let updatedProducts = state.allProductsCart.map(item => {
                    if(item.id === id + selectedProductColor){
                        let newProductQuantity = item.productQuantity + productQuantity;
                        if(newProductQuantity >= item.maxProductQuantity){
                            newProductQuantity = item.maxProductQuantity;
                        }

                        return {
                            ...item,
                            productQuantity: newProductQuantity
                        }
                    }

                    else{
                        return item
                    }
                })

                return {
                    ...state,
                    allProductsCart: updatedProducts
                }
            }

            else{
                const cartProduct = {
                    id: id + selectedProductColor,
                    name: productData.name,
                    productQuantity,
                    selectedProductColor,
                    image: productData.image[0].url,
                    price: productData.price,
                    maxProductQuantity: productData.stock,
                    description: productData.description,
                    singleProductSubtotal: 0,
                }

                return {
                    ...state,
                    allProductsCart: [...state.allProductsCart, cartProduct],
                }
            }



        case 'Set_Decrement':
            const updatedDecrementQuantity = state.allProductsCart.map((product) => {
                if(product.id === action.payload){
                    let decreasedQuantity = product.productQuantity - 1;
                    
                    if(decreasedQuantity <= 1){
                        decreasedQuantity = 1;
                    }

                    return {
                        ...product,
                        productQuantity: decreasedQuantity,
                    }
                }
                else{
                    return product
                }
            });
            
            return {
                ...state,
                allProductsCart: updatedDecrementQuantity
            }
            


        case 'Set_Increment':
            const updatedIncrementQuantity = state.allProductsCart.map((product) => {
                if(product.id === action.payload){
                    let increasedQuantity = product.productQuantity + 1;
                    
                    if(increasedQuantity > product.maxProductQuantity){
                        increasedQuantity = product.maxProductQuantity;
                    }
                    
                    return {
                        ...product,
                        productQuantity: increasedQuantity,
                    }
                }
                else{
                    return product
                }
            });

            return {
                ...state,
                allProductsCart: updatedIncrementQuantity
            }

    

        case 'Set_Cart_Product_Price':
            const updatedPrice = state.allProductsCart.map(item => {
                const { price, productQuantity } = item;
                let newPrice = price * productQuantity;

                return {
                    ...item,
                    singleProductSubtotal: newPrice
                }
            });

            return {
                ...state,
                allProductsCart: updatedPrice
            }



        case 'Set_Cart_Total_Product_And_Product_Price':
            let { updatedAllProductsSubtotal, updatedItemCount } = state.allProductsCart.reduce((acc, curr) => {
                let { singleProductSubtotal, productQuantity } = curr;

                acc.updatedItemCount += productQuantity;
                acc.updatedAllProductsSubtotal += singleProductSubtotal;

                return acc;
            }, {
                updatedAllProductsSubtotal: 0,
                updatedItemCount: 0
            })

            return {
                ...state,
                productsTotalPrice: updatedAllProductsSubtotal,
                totalProducts: updatedItemCount
            }


            
        case 'Remove_Product_From_Cart':

            let updatedCart = [...state.allProductsCart]

            updatedCart = updatedCart.filter(item => item.id !== action.payload)

            return {
                ...state,
                allProductsCart: updatedCart
            }



        case 'Clear_Cart':
            return {
                ...state,
                allProductsCart: []
            }

            
    
        default:
            return state;
    }
}

export default ProductCartReducer;