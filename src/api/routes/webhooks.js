import { Router } from "express"

const router = Router()

// Sync route
router.post("/stripe", async (req, res, next) => {
  console.log("matt in here", req.body)
})

// router.post("/stripe", handleStripeWebhooks)

export default router
