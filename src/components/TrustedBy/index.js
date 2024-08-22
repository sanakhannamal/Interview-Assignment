
import React from "react";
import ImageSlider from "./ImageSlider";
import underline from '../../assets/underline.png';
import { Grid, Typography, Box } from "@mui/material";
import './index.css'

const TrustedBy = () => {
  return (
    <Box className="trusted" sx={{ padding: { xs: 2, md: 5 }, textAlign: 'center' }}>
      <Grid container spacing={2} className="trusted-view" justifyContent="center">
        <Grid item xs={12} md={12}>
          <Box className="group">
            <Typography variant="h4" className="trusted-view-heading">Trusted by</Typography>
            <img src={underline} alt='underline' className="trusted-view-heading-line" />
          </Box>
          <Typography variant="body1" className="trusted-view-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
          </Typography>
        </Grid>
      </Grid>
      <ImageSlider />
    </Box>
  )
}

export default TrustedBy;
