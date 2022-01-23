/*
 * @Author: sheng.Zhang
 * @Date: 2022-01-20 11:09:49
 * @LastEditors: sheng.Zhang
 * @LastEditTime: 2022-01-20 17:06:29
 * @Description: 
 */
import React from 'react';
import './App.css';
import { useRoutes } from 'react-router';
import routes from './route';

function App() {
  return (
    <div className="App">
      {useRoutes(routes)}
    </div>
  );
}

export default App;
