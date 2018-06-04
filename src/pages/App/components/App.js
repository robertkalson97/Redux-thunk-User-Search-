import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, Label} from 'reactstrap';
import SearchForm from './SearchForm';
import styled from "styled-components";
import './App.css';

const Header = styled.div`
  border-bottom: 1px solid #999;
  margin-bottom: 40px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const H1 = styled.h1`margin: 30px 5px 10px 5px;`;

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchuser = this.fetchuser.bind(this);
    this.props.fetchuser("robertkalson97");
  }

  fetchuser({ keyword }){
      this.props.fetchuser(keyword);
    }

  render() {
    const { loading, userimage } = this.props;
    
    return (
      <Container>
        <Header>
          <H1>Github User Search</H1>
        </Header>
        <Row>
          <Col>
            <SearchForm onSubmit = { this.fetchuser } />
          </Col>
        </Row>
        { loading && <div><img src='./monkeywalk3.gif' alt='loading' /></div>}
        <div >
        { !loading && userimage && userimage.length > 0 &&
            userimage.map((res, index) => {
              return (
              <Row key = {index} >
                <Col lg="2">
                  <Card>
                      <CardImg  src={res.owner.avatar_url} />
                  </Card>
                </Col> 
                <Col lg="6">
                  <Row>
                    <Label><h1><a href ={res.owner.html_url} >{res.owner.login}</a></h1></Label><br></br>
                  </Row>
                  <Row>
                    <Label><h1><a href ={res.html_url} >{res.name}</a></h1></Label>
                  </Row>
                </Col> 
              </Row>
              );         
            })    
        }
        </div>
      </Container> 
    );  
  }
}

export default App;
