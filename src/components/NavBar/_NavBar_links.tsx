import React, {useContext, useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

// import {Context} from '../../index';
import { MAIN_ROUTE, ADD_AUTO_ROUTE, ADD_ORDER_ROUTE, AUTOS_ROUTE } from "../../utils/consts";

import './navBar.sass';


const NavBar = observer(() => {
    // const {user} = useContext(Context);
    const isAuth: boolean = false;
    // const {library} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        // user.setIsAuth(false);
        localStorage.clear();
    };


    return (
        <>
            {isAuth ?
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                    <Container >
                        <NavLink to={MAIN_ROUTE}>МОИ КНИГИ</NavLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-around'>
                                <Nav className="ms-4 me-auto">
                                    <Nav.Link href="#" onClick={() => navigate(AUTOS_ROUTE)}>Список авторов</Nav.Link>
                                    <Nav.Link href="#" onClick={() => navigate(ADD_ORDER_ROUTE)}>Добавить книгу</Nav.Link>
                                    <Nav.Link href="#" onClick={() => navigate(ADD_AUTO_ROUTE)}>Добавить автора</Nav.Link>
                                </Nav> 
                                <Button 
                                    variant={"outline-light"} 
                                    onClick={() => logOut()} 
                                    className="ms-2 nav-btn"
                                    >Выйти
                                </Button>  
                        </Navbar.Collapse>       
                    </Container>
                </Navbar>
            :
            <div></div>
            }
        </>       
    );
});

export default NavBar;