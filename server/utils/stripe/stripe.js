const stripe = new Stripe(process.env.STRIPE_KEY);

const gig = await Gig.findById(req.params.id);

const paymentIntent = await stripe.paymentIntents.create({
	description: 'Software development services',
	shipping: {
		name: 'Jenny Rosen',
		address: {
			line1: '510 Townsend St',
			postal_code: '98140',
			city: 'San Francisco',
			state: 'CA',
			country: 'US',
		},
	},
	amount: gig.price * 100,
	currency: "usd", description: 'Software development services',
	automatic_payment_methods: {
		enabled: true,
	},
});