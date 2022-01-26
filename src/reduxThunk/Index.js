import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Home from './Home';
import reducer from './reducer/reducer';

const store=createStore(reducer,applyMiddleware(thunk))
const Index = () => {
  return (
    <Provider store={store}><Home /></Provider>
  );
};

export default Index;
