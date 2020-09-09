import React from "react";
import { ImageContainer, ProfileImage, ProfileContainer } from "./styles";
import { Row, Col, message} from "antd";
import Icon from '@ant-design/icons';
import Social from "./Social";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Quote from "./Quote";
const ProfileImg = () => {
  return (
    <ProfileContainer>
      <Row>
        <Col md={8}>
          <Row>
            <ImageContainer>
              <ProfileImage
                size={200}
                src="https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-9/57088178_10217054124962704_1824443940598710272_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=GZcHSMQOvLcAX_Mwqit&_nc_ht=scontent.furt3-1.fna&oh=b9831aaacb26ca774fa4d96745198ee1&oe=5F7DF2A3"
              />
            </ImageContainer>
          </Row>
        </Col>

        <Col md={16}>
          <div className="quote-bg">
            <Quote />
          </div>
        </Col>
      </Row>
      <Row>
        <Row>
          <Col md={24}>
            <Social>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Joajannnnnn"
              >
                <Icon type="facebook" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@jantapa"
              >
                <Icon type="medium" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCRQTBDpo6v4Q-vnr-LiNuxg?view_as=subscriber"
              >
                <Icon type="youtube" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jantapabh"
              >
                <Icon type="github" />
              </a>
              <CopyToClipboard
                text={"jantapa2407@gmail.com"}
                onCopy={() => message.success("Copied to clipboard.")}
              >
                <Icon type="mail" />
              </CopyToClipboard>
            </Social>
          </Col>
        </Row>
      </Row>
    </ProfileContainer>
  );
};

export default ProfileImg;
