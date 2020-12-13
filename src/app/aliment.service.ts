import { Injectable } from "@angular/core";

@Injectable()
export class AlimentService {
  public aliments: string[] = [];

  constructor() {}

  public addOne(aliment: string): void {
    this.aliments.push(aliment);
  }

  public removeOne(index: number): void {
    this.aliments.splice(index, 1);
  }
}
