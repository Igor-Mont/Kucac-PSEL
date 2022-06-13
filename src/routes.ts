import { ControllerChallengeOne } from './controllers/controller-challenge-one'
import { ControllerChallengeTwo } from './controllers/controller-challenge-two'
import { ControllerChallengeFour } from './controllers/controller-challenge-four'
import { ControllerChallengeThree } from './controllers/controller-challenge-three'

async function routes(request, response) {
  const { method, url } = request

  if (method === 'GET' && url === '/') {
    response.writeHead(200)

    return response.end('Processo Seletivo Kukac 📦')
  }

  if (method === 'POST' && url === '/challenges/one') {
    const controller = new ControllerChallengeOne()

    return controller.handle(request, response)
  }

  if (method === 'POST' && url === '/challenges/two') {
    const controller = new ControllerChallengeTwo()

    return controller.handle(request, response)
  }

  if (method === 'POST' && url === '/challenges/three') {
    const controller = new ControllerChallengeThree()

    return controller.handle(request, response)
  }

  return response.end()
}

function handleError(error, response) {
  console.error(`Caught error in API ${error.stack}`)
  response.writeHead(500)

  return response.end()
}

export async function handler(request, response) {
  return routes(request, response)
    .catch(error => handleError(error, response))
}