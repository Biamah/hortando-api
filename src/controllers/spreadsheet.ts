import { getRepository } from "typeorm"
import { Spreadsheet } from "../models/entity/spreadsheet"
import credential from "../service/credential.json"

const { connect } = require("http2")

const { GoogleSpreadsheet } = require("google-spreadsheet") 

export const connection = async (request, response) => {
    const {urlSheet} = request.body
    try {
        const link = new URL(urlSheet)
        const idLink = link.pathname.split('/')[3]
        
        const doc = new GoogleSpreadsheet(idLink)
        await doc.useServiceAccountAuth({
            private_key: credential.private_key, 
            client_email: credential.client_email
        })
        await doc.loadInfo()

        // const sheetConnection = await connectSheet(idLink)
        const sheet = doc.sheetsByIndex[0]
        
        const spreadSheets = (await sheet.getRows()).map((row) => {
            console.log(row)
            return {
                name: row._rawData[0],
                category: row._rawData[1],
                description: row._rawData[2],
                carefull: row._rawData[3],
                image: row._rawData[4]
            }
        }) 

        const spreadsheetRepository = getRepository(Spreadsheet)
        const spreadsheet = spreadsheetRepository.create(spreadSheets)

        return response.json(spreadsheet)
    } catch (e) {
        console.error(e)
    }
}



