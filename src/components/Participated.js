import React,{useState} from "react";
import {
  BioContainer,
  DividerHeader,
  BioText,
  DividerInSideHeader
} from "./styles";

import { Divider, Timeline, Icon,Modal } from "antd";

import certCompTIA from '../assets/cert-comptia.png'
import certACM2018 from '../assets/cert-acm2018.jpg'
import certACM2019 from '../assets/cert-acm2019.jpg'
import certTesa2020 from '../assets/cert-tesa2020.jpg'
import certNSC2016 from '../assets/cert-nsc2016.jpg'


import test from '../assets/clouds-daylight-heaven-nature-sky-1499705.jpg'
const Participated = () => {
    const [visible , setVisible] = useState(false)
    const [url , setUrl] = useState(false)
    const [cert  , setCert] = useState("")
    const certs =[
      certNSC2016,
      certACM2018,
        certCompTIA,
        certACM2019,
        certTesa2020,
        
    ]
    const showModal = (e) => {
        console.log(e.target.id);
        setCert(certs[(+e.target.id)-1])
        if(+e.target.id == 6){
          setUrl(true)
        }
        setVisible(true)
      };
    
      const  handleOk = e => {
        setVisible(false)
        setUrl(false)
        
      };
    
      const  handleCancel = e => {
        setVisible(false)
        setUrl(false)
      };
    
    
  return (
    <>
        <Modal
          title="Reference"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelButtonProps={{ disabled: true }}
          width="80%"
          okText="Close"
        >
          {url &&(
            <span> Website : <a href="https://react-cat-miniproject.web.app/" target="_blank"> click here</a><br/> Responsible : FrontEnd and Google Cloud Firebase</span>
          )}
          <img src={cert} width="100%" height="100%"/>
        </Modal>
      <BioContainer>
        <Divider orientation="left">
          <DividerHeader>Participated</DividerHeader>
        </Divider>
        <Timeline mode="alternate">
          <Timeline.Item>
            <div>2562 : หหัวใจการดีไซน์</div>
            <div>
              อบรมการเขียนโปรแกรมโดยใช้ Html + Bootstrap
              <div onClick={(e)=>{showModal(e)}} ><a href="#" id="1"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>Hackathon Health and Wellness 2019 : 2562</div>
            <div>
              ร่วมแข่งขันเพื่อพัฒนา Solution สำหรับแก้ปัญหาในโรงพยาบาล
              <div onClick={(e)=>{showModal(e)}} ><a href="#" id="2"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>2562 : The U.S Speaker Program on Economic Sustainable Development</div>
            <div>
            ร่วมเข้าอบรมการคิดค้นและแก้ปัญหาธุรกิจท้องถิ่นให้ออกไปสู่ตลาดนอก
            <div onClick={(e)=>{showModal(e)}} ><a href="#" id="3"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>The Tesa Top Gun Rally 2020 : 2563</div>
            <div>
             ร่สมเข้าแข่งขันการพัฒนาระบบสมองกลของสมาคมสมองกลระดับประเทศที่มหาวิทยาลัยพะเยาระหว่างวันที่ 5 มกราคม - 11 มกราคม 2020
            <div onClick={(e)=>{showModal(e)}} ><a href="#" id="4"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>Hackathon Health and Wellness 2020 : 2563 </div>
            <div>
            ร่วมแข่งขันเพื่อพัฒนา Solution สำหรับแก้ปัญหาในโรงพยาบาล
            <div onClick={(e)=>{showModal(e)}} ><a href="#" id="5"> Reference</a></div>
            </div>
          </Timeline.Item>
        
          
        </Timeline>
      </BioContainer>
    </>
  );
};

export default Participated;
