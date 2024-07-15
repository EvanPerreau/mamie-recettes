import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'

export default class InvalidPasswordException extends Exception {
  static status = 403

  constructor() {
    super()
  }

  async handle(error: this, ctx: HttpContext) {
    ctx.response.status(error.status).send('Invalid password')
  }
}
