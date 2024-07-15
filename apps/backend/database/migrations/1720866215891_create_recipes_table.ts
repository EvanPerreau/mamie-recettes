import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recipes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name', 255).notNullable()
      table.text('description')
      table.specificType('ingredients', 'varchar[]')
      table.specificType('steps', 'varchar[]')
      table.string('image', 255).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
