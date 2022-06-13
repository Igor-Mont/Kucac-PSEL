import request from 'supertest'
import server from '../../src/server'

describe('Challenge Two - CONTROLLER', () => {
  it('should returns 400 if total is not provided.', async () => {
    const response = await request(server).post('/challenges/two').send({ amount: 1 })
    
    expect(response.statusCode).toBe(400)
    expect(response.badRequest).toBe(true)
  })

  it('should returns 400 if amount is not provided.', async () => {
    const response = await request(server).post('/challenges/two').send({ total: 1 })
    
    expect(response.statusCode).toBe(400)
    expect(response.badRequest).toBe(true)
  })

  it('should returns 200 if correct data is provided.', async () => {
    const response = await request(server).post('/challenges/two').send({ total: 15, amount: 50 })
    console.log('resp', response)
    expect(response.statusCode).toBe(200)
  })
}); 