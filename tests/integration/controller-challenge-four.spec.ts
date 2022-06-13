import request from 'supertest'
import server from '../../src/server'

describe('Challenge Four - CONTROLLER', () => {
  it('should returns 400 if ceps is not provided.', async () => {
    const response = await request(server).post('/challenges/four').send({})
    
    expect(response.statusCode).toBe(400)
    expect(response.badRequest).toBe(true)
  })

  it('should returns 200 if correct data is provided.', async () => {
    const response = await request(server).post('/challenges/four').send({ ceps: [] })
    
    expect(response.statusCode).toBe(200)
  })
}); 