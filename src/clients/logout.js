import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout";
import "../styles/logoutstyles.css";
import Cookies from "js-cookie";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
   Cookies.remove("token");
   axios
      .post("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching cart details:", error);
      })
    console.log("Token Removed")
    navigate("/");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <Layout>
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default Logout;
