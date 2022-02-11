import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { history } from "../../helpers";
import TeamOne from "../../assets/team.svg";
import ItSoluctions from "../../assets/it_solutions.svg";
import SecuritySolutions from "../../assets/security-solutions.svg";
import WebApplicationImg from "../../assets/webapp-img.svg";
import MobileAppImg from "../../assets/mobileapp-img.svg";
import ItConsultingImg from "../../assets/itconsulting-img.svg";
import ApplicationMaintainImg from "../../assets/server1-img.svg";
function Home() {
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
                  The technical professional for digital solutions
                </Typography>
                <Typography
                  variant="body"
                  component="div"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  Our experts are technology veterans, committed to providing
                  smart solutions for any size of project.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="card-one">
                <div className="card-one-left"></div>
                <div className="card-one-body">
                  <img
                    src={require("../../assets/heroimg_1200075866.jpg")}
                    alt="hero_img"
                  />
                </div>
                <div className="card-one-right"></div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <section className="section-one">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={6} className="section-one-left">
              <Typography
                variant="h4"
                component="h4"
                // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Who we are
              </Typography>
              <img
                src={TeamOne}
                alt="who we are"
                className="section-one-image"
              />
            </Grid>
            <Grid item xs={6}>
              <div className="section-one-right">
                <Typography
                  variant="h6"
                  component="h6"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  We raise technology transformation
                </Typography>

                <Typography
                  variant="body"
                  component="body"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  Sysstek exists to solve the critical issues facing our
                  clients, both large and small. Our unique approach is not only
                  what differentiates us, but also what makes us successful. We
                  provide a broad range of services and solutions to help
                  organisations facilitate change, achieve their vision and
                  optimise performance and productivity.
                </Typography>
                <Typography
                  variant="body"
                  component="body"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  This reputation has enabled us to build an enviable list of
                  over our satisfied clients that includes some of the Top 100
                  companies in the country.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="section-two">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h4"
                component="h4"
                // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Our Services
              </Typography>
              <Typography
                variant="body"
                component="body"
                // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Our staff has the capabilities and expertise to take your
                business to the next level. At Sysstek, we combine our insights
                and skills to transform your processes and strategies, and in
                turn, your company.
              </Typography>
              <Grid container className="section-two-card-container">
                <Grid item xs={12} sm={6}>
                  <div
                    className="card-two"
                    onClick={() => {
                      history.push("/services");
                    }}
                  >
                    <div className="card-two-img">
                      <img src={ItSoluctions} alt="it-solution" />
                    </div>
                    <div className="card-two-h6">
                      <Typography
                        variant="h6"
                        component="h6"
                        // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                      >
                        Digital IT Solution
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    className="card-two"
                    onClick={() => {
                      history.push("/technologies");
                    }}
                  >
                    <div className="card-two-img">
                      <img src={SecuritySolutions} alt="it-solution" />
                    </div>
                    <div className="card-two-h6">
                      <Typography
                        variant="h6"
                        component="h6"
                        // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                      >
                        Security & Infrastructure Management
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="section-three">
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            component="h4"
            align="center"
            className="u-margin-bottom-medium"
          >
            We specialise in
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper item sm={12} className="card-three">
                <Grid item sm={4} className="card-three-img">
                  <img src={WebApplicationImg} alt="application" />
                </Grid>
                <Grid item sm={8}>
                  <Typography variant="h6" component="h6">
                    Application development
                  </Typography>
                  <Typography variant="body" component="body">
                    We are a product agency breathing tech into your ideas with
                    our custom Application Development services.
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper item sm={12} className="card-three">
                <Grid item sm={4} className="card-three-img">
                  <img src={MobileAppImg} alt="application" />
                </Grid>
                <Grid item sm={8}>
                  <Typography variant="h6" component="h6">
                    Mobile app development
                  </Typography>
                  <Typography variant="body" component="body">
                    In a mobile-first world, customers and employees want more
                    ways to engage with your brand.
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper item sm={12} className="card-three">
                <Grid item sm={4} className="card-three-img">
                  <img src={ItConsultingImg} alt="application" />
                </Grid>
                <Grid item sm={8}>
                  <Typography variant="h6" component="h6">
                    IT consulting
                  </Typography>
                  <Typography variant="body" component="body">
                    We provide custom IT consulting services to clients in every
                    industry, from hot startups to Fortune
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper item sm={12} className="card-three">
                <Grid item sm={4} className="card-three-img">
                  <img src={ApplicationMaintainImg} alt="application" />
                </Grid>
                <Grid item sm={8}>
                  <Typography variant="h6" component="h6">
                    Application Maintenance and Support
                  </Typography>
                  <Typography variant="body" component="body">
                    Keep Your Software Running At Its Best By Debugging,
                    Sustaining, and Re-scaling Your Apps
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default Home;
