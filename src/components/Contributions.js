import React, { useEffect } from "react"
import { Divider ,Row,Col} from "antd"
import { BioContainer, DividerHeader, BioText } from "./styles"
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip  from 'react-tooltip'

const Contributions = ()=> {
  return (
    <BioContainer>
      <BioText>
          <Row className="contributions" type="flex" justify="center">
          <GitHubCalendar username="gitjantapabh" color="hsl(203, 82%, 33%)"  ><ReactTooltip delayShow={50} html /></GitHubCalendar>
          </Row>
      </BioText>
    </BioContainer>
  )
}

export default Contributions