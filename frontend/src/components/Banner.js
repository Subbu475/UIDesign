import React from "react";
import { Box, Typography } from "@mui/material";
import bannerImage from '../assets/coverpcNew..jpg';
import bannerImageMob from '../assets/covermobile.jpg';
import styles from '../styles/Banner.module.css';
import { useMediaQuery } from "@mui/material";

const Banner = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "40px 20px",
        textAlign: "left",
        marginBottom: 2,
        backgroundImage: `url(${isMobile ? bannerImageMob : bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: 'fill',
        height: '10rem'
      }}

    >
      <Typography variant="h2" sx={{ mb: 1 }} className={styles.robotobanner}>
        Simple
      </Typography>
      <Typography variant="h2" sx={{ mb: 1, ml: 10 }} className={styles.robotobanner}>
        is More
      </Typography>
    </Box>
  );
};

export default Banner;
