//TODO this should be loaded from somewhere
var columns = [
{
  key: 'id',
  name: 'ID',
  resizable : true,
  width : 40
},
{
  key: 'task',
  name: 'Title',
  resizable : true
},
{
  key: 'priority',
  name: 'Priority',
  resizable : true
},
{
  key: 'issueType',
  name: 'Issue Type',
  resizable : true
},
{
  key: 'complete',
  name: '% Complete',
  resizable : true
},
{
  key: 'startDate',
  name: 'Start Date',
  resizable : true
},
{
  key: 'completeDate',
  name: 'Expected Complete',
  resizable : true
}
];

//helper to generate a random date
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
};

var _rows = [];
for (var i = 1; i < 1000; i++) {
  _rows.push({
    id: i,
    task: 'Task ' + i,
    complete: Math.min(100, Math.round(Math.random() * 110)),
    priority : ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
    issueType : ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
    startDate: randomDate(new Date(2015, 3, 1), new Date()),
    completeDate: randomDate(new Date(), new Date(2016, 0, 1))
  });
}

//function to retrieve a row for a given index
var rowGetter = function(i){
  return _rows[i];
};

module.exports = {
  columns: columns,
  rowGetter: rowGetter,
  _rows: _rows
}

