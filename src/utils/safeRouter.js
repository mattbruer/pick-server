import { Router } from "express"

export const safeRouter = () => {
  const router = Router()
  const methods = ["get", "post", "put", "delete", "patch"]

  for (const method of methods) {
    const original = router[method].bind(router)

    router[method] = (path, ...handlers) => {
      const wrapped = handlers.map((h) => {
        return async (req, res, next) => {
          try {
            await h(req, res, next)
          } catch (err) {
            next(err)
          }
        }
      })
      return original(path, ...wrapped)
    }
  }

  return router
}
