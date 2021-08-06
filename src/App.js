import React, { Component } from 'react';
import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom';
import {provider} from 'react-redux';
import { ConifigureStore } from './redux/configureStore';
import './App.css';

const store = ConifigureStore();

class App extends Component {

  render() {
      return (
          <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
      );
  }
}


export default App;
