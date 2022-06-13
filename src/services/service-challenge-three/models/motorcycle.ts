import { Vehicle } from "./vehicle";

class Motorcycle extends Vehicle {
  protected readonly wheels = 2

  constructor(
    protected readonly model: string,
    protected readonly fabrication_year: number,
    protected readonly brand: string,
    protected readonly passengers: 1 | 2,
  ) {
    super(model, fabrication_year, brand)
  }
}

export { Motorcycle }