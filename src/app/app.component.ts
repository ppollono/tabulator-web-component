import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tabulator';
  tabledata = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
    { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
    { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
  ];
  columns = [                 //define the table columns
    { 
      title: "Name", 
      field: "name", 
      editor: "input" 
    },
    { 
      title: "Task Progress", 
      field: "progress", 
      hozAlign: "left", 
      formatter: "progress", 
      editor: true 
    },
    { 
      title: "Gender", 
      field: "gender", 
      // width: 95, 
      editor: "select", 
      editorParams: { values: ["male", "female"] } 
    },
    { 
      title: "Rating", 
      field: "rating", 
      formatter: "star", 
      hozAlign: "center", 
      // width: 100, 
      editor: true 
    },
    { 
      title: "Color", 
      field: "col", 
      // width: 130, 
      editor: "input" 
    },
    { 
      title: "Date Of Birth", 
      field: "dob", 
      // width: 130, 
      sorter: "date", 
      hozAlign: "center" 
    },
    { 
      title: "Driver", 
      field: "car", 
      width: 90, hozAlign: "center", 
      formatter: "tickCross", 
      sorter: "boolean", 
      editor: true 
    },
  ]
}
