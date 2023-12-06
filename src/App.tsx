import React from "react";
import { Provider, rootStore } from "./models/Root";
import Cart from "./components/UsersList";

const App: React.FC = () => {
  return (
    <Provider value={rootStore}>
      <div className="App">
        <div className="App-wrapper">
          <Cart />
        </div>
      </div>
    </Provider>
  );
};

export default App;
