require('dotenv').config()

const api = require('./oba-api.js')
const chalk = require('chalk')
const express = require('express')
const jp = require('jsonpath')
const app = express()
const port = 3000
const fs = require('fs')
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
obaApi
	.get(
		'search', {
			q: 'genre:erotiek',
			librarian: true,
			refine: true,
			facet: 'type(book)'
		},
		'description'
	)
	.then(response => (data = response.data))
	.then(
		res =>
		// Haal de waardes uit het object res en map daar overheen (de waarde is een array)
		(result = Object.values(res).map(x => {
			//x returned een array. daar moet overheen gemapped worden
			let y = x[0]

			let newObject = {}
			// Object.values haalt de eerste waarde uit het item, [0] skipt door de array blokken en ._ is de titel die je nodig hebt
			newObject.item = Object.values(y)[0][0]._
			const splitted = newObject.item.split([';'])
			newObject.pagesize = splitted[0]

			// console.log(splitted);
			// console.log(newObject.pagesize);
			//thanks Daniel for the awesome Regex to cleanup the data
			try {
				newObject.pagesize = newObject.pagesize.match(
					/\[?(\d+)\]?[\w\s]*(?:p|pagina's|bladen)/
				)[1]
			} catch (err) {
				console.log(err)
				newObject.pagesize = 0
			}

			if (newObject.pagesize == 0 || isNaN(newObject.pagesize)) {
				delete newObject.pagesize
			}
			// console.log(newObject.pagesize)
			//return 
			return newObject.pagesize
		}))
	)
	.then(newObject => {
		console.log(newObject);
		console.log(newObject.Genre);

		(filteredData = newObject)

	})

	.catch(err => console.error('doet het niet'))
// Make server with the response on the port
app.get('/', (req, res) => res.json(filteredData)).listen(port, () =>
	console.log(chalk.green(`Listening on port ${port}`))
)