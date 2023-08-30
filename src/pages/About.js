import React from 'react'
import { Box, Typography } from "@mui/material"
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
       <Box sx={{
        my:"40px",
        textAlign:"center",
        "& h4":{
          fontWeight:"bold",
          mb:"10px"
        },
        "& p":{
          fontSize:"20px",
          textAlign:"justify",
        }
       }}>
          <Typography variant='h4'>Welcome to My Restaurant</Typography>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est ut lorem rhoncus vestibulum. Nullam suscipit, odio at aliquam bibendum, justo nulla egestas lectus, vel aliquam nunc justo vel elit. Duis vitae posuere nulla. Proin dapibus odio in lacus aliquam dictum. Phasellus sit amet nunc nec nunc bibendum ullamcorper vel eget dolor. Vivamus eget vestibulum elit. Ut quis ante eget enim consectetur commodo. Nunc quis metus nec nunc viverra congue. Nam in bibendum lectus. Integer euismod libero et libero vestibulum varius. Vestibulum lacinia quam quis turpis rhoncus ultricies. Aliquam in euismod velit. Suspendisse dictum mauris elit, ac eleifend nunc tincidunt in. Mauris ut ligula eget eros consequat euismod. Fusce sit amet aliquet eros, nec placerat purus.
          </p>
          <br>
          </br>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est ut lorem rhoncus vestibulum. Nullam suscipit, odio at aliquam bibendum, justo nulla egestas lectus, vel aliquam nunc justo vel elit. Duis vitae posuere nulla. Proin dapibus odio in lacus aliquam dictum. Phasellus sit amet nunc nec nunc bibendum ullamcorper vel eget dolor. Vivamus eget vestibulum elit. Ut quis ante eget enim consectetur commodo. Nunc quis metus nec nunc viverra congue. Nam in bibendum lectus. Integer euismod libero et libero vestibulum varius. Vestibulum lacinia quam quis turpis rhoncus ultricies. Aliquam in euismod velit. Suspendisse dictum mauris elit, ac eleifend nunc tincidunt in. Mauris ut ligula eget eros consequat euismod. Fusce sit amet aliquet eros, nec placerat purus.
          </p>
       </Box>
    </Layout>
  )
}

export default About;