import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-datatable',
  standalone: false,
  
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css'
})
export class DatatableComponent implements OnInit {
  constructor(private http: HttpClient) {}
  dataTable: any;
  apiData: any;

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.apiData = data;
      this.initializeDataTable();
    });
  }

  initializeDataTable(): void {
    this.dataTable = $('#example').DataTable({
      data: this.apiData,
      columns: [
        { title: 'Id', data: 'id' },
        { title: 'Title', data: 'title' },
        { title: 'Body', data: 'body' }
      ]
    });
  }
}
