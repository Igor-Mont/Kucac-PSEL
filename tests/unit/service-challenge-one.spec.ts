import { ServiceChallengeOne } from "../../src/services/service-challenge-one";

let service

describe('Challenge One - SERVICE', () => {
  beforeAll(() => {
    service = new ServiceChallengeOne()
  })

  it('should be able execute.', async () => {
    const palindromes = await service.execute({ start: 0, end: 1 })

    expect(palindromes).toBeTruthy()
    expect(palindromes.length).toBe(2)
  })

  it('should not be able execute if range is invalid.', async () => {
    await expect(
      service.execute({ start: 1, end: 0 })
    ).rejects.toThrow()
  })
}); 