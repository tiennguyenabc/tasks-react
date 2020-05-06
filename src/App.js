import React, { Component } from 'react';
import './App.css';
import DataTable from 'react-data-table-component';
class App extends Component {
  constructor() {
    super();
    this.data = [
      { id: 1, title: "ABC", year: '1982' },
      { id: 2, title: "ABC", year: '1994' }
    ];
    this.columns = [
      {
        name: 'Image column 1',
        selector: 'id',
        sortable: true
      },
      {
        name: 'Image column 2',
        selector: 'title',
        sortable: true
      },
      {
        name: 'Image column 3',
        selector: 'year',
        sortable: true
      }
];
  };
  render() {
    //console.log(this.data[0].title);
    return (
      <div className="App">
        <DataTable
          title="Arnold Movies"
          columns={this.columns}
          data={this.data}
        />
      </div>
    );
  }
}

export default App;
