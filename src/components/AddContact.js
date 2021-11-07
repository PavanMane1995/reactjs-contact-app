import React from "react";
import Button from '@material-ui/core/Button';

import ContactList from './ContactList';
import { Link } from "react-router-dom";

class AddContact extends React.Component{
    state ={
        name:"",
        email: ""
    };

    onAddClick = (e) =>{
        e.preventDefault();
        if(this.state.name ==="" || this.state.email === ""){
            alert("All fields are mandatory");
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({name:"", email: ""});

    }

    onClickContactList = ()=>{
        this.props.history.push("/contact-list");
       // <Link to="/contact-list"></Link>

    }

    render() {
        return (
            <div className="ui main" style={{ margin: 50}}>
                <h2 style={{display:"inline"}}>Add Contact</h2>
                <Button variant="contained" style={{float: 'right'}} onClick={this.onClickContactList}>Contact List</Button>
                <form className = "ui form" style={{marginTop: 20}}>
                   <div className = "field"> 
                        <label>Name</label>
                        <input 
                          type="text"
                          name="name" 
                          placeholder = "Name"
                          value = {this.state.name} 
                          onChange = {(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className = "field"> 
                        <label >Email</label>
                        <input type="text" name="email" placeholder = "Email"
                         value = {this.state.email} 
                         onChange = {(e) => this.setState({email: e.target.value})} />
                    </div>
                   
                    <Button variant="contained"  color="primary" onClick ={this.onAddClick}>Add Contact</Button> 
                </form>
            </div>    
        );
    }
}
export default AddContact;