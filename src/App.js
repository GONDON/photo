import React from 'react';
import Photo from './photo'
import Auth from './auth'
import Form from './form/form'
import Input from './form/proxyForm'
import Demo1 from './auth/demo1'
import './App.css';

function App(){
  return (
    <div>
      <Photo />
      <Auth />
      <Form >
         <Input v_model="name"></Input>
        <Input v_model="pwd"></Input>
      </Form>
      <Demo1/>
    </div>
  );
}

export default App;