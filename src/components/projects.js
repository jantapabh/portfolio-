import React, { Component } from 'react';
import "../App.css";
import "antd/dist/antd.css";
// import { Row, Col, Button } from "antd";
import Bio from "./Bio";
import Skill from "./Skill";
import Participated from "./Participated";
import ProfileImg from "./ProfileImg";
import Contributions from "./Contributions";
import Internship from "./Internship";
import Workshop from "./Workshop";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Projects extends Component {
  render() {
    return (
      <div className="shift-side-space">
        <div className="app ">
          <div className="container ">
            <div className="top-image"></div>
            <div>
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={24}>
                      <Card>
                        <Card.Header as="h5">Mini-Project | 2020</Card.Header>
                        <Card.Body>
                          <Card.Title>เว็บไซต์หาบ้านให้น้องหมาและแมวจรจัด</Card.Title>
                          <Card.Text>
                          Mini-project ช่วยน้องหาบ้านและตามน้องกลับบ้านนั้นมีแรงบันดาลใจมาจากการอยากช่วยเหลือสัตว์ที่ไร้บ้านทั้งสุนัขและแมว โดยในปัจจุบันนั้นสุนัขและแมวถูกทอดทิ้งมากมายเหลือเกินในสังคมและปัญหาที่ตามมาก็มีมากมายเช่นกันเช่นการเกิดโรคพิษสุนัขบ้าในสัตว์นั่นเอง
    </Card.Text>
                          <Button variant="primary" href="https://react-cat-miniproject.web.app/">Website</Button>
                        </Card.Body>
                      </Card>

                    </Col>
                  </Row>
                  <Row>
                    <Col md={24}>
                    <Card>
                    <Card.Header as="h5">Prepar Project | 2020</Card.Header>
                    <Card.Body>
                      <Card.Title>ระบบเผ้าระวังและติดตามการเคลื่อนไหวของผู้สูงอายุ</Card.Title>
                      <Card.Text>
                        เว็บไซต์สำหรับแจ้งเตือนการหกล้มของผู้สูงอายุและอุบัติเหตุต่าง ๆที่อาจเกิดขึ้นได้โดยไม่คาดคิดโดยจะแจ้งเตือนผ่านเว็บไซต์แบบ Real-time โดยระบบจะมีการนำ AI เข้ามาช่วยในการทำนายค่าการเคลื่อนไหวของผู้สูงอายุที่เสี่ยงในการเกิดอุบัติเหตุได้
    </Card.Text>
                      <Button variant="primary" href="https://prepar-project.web.app/">Website</Button>
                    </Card.Body>
                  </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>

              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
