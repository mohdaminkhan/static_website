const {db} = require("./dbConnection")

const createUser  = username=>{

	return db("users").insert({username})


}

const addUserAge = (userid, userage)=>{

	return db("userage").insert({userid, userage})
}

module.exports = {
	createUser,
	addUserAge
}