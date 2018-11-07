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
			q: 'genre:thriller',
			librarian: true,
			refine: true,
			facet: 'type(book)'
		}
		// ,
		// 'description' //Filter is not needed 
	)

	.then(response => {
		// console.log(response)
		let results = response.data.aquabrowser.results[0].result
		return results.map(book => {
			return {
				title: book.titles[0].title[0]['_'],
				description: book.description[0]['physical-description'][0]._,
				publication: book.publication[0].year[0]['_'],
				subject: book.subjects ? book.subjects[0]['topical-subject'][0]._ : "no subject",
			}
		})
	})
	//Credits naar Dennis voor de goeie uiteg
	//nieuwe const met bookpage filtered zet hem gelijk aan response 
	//book pagesFiltered.forEach ((oek, index.description))
	//regex: https://stackoverflow.com/questions/18558417/get-first-word-of-string

	.then(response => {
		const bookPagesFiltered = response
		bookPagesFiltered.forEach((boek, index) => {
			bookPagesFiltered[index].description = Number(boek.description.replace(/ .*/, ''))
		})
		console.log(bookPagesFiltered);

		return bookPagesFiltered
	})
	.then(response => {
		app.get('/', (req, res) => res.json(response)).listen(port, () =>
			console.log(chalk.green(`Listening on port ${port}`)))
		//write file with error handeling
		fs.writeFile('../json/numberOfPages.json', JSON.stringify(response), 'utf8', err => {
			if (err) {
				console.log('Write file ging fout', err)
				return
			} else {
				return response
			}
		})
	})

	.catch(err => console.error(chalk.red('doet het niet', err)))
// Make server with the response on the port