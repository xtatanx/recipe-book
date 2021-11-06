import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import RecipeDetail from 'components/pages/RecipeDetail/RecipeDetail';
import Detail from 'components/layouts/Detail';
import './App.css';
import ScrollToTop from './components/elements/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
