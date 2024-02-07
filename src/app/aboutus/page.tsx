"use client";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <ul>
        <li className="mx-20 ">
          <h1> About Us </h1>
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px] ">
            Explore Our Services:
          </h2>
          <p className="my-3">
            Visit our
            <Link href="/services">
              <span className="underline underline-offset-1 text-blue-600 mx-2">
                Services{" "}
              </span>
            </Link>
            page on our website to get an overview of the comprehensive services
            we offer.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px] ">
            Request a Service
          </h2>
          <p>
            {" "}
            If you are interested in any of our services, navigate to the
            <Link href="/Form">
              <span className="underline underline-offset-1 text-blue-600 mx-2">
                Contact Us{" "}
              </span>
            </Link>
            page through services page by clicking buy now button, and make a
            request by filling out the form provided. Provide detailed
            information about your requirements.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h1 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Schedule a Meeting:
          </h1>
          <p>
            If you wish to schedule a meeting for a more in-depth discussion or
            consultation, you can do so by scheduling a meeting in our contact
            us page form.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Meeting Consultancy Payment:
          </h2>
          <p>
            Please note that scheduling a meeting after deciding a specific day
            for your meeting you have to pay a 30 minute non refundable
            consultancy fee of 50 USD , once you have signed contract with us we
            will pay it back to you.
            {/* After selecting a specific date for your meeting, you will be
              prompted to pay a $75 USD meeting consultancy fee. This fee
              ensures a dedicated time slot for your consultation. */}
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Follow-Up Email:
          </h2>
          {/* <h2Follow-Up Email:></h2>** */}
          <p>
            Once the payment is processed, you will receive a follow-up email
            confirming your meeting date and providing details about the
            specific time slot allocated for your consultation.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Alternative Service Request
          </h2>
          <p>
            If you prefer not to pay the consultancy fee but still want to
            request our services, you can go to the
            <Link href="/Form">
              <span className="underline underline-offset-1 text-blue-600 mx-2">
                Contact Us{" "}
              </span>
            </Link>
            page. Fill out the service request form with your details, and we
            will send you a follow-up email after reviewing your request.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Provide Accurate Credentials
          </h2>
          <p>
            Ensure that you provide accurate and valid credentials, including
            your email address and phone number, to receive timely and accurate
            responses from our team.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Customized Service Plans:
          </h2>
          <p>
            Please note that our service plans are customized based on the size
            and type of business consultancy services you require. There are no
            fixed rates, and we tailor our plans to meet the unique needs of
            each business.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            QuickBooks/Bookkeeping
          </h2>
          <p>
            Upon purchasing our QuickBooks or bookkeeping services, we will
            provide you with access to these services through our website. Log
            in to your account to benefit from our tailored and efficient
            solutions.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Ongoing Support:
          </h2>
          <p>
            Throughout your journey with us, we are committed to providing
            continuous support and guidance. Our team is here to assist you with
            any queries or challenges you may encounter.
          </p>
        </li>

        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Secure Payment Process:
          </h2>
          <p>
            Rest assured that our payment processes are secure, ensuring the
            confidentiality and safety of your financial transactions.
          </p>
        </li>
        <li className="mx-20 my-10">
          <h2 className="font-bold md:text-xl max-[700px]:text-[20px] max-[700px]">
            Enjoy a Seamless Experience{" "}
          </h2>
          <p>
            You are using our services for a one-time consultation or an ongoing
            partnership, we aim to provide you with a seamless and efficient
            experience tailored to the specific needs of your business.
          </p>
        </li>
        <p className="mx-20 my-10">
          Thank you for choosing Pacific Financial Hub. We look forward to
          assisting you on your business journey!
        </p>
      </ul>
    </div>
  );
}
