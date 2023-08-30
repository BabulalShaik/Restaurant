import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import { Typography, Box, Card, CardActionArea, CardContent, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const Menu = () => {

  const [menuItems, setMenuItems] = useState([]);
  const { Restaurant_name, type } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Restaurants/${Restaurant_name}`);
        const items = response.data.filter((item) =>
          item.type === type
        )
        setMenuItems(items);
      }
      catch (error) {
        console.log("Error fetching menu items:", error)
      }
    };
    fetchdata();

  }, [Restaurant_name, type]);

  const handleSubmit = (item) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const newItem = {
      restaurant: Restaurant_name,
      itemDetails: item,
    };

    console.log('Config:', config);
    console.log('New Item:', newItem);
    console.log('Request URL:', 'http://localhost:3001/add-to-cart');

    axios.post('http://localhost:3001/add-to-cart', newItem, config)
      .then(response => {
        console.log('Item Added to Cart:', response.data);
      })
      .catch(error => {
        console.log('Error Adding  to cart:', error);
      })

  }
  return (
    <>
      <Layout>
        <div>
          {
            menuItems.map(menus => (
              <Box sx={{
                display: 'inline-block',

              }} key={menus.ID}>

                <Card sx={{ maxWidth: "270px", m: 2 }} >
                  <CardActionArea>
                    <img
                      style={{
                        width: "400px",
                        height: "400px"
                      }}
                      src={'http://localhost:3000/' + menus.image}
                      alt={menus.name}
                    />

                    <CardContent>
                      <Typography variant='h5' gutterBottom component={"div"}>
                        {menus.name}<div id='menuu'><Button variant='outlined' onClick={() => handleSubmit(menus)}>Add to Cart</Button></div>
                      </Typography>
                      <Typography>
                        {menus.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>


              </Box>
            ))}
        </div>
      </Layout>
    </>
  )
}

export default Menu;