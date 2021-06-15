import React from "react";
// import "./styles.css";

import Contacts from "./contacts";
import AddContact from "./AddContact";
import { Provider } from "./context"; // Import Provider from Context.js

//import AddContact from "./AddContact";

function App() {
  return (
    //We need to wrap everything inside the Provider Component.
    <Provider>
      <AddContact />
      <Contacts />
    </Provider>
  );
}
export default App;
