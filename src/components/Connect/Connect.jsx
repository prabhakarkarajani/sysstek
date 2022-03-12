import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Connectus from "../../assets/connectus.svg";
function Connect() {
  const [isMessageActive, setIsMessageActive] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isMessageActive) {
      setTimeout(() => {
        setIsMessageActive(false);
      }, 5000);
    }
  }, [isMessageActive]);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number not valid"
      ),
  });
  return (
    <>
      <div className="hero-container-contact u-margin-bottom-big">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                component="h6"
                className="u-margin-top-medium u-margin-bottom-small"
              >
                Get in touch
              </Typography>
              <Formik
                className="form"
                initialValues={{
                  email: "",
                  name: "",
                  phoneNumber: "",
                  project: "Web Application Development",
                  callme: "any",
                  referrence: "referred by friend",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setLoading(true);
                  emailjs
                    .send(
                      "service_jb8dqh4",
                      "template_yadg9kb",
                      values,
                      "user_ko6jxgocPT2dUASa0zFe9"
                    )
                    .then(
                      function (response) {
                        setLoading(false);
                        setIsMessageActive(true);
                      },
                      function (error) {
                        console.log("FAILED...", error);
                        setLoading(false);
                      }
                    );
                  setSubmitting(false);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form__group">
                      <label for="name" className="form__label">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        className="form__input"
                        placeholder="Name"
                      />

                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form__group">
                      <label for="email" className="form__label">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className="form__input"
                        placeholder="Email"
                      />

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form__group">
                      <label for="phoneNumber" className="form__label">
                        Phone number
                      </label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        className="form__input"
                        placeholder="Phone Number"
                      />

                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form__group">
                      <label for="callme" className="form__label">
                        Preferred Time
                      </label>
                      <Field
                        name="callme"
                        className="form__input"
                        as="select"
                        defaultValue=""
                      >
                        <option value="any">Anytime</option>
                        <option value="9:00AM-6:00PM">
                          Business Hours (9:00 AM - 6:00 PM)
                        </option>
                        <option value="9:00AM-12:00PM">
                          9:00 AM - 12:00 PM
                        </option>
                        <option value="12:00AM-2:00PM">
                          12:00 PM - 02:00 PM
                        </option>
                        <option value="2:00PM-4:00PM">
                          02:00 PM - 04:00 PM
                        </option>
                        <option value="4:00PM-6:00PM">4:00 PM - 6:00 PM</option>
                        <option value="6:00PM-8:00PM">4:00 PM - 6:00 PM</option>
                      </Field>

                      <ErrorMessage
                        name="callme"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form__group">
                      <label for="project" className="form__label">
                        Select Project
                      </label>
                      <Field
                        name="project"
                        className="form__input"
                        as="select"
                        placeholder="Select Project"
                      >
                        <option value="Web Application Development">
                          Web Application Development
                        </option>
                        <option value="Mobile Applicaion Development">
                          Mobile Applicaion Development
                        </option>
                        <option value="Other">Other</option>
                      </Field>

                      <ErrorMessage
                        name="project"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form__group u-margin-bottom-small">
                      <label for="referrence" className="form__label">
                        How did you hear about us?
                      </label>
                      <Field
                        name="referrence"
                        className="form__input"
                        as="select"
                        placeholder="How did you hear about us?"
                      >
                        <option value="referred by friend">
                          Referred by friend
                        </option>
                        <option value="search engine">
                          Search engine (Google, Yahoo, etc...)
                        </option>
                        <option value="socail media">Socail media</option>
                        <option value="blog or publication">
                          Blog or publication
                        </option>
                        <option value="other">other.</option>
                      </Field>

                      <ErrorMessage
                        name="referrence"
                        component="div"
                        className="error"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn--green"
                      disabled={isSubmitting}
                    >
                      Submit
                      {isLoading ? <div className="loader"></div> : null}
                    </button>
                  </Form>
                )}
              </Formik>
              {isMessageActive ? (
                <div className="thank-msg">
                  Thanks for droping us an email, our team will contact you soon
                  and Have a good day.
                </div>
              ) : null}
            </Grid>
            <Grid item xs={6}>
              <div className="card-connect">
                <img src={Connectus} alt="service-banner" />
                <br />
                <Typography variant="h6" component="h6">
                  Call us <b>781-SYS-STEK (781-797-7835)</b>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Connect;
