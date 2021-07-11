const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

class Application {
	constructor(app, port, routes, middlewares) {
		this.app = app
		this.port = port
		this.routes = routes
		this.middlewares = middlewares
	}

	start(callback=undefined) {
		for(let index=0; index<this.middlewares.listen; index++){
			this.app.use(this.middlewares[index])
		}
		const routePaths = Array.from(this.routes.keys())
		for(let routeIndex=0;routeIndex<routePaths.length; routeIndex++){
			this.app.get(routePaths[routeIndex], this.routes.get(routePaths[routeIndex]))
		}
		this.app.listen(this.port, callback ? callback() : () => {console.log(`Check port ${this.port}`)})
	}
}

const application = new Application(app, PORT, new Map([
	["/", (request, response) => {response.send("sup")}]
]), [express.json(), cors()])
application.start()