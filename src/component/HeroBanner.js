import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import React from "react";
import { fontSize } from "@mui/system";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective Exercises
      </Typography>

      <Button
        variant="contained"
        href="#exercises"
        sx={{
          backgroundColor: "#F1951B",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#FF2625"
        fontSize="200px"
        sx={{ opacity: "0.2", display: {xs:'none', lg:'block'} }}
      >
        Exercise
      </Typography>

      <img
        src={HeroBannerImage}
        alt="banner"
        className=" hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
