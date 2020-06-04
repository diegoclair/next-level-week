import Knex from "knex";

export async function up(knex: Knex){
    //crate table
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex){
    //rollback if up method did somenthing wrong
    return knex.schema.dropTable('items')
}