import userRouter from "./users.js"
import recordsRouter from "./records.js"
import webhooksRouter from "./webhooks.js"
import stripeRouter from "./stripe.js"
import { safeRouter } from "../../utils/safeRouter.js"

const router = safeRouter()

// Routes
router.use("/users", userRouter)
router.use("/records", recordsRouter)
router.use("/webhooks", webhooksRouter)
router.use("/stripe", stripeRouter)

// Fallback
router.use((req, res, next) => {
  const error = new Error("Not Found")
  error.status = 404
  next(error)
})

export default router
