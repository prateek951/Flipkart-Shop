import React from 'react';

const Searchbar = props => {
    console.log(props);
    return (
        <div>
            <div className="container">
                <label>Search for Products</label>
                <input type="text" placeholder="Search for the products now" onChange={props.renderList}/>
                <button className="btn" onClick={props.searchProducts}>Search</button>
            </div>
        </div>
    );
};  

export default Searchbar;