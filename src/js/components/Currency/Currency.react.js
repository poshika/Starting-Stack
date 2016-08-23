import React from 'react';

import * as CurrencyAction from '../../actions/CurrencyAction';
import CurrencyStore from '../../stores/CurrencyStore';

import CurrencyData from './CurrencyData';

function getStateFromStores() {
  return {
    currencyData: CurrencyStore.getCurrencyData()
  };
}

export default class About extends React.Component {
  constructor() {
    super();

    this.state = {
      currencyData: getStateFromStores()
    }

    this._onChange = this._onChange.bind(this);
  }

  getAPIInfo(){
    CurrencyAction.getInfo(this.refs.inputCurrency.value);
  }

  componentWillMount() {
    CurrencyStore.addChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getStateFromStores());
  }

  render() {
    return (
      <div>
        <h3>Currency</h3>
          <div class="input-group col-md-4">
            <input
              type="text"
              class="form-control"
              placeholder="Base value... (Default EUR)"
              ref="inputCurrency" />

            <span class="input-group-btn">
              <button
                class="btn btn-default"
                onClick={this.getAPIInfo.bind(this)}>Consume Fixer API</button>
            </span>
          </div>

          <CurrencyData currencyData={this.state.currencyData}/>
      </div>
    );
  }
}
