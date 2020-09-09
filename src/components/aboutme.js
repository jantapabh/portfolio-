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
      <div className="shift-side-space">
      <div className="app ">
        <div className="container ">
          <div className="top-image"></div>
          <div>
          <ProfileImg />
            <Row>
              <Col md={12}>
                <Bio />
                <Participated />
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={24}>  
                    <Skill />
                  </Col>
                </Row>
                <Row>
                  <Col md={24}></Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Contributions />
              <Workshop />
            </Row>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default About;
