import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider, Modal, Button} from 'antd';
import {Router, Route} from 'react-router';
import ArticleShow from './Article/ArticleShow';

export default class Page1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <React.Fragment>
                <ArticleShow />
            </React.Fragment>
        );
    }
}