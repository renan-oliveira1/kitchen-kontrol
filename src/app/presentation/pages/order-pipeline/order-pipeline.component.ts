import { Component } from '@angular/core';
import { TableService } from 'src/app/data/table-service/table.service';
import { Table } from 'src/app/domain/interfaces/Table';

@Component({
  selector: 'app-order-pipeline',
  templateUrl: './order-pipeline.component.html',
  styleUrls: ['./order-pipeline.component.css']
})
export class OrderPipelineComponent {
  table!: Table;
  constructor(private tableService : TableService){}

  ngOnInit(){
    this.loadPizzas()
  }

  loadPizzas(){
    this.tableService.getTableById().subscribe({
      next: (response) => {
        this.table = response
      },
      error: () => {}
    })
  }
}
