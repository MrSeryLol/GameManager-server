import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Game Manager</Navbar.Brand>
                <Nav className="me-auto dropdown">
                    <Nav.Link href="/posts">Компьютерные игры</Nav.Link>
                    <Nav.Link href="#features">Браузерные игры</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Button className="me-5">Зарегистрироваться</Button>
                    <Button>Войти</Button>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default Header;