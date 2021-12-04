import { validate } from "class-validator"
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

export const editPlants = async (request, response) => {
    const plantRepository = getRepository(Plant)
    const plants = await plantRepository.findOne(request.params.id)

    if (!plants) {
        return response.json({ message: "Planta não encontrada!" })
    }

    if (request.body.name) {
        plants.name = request.body.name
    }

    if (request.body.description) {
        plants.description= request.body.description
    }

    if (request.body.care) {
        plants.care = request.body.care
    }

    if (request.body.image) {
        plants.image = request.body.image
    }

    const errors = await validate(plants)
    if (errors.length > 0) {
        return response.status(400).json(errors)
    }
    await plantRepository.save(plants)
    return response.json({ message: "Planta alterada com sucesso!"})
}