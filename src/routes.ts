import { itsWorks } from "./controllers"
import { addPlant, getAllPlants } from "./controllers/plant"

export const defineRoutes = (app) => {
    app.get('/', itsWorks)

    app.get('/plants', getAllPlants)
    app.post('/plants', addPlant)
}