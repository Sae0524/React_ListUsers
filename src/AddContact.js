import React from "react";
import { Consumer } from "./context";

class AddContact extends React.Component {
  state = {
    name: "",
    phrase: ""
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, phrase } = this.state;
    const newContact = {
      name,
      phrase
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          const { name, phrase } = this.state;
          return (
            <>
              <h1> Add Contact </h1>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <label>Name: </label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  placeholder=" Enter your name... "
                  onChange={this.onChange}
                />
                <br />
                <br />
                <label>Phrase:</label>
                <input
                  type="text"
                  value={phrase}
                  name="phrase"
                  placeholder=" Enter the phrase..."
                  onChange={this.onChange}
                />
                <br />
                <br />
                <input type="submit" value="Add Contact" />
              </form>
            </>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
