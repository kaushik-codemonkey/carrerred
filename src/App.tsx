import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UserForm from './components/user-form';
import Previewer from './components/previewer';

function App() {
  return (
    <div className="App">
      <div className="resume-editor">
        <UserForm />
        <Previewer />
      </div>
    </div>
  );
}

export default App;
