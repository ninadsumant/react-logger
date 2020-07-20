import React, {useEffect, Fragment} from 'react';
import SearchBar from './components/layout/SearchBar.js'
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';
import Orders from './components/orders/Orders';


import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.js';
import 'antd/dist/antd.css';
import './App.css';


const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return <Provider store={store}> 
  <Fragment> 
    <SearchBar />
    <div className="container">

      <Orders />
    </div>
  </Fragment>
  </Provider>
};

export default App;

// <AddBtn />
// <AddLogModal />
// <EditLogModal />
// <AddTechModal />
// <TechListModal />
// <Logs />
// <br/>