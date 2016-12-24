import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import {table_data} from './Table.js';
import 'react-data-grid/dist/react-data-grid.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Welcome to React5</h2>
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
