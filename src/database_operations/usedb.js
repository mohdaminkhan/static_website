const { createUser, addUserAge } = require("../../users");

const { db, closeConnection } = require("../../dbConnection");

async function dbOperation() {
  await db("users").truncate();
  await createUser("Amin");
  await addUserAge(1, 58);
  let result = await db.select("*").from("users");

  let result2 = await db.select("*").from("userage");

  console.log(result, result2);

  closeConnection();
}

dbOperation();
