// import type { HttpContext } from '@adonisjs/core/http'

import { inject } from '@adonisjs/core'
import SecurityService from '#services/security_service'
import { HttpContext } from '@adonisjs/core/http'
import LoginResponseDTO from '../dto/login_response_dto.js'
import { loginValidator } from '#validators/security'

@inject()
export default class AuthController {
  constructor(protected securityService: SecurityService) {}

  async login(ctx: HttpContext): Promise<LoginResponseDTO> {
    const { password } = await ctx.request.validateUsing(loginValidator)
    const token = await this.securityService.loginUserByPassword(password)
    return new LoginResponseDTO(token.value!.release())
  }
}
