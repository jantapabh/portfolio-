import React from "react";
import { Divider, Timeline } from "antd";
import { BioContainer, DividerHeader, BioText } from "./styles";
const Internship = () => {
  return (
    <>
      <BioContainer>
        <Divider orientation="left">
          <DividerHeader>EDUCATION</DividerHeader>
        </Divider>
        <BioText>
          <Timeline>
            <Timeline.Item color="green">
              <b>2016-Present</b> @Prince of Songkla University
              <p>
                Kathu Phuket , Thailand Bachelor of Computer Engineering , June
                2020 GPA 2.90/4.0
              </p>
            </Timeline.Item>
            <Timeline.Item >
              <b>2010-2016</b> @Wangkaphor Pittayakom School
              <p>
                Kapho Pattani , Thailand High School Diploma , March 2016 GPA
                3.51/4.0
              </p>
            </Timeline.Item>
          </Timeline>
        </BioText>
        <Divider orientation="left">
          <DividerHeader>Experience</DividerHeader>
        </Divider>
        <BioText>
          <Timeline>
            <Timeline.Item color="green">
            <b>April 2020 - Present</b>  Front-End Stack : Part-time @Lianudom
              Co.,Ltd.
            </Timeline.Item>
            <Timeline.Item>
            <b>May - July 2019</b>  Internship @WESERVE Delivery Phuket
            </Timeline.Item>
          </Timeline>
        </BioText>
      </BioContainer>
    </>
  );
};
export default Internship;
