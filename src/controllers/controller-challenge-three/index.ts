import { ServiceChallengeThree } from "../../services/service-challenge-three"

class ControllerChallengeThree {
  async handle(request, response) {
    const vehicle = {}

    const service = new ServiceChallengeThree()
    request
      .on('data', async (data: any) => {
        
        try {
          const infosVehicle = JSON.parse(data)
          const infos = await service.execute(infosVehicle)
          Object.assign(vehicle, {
            ...infos
          })
        } catch (error) {
          console.error(`Caught error in API ${error.stack}`)
          response.writeHead(400)
        
          return response.end()
        }
      })

    request.on('end', () => {
        response.writeHead(200)
        return response.end(JSON.stringify(vehicle))
      })
    
  }
}

export { ControllerChallengeThree }