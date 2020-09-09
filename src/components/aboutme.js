import React, { Component, useState  } from 'react';
import "../App.css";
import "antd/dist/antd.css";
import { Row, Col, Button, Divider } from "antd";
import Bio from "./Bio";
import Skill from "./Skill";
import Participated from "./Participated";
import ProfileImg from "./ProfileImg";
import Contributions from "./Contributions";
import Internship from "./Internship";
import Workshop from "./Workshop";



class About extends Component {
  render() {
    return(
      <div><h1>About Page</h1></div>
    )
  }
}

export default About;
