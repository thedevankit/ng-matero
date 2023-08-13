import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesKitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';

const routes: Routes = [
  { path: '', component: TablesKitchenSinkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {}
