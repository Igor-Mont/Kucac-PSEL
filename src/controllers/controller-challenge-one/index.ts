import { ServiceChallengeOne } from "../../services/service-challenge-one"

class ControllerChallengeOne {
  async handle(request, response) {
    let users: number[] = []

    const service = new ServiceChallengeOne()
    request
      .on('data', async data => {
        const range = JSON.parse(data)
        users = service.execute(range)
      })
      .on('end', () => {
        response.writeHead(200)
        return response.end(JSON.stringify(users))
      })

  }
}

export { ControllerChallengeOne }