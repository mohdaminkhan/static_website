//first file

import assert from 'assert'

function add(a,b){

	return a+b
}


assert.equal(add(4,3), 7)

console.log(assert.equal(add(3,4),7) || "not defined")

