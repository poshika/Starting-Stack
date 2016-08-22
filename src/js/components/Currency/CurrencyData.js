import React from 'react';
import _ from 'lodash';

export default class CurrencyData extends React.Component {
  render() {
    const { base, date, rates } = this.props.currencyData;
    const ratesComponents = _.map(rates, (value, currency) => {
        return <li> Currency: {currency} Value: {value} </li>;
    });

    return(
      <div>
        <p>
          base: {base}
        </p>

        <p>
          data: {date}
        </p>

        <p>
          rates:
        </p>

        <ul>
          {ratesComponents}
        </ul>
      </div>
    );
  }
}
