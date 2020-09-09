import styled from "styled-components"
import { Avatar, Row } from "antd"


const ProfileImage = styled(Avatar)`
  // position: absolute;
  border: 3px solid #fff;
  // top: -100px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ProfileContainer = styled(Row)``

const SocialContainer = styled.span`
  margin: 10px 24px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  a {
    color: inherit;
  }
  i {
    font-size: 1.2em;
    margin: 0 24px;
    :hover {
      color: #40a9ff;
      transition: color 0.3s;
    }
  }
`

const QuoteContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
`

const QuoteText = styled.p`
  color: black;
  font-size: 2em;
  font-weight: 300;
  font-style: italic;
`
const QuoteTextMore = styled.p`
  color: black;
  font-size: 1.5em;
  font-weight: 300;
  font-style: italic;
`

const BioContainer = styled.div`
  margin: 0 24px;
`

const DividerHeader = styled.span`
  font-weight: 400;
  font-size: 1.5em;
`
const DividerInSideHeader = styled.span`
  font-weight: 300;
  font-size: 1.2em;
`

const BioText = styled.p`
  margin-left: 24px;
  margin-right: 24px;
`

export {
  BioContainer,
  BioText,
  DividerHeader,
  DividerInSideHeader,
  ProfileContainer,
  QuoteContainer,
  QuoteText,
  SocialContainer,
  ImageContainer,
  ProfileImage,
  QuoteTextMore
}