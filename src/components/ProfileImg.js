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
                src="http://graph.facebook.com/100004603028928/picture?type=large"
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
                href="https://www.facebook.com/hama897"
              >
                <Icon type="facebook" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@ihm"
              >
                <Icon type="medium" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCONDAD1r1f4ajf5SLEtTPIQ?view_as=subscriber"
              >
                <Icon type="youtube" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/gitihm"
              >
                <Icon type="github" />
              </a>
              <CopyToClipboard
                text={"ismael.h@outlook.co.th"}
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
