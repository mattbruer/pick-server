import { safeRouter } from "../../utils/safeRouter.js"
import { createCheckoutSession } from "../services/stripeService.js"
const router = safeRouter()

// Sync route
router.post("/create-checkout-session", createCheckoutSession)

export default router
