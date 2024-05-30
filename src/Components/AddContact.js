import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";



const AddContact = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addContactHandler(name, email);
    navigate("/")
  }; 
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" >
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName( e.target.value )}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue" onClick={(e)=>add(e)}>Add</button>
        </form>
      </div>
    );
  
}

export default AddContact;