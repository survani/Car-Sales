import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

//?Redux related imports
import { connect } from "react-redux";
import { addingFeature, removeFeature, updateTotalPrice } from "./actions/actionCreators"


const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
    //resets price by subtracting what was added.
    props.updateTotalPrice(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addingFeature(item);
    //displays the items price.
    props.updateTotalPrice(item.price)
  };

  return(

    <div className="boxes">
        <div className="box">
          <Header car={props.car} />
          <AddedFeatures car={props.car} removeFeature={removeFeature}/>
          </div>
        <div className="box">

          <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
          <Total car = {props.car} additionalPrice={props.additionalPrice}/>
          </div>
      </div>
    );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect (mapStateToProps, {addingFeature, removeFeature, updateTotalPrice})(App);