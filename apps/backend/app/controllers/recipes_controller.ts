// import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'

@inject()
export default class RecipesController {
  constructor(protected recipeService: RecipeService) {}
}
