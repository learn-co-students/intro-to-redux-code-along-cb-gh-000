import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingList from './ShoppingList';
import './App.css';

function mapStateToProps(state) {
  return {shoppingListItems: state.shoppingListItems };
}

//create an instance of connect so that we can get state
const connector = connect(mapStateToProps);
const connectedComponent = connector(App);

export default connectedComponent;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Shopping List</h2>
        </div>
        <ShoppingList items={this.props.shoppingListItems} />
      </div>
    );
  }
}

export default App;
