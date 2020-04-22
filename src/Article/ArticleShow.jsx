import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider, Modal, Button, Input, Card} from 'antd';
import './Article.css';

export default class ArticleShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: "",
            list: [],
            search_by_title: ''
        };
    }
    

    getData = () => {
        var localData = JSON.parse(localStorage.getItem("list"));
        localData.forEach(function(v){
            v.isHidden = false;
        });
        this.setState({
            data: localData

        },()=>{console.log(this.state.data, 'Howevwer');});
        
    }

    titleSearch = (event) => {
        this.setState({
            search_by_title: event.target.value
        },()=>{
            let tempTitle = this.state.data;
            
            var _this = this;
            tempTitle.forEach(function(v){
                
                if(_this.state.search_by_title != '' && v.title.toLowerCase().includes(_this.state.search_by_title.toLowerCase())){
                    v.isHidden = false;
                }else if(_this.state.search_by_title == ''){
                    v.isHidden = false;
                }
                else{
                    v.isHidden = true;
                }
            })
            // console.log(tempTitle)
            this.setState({
                data: tempTitle,
               
               })
            //    console.log(this.state.data)
        })
    }

    componentDidMount(){
        
        this.getData();
    }

    render(){
        const { Search } = Input;
        var cardStyle={
            background: '#ececec',
            padding: '30px'    
        }
        return(
            <React.Fragment>
                <div>
                    <Search
                        placeholder="search here"
                        onChange={this.titleSearch.bind(this)}
                        style={{width: 200}}
                    />
                </div>
                <div className="site-card-wrapper" style={cardStyle}>
                    <Row gutter={16}>
                        {/* {
                            Object.entries(this.state.data).map(function(item,i){
                                
                                if(!item.isHidden) {
                                        return(
                                            <Col span={8} key={i}>
                                                <Card title={item[1].title} bordered={false}>
                                                    {item[1].description}
                                                </Card>
                                            </Col>
                                        )
                                }
                                
                            })
                        } */}


                        {this.state.data && this.state.data.map( (item, i) =>(

                                !item.isHidden &&

                                <Col span={8} key={i}>
                                                <Card title={item.title} bordered={false}>
                                                    {item.description}
                                                </Card>
                                            </Col>
                               
                            ))
                               
                            }
                        
                        
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}