import { Vehicle } from "../../src/services/service-challenge-three/models/vehicle";
import { Motorcycle } from "../../src/services/service-challenge-three/models/motorcycle";
import { ServiceChallengeFour } from "../../src/services/service-challenge-four";

let service

describe('Challenge Three - SERVICE', () => {
  beforeAll(() => {
    service = new ServiceChallengeFour()
  })

  it('should be able get infos of ceps.', async () => {
    const ceps = await service.execute([49360000])

    expect(ceps[0]).toBeTruthy()
    expect(ceps[0]).toHaveProperty('cep')
    expect(ceps[0]).toHaveProperty('ddd')
  })
}); 