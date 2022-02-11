import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Aboutus from "../../assets/aboutus.svg";
function Company() {
  return (
    <>
      <div className="hero-container">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="card-one">
                <img src={Aboutus} alt="service-banner" />
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="hero-container-header-right">
                <Typography
                  variant="h3"
                  component="h3"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  About us
                </Typography>
                <Typography
                  variant="body"
                  component="div"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  We provide a broad range of services and solutions to help
                  organizations facilitate change, achieve their vision and
                  optimize performance and productivity
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <section>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="body"
                component="div"
                className="u-margin-bottom-small"
              >
                Sysstek exists to solve the critical issues facing our clients,
                both large and small. Our unique approach is not only what
                differentiates us, but also what makes us successful. We provide
                a broad range of services and solutions to help organizations
                facilitate change, achieve their vision and optimized
                performance and productivity.
              </Typography>

              <Typography
                variant="body"
                component="div"
                className="u-margin-bottom-small"
              >
                Established in 2022, Sysstek has maintained a strong reputation
                as an IT Solutions Provider and a Business Consulting Firm who
                can be depended upon to deliver rapid results for our
                clients.This reputation has enabled us to build an enviable list
                of over our satisfied clients that includes some of the Top 100
                companies in the country.
              </Typography>

              <Typography
                variant="body"
                component="div"
                className="u-margin-bottom-small"
              >
                All our Products and Services can be customized to meet diverse
                client requirements. We deliver efficiently and punctually thus
                enhancing client’s value and their IT investment return.Sysstek
                brings forward years of knowledge and experience and utilizes
                them to provide its clients with value-added benefits.We have an
                experienced Technical and Management team, a sound financial
                base and the expertise and speed to help our clients achieve
                faster corporate growth.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default Company;
