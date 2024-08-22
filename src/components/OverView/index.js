
import React from "react";
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';
import overviewImage from '../../assets/overviewImage.png';
import overviewBackground from '../../assets/overview-background.png';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './index.css'

const OverView = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const myStyle = {
    backgroundImage: `url(${overviewBackground})`,
    maxWidth: '604.88px',
    maxHeight: '669px',
    width: '100%',
    height: '100%',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}


  return (
    <Grid container spacing={4} className="overview">
      <Grid item xs={12} md={6} className="overview-desc">
        <Typography variant={isSmallScreen ? "h5" : "h3"} className="overview-heading">
          Lorem ipsum <span className="overview-heading-line">dolor</span> sit amet yo 👋
        </Typography>
        <Grid container spacing={2} className="overview-list">
          {[item1, item2, item3].map((item, index) => (
            <Grid item xs={12} key={index} className="overview-list-items">
              <img className="list-item-image" src={item} alt={`item${index + 1}`} />
              <div className="overview-list-item">
                <Typography variant="subtitle1" className="overview-list-item-head">Andrew Schultz</Typography>
                <Typography variant="body2" className="overview-list-item-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
                </Typography>
              </div>
            </Grid>
          ))}
          <Grid item xs={12} key={''} style={{paddingLeft: '0', paddingTop: '0'}}>
          <div className="overview-list-empty-item">
          </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} className="overview-images">
        <div style={myStyle} >
        <img className="overview-main-image" src={overviewImage} alt="overviewImage" />
        </div>
      </Grid>
    </Grid>
  );
}

export default OverView;
