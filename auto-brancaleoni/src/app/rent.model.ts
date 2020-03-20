import { Drive } from './driving.model';

export class Rent{

  drive: Drive;
  n_rent: number = 1;

  constructor(drive: Drive){
    this.drive = drive;
  }

  rentAgain(): void {
    this.n_rent += 1;
  }

}
