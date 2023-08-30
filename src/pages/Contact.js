import React from 'react';
import Layout from '../components/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        ml: "10px",
        mb: "5px",
        "& h4": {
          fontWeight: "bold",
          m: "5px"
        }
      }}>
        <Typography variant='h4'>
          Contact Us
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est ut lorem rhoncus vestibulum. Nullam suscipit, odio at aliquam bibendum, justo nulla egestas lectus, vel aliquam nunc justo vel elit. Duis vitae posuere nulla. Proin dapibus odio in lacus aliquam dictum. Phasellus sit amet nunc nec nunc bibendum ullamcorper vel eget dolor. Vivamus eget vestibulum elit. Ut quis ante eget enim consectetur commodo. Nunc quis metus nec nunc viverra congue. Nam in bibendum lectus. Integer euismod libero et libero vestibulum varius. Vestibulum lacinia quam quis turpis rhoncus ultricies. Aliquam in euismod velit. Suspendisse dictum mauris elit, ac eleifend nunc tincidunt in. Mauris ut ligula eget eros consequat euismod. Fusce sit amet aliquet eros, nec placerat purus.
        </p>
      </Box>
      <Box sx={{
        m: 3, ml: "10px", width: "600px", "@meida (max-width:600px)": {
          width: "300px",
        },
      }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white", textAlign: "center" }}>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 99876543986 (toll free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ pt: 1, color: "brown" }} /> myrestaurant@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ pt: 1 }} /> 6305518779
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout >
  )
}

export default Contact;
