import { itsWorks } from "./controllers"
import { addPlant } from "./controllers/plant"

export const defineRoutes = (app) => {
    app.get('/', itsWorks)

    app.post('/plants', addPlant)
}