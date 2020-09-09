import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import image from './img/image.png'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={image}
                alt="avatar"
                style={{height: '300px', alignItems: 'center', borderRadius:'300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Jantapa Binheem</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>From an early age I have always been deeply interested in computing. I can always remember the feeling of wanting to know just how computers worked, why they worked and what else they could do. There is not only one reason but there are several reasons why I want study Software Engineering at university. I always enjoy a challenge, and can work well under pressure; my other strengths are a strong commitment to customer services, and attention to detail. I am highly motivated and enjoy challenges within a new or existing role.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>39/66 M.6 Vichit Meung Phuket 83000</p>
            <h5>Phone</h5>
            <p>080-4469747</p>
            <h5>Email</h5>
            <p>s6035512034@phuket.psu.ac.th</p>
            <h5>Facebook</h5>
            <p>Jan Tapa</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2020}
              schoolName="Faculty of Engineering , Computer of Engineering"
              schoolDescription="GPA: 2.95"
               />

               <Education
                 startYear={2011}
                 endYear={2017}
                 schoolName="Songserm Wittaya School"
                 schoolDescription="GPA: 3.65"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Work Background</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Mini-project | Jul 2020 - Dec 2020"
              jobDescription="Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed and
              Developed dynamic and interactive website that ensured high traffic, page views, and user experience"
            
              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Preparation Project |  present"
                jobDescription="Designed and developed user-friendly website, including optimized check-out page that increased clicks, and subsequently customer purchases by 20%
 and Makes major design decisions while collaborating with stakeholders"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={80}
                      />

                   <Skills
                      skill="MongoDB"
                      progress={50}
                      />

               <Skills
                      skill="Python"
                      progress={50}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
