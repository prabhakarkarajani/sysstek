import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

//svg images
import HeroTechImg from "../../assets/hero-tech-img.svg";
import Dotnet from "../../assets/dotnet.svg";
import Ajax from "../../assets/ajax.svg";
import Angularjs from "../../assets/angularjs.svg";
import Aws from "../../assets/aws.svg";
import Azure from "../../assets/azure.svg";
import Clang from "../../assets/clang.svg";
import Cpluslang from "../../assets/cpluslang.svg";
import CSS from "../../assets/css.svg";
import HTML from "../../assets/html.svg";
import IISlang from "../../assets/iis-lang.svg";
import Javalang from "../../assets/java.svg";
import JavascriptLang from "../../assets/javascript.svg";
import jquerylang from "../../assets/jquery.svg";
import jsonlang from "../../assets/jsonlang.svg";
import reactjslang from "../../assets/reactjs.svg";
import vuejs from "../../assets/vuejs.svg";
import webservice from "../../assets/webservice.svg";
import agile from "../../assets/agile-img.svg";
import cloudDB from "../../assets/cloud-db.svg";
import cloudComputing1 from "../../assets/cloud-computing-1.svg";
import deploymentImg from "../../assets/deploymentImg.svg";
function Technologies() {
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
                  Technology.
                </Typography>
                <Typography
                  variant="body"
                  component="div"
                  // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  Our comprehensive technological solutions help industry
                  leading companies and individuals achieve greater success.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="card-tech">
                <img src={HeroTechImg} alt="service-banner" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <section className="service-section-one ">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item sm="12" xs="12" className="u-margin-top-medium">
              <Typography
                varient="body"
                component="div"
                className="u-margin-bottom-small"
              >
                Sysstek is specialized in providing cost effective and high
                value IT Management and Business Solutions. We help our clients
                with the selection, installation and maintenance of their
                complete IT Application Development and Infrastructure that runs
                their business.
              </Typography>
              <Typography
                varient="body"
                component="div"
                className="u-margin-bottom-small"
              >
                Our comprehensive technological solutions help industry leading
                companies and individuals achieve greater success. Our platform
                has a wide range of features that we’re created with an aim to
                help you live differently. In order to empower our users to do
                better, SYSSTEK is continually building upon its technology, so
                stay in touch to learn about upgrades and other changes. For a
                free demo, contact us today.
              </Typography>
              <Typography
                varient="body"
                component="div"
                className="u-margin-bottom-small"
              >
                We have an experienced Technical and Project and Program
                Management team, a sound financial base and the expertise and
                speed to help our clients achieve faster corporate growth.
              </Typography>
            </Grid>
            <Grid item sm="12" xs="12" className="u-margin-bottom-big">
              <Typography
                variant="h6"
                component="h6"
                className="u-margin-bottom-small"
              >
                Web technologies
              </Typography>
              <div className="u-margin-top-small">
                <div className="card-tile">
                  <img src={Dotnet} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={Javalang} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={Clang} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={Cpluslang} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={HTML} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={CSS} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={JavascriptLang} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={Ajax} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={reactjslang} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={Angularjs} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={vuejs} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={jquerylang} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={jsonlang} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={IISlang} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={webservice} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={Aws} alt="dotnet" />
                </div>
                <div className="card-tile">
                  <img src={Azure} alt="dotnet" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="u-margin-top-big u-margin-bottom-big">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="card-tech-two">
                <Paper className="card-tech-two-media">
                  <img src={agile} alt="agile" />
                </Paper>
                <Typography
                  variant="h6"
                  component="h6"
                  className="card-tech-two-title"
                >
                  Project Management and SDLC
                </Typography>
                <Typography
                  varient="body"
                  component="div"
                  className="card-tech-two-desc"
                >
                  AGILE, JIRA, Scrum, Lean, Devops, TDD, FDD, PMP, Kanban,
                  Microsoft Project Plan
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="card-tech-two">
                <Paper className="card-tech-two-media">
                  <img src={cloudDB} alt="agile" />
                </Paper>
                <Typography
                  variant="h6"
                  component="h6"
                  className="card-tech-two-title"
                >
                  Database
                </Typography>
                <Typography
                  varient="body"
                  component="div"
                  className="card-tech-two-desc"
                >
                  Oracle,Microsoft SQLServer, Mongo DB, Microservices, Microsoft
                  Access, Cassandra
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="card-tech-two">
                <Paper className="card-tech-two-media">
                  <img src={cloudComputing1} alt="agile" />
                </Paper>
                <Typography
                  variant="h6"
                  component="h6"
                  className="card-tech-two-title"
                >
                  Cloud Computing
                </Typography>
                <Typography
                  varient="body"
                  component="div"
                  className="card-tech-two-desc"
                >
                  MicrosoftAzure, AWS, SalesForce, Microservices, Dockers,
                  Kubernetes
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="card-tech-two">
                <Paper className="card-tech-two-media">
                  <img src={deploymentImg} alt="agile" />
                </Paper>
                <Typography
                  variant="h6"
                  component="h6"
                  className="card-tech-two-title"
                >
                  Build, Deployment and Testing
                </Typography>
                <Typography
                  varient="body"
                  component="div"
                  className="card-tech-two-desc"
                >
                  GIT, Maven, Jenkins, jUnit, REST assured, Jira, Selenium
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default Technologies;
