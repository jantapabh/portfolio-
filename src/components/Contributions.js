import React, { useEffect } from "react"
import { Divider ,Row,Col} from "antd"
import { BioContainer, DividerHeader, BioText } from "./styles"
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip  from 'react-tooltip'

const Contributions = ()=> {
  return (
    <BioContainer>
      <Divider >
        <DividerHeader className="contributions">Contributions GITHUB</DividerHeader>
      </Divider>
      <BioText>
          <Row className="contributions">
          <GitHubCalendar username="jantapabh" color="hsl(393, 98%, 33%)"  ><ReactTooltip delayShow={50} html /></GitHubCalendar>
          </Row>
      </BioText>
    </BioContainer>
  )
}

export default Contributions