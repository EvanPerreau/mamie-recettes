import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    password: vine.string(),
  })
)
