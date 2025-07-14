import { User } from "../../db/index.js"
import { getAuth } from "firebase-admin/auth"
import { Router } from "express"

const router = Router()

router.get("/", async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
      res.status(401).json({ error: "No token provided" })
      return
    }

    const decoded = await getAuth().verifyIdToken(token)

    const dbUser = await User.findOne({ firebaseId: decoded?.uid })

    if (!dbUser) {
      const newUser = await new User({
        firebaseId: decoded?.uid,
        email: decoded?.email,
        name: decoded.email.split("@")[0],
      })

      await newUser.save()
      return res.json(newUser)
    }

    return res.json(dbUser)
  } catch (err) {
    console.error("Error occurred:", err)
    res.status(401).json({ error: "Invalid token" })
  }
})

export default router
