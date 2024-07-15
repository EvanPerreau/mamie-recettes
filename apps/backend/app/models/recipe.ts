import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Category from '#models/category'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Recipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare ingredients: string[]

  @column()
  declare steps: string[]

  @column()
  declare image: string

  @column()
  declare category_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Category, {
    localKey: 'id',
    foreignKey: 'category_id',
  })
  declare category: BelongsTo<typeof Category>
}
