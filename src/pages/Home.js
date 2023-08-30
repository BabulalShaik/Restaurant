import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material"
import Banner from "../images/banner.jpeg"
import '../styles/homestyles.css'
const Home= () => {
  return (
    <Layout>
      <div className='Home'>
          <div className='Headercontainer'>
            <h1>Food Website</h1>
            <p>Serves Best Food</p>
            <Link to="Restaurants">
            <Button> 
              ORDER FOOD
            </Button>
            </Link>
          </div>
      </div>
    </Layout>
  )
}

export default Home;
