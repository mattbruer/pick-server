import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function createCheckoutSession(req, res) {
  const { priceId, customerEmail } = req.body

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription", // or 'payment' for one-time
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      success_url: "http://localhost:5173/",
      cancel_url: "http://localhost:5173/",
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}
