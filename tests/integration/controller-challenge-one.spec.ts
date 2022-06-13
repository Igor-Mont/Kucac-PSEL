import request from 'supertest'
import server from '../../src/server'

describe('Challenge One - CONTROLLER', () => {
  it('should returns 400 if start is not provided.', async () => {
    const response = await request(server).post('/challenges/one').send({ end: 1 })
    
    expect(response.statusCode).toBe(400)
    expect(response.badRequest).toBe(true)
  })

  it('should returns 400 if end is not provided.', async () => {
    const response = await request(server).post('/challenges/one').send({ start: 1 })
    
    expect(response.statusCode).toBe(400)
    expect(response.badRequest).toBe(true)
  })

  it('should returns 200 if correct data is provided.', async () => {
    const response = await request(server).post('/challenges/one').send({ start: 0 ,end: 1 })
    
    expect(response.statusCode).toBe(200)
  })
}); 