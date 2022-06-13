abstract class Vehicle {
  constructor(
    protected readonly model: string,
    protected readonly fabrication_year: number,
    protected readonly brand: string
  ) {}
}

export { Vehicle }