import { ServiceChallengeTwo } from "../../services/service-challenge-two"

class ControllerChallengeTwo {
  async handle(request, response) {
    const notes = {}

    const service = new ServiceChallengeTwo()
    request
      .on('data', async data => {
        const fields = JSON.parse(data)
        const requiredFields = ['total', 'amount']

        for (const field of requiredFields) {
          if (!fields[field] && fields[field] !== 0) {
            console.log(fields[field])
            response.writeHead(400)
            return response.end(JSON.stringify({
              message: `Missing param: ${field}.`
            }))
          }
        }
  
        const { amount, total } = fields

        try {
          const sell = await service.execute({ amount, total })
          Object.assign(notes, {
            ...sell
          })
        } catch (error) {
          console.error(`Caught error in API ${error.stack}`)
          response.writeHead(400)
        
          return response.end()
        }


      })
      .on('end', () => {
        response.writeHead(200)
        return response.end(JSON.stringify(notes))
      })
    
  }
}

export { ControllerChallengeTwo }