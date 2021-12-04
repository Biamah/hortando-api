import { getRepository } from "typeorm"
import { Plant } from "../../models/entity/Plant"

export const addPlant = async (request, response) => {
    
    const name = request.body.name
    const description = request.body.description
    const care = request.body.care
    const image = request.body.image

    const plant = {
        name,
        description,
        care,
        image
    }

    const plantRepository = getRepository(Plant)
    const newPlant = await plantRepository.save(plant)

    return response.json({ newPlant })
}

export const getAllPlants = async (request, response) => {
    const plantRepository = getRepository(Plant)
    let plants = await plantRepository.find({})

    return response.json({ plants })
}

export const delPlants = async (request, response) => {
    const plantRepository = getRepository(Plant)
    const result = await plantRepository.delete(request.params.id)

    if(result.affected === 0) {
        return response.json({ message: "Essa planta não existe mais!"})
    }
    return response.json({ message: "Removido com sucesso!"})
}