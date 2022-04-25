import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot
} from 'recoil';
import MemoPage from "./pages/memo/MemoPage";
import ExamplesPage from "./pages/examples/ExamplesPage";
import { Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
const App = () => {
  return (
      <RecoilRoot>
          <BrowserRouter>
              <Routes>
                  <Route path="/" >
                      <Route  path={'memo'} element={<MemoPage/>} />
                      <Route  path={'e'}  element={<ExamplesPage/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </RecoilRoot>
  );
}

export default App;
