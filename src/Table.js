import SampleData from './SampleData.js';

// Metadata section

// Which datasource
var datasource_config = {
  storage: 'sample',
  table: 'table1'
}

// TODO move to classful struct
function load_data(datasource_config) {
  switch(datasource_config['storage']) {
    case 'sample':
      return SampleData;
    case 'sample2':
      var columns = [
      {
        key: 'id',
        name: 'ID',
        resizable: false
      },
      {
        key: 'title',
        name: 'TitLE',
        resizable: true,
      }
      ]
      var _rows = [
      {
        id: 0,
        title: 'aaa'
      },
      {
        id: 2,
        title: 'ff'
      }
      ]
      return {
        columns: columns,
        rowGetter: function(i) {return _rows[i]},
        _rows: _rows
      }
    case 'localStorage':
      break;
    default:
      throw new Error('aaaa');
  }
}

// table_data contains loaded table 
module.exports['table_data']=load_data(datasource_config);
