import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@mui/material";
import Layout from "../components/Layout";
import axios from "axios";
import "../styles/Cartstyles.css";

const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch cart details from the backend
    axios
      .get("http://localhost:3001/get-user-cart", { withCredentials: true })
      .then((response) => {
        setCartDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart details:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="cart-container">
        <Typography variant="h4">Your Cart</Typography>
        <div className="cart-items">
          {isLoading ? (
            <div className="loading-spinner">Loading...</div>
          ) : cartDetails.length > 0 ? (
            cartDetails.map((cartDetail, index) => (
              <Paper key={index} elevation={3} className="cart-item-card">
                <div className="item-details">
                  
                  {cartDetail.itemDetails.map((itemDetail, itemIndex) => (
                    <div key={itemIndex} className="cart-item">
                      {itemDetail && itemDetail.image && (
                        <img
                          src={itemDetail.image}
                          alt={itemDetail.name}
                          className="item-image"
                          style={{ height: 100 }}
                        />
                      )}<Typography  className="restaurant-name">
                      Restaurant: {cartDetail.restaurant.name}
                    </Typography>
                      <div className="item-text">
                        <Typography  className="item-name">
                          <b>{itemDetail.name}</b>
                        </Typography>
                        <Typography variant="body2" className="item-price">
                          Price: ${itemDetail.price}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </Paper>
            ))
          ) : (
            <Typography variant="body1" className="empty-cart-message">
              Your cart is empty.
            </Typography>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;