import React from "react"

export default function SearchBar({filterText, inStockOnly, onHandleChange, onHandleCheck}) {
    
    return (
      <form>
        <input type="text" 
        placeholder="Search..."
        onChange={onHandleChange}
        value={filterText}  />
        
        <br/>
        <label>
          <input type="checkbox" 
          onChange={onHandleCheck}
          checked={inStockOnly}
          />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }