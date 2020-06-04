import Knex from "knex";

export async function up(knex: Knex){
    //crate table
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //only two characters
    })
}

export async function down(knex: Knex){
    //rollback if up method did somenthing wrong
    return knex.schema.dropTable('points')
}