import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot
} from 'recoil';
import MemoPage from "./pages/memo/MemoPage";
const App = () => {
  return (
      <RecoilRoot>
        <MemoPage />
      </RecoilRoot>
  );
}

export default App;
