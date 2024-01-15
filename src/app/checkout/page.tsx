import {
  loadStripe,
  Stripe,
  RedirectToCheckoutOptions,
} from "@stripe/stripe-js";
import React from "react";

interface CheckoutProps {
  lineItems: any[]; // Replace 'any[]' with the actual type of your lineItems
}

export default async function checkout({
  lineItems,
}: CheckoutProps): Promise<void> {
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
