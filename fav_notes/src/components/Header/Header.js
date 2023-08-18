import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import './Header.modules.css';
import Button from '../Button/Button';

const Header = ({ openModalFn }) => (
    <header>
        <h1>FavNotes</h1>
        <HeaderNavigation/>
        <Button onClick={openModalFn} secondary>Add new item</Button>
    </header>
)

export default Header;