import { Vehicle } from "./vehicle";

class Car extends Vehicle {
  constructor(
    protected readonly model: string,
    protected readonly fabrication_year: number,
    protected readonly brand: string,
    protected readonly doors: 2 | 4,
  ) {
    super(model, fabrication_year, brand)
  }
}

export { Car }