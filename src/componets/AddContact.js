import React from "react";

class AddContact extends React.Component {
    render(){
        return(
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form">
                    <div className="ui field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"></input>                   
                    </div>
                    <div className="ui field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"></input>                   
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;