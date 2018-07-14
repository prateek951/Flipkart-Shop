import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ProductList from './components/ProductList';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      mobiles: [],
      counter: 0
    };
    this.searchval =  ''
  }
  onInput(e){
    // console.log('inside the onInput method');
    this.searchval = e.target.value;
    // console.log(this.searchval);
  }
  doAjax(){
    const url = 'https://raw.githubusercontent.com/prateek951/AngularJSONs/master/mobiles.json';
    if(this.searchval){
     setTimeout(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Got the data...',data);
        this.setState({
          mobiles: data,
        });
      })
      .catch(error => console.log(error));
     }, 2000);
  }
 
  }
  addToCart(e){
    e.preventDefault();
    console.log('inside the addToCart method....');
    console.log('Counter value is ',this.state.counter);
    const mobile = this.state.mobiles.filter(mobile => mobile.id === e.target.key);
    mobile.added = true;
    this.setState({counter : this.state.counter+1});
    // console.log(e.target.parentElement);
  }
  render() {
    return (
      <div className="container">
             <h1>Cart : {this.state.counter}</h1>
            <Searchbar renderList={this.onInput.bind(this)} searchProducts={this.doAjax.bind(this)}/>
            <br/><br/>
            <ProductList mobiles={this.state.mobiles} addToCart={this.addToCart.bind(this)}/>
      </div>
    );
  }
}

export default App;
