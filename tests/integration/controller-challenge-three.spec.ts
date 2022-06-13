import request from 'supertest'
import server from '../../src/server'

describe('Challenge Three - CONTROLLER', () => {
  // it('should returns 400 if start is not provided.', async () => {
  //   const response = await request(server).post('/challenges/three').send({ end: 1 })
    
  //   expect(response.statusCode).toBe(400)
  //   expect(response.badRequest).toBe(true)
  // })

  it('should returns 400 if correct properties is not provided.', async () => {
    const response = await request(server).post('/challenges/three').send({})
    
    expect(response.statusCode).toBe(400)
    expect(response.badRequest).toBe(true)
  })

  it('should returns 200 if correct data of the motorcycle is provided.', async () => {
    const response = await request(server).post('/challenges/three').send({
      model: "Modelo",
      fabrication_year: 2020,
      brand: "marca",
      passengers: 2
    })
    
    expect(response.statusCode).toBe(200)
  })

  it('should returns 200 if correct data of the car is provided.', async () => {
    const response = await request(server).post('/challenges/three').send({
      model: "Modelo",
      fabrication_year: 2020,
      brand: "marca",
      doors: 2
    })
    
    expect(response.statusCode).toBe(200)
  })
}); 