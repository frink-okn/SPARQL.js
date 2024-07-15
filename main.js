// main.js
const sparqlModule = require('./sparql.js');


// SPARQL query string
// const sparqlQuery = `
//   PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>
// SELECT ?p ?c WHERE {
//     ?p a dbpedia-owl:Artist.
//     ?p dbpedia-owl:birthPlace ?c.
//     ?c <http://xmlns.com/foaf/0.1/name> "York"@en.
// }
// `;

const sparqlQuery = `PATHS START=?s End = ?e VIA=?p MAXLENGTH=9 Limit 5`
//const sparqlQuery = `SELECT*  WHERE{ ?s ?p ?o}`
/*const query = `PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX card: <http://www.w3.org/People/Berners-Lee/card#>
SELECT ?homepage
FROM <http://www.w3.org/People/Berners-Lee/card>
WHERE {
    card:i foaf:knows ?known .
    ?known foaf:homepage ?homepage .
}`*/
console.log(sparqlQuery)

parser = sparqlModule.Parser()

// Parse the SPARQL query
try {
  const parsedQuery = parser.parse(sparqlQuery);
  console.log('Parsed Query:', JSON.stringify(parsedQuery, null, 2));
} catch (error) {
  console.error('Error parsing SPARQL query:', error);
}
