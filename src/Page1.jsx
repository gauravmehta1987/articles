import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider, Modal, Button} from 'antd';
import {Router, Route} from 'react-router';
import Article from './Article/Article';

export default class Page1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <React.Fragment>
                <Article />
            </React.Fragment>
        );
    }
}