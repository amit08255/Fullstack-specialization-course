import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const selectedDish = this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0];

    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        {selectedDish !== null && selectedDish !== undefined ? <div className="container"><DishDetail dish={selectedDish} /></div> : null}
        <Footer />
      </div>
    );
  }
}

export default Main;
