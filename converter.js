const fs = require('fs');
const path = require('path');
const csvtojsonV2 = require('csvtojson/v2');


const convert = () => {

    const csvFilePath = 'C:/Users/m.iliadou/Desktop/customer-data.csv';
    const folderName = 'results'

    const processData = (resp) => {
        console.log('Creating the directory...')
        csvtojsonV2()
            .fromFile(csvFilePath)
            .then((jsonObject) => {
                console.log(jsonObject)
                fs.mkdirSync(folderName)
                fs.writeFileSync(path.join('C:/Projects/csvToJson', folderName, 'results.json'), JSON.stringify(jsonObject), 'utf8')
            })
    }

    fs.readFile(path.join(csvFilePath), 'utf8', function (err, response) {
        if (err) { return console.log(err) }
        processData(response)
    })
}

convert()