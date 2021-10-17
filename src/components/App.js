
import React, {useState, useEffect} from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); //functional state so used react hook useState

  const addContactHandler = (e) =>{       //Passing handler in props to AppContact function to set value
    setContacts([...contacts, {id: uuid(), ...e}]);
  }

  const deleteContactHandler =(e)=> {
    const newContacts = contacts.filter((contact) =>{
        return contact.id !== e
    });
    setContacts(newContacts);
  }

  useEffect(() =>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler} /> 
      <ContactList contactL = {contacts} getContactId = {deleteContactHandler}/>
    </div>
  );
}

export default App;
