import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return ( 
			<Grid>
		    <Row className="show-grid">
		    	<h3 className="text-center">This Is Footer</h3>
		      <Col xs={12} sm={4}>1</Col>
		      <Col xs={12} sm={4}>2</Col>
		      <Col xs={12} sm={4}>3</Col>
		    </Row>
		  </Grid>  			     
    )
  }
}

