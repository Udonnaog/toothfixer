import React from 'react';
import './App.css';
import New from './components/create';
import ReadRecords from './components/read';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App: React.FC = () => {
 return (
<div className="Container">
 <div className="Column1">
 <New />
 </div>
 <p>
    <ReadRecords/>
 </p>
 </div>
 );
}
export default App;

