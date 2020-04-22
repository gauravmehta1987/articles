import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider, Modal, Button} from 'antd';
import {Router, Route} from 'react-router';
import { NavLink } from 'react-router-dom';
import Page1 from './Page1';
export default class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <React.Fragment>
                <Row style={{height:'4rem'}}>
                    <Col span={12}>
                        <NavLink to="/home">Page1</NavLink>
                    </Col>
                    <Col span={12}>
                        <NavLink to="/list">Page2</NavLink>
                    </Col> 
                </Row>
            </React.Fragment>
        );
    }
}