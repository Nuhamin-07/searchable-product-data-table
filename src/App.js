
import React from "react"
import {PRODUCTS} from "./data"
import FilterableProductTable from "./components/FilterableProductTable";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
