import React from 'react';
import { Row,Form,Col,Input} from 'antd'
import "antd/dist/antd.css";
import Header from "./Header.js"
class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      fname:"",
      lname:""
      
  }
  this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event)
  { 
    let {name,value}=event.target
       
    this.setState(
      {
        
        [name]:value
      
      }
    )
  }
  render()
  {
  return (
    <div>
    <Header />
    <Row type="flex" justify="center" align="top">
      <Col span={4}></Col>
      <Col span={16}>
       <h3>{this.state.fname} {this.state.lname}</h3>
      <Form.Item layout="vertical" >
      <Input type="text" placeholder="First Name" name="fname" value={this.state.fname} onChange={this.handleChange} />
      <Input type="text" placeholder="Last Name" name="lname" value={this.state.lname} onChange={this.handleChange}/>
      <Input type="text" placeholder="EmailId"  />
      <Input type="text" placeholder="" />
      <Input type="text" placeholder="Designation"/>
      <Input type="text" placeholder="Experience"/>
      </Form.Item>
      </Col>
      <Col span={4}></Col>
    </Row>
    </div>
  ); 
  }
}

export default App;
