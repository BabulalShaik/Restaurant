import { useEffect, useState } from 'react';
import React from 'react'
import Layout from '../components/Layout';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Restaurants = () => {
    const [items, setItems] = useState([]);
    const [isbutton, setIsbutton] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [close, setClose] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get('http://localhost:3001/Restaurants');
                setItems(response.data);
            }
            catch (error) {
                console.log("error fetching the Restaurants:", error);
            }
        };
        fetchdata();
    }, []);

    const handleClick = (Restaurant_name) => {
        setSelectedType(Restaurant_name);
        setIsbutton(!isbutton);
        setClose(!close)
    }

    const handleTypeChange = (type) => {
        navigate(`/menu/${selectedType}/${type}`,
            { replace: true });
    };

    return (
        <>
            <Layout>
                <Box sx={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "left"
                }}>
                    {
                        items.map(data => (
                            <div onClick={() => handleClick(data.name)} >

                                <Card sx={{ maxWidth: "350px", m: 2, }} key={data.id}>
                                    <CardActionArea>
                                        <img
                                            src={data.url}
                                            alt={data.name}
                                            style={{ width: '400px', height: '400px' }}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                {data.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        ))
                    }
                </Box>

                <Box sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.68)",
                    position: "fixed",
                    top: "0",
                    visibility: isbutton ? "visible" : "hidden",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Box sx={{
                        position: "relative",
                        top: "50%",
                        left: "40%"
                    }}>

                        <Button variant='contained' sx={{ width: "130px", height: "30px" }} onClick={() => handleTypeChange('veg')}>veg</Button>
                        <Button variant='contained' sx={{ width: "130px", height: "30px", marginLeft: "10px" }} onClick={() => handleTypeChange('Non veg')}>Non-veg</Button>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}

export default Restaurants;