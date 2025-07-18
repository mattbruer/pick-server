// src/stripe/client.js
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16", // use the latest version you're targeting
})

export default stripe
