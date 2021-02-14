import React from 'react';
import Greeting from './components/component.js';
import PureGreeting from "./components/pureComponent.js";
import FunGreeting from "./components/funComponent.js";

function App() {
  return (
    <ol>
      {React.createElement('li', {}, 'Component created by createElement function')}
      <Greeting />
      <PureGreeting />
      <FunGreeting />
    </ol>
  );
}

export default App;
