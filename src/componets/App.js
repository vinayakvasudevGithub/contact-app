import React from "react"; 
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {
  const contacts =[
    {
      id: "1",
      name:"vinayak",
      email:"vinayakvasudev0@gmail.com"
    },
    {
      id:"2",
      name:"roy",
      email:"roy@gmail.com"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <br></br>
      <br></br>
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
