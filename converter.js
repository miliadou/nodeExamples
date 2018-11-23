const fs = require('fs');
const path = require('path');
const csvtojsonV2 = require('csvtojson/v2');


const convert = () => {

    const csvFilePath = './customer-data.csv';
    const processData = (resp) => {
        console.log('Creating the file...')
        csvtojsonV2()
            .fromFile(csvFilePath)
            .then((jsonObject) => {
                var formattedString = JSON.stringify(jsonObject).split(",").join(",\n")
                fs.writeFileSync(path.join('C:/Projects/csvToJson', 'customer-data.json'), formattedString, 'utf8')
            })
    }

    fs.readFile(path.join(csvFilePath), 'utf8', function (err, response) {
        if (err) { return console.log(err) }
        processData(response)
    })
}

convert()
