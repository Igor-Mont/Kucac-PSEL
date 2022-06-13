import { CEP, ServiceChallengeFour } from "../../services/service-challenge-four"

class ControllerChallengeFour {
  async handle(request, response) {

    const service = new ServiceChallengeFour()
    for await (const data of request) {
      try {
        const { ceps } = JSON.parse(data)
        const infosCEPS = await service.execute(ceps)
        
        response.writeHead(200)
        return response.end(JSON.stringify(infosCEPS))
      } catch (error) {
        console.error(`Caught error in API ${error.stack}`)
        response.writeHead(400)
      
        return response.end()
      }
    }   
  }
}

export { ControllerChallengeFour }