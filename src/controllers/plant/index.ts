import { getRepository } from "typeorm"
import { Plant } from "../../models/entity/Plant"

export const addPlant = async (request, response) => {
    
    const plantName = request.body.name
    const plantDescription = request.body.description
    const plantCare = request.body.care
    const plantImage = request.body.image

    const plant = {
        plantName,
        plantDescription,
        plantCare,
        plantImage
    }

    const plantRepository = getRepository(Plant)
    const plants = await plantRepository.save(plant)

    return response.json({ plants })
}