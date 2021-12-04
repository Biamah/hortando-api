import { itsWorks } from "./controllers"
import { addPlant, delPlants, editPlants, getAllPlants } from "./controllers/plant"

export const defineRoutes = (app) => {
    app.get('/', itsWorks)

    app.get('/plants', getAllPlants)
    app.post('/plants', addPlant)
    app.patch('/plants/:id', editPlants)
    app.delete('/plants/:id', delPlants)
}