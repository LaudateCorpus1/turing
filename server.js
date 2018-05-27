const service = require('@living-room/service-js')
const forward = require('http-port-forward')

const proxy = async () => {
  const { port } = await service.listen({ verbose: false })
  forward(port, 3000)
}
proxy()
