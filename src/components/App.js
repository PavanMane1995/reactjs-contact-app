
import React, {useState, useEffect} from 'react';
import { uuid } from 'uuidv4';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import api from '../api/contacts';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const retriveContacts = async ()=>{
    const response = await api.get("/contacts");
    return response.data;
  }
  const [contacts, setContacts] = useState([]); //functional state so used react hook useState

  const addContactHandler = async (e) =>{       //Passing handler in props to AppContact function to set value
    //setContacts([...contacts, {id: uuid(), ...e}]);
    const request ={
      id:uuid(),
      ...e,
    }
    const response = await api.post(`/contacts`, request);
    setContacts([...contacts, response.data]);
  }

  const deleteContactHandler =async (e)=> {
    console.log(e);
    await api.delete(`/contacts/${e}`);
    const newContacts = contacts.filter((contact) =>{
      return contact.id !== e;
  });
  setContacts(newContacts);
  }

  useEffect(() =>{
    //Below code is to store data in local storage
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveContacts) setContacts(retriveContacts);

    //Below code is to store data in server
    console.log(retriveContacts());
    const getData = async ()=>{
      const data = await retriveContacts();
      if(data){
        setContacts(data);
      }
    };
    getData();
  },[]);

  useEffect(() =>{
   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      
      <Router>
      <Header style={{marginTop : '20px'}}/>

      <Switch>
      <Route exact path='/add' 
        render={(props) => 
        <AddContact  
          {...props}
          addContactHandler = {addContactHandler}>
        </AddContact>}>
      </Route>
      <Route exact path='/' render={(props) => 
      <ContactList {...props} 
        contactL = {contacts} 
        getContactId = {deleteContactHandler}
      />} />

      <Route path='/contact-details/:id' component={ContactDetails} />
      </Switch>
      </Router>
      {/* <AddContact addContactHandler = {addContactHandler} /> 
      <ContactList contactL = {contacts} getContactId = {deleteContactHandler}/> */}
      
    </div>
  );
}

export default App;
