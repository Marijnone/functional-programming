require('dotenv').config()

const api = require('./oba-api.js')
const chalk = require('chalk');
const express = require('express')
const jp = require('jsonpath')
const app = express()
const port = 3000

const obaApi = new api({
  url: 'https://zoeken.oba.nl/api/v1/',
  key: process.env.PUBLIC
})

// Search for method, params and than optional where you wanna find something
// returns first 20 items
// obaApi.get(endpoint, params, filterKey)
// possible endpoints: search (needs 'q' parameter) | details (needs a 'frabl' parameter) | availability (needs a 'frabl' parameter) | holdings/root | index/x (where x = facet type (like 'book' ))
// possible parameters: q, librarian, refine, sort etc. check oba api documentation for all
// possible filterKey: any higher order key in response object, like title returns only title objects instead of full data object
obaApi.get('search', {
    q: 'harry potter',
    librarian: true,
    refine: true
  }, 'description').then(response => (
    data = response.data
  ))
  .then(res => (
    // Haal de waardes uit het object res en map daar overheen (de waarde is een array)
    Object.values(res).map(x => {
        //x returned een array. daar moet overheen gemapped worden
        x.map(y => {
          let newObject = {}
          // Object.values haalt de eerste waarde uit het item, [0] skipt door de array blokken en ._ is de titel die je nodig hebt
          newObject.item = Object.values(y)[0][0]._

          console.log(newObject.item);
          return newObject
        })

      }

    )).catch(err => console.error(err)))
// Make server with the response on the port
app
  .get('/', (req, res) => res.json(response))
  .listen(port, () => console.log(chalk.green(`Listening on port ${port}`)))