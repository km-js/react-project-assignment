import React, { useState } from 'react';
import logo1 from '../images/logo1.png';
import Content from './Content';
import { Container,Navbar } from 'react-bootstrap';

function Home() {
    const [title, setTitle] = useState('Bulbasaur Pokeball Moss Terrarium');
    const [author, setAuthor] = useState('kurt');
  

    return(
        <>
        <Container>
<Navbar>
    <Navbar.Brand href="#home">
    <img src={logo1} alt="logo" />
    </Navbar.Brand>  
</Navbar>

<div className="content-container">
<h1 className="text-left">{title}</h1>
            <p className="text-left"> by <a href = "#"> {author} </a> </p>
            <Content /> 
</div>
           
            
        </Container>
        </>
    )
}

export default Home;