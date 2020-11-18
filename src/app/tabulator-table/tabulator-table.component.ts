import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import Tabulator from 'tabulator-tables';
// import  "tabulator_simple";
// import TabulatorStyles from 'tabulator-tables/dist/css/bootstrap'

/**
 * This is a wrapper class for the tabulator JS library.
 * For more info see http://tabulator.info
 */
@Component({
  selector: 'app-tabulator-table',
  templateUrl: './tabulator-table.component.html',
  styleUrls: ['./tabulator-table.component.scss'],
  // encapsulation: ViewEncapsulation.sha,
})
export class TabulatorTableComponent implements OnChanges, OnInit {
  @Input() tableData: any[] = [];
  @Input() columnNames: any[] = [];
  @Input() height: string = '311px';
  // list properties you want to set per implementation here...

  tab = document.createElement('div');

  constructor() {
  }

  ngOnInit() {
    console.log(this.tableData)
    console.dir(this.tableData)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable();
    console.log("ngOnChanges")
  }

  private drawTable(): void {
    new Tabulator(this.tab, {
      data: this.tableData,
      reactiveData: true, //enable data reactivity
      columns: this.columnNames,
      autoColumns:true,
      resizableColumns:false,
      layout: 'fitColumns',
      height: this.height
    });
    document.getElementById('my-tabular-table').appendChild(this.tab);
  }
}