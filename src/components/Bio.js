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
        <DividerHeader>PERSONAL REFERENCES</DividerHeader>
      </Divider>
      <BioText>
        <p>Jantapa Binheem (Jan)</p>
        <p>I'm {age("07/24/1998")} years old </p>
       
        <p>
        My hobbies are record clips and post on the YouTube about  the computer programming and Windows
        </p>
        
      </BioText>
     
    </BioContainer>
  )
}

export default Bio