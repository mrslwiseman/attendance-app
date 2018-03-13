#!/usr/local/bin/node
// survey-parser.js
'use strict'
//
// Survey Parser utility - simple parser to extract the definitions from a survey file
//
var fs = require('fs');
var opts = require('minimist')(process.argv.slice(2))

const debug = require('debug')('survey:parser')

const surveyfile = opts._[0] || "docs/sample-survey.txt";

const directives = {
	section: {
		regex: /^section:(.*)/i,
	},
	question: {
		regex: /^q\s+(.*)/i,
	},
	attribute: {
		regex: /^a\s+(.*)/i,
	},
}

const modifiers = {
	survey: {

	},
	section: {
		flow: 1,
	},
	question: {
		prompt: 1,
		if: 1,
		type: 1,
		placeholder: 1,
		minwords: 1,
		multi:1,
		match: 1,
	},
	attribute: {
		value: 1,
	}
}

const setPrompt = function(prompt) {

}

const setIf = function(expression) {

}

fs.readFile(surveyfile, 'utf8', (err, data) => {
	if (err) throw err

	const errs = []
	let mode = ''
	// console.log(data.toString('utf8'));
	const lines = data.split(/\n/)

// Iterate over the lines in the file
	lines.forEach((line,ix) => {
		let done = false
		var l = line.trim()
		debug(l)
// Look for directives:
		Object.keys(directives).forEach(d => {
			const directive = directives[d]
			if (l.match(directive.regex)) {
				mode = d
				debug(`Mode=${mode}`)
				done = true
			}
		})		
		if (!done) {
      let matches = l.match(/^\+(\w+)=(.*)/i)
      if (matches) {
      	if (!matches[2])
      		errs.push(`Error at line ${(ix+1)}: Missing modifier value at (+${matches[1]}=)`)
				debug(`  modifier: ${matches[1]} = ${matches[2]}`)
				const key = matches[1].toLowerCase()
				const value = matches[2]
				if (!modifiers[mode][key]) {
					errs.push(`Error at line ${(ix+1)}: Invalid modifier [${l}] for mode [${mode}]`)
				}
				done = true
      }
		}
	})
	debug(errs)
})

