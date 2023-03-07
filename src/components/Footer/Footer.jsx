import React from "react";
import { history } from "../../helpers";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { findFlagUrlByNationality } from "country-flags-svg";
function Footer() {
  const flagUrl = findFlagUrlByNationality("American");
  const show = history.location && history.location.pathname === "/404";
  // const show = history.location && history.location.pathname === "/";
  return (
    <>
      {!show && (
        <footer className="footer">
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <Typography
                      variant="h3"
                      componet="h3"
                      className="footer-title"
                    >
                      Lets talk?
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={8}>
                    <Typography
                      variant="body"
                      component="div"
                      className="footer-title-secondary"
                    >
                      Hello <br />
                      781-SYS-STEK (781-797-7835)
                    </Typography>
                    <br />
                    <Typography
                      variant="body"
                      component="div"
                      className="footer-title-secondary"
                    >
                      Email <br />
                      info@sysstek.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography
                  variant="body"
                  component="div"
                  className="footer-flag"
                >
                  <img src={flagUrl} alt="country-flag" />
                </Typography>
                <Typography
                  variant="body"
                  component="div"
                  className="footer-address"
                >
                  2450 Atlanta Hwy, <br />
                  Suite 802, Cumming GA 30040
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} className="footer__copyright">
                <Typography variant="body2" component="body2">
                  © 2021 Sysstek - All Rights Reserved
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
      )}
    </>
  );
}

export default Footer;
