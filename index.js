var natural = require('natural')
var wordnet = new natural.WordNet()

var word = 'world'

wordnet.lookup(word, result => {
  result.forEach(res => {
    console.log('-----------------')
    console.log(res.synsetOffset)
    console.log(res.pos)
    console.log(res.synonyms)
    console.log(res.gloss)
  })
})
