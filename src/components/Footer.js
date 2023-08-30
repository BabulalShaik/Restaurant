import React from 'react'
import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
      <Box sx={{
        bgcolor: "black",
        color: "white",
        textAlign: "center",
        p: "20px"
      }}>
        <Box sx={{
          my: "3px",
          "& svg": {
            fontSize: "60px",
            cursor: "pointer",
            mr: "20px",
          },
          "& svg:hover" :{ color: "goldenrod" ,
          transform:"translateX(2px)",
          transition: "all 100ms"}
        }}>
          <InstagramIcon />
          <LinkedInIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography variant='h5'
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "1rem",
            }
          }}>
          All Rights are Reserved &copy; myrestaurant.com
        </Typography>
      </Box>
    </>
  )
}

export default Footer