import React from 'react';


const ProductList = (props) => {
    console.log(props);
    return (
        <div>
             <ul class="collection">
               {props.mobiles.map(mobile => <li key={mobile.id} className="collection-item">{mobile.name} <i className="material-icons right" onClick={props.addToCart}>add</i></li>)}
            </ul>
            
        </div>
    );
};

export default ProductList;