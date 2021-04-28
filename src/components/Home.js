import React, { useState } from 'react';
import logo1 from '../images/logo1.png';
import Content from './Content';
import ReplyForm from './ReplyForm';
import { Container,Navbar } from 'react-bootstrap';

function Home() {
    const [title, setTitle] = useState('Bulbasaur Pokeball Moss Terrarium');
    const [author, setAuthor] = useState('kurt');
  

    return(
        
        <Container>
          <Navbar className="header">
            <Navbar.Brand href="#home">
               <img src={logo1} alt="logo" />
            </Navbar.Brand>  
            </Navbar>

<div className="row">
<div className="content-container">
            <h1 className="title"> {title} </h1>
            <p> by <a href = "#"> {author} </a> </p>
            <Content /> 
            </div>
            <div className="content-container">
            </div>
        </div>
        <ReplyForm /> 
        </Container>
        
    )
}

export default Home;