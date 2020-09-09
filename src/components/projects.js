import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  render() {
    return(
      <div>
          <Grid>
            <Cell col={12}>
              <div className="content">Project</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
