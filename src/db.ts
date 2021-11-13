const { connect } = require("http2") 

const { GoogleSpreadsheet } = require("google-spreadsheet") 
const credential = require('../credential.json') 

const connection = async (request, response) => {
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

        // const spreadsheetRepository = getRepository(spreadsheet)
        // const spreadsheet = spreadsheetRepository.create(spreadSheets)

        return response.json(spreadSheets)
    } catch (e) {
        console.error(e)
    }
}

exports.connection = connection



