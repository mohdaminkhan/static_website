

function greetMe(greeting, time) {

	return new Promise(res=>{

		setTimeout(()=>res(greeting), time)
	})
}

module.exports = greetMe