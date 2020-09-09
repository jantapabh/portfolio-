import React from "react"
import { Divider } from "antd"
import { BioContainer, DividerHeader, BioText } from "./styles"
import * as moment from "moment"

const age = (day, unit = "years") => {
  return moment().diff(day, unit)
}

const Bio = ()=> {
  return (
    <BioContainer>
      <Divider orientation="left">
        <DividerHeader>Bio</DividerHeader>
      </Divider>
      <BioText>
        <p>Ismael Hama (Air)</p>
        <p>I'm {age("08/14/1997")} years old </p>
       
        <p>
        My hobbies are record clips and post on the YouTube about  the computer programming and Windows. and play online games Dota2.
        </p>
        
      </BioText>
     
    </BioContainer>
  )
}

export default Bio