import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";

function Header() {
  return (
    <header>
          <Link to="/">React Pizza App</Link>
          
          <SearchOrder />
    </header>
  );
}

export default Header;
