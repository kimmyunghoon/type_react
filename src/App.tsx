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
import WaterPage from "./pages/water/WaterPage";
const App = () => {
  return (
      <RecoilRoot>
          <BrowserRouter>
              <Routes>
                  <Route path="/"  >
                      <Route  path={''} element={<MemoPage/>} />
                      <Route  path={'memo'} element={<MemoPage/>} />
                      <Route  path={'e'}  element={<ExamplesPage/>} />
                      <Route  path={'w'}  element={<WaterPage/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </RecoilRoot>
  );
}

export default App;
