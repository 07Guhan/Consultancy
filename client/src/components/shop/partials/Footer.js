import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
       <h3> Address - Shop no:5,Andavar compex,Erode</h3>
       <h3>Email-Id - technet.erd@gmail.com</h3>
       <h3>Contact us - 9842714709</h3>
      </footer>
    </Fragment>
  );
};

export default Footer;
