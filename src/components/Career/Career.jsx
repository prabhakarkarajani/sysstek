import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CareerImg from "../../assets/career.svg";
function Career() {
  return (
    <>
      <div className="hero-container">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="hero-container-header">
                <Typography
                  variant="h3"
                  component="h3"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  No job openings at this time.
                </Typography>
                <Typography
                  variant="body"
                  component="div"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  Please visit after few day.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="card-one">
                <img src={CareerImg} alt="hero_img" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Career;
