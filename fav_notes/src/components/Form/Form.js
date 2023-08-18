import React from "react";
import styles from './Form.module.css';
import Input from "./Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import AppContext from "../../context";

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note'
}

const descriptions = {
    twitter: 'favourite twitter account',
    article: 'new article',
    note: 'new note'
}

class Form extends React.Component {

    state = {
        type: types.twitter,
        title: '',
        link: '',
        image: '',
        description: ''
    };

    handleRadioBtnChange = (type) =>{
        this.setState({
            type: type
        });
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        const { type } = this.state;
        return(
            <AppContext.Consumer>
                {(context) => (
                <form autoComplete="off" onSubmit={ (e) => context.addItem(e, this.state)}>
                    <Title>Add new {descriptions[type]}:</Title>
                    <div className={styles.buttonsContainer}>
                        <input type="radio" id={types.twitter} onChange={() => this.handleRadioBtnChange(types.twitter)} checked={type === types.twitter}/>
                        <label htmlFor={types.twitter}>Twitter</label>
                        
                        <input type="radio" id={types.article} onChange={() => this.handleRadioBtnChange(types.article)} checked={type === types.article}/>
                        <label htmlFor={types.article}>Article</label>
                        
                        <input type="radio" id={types.note} onChange={() => this.handleRadioBtnChange(types.note)} checked={type === types.note}/>
                        <label htmlFor={types.note}>Note</label>
                    </div>
                    
                    <Input onChange={this.handleInputChange} value={this.state.title} tag="input" label={type === types.twitter ? 'Twitter name' : 'Title'} name="title"/>
                    
                    {type !== types.note ? <Input onChange={this.handleInputChange} value={this.state.link} tag="input" name="link" label={type === types.twitter ? 'Twitter link' : 'Link'}/> : null}
                    
                    {type === types.twitter ? <Input onChange={this.handleInputChange} value={this.state.image} tag="input" name="image" label="Profile Image link *"/> : null}
                    
                    <Input onChange={this.handleInputChange} value={this.state.description} tag="textarea" name="description" label="Description"/>
                    <Button>Add new profile</Button>
                </form>
                )}
            </AppContext.Consumer>
        )
    }
}

export default Form;