import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/hero-slider/HeroSlider";
import ProductItem from "../components/product-item/ProductItem";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <section className="category-list">
        <div className="section-top" align="center">
          <Typography variant="h4">Featured Categories</Typography>
          <Typography variant="p">Lorem ipsum dolor sit.</Typography>
        </div>
        <Container>
          <Grid container justifyContent="space-between" marginTop="3rem">
            <Grid className="category-item" item xs={6} md={3}>
              <Link to="#">
                <Typography variant="h5">Shoes</Typography>
              </Link>
            </Grid>
            <Grid className="category-item" item xs={6} md={3}>
              <Link to="#">
                <Typography variant="h5">T-Shirt</Typography>
              </Link>
            </Grid>
            <Grid className="category-item" item xs={6} md={3}>
              <Link to="#">
                <Typography variant="h5">Jacket</Typography>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Category End */}
      <section className="product-list">
        <Container>
          <div className="section-top" align="center">
            <Typography variant="h4">Featured Products</Typography>
            <Typography variant="p">Lorem ipsum dolor sit.</Typography>
          </div>
          <Grid container gap={4} marginTop="4em">
            <ProductItem item md={4} />
            <ProductItem item md={4} />
            <ProductItem item md={4} />
            <ProductItem item md={4} />
            <ProductItem item md={4} />
            <ProductItem item md={4} />
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Home;
