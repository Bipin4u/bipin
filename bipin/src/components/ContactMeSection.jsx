import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import "../CSS/Contact.css";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const focusedProject = useRef(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("sdf", values);
      emailjs
        .send("service_pjrnfkm", "template_jpmpzvm", values, {
          publicKey: "4KJt0SItQqEnCIzg-",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Enter valid email address")
        .required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string()
        .min(25, "Must be more than 25 characters")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response, onOpen, formik]);

  return (
    <div className="container">
      <div className="form-container">
        <Heading
          as="h1"
          className="form-header"
          id="contactme-section"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          color="white"
        >
          Contact
        </Heading>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  ref={focusedProject}
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="form-input"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="required">{formik.errors.firstName}</div>
                ) : null}
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-input"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="required">{formik.errors.email}</div>
                ) : null}
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl
                isInvalid={formik.touched.type && formik.errors.type}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-select"
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Job opportunity</option>
                  <option value="other">Other</option>
                </Select>
                {formik.touched.type && formik.errors.type ? (
                  <div className="required">{formik.errors.type}</div>
                ) : null}
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={120}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                  className="form-textarea"
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <div className="required">{formik.errors.comment}</div>
                ) : null}
              </FormControl>
            </div>

            <Button
              type="submit"
              width="full"
              mt={4}
              sx={{
                backgroundColor: "#805AD5",
                transition: "background-color 0.3s ease",
                _hover: {
                  backgroundColor: "#6B46C1",
                },
              }}
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
