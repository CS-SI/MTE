import fs from 'node:fs'
import Fs from 'fs/promises'

const BASEFOLDER = './public/series'
const GEOJSONPATH =
  './src/data/geojson/340-retenues-pourLoiZSV_V6_sans_tampon_corrections.geojson'

  
const allFiles = fs.readdirSync(BASEFOLDER)
const Ids = allFiles.map(id => +id)

let data = []
data = await Fs.readFile(GEOJSONPATH, { encoding: 'utf-8' })
  .then(result => JSON.parse(result))
  .catch(error => {
    console.log('ERROR', error)
  })


let newDataArray = []
let newDataGeoJsonObj = {}
for (const key in data) {
  let { features } = data

  if (key === 'features') {
    for (const index in features) {
      const lastObj = features[index]
      if (Ids.includes(lastObj.properties.ID_DB)) {
        newDataArray.push(lastObj)
      }
    }
  }
}
newDataGeoJsonObj = Object.assign({}, data, {
  features: newDataArray,
})



const dataInJson = JSON.stringify(newDataGeoJsonObj);

// writing the JSON string content to a file
fs.writeFile("./src/data/geojson/filtered/data.geojson", dataInJson, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }

  console.log("data.geojson written correctly");
});