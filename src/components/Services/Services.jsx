import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import HeroServiceImg from "../../assets/hero-service-img.svg";
import SoftwareDevImg from "../../assets/software-development.svg";
import Security from "../../assets/security-and-infra.svg";
import CloduComputing from "../../assets/cloud-computing.svg";
import ItSupport from "../../assets/support-img.svg";
import partnershipImg from "../../assets/partnership-img.svg";
import TestingPerson from "../../assets/consultng.svg";

function Services() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                  Your success is here.
                </Typography>
                <Typography
                  variant="body"
                  component="div"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  We’re proud to help shape and improve how our clients
                  structure and manage their business.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="card-one">
                <img src={HeroServiceImg} alt="service-banner" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <section className="service-section-one">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item sm="6" xs="12">
              <Paper item sm={12} className="card-four">
                <Typography variant="h6" component="h6">
                  Solutions for Success
                </Typography>
                <Typography variant="body" component="body">
                  We offers the comprehensive capabilities and deep industry
                  knowledge necessary to help you solve the most complex issues
                  of your Organizations. Since opening our doors , we’re proud
                  to say that each year we have a bigger list of returning and
                  new clients.
                </Typography>
                <Typography variant="body" component="body">
                  Want to experience the expertise of System for yourself?
                  Explore our IT services.
                </Typography>
              </Paper>
            </Grid>
            <Grid item sm="6" xs="12">
              <Paper item sm={12} className="card-four">
                <Typography variant="h6" component="h6">
                  Expert Guidance
                </Typography>
                <Typography variant="body" component="body">
                  With years of experience, our staff has the capabilities and
                  expertise to take your business to the next level. At
                  pistosis, we combine our insights and skills to transform your
                  processes and strategies, and in turn, your company. We’re
                  proud to help shape and improve how our clients structure and
                  manage their business.
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              sm="12"
              xs="12"
              className="u-margin-bottom-medium u-margin-top-medium"
            >
              <div className="card-mini">
                <img src={SoftwareDevImg} alt="software development" />
                <Typography variant="h6" component="h6">
                  Software Development
                </Typography>
              </div>
              <div className="card-mini">
                <img src={Security} alt="security and infra" />
                <Typography variant="h6" component="h6">
                  Security & Infra Management
                </Typography>
              </div>
              <div className="card-mini">
                <img src={CloduComputing} alt="cloud computing" />
                <Typography variant="h6" component="h6">
                  Cloud Computing
                </Typography>
              </div>
              <div className="card-mini">
                <img src={ItSupport} alt="Tech support" />
                <Typography variant="h6" component="h6">
                  Tech Support
                </Typography>
              </div>
              <div className="card-mini">
                <img src={partnershipImg} alt="partnershipImg" />
                <Typography variant="h6" component="h6">
                  Long-term Partnerships
                </Typography>
              </div>
              <div className="card-mini">
                <img src={TestingPerson} alt="software development" />
                <Typography variant="h6" component="h6">
                  TestingPerson
                </Typography>
              </div>
            </Grid>
            <Grid item sm="6" xs="12">
              <Paper item sm={12} className="card-four">
                <Typography variant="h6" component="h6">
                  Achieve Your Goals
                </Typography>
                <Typography variant="body" component="body">
                  We examine what organizations are doing to stay relevant and
                  competitive in this fast-paced world, and which ones are doing
                  it best. We then strategize using smart tools and global
                  resources in order to understand the implications of every
                  choice our clients can make. Get in touch to learn more about
                  how this service can help you.
                </Typography>
              </Paper>
            </Grid>
            <Grid item sm="6" xs="12">
              <Paper item sm={12} className="card-four">
                <Typography variant="h6" component="h6">
                  Grow Your Business
                </Typography>
                <Typography variant="body" component="body">
                  We examine what organizations are doing to stay relevant and
                  competitive in this fast-paced world, and which ones are doing
                  it best. We then strategize using smart tools and global
                  resources in order to understand the implications of every
                  choice our clients can make. Get in touch to learn more about
                  how this service can help you.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default Services;
