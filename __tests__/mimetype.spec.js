const {extractMimeType} =  require('../src/index.js')
const assert = require('assert').strict;
test("check if we can pick up an image type", ()=>{

	let answer = extractMimeType('http://somedomain/somepath/soneresource.jpg')


	assert.deepEqual(answer,'image/jpg')

}
)



test("check if defualt to html", ()=>{

	let answer = extractMimeType('https://somedomain/somepathe/somepage')

	assert.deepEqual(answer, 'text/html')

}
)


