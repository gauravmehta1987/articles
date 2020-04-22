import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider, Modal, Button, Input} from 'antd';
import './Article.css';
import { Window } from '@progress/kendo-react-dialogs';

export default class Article extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            modalVisible: false,
            newItem: "",
            title: "",
            list: [],
            visible: true,
            Darray: []
        };        
        
    }

    addArticle = () => {
        var count = this.state.Darray.length;
        var arr = this.state.Darray;
        arr.push({'id': count, 'title': '', 'description': '', 'maximise': true});
        this.setState({
            Darray: arr
        },()=>console.log(this.state.Darray,'addarticle'))

        console.log(this.state.Darray,'prk');
    }

    addNewArticle(id){
        console.log(id)
        var tid = 'title'+id;
        var did = 'description'+id;
        if(document.getElementById(tid).value && document.getElementById(did).value){
            // get items from localstorgae
            var localData = [];
            if(localStorage.getItem("list")){
                localData = JSON.parse(localStorage.getItem("list"));
                if(!localData.length){
                    localData = [];
                }
            }
            localData.push({
                title: document.getElementById(tid).value,
                description: document.getElementById(did).value,
            });
            
            var arr = this.state.Darray;
            arr.splice(id, 1);
            this.setState({
                Darray: arr
            },()=>localStorage.setItem("list", JSON.stringify(localData)))
        }
    }

    delArticle = (id) => {
        console.log(id,'delarticle')
        var arr = this.state.Darray;
        arr.splice(id, 1);
        this.setState({
            Darray: arr
        },()=>console.log(this.state.Darray,'addarticle'))
    }

    minArticle = (id) => {
        var arr = this.state.Darray;
        arr[id].maximise = false;
        this.setState({
            Darray: arr
        },()=>console.log(this.state.Darray,'minarticle'))
    }

    maxArticle = (id) => {
        var arr = this.state.Darray;
        arr[id].maximise = true;
        this.setState({
            Darray: arr
        },()=>console.log(this.state.Darray,'maxarticle'))
    }

    render(){
        var btnStyle={
            width:'10%',
            height:'54px',
            fontSize: '18px',
            fontWeight: '700'
        }
        
        const {TextArea} = Input;
        return(
            <React.Fragment>
                
                <Row style={{paddingTop:'2rem'}}>
                    <Col span={24}>
                        <div>
                            <Button type="primary" onClick={()=>this.addArticle()} style={btnStyle}>
                                Add Article
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <div className="outer-cont" style={{bottom:'0', right:'0', width:'100%', height:'356px'}}>

                        {this.state.Darray.map(j =>
                            
                            // <React.Fragment>
                            <div className="form-container" key={j.id+'-form'} >
                                        <div>
                                            <Button type="primary" onClick={()=>this.delArticle(j.id)}>
                                                close
                                            </Button>
                                            {
                                                j.maximise ?
                                                <React.Fragment>
                                                    <Button type="primary" onClick={()=>this.minArticle(j.id)}>
                                                        min
                                                    </Button>
                                                </React.Fragment>
                                                : 
                                                <Button type="primary" onClick={()=>this.maxArticle(j.id)}>
                                                    max
                                                </Button>
                                            }
                                            
                                        </div>
                                {
                                    j.maximise ?
                                    <React.Fragment>
                                        
                                        <div>
                                            <Input placeholder="Enter Title" id={"title"+j.id} />
                                        </div>
                                        <div>
                                            <TextArea rows={4} placeholder="Description" id={"description"+j.id} />
                                        </div>
                                        <div>
                                            <Button type="primary" onClick={()=>this.addNewArticle( j.id)}>Submit</Button>
                                        </div>
                                    </React.Fragment>
                                        : null
                                    
                                 
                                    
                                    
                                }
                                
                                
                                
                            </div>
                            // </React.Fragment>
                        )}


                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
