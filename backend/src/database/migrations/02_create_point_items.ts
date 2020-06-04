import Knex from "knex";

export async function up(knex: Knex){
    //crate table
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');

        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
    });
}

export async function down(knex: Knex){
    //rollback if up method did somenthing wrong
    return knex.schema.dropTable('items')
}