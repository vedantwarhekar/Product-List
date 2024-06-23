import { useContext } from "react";
import { ListProvider } from "../Store/list.store";
import style from "./ProductList.module.css";
import ProductList from "./ProductList";
const Products = () => {
  const { filterList } = useContext(ListProvider);
  const { handleSort } = useContext(ListProvider);
  const { handleOnChange } = useContext(ListProvider);

  if (filterList.length === 0) {
    return (
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Sorry!</h4>
        <p>"No products found for your search query."</p>
      </div>
    );
  }
  return (
    <div className={style.body}>
      <div className={style.Filters}>
        <button
          type="button"
          onClick={() => {
            handleSort();
          }}
          className="btn btn-primary"
        >
          Sort As Per Price
        </button>
        <button
          type="button"
          onClick={(event) => {
            handleOnChange(event);
          }}
          className="btn btn-primary"
        >
          Unsort
        </button>
      </div>
      {filterList.map((item, index) => (
        <ProductList key={index} post={item} />
      ))}
    </div>
  );
};
export default Products;
