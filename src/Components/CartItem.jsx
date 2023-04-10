import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useProductsCartContext } from "../Context/ProductsCartContext";
import CartProductQuantity from "./CartProductQuantity";
import FormatPrice from "./FormatPrice";
import RemoveProduct from "./RemoveProduct";
import ViewProduct from "./ViewProduct";

const CartItem = ({
  id,
  name,
  productQuantity,
  maxProductQuantity,
  selectedProductColor,
  image,
  // price,
  description,
  singleProductSubtotal
}) => {
  const { setDecrement, setIncrement } = useProductsCartContext();

  return (
    <Wrapper>
      <div>
        {/* individual product */}
        <div key={id} className="cartProduct flexProperty">
          {/* image */}
          <img src={image} alt="" />

          {/* product detail and price container */}
          <div className="detailAndPriceContainer flexProperty">
            {/* product detail */}
            <div className="productDetails flexProperty">
              {/* product name */}
              <h3 className="productName">
                {name.charAt(0).toUpperCase() + name.slice(1)} -{" "}
                <span className="hide">{description.slice(0, 90)}...</span>
              </h3>

              {/* color */}
              <div className="productColors flexProperty">
                Color :
                <button
                  type="button"
                  style={{ backgroundColor: selectedProductColor }}
                  title={selectedProductColor}
                  className="colorToggleBtn"
                >
                  {null}
                </button>
              </div>

              {/* stock */}
              <div
                style={
                  maxProductQuantity > 0
                    ? { color: "green", fontWeight: "bold" }
                    : { color: "red", fontWeight: "bold" }
                }
              >
                {maxProductQuantity > 0 ? "In Stock" : "Out of Stock"}
              </div>

              {/* cart increment and decrement buttons */}
              <CartProductQuantity
                productQuantity={productQuantity}
                setDecrement={() => setDecrement(id)}
                setIncrement={() => setIncrement(id)}
              />

              <div className="viewAndRemove flexProperty">
                {/* view products button */}
                <ViewProduct id={id} />

                &nbsp;
                
                {/* remove products from cart */}
                <RemoveProduct id={id} />
              </div>
            </div>

            {/* product price */}
            <div className="productPrice">
              <FormatPrice price={singleProductSubtotal} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cartProduct {
    justify-content: space-between;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.greyBackground};
    border-top: 1px solid ${({ theme }) => theme.colors.baseColor};
    /* outline: 1px solid green; */

    img {
      max-width: 18rem;
    }
  }

  .detailAndPriceContainer {
    max-width: 68%;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    /* outline: 1px solid red; */
  }

  .productDetails {
    max-width: 80%;
    flex-direction: column;
    align-items: flex-start;
    /* outline: 1px solid blue; */
    gap: 0.5rem;
  }

  .productPrice {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .productColors {
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .colorToggleBtn {
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    outline: transparent;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  h3 {
    font-weight: normal;
  }

  .viewAndRemove {
    gap: 1rem;

    .viewProduct {
      font-size: 1.1rem;

      &:hover {
        color: ${({ theme }) => theme.colors.baseColor};
        cursor: pointer;
      }
    }

    .removeProduct {
      font-size: 1.1rem;

      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }

  .navLink {
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    .hide {
      /* display: none; */
    }
  }
`;

export default CartItem;
