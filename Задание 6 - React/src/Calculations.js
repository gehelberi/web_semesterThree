import React, {Component} from 'react';

class Calculations extends Component {
    render() {

        return (
            <div className="jumbotron p-10">
              <div className="h5"> Total quantity: {this.countSum('quantity')}
              </div>
              <div className="h5"> Total price: {this.countSum('price')} </div>
              <div className="h5"> Average quantity:  {this.countAverageValue('quantity')}</div>
              <div className="h5"> Average price: {this.countAverageValue('price')} </div>
            </div>
        );
    }

    countSum(property) {
        let properties = document.querySelectorAll(`.${property}`);
        let sum = 0;
        for (let property of properties) {
            sum += Number(property.innerHTML);
        }
        return sum;
    }

    countAverageValue(property) {
        let properties = document.querySelectorAll(`.${property}`)
        let averageValue = 0;
        for (let property of properties) {
            averageValue += Number(property.innerHTML);
        }
        averageValue = Math.round((averageValue / properties.length) * 100) / 100;
        return averageValue;
    }
}
export default Calculations;
