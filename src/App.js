import './App.css';
import ReduxB from './reduxB/Index';
import ReduxThunk from './reduxThunk/Index';
import ReduxHook from './reduxMoreAndHook/Index';
import Header from './Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ReduxB />}/>
        <Route path="/thunk" element={<ReduxThunk />}/>
        <Route path="/hook" element={<ReduxHook />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
