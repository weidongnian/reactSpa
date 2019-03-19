import * as React from 'react';
import './App.css';
import AppRouter from './page/AppRouter'
import logo from './logo.svg';


class Test extends React.Component {
  public render() {
    return (
      <div>
      <p>hello world Test <AppRouter /> </p>
      </div>
    );
  }
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Test />
      </div>
    );
  }
}

export default App;
