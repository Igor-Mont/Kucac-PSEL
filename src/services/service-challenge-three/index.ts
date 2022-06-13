import { Car } from "./models/car";
import { Motorcycle } from "./models/motorcycle";
import { Vehicle } from "./models/vehicle";

class ServiceChallengeThree {
  async execute(data): Promise<Vehicle> {
    if (data.doors) {
      const car = new Car(data.model, data.fabrication_year, data.brand, data.doors)
      return car
    }

    if (data.passengers) {
      const motorcycle = new Motorcycle(data.model, data.fabrication_year, data.brand, data.passengers)
      return motorcycle
    }

    throw new Error('Submit the correct vehicle properties.')
  }
}

export { ServiceChallengeThree }