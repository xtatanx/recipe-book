import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from 'components/layouts/Detail';
import './App.css';

const Home = lazy(() => import('./components/pages/Home'));
const RecipeDetail = lazy(() => import('./components/pages/RecipeDetail'));
const ScrollToTop = lazy(() => import('./components/elements/ScrollToTop'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/recipes" element={<Detail></Detail>}>
            <Route
              path=":recipeId"
              element={<RecipeDetail></RecipeDetail>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
