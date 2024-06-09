import { Route, Routes } from "react-router-dom";

import "./index.css";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
      </Routes>
    </>
  );
}

export default App;
