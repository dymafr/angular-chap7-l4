import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AddAlimentComponent } from "./add-aliment/add-aliment.component";
import { ListAlimentComponent } from "./list-aliment/list-aliment.component";
import { AlimentService } from "./aliment.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AddAlimentComponent, ListAlimentComponent],
  bootstrap: [AppComponent],
  providers: [AlimentService]
})
export class AppModule {}
