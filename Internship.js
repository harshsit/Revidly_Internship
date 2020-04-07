import React from "react";

export default function Internship(props) {
  return (
    <div className="internship">
      <h1
        style={{ display: props.internship.name ? "block" : "none" }}
        className="font_style"
        id="letter_style"
      >
        {props.internship.name}
      </h1>
      <img
        style={{ display: props.internship.logo ? "block" : "none" }}
        src={props.internship.logo}
        alt="Logos"
        className="logou"
      />
      <img
        style={{ display: props.internship.logo1 ? "block" : "none" }}
        src={props.internship.logo1}
        alt="Logos"
        className="logou1"
      />
      <p
        style={{ display: props.internship.pname ? "block" : "none" }}
        className="font_style"
        id="letter_stylea"
      >
        {props.internship.pname}
      </p>
      <p
        style={{ display: props.internship.description ? "block" : "none" }}
        className="font_style"
      >
        {props.internship.description}
      </p>
      <p
        style={{ display: props.internship.contact ? "block" : "none" }}
        className="font_style"
      >
        contact:{props.internship.contact}
      </p>
      <p
        style={{ display: props.internship.email ? "block" : "none" }}
        className="font_style"
      >
        email:{props.internship.email}
      </p>
      <p
        style={{ display: props.internship.company ? "block" : "none" }}
        className="font_style"
      >
        {props.internship.company}
      </p>
      <p
        style={{ display: props.internship.location ? "block" : "none" }}
        className="font_style"
      >
        {props.internship.location}
      </p>
      <p
        style={{ display: props.internship.start_date ? "block" : "none" }}
        className="font_style"
      >
        Start Date:{props.internship.start_date}
      </p>
      <p
        style={{ display: props.internship.duration ? "block" : "none" }}
        className="font_style"
      >
        Duration: {props.internship.duration}
      </p>
      <p
        style={{ display: props.internship.stipend ? "block" : "none" }}
        className="font_style"
      >
        Stipend: {props.internship.stipend}
      </p>
      <p
        style={{ display: props.internship.deadline ? "block" : "none" }}
        className="font_style"
      >
        Deadline: {props.internship.deadline}
      </p>

      <img
        style={{ display: props.internship.imgurl ? "block" : "none" }}
        src={props.internship.imgurl}
        alt="Images"
        className="full-width"
      />
    </div>
  );
}
