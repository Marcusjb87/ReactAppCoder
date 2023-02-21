import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />} />
          <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
          <Route exact path={"/producto/:itemId"} element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
