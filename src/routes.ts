import { itsWorks } from "./controllers"

export const defineRoutes = (app) => {
    app.get('/', itsWorks)
}