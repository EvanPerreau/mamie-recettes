import env from '#start/env'
import InvalidPasswordException from '#exceptions/invalid_password_exception'
import User from '#models/user'
import { AccessToken } from '@adonisjs/auth/access_tokens'

export default class SecurityService {
  async loginUserByPassword(password: string): Promise<AccessToken> {
    if (password !== env.get('PASSWORD')) {
      throw new InvalidPasswordException()
    }

    const superUser: User = await User.findByOrFail('id', 1)
    return await User.accessTokens.create(superUser, ['*'])
  }
}
