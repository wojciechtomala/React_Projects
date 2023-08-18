import React from "react";
import './Root.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlesView from "../ArticlesView/ArticlesView";
import TwittersView from "../TwittersView/TwittersView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import AppContext from "../../context";
import wiki from '../../assets/images/wiki.png'

class Root extends React.Component {

    state = {
        twitter: [{title: 'Wikipedia', link: 'https://www.wikipedia.org/', image: wiki, description: 'Wikipedia is a free-content online encyclopedia written and maintained by a community of volunteers'}],
        article: [],
        note: [],
        isModalOpen: false,
    };

    addItem = (e, newItem) => {
        e.preventDefault();
        const allowedExtensions = ['png','jpg','gif','svg'];
        console.log(newItem.image)
        console.log(newItem.image.slice(-3));
        if(!allowedExtensions.includes(newItem.image.slice(-3)) || newItem.image === ''){
            newItem.image = null;
        }
        this.setState(prevState => ({
            [newItem.type]: [...prevState[newItem.type], newItem]
        }));
        console.log(newItem);
        this.closeModal();
    }

    openModal = () =>{
        this.setState({
            isModalOpen: true
        })
    }

    closeModal = () =>{
        this.setState({
            isModalOpen: false
        })
    }

    render(){
        const {isModalOpen} = this.state;

        const contextElements = {
            ...this.state,
            addItem: this.addItem
        }

        return(
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header openModalFn={this.openModal} />
                    <Routes>
                        <Route exact path="/" Component={TwittersView}/>
                        <Route path="/articles" Component={ArticlesView}/>
                        <Route path="/notes" Component={NotesView}/>
                    </Routes>
                    {isModalOpen && <Modal closeModalFn = {this.closeModal}/>}
                </AppContext.Provider>
            </BrowserRouter>
        )
    }
}

export default Root;