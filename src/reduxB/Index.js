import React from 'react';
import Home from './Home';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';


const store = createStore(reducer)

const Index = () => {
  return (
    <Provider store={store}><Home /> </Provider>
);
};

export default Index;
