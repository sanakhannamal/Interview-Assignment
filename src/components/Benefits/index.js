
import React from "react";
import { Grid, Typography } from "@mui/material";
import benefit1 from '../../assets/benefit-icon1.png';
import benefit2 from '../../assets/benefit-icon2.png';
import benefit3 from '../../assets/benefit-icon3.png';
import './index.css'

const Benefits = () => {
  return (
    <Grid container spacing={2} className="benefits" justifyContent="center">
      <Grid item xs={12} md={4} className="benefits-items">
        <img className="benefits-items-image" src={benefit1} alt="24/7 Support" />
        <div className="benefits-item">
          <Typography variant="h6" className="benefits-item-heading">24/7 Support</Typography>
          <Typography variant="body2" className="benefits-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} md={4} className="benefits-items">
        <img className="benefits-items-image" src={benefit2} alt="1000+ of reviews" />
        <div className="benefits-item">
          <Typography variant="h6" className="benefits-item-heading">1000+ of reviews</Typography>
          <Typography variant="body2" className="benefits-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} md={4} className="benefits-items">
        <img className="benefits-items-image" src={benefit3} alt="And more!" />
        <div className="benefits-item">
          <Typography variant="h6" className="benefits-item-heading">And more!</Typography>
          <Typography variant="body2" className="benefits-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default Benefits;
