import { ServiceChallengeOne } from "../../services/service-challenge-one"

class ControllerChallengeOne {
  async handle(request, response) {
    let users: number[] = []

    const service = new ServiceChallengeOne()
    request
      .on('data', async data => {
        const { start, end } = JSON.parse(data)

        try {
          users = await service.execute({ start, end })
        } catch (error) {
          console.error(`Caught error in API ${error.stack}`)
          response.writeHead(400)
        
          return response.end()
        }
      })
      .on('end', () => {
        response.writeHead(200)
        return response.end(JSON.stringify(users))
      })

  }
}

export { ControllerChallengeOne }