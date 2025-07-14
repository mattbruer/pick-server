import { GenericRecord } from "../../db/index.js"
import { handleSync } from "../controllers/recordController.js"
import { safeRouter } from "../../utils/safeRouter.js"
const router = safeRouter()

// Sync route
router.post("/sync", handleSync)

// Create record route
router.post("/", async (req, res) => {
  console.log("yes sir")
  try {
    const record = new GenericRecord(req.body)
    await record.save()
    res.status(201).json({ success: true, record })
  } catch (error) {
    console.error("Error saving record:", error)
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
