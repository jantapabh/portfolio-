import React from "react";

import {
  BioContainer,
  DividerHeader,
  BioText,
  DividerInSideHeader
} from "./styles";
import { Divider, Row, Tooltip } from "antd";
import nestjs from "../assets/nestjs.png";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.png";
import flutter from "../assets/flutter.png";
import opencv from "../assets/opencv.svg";
import tensorflow from "../assets/tensorflow.png";
import firebase from "../assets/firebase.png";
import jquery from "../assets/jquery.png";
import c from "../assets/C_sharp.svg";


const Skill = () => {
  return (
    <>
      <BioContainer>
        <Divider orientation="left">
          <DividerHeader>Skill</DividerHeader>
        </Divider>
        <Divider >
          <DividerInSideHeader>Expert</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <Tooltip title="JavaScript">
            <i className="fab fa-3x fa-js-square"></i>
          </Tooltip>
        </Row>
        <Divider >
          <DividerInSideHeader>Intermediate</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <Tooltip title="React" >
            <d className="fab fa-3x fa-react" />
          </Tooltip>
          <Tooltip title="HTML5">
            <i className="fab fa-3x fa-html5" />
          </Tooltip>
          <Tooltip title="Node.js">
            <i className="fab fa-3x fa-node-js" />
          </Tooltip>

          <Tooltip title="Nest.js">
            <img
              src={nestjs}
              height="60px"
              id="nestjs"
            />
          </Tooltip>
        </Row>
        <Row type="flex" justify="space-around" style={{ marginTop: ".7rem" }}>
          <Tooltip title="git">
            <i className="fab fa-3x fa-git" />
          </Tooltip>
          <Tooltip title="Docker">
            <i className="fab fa-3x fa-docker" />
          </Tooltip>
          <Tooltip title="My SQL">
            <img src={mysql} height="60px" id="mysql" />
          </Tooltip>
        </Row>
        <Divider >
          <DividerInSideHeader>Basic</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <Tooltip title="MongoDB">
            <img
              src={mongodb}
              height="60px"
              id="mongodb"
            />
          </Tooltip>
          <Tooltip title="Vue.js">
            <i className="fab fa-3x fa-vuejs" />
          </Tooltip>
          <Tooltip title="Jquery">
            <img
              src={jquery}
              height="60px"
             id="jquery"
            />
          </Tooltip>
        </Row>
        <Row type="flex" justify="space-around" style={{ marginTop: ".7rem" }}>
        <Tooltip title="Firebase">
            <img
              src={firebase}
              height="60px"
             id="firebase"
            />
          </Tooltip>
          <Tooltip title="Flutter">
            <img
              src={flutter}
              height="60px"
             id="flutter"
            />
          </Tooltip>
          <Tooltip title="CSS3">
            <i className="fab fa-3x fa-css3-alt" />
          </Tooltip>
          <Tooltip title="Open CV">
            <img
              src={opencv}
              height="60px"
             id="opencv"
            />
          </Tooltip>
        </Row>
        
        <Divider >
          <DividerInSideHeader>Interesting</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <Tooltip title="Tensorflow">
            <img
              src={tensorflow}
              height="60px"
             id="tensorflow"
            />
          </Tooltip>
          <Tooltip title="Tensorflow">
            <img
              src={tensorflow}
              height="60px"
             id="tensorflow"
            />
          </Tooltip>
          <Tooltip title="Tensorflow">
            <img
              src={tensorflow}
              height="60px"
             id="tensorflow"
            />
          </Tooltip>
        </Row>
      </BioContainer>
    </>
  );
};

export default Skill;
