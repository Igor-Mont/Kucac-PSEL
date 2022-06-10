async function routes(request, response) {
  const { method, url } = request

  if (method === 'GET' && url === '/') {
    response.writeHead(200)

    return response.end('Processo Seletivo Kukac 📦')
  }

  if (method === 'POST' && url === '/challenges') {
    response.writeHead(200)

    return response.end()
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