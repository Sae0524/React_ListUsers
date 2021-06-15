import React from "react";
import { Consumer } from "./context"; // Import Provider from Context.js

export default class Contacts extends React.Component {
  state = {
    nameContact: ""
  };

  deleteUser = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    return (
      <Consumer>
        {(value) => (
          <>
            <div>
              <h1> User List</h1>
            </div>
            {value.contacts.map((contact, index) => (
              <div className="card" key={index}>
                <p>Name: {contact.name}</p>
                <p>Phrase: {contact.phrase}</p>
                <button
                  onClick={() => {
                    this.deleteUser(contact.id, value.dispatch);
                  }}
                >
                  Delete user
                </button>
              </div>
            ))}
            )
          </>
        )}
      </Consumer>
    );
  }
}
