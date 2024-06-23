import { useContext } from "react";
import { ListProvider } from "../Store/list.store";
const Header = () => {
  const { handleOnChange } = useContext(ListProvider);

  return (
    <header>
      <nav className="navbar bg-primary bg-body-tertiary ">
        <div className="container-fluid ">
          <a className="navbar-brand">Product List</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={() => {
                handleOnChange(event);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
