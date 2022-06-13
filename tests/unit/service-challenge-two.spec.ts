import { ServiceChallengeTwo } from "../../src/services/service-challenge-two";

let service

describe('Challenge Two - SERVICE', () => {
  beforeAll(() => {
    service = new ServiceChallengeTwo()
  })

  it('should be able execute.', async () => {
    const exchange = await service.execute({ amount: 50, total: 15 })

    expect(exchange).toStrictEqual({
      total: 15,
      amount: 50,
      notes: {
        notes_100: 0,
        notes_10: 3,
        notes_1: 5
      }
    })

  })

  it('should not be able execute if purchase price is higher.', async () => {
    await expect(
      service.execute({ amount: 15, total: 50 })
    ).rejects.toThrow()
  })
}); 