exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username");
  });
  await knex.schema.createTable("userage", (table) => {
    table.integer("userid").references("users.id");
    table.integer("userage");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("users");
  await knex.schema.dropTable("userage");
};
