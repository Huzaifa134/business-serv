import {
  loadStripe,
  Stripe,
  RedirectToCheckoutOptions,
} from "@stripe/stripe-js";
import React from "react";

// Define the correct type for lineItems
interface CheckoutProps {
  lineItems: {
    // Specify the actual properties of each line item, e.g.:
    price: string;
    quantity: number;
  }[];
}

export async function checkout({ lineItems }: CheckoutProps): Promise<void> {
  let stripePromise: Promise<Stripe | null> | null = null;

  const getStripe = (): Promise<Stripe | null> => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY || "");
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  if (!stripe) {
    throw new Error("Failed to initialize Stripe");
  }

  const options: RedirectToCheckoutOptions = {
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  };

  await stripe.redirectToCheckout(options);
}
