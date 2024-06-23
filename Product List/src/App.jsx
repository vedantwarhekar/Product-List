import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Products from "./Components/Products";
import ListProviderMAin from "./Store/list.store";
import { useContext } from "react";
import { ListProvider } from "./Store/list.store";
import Pagination from "./Components/Pagination";
function App() {
  const { filterList } = useContext(ListProvider);
  return (
    <ListProviderMAin>
      <Header />
      <Products />
      <Pagination />
    </ListProviderMAin>
  );
}

export default App;
