import React, {useState} from "react"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    function handleChange(event) {
        event.preventDefault()
        setFilterText(() => event.target.value)
    }
    function handleCheck(event) {
        //event.preventDefault()
        setInStockOnly(event.target.checked)
    }
    return (
      <div>
        <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly}
            onHandleChange={handleChange}
            onHandleCheck={handleCheck} />
        <ProductTable 
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
             />
      </div>
    );
  }