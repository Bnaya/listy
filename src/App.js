import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDataGrid from 'react-data-grid';
import {table_data} from './Table.js';
import 'react-data-grid/dist/react-data-grid.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React15</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactDataGrid
        columns={table_data.columns}
        rowGetter={table_data.rowGetter}
        rowsCount={table_data._rows.length}
        minHeight={500} />
      </div>
    );
  }
}

export default App;
