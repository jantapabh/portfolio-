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
        <p>Asst. Prof. Dr.Warodom Weerapun</p>
        <p>076-27 (6552)</p>
        <p>wwarodom(at)coe.phuket.psu.ac.th</p>
      </BioText>
    </BioContainer>
  )
}

export default Bio