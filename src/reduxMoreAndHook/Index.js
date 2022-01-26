import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import Home from './Home';
const store = createStore(rootReducer,{name:"Ajay Ch",age:53},applyMiddleware(thunk));

const Index = () => {
  return (
    <Provider store={store}><Home /></Provider>
  );
};

export default Index;
