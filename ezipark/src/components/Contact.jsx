import React from "react";
import contct from "../assets/images/contct.jpg";
import contact from "../styles/contact.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <section id="sect4" className="contact">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <div className="title">Contact Us</div>
      <div className="cnt">
        <div className="left">
          <img src={contct} alt="" />
        </div>
        <div className="right">
          <div className="subtitle">Contact</div>
          <div className="inputs">
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="First name"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last name"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="E-mail"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Telephone"
            />
            <div className="btn">
              <Button variant="contained" style={{backgroundColor:'#ddabfb'}} size="medium">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
