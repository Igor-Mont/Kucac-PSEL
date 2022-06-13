import { Vehicle } from "../../src/services/service-challenge-three/models/vehicle";
import { Motorcycle } from "../../src/services/service-challenge-three/models/motorcycle";
import { ServiceChallengeThree } from "../../src/services/service-challenge-three";

let service

describe('Challenge Three - SERVICE', () => {
  beforeAll(() => {
    service = new ServiceChallengeThree()
  })

  it('should be able create a car.', async () => {
    const car = await service.execute({
      model: "test_model",
      fabrication_year: 2022,
      brand: "test_brand",
      doors: 2
    })

    expect(car).toBeTruthy()
    expect(car).toBeInstanceOf(Vehicle)
  })

  it('should be able create a motorcycle.', async () => {
    const car = await service.execute({
      model: "test_model",
      fabrication_year: 2022,
      brand: "test_brand",
      passengers: 2
    })

    expect(car).toBeTruthy()
    expect(car).toHaveProperty('wheels')
    expect(car).toBeInstanceOf(Motorcycle)
  })

  it('should not be able execute if vehicle properties is invalid.', async () => {
    await expect(
      service.execute({})
    ).rejects.toThrow()
  })
}); 