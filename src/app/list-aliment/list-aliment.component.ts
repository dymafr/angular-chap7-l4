import { Component } from '@angular/core';
import { AlimentService } from '../aliment.service';

@Component({
  selector: 'app-list-aliment',
  templateUrl: './list-aliment.component.html',
  styleUrls: ['./list-aliment.component.scss']
})
export class ListAlimentComponent {
  public aliments: string[] = this.alimentService.aliments;

  constructor(private alimentService: AlimentService) {}

  public removeAliment(index: number): void {
    this.alimentService.removeOne(index);
  }
}
