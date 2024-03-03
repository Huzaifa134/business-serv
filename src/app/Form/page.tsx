"use client";
import { DatePickerWithRange } from "@/components/datapicker";
import supabase from "@/config/supabaseClient";
import { useState } from "react";
export default function Example() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Number, setnumber] = useState("");
  const [Business_Name, setBusiness_Name] = useState("");
  const [Email, setEmail] = useState("");
  const [Details, setComment] = useState("");
  const [Service, setService] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !Fname ||
      !Lname ||
      !Number ||
      !Business_Name ||
      !Email ||
      !Details ||
      !Service
    ) {
      setError("Please fill all the fields");
      setSuccess("");
      return;
    }

    try {
      const { data, error } = await supabase.from("Consultation").insert([
        {
          Fname,
          Lname,
          Number,
          Business_Name,
          Email,
          Details,
          Service,
          Date,
          Time,
        },
      ]);

      if (error) {
        throw new Error(error.message);
      }

      setSuccess("Thank you for your response");
      setError("");
      setFname("");
      setLname("");
      setnumber("");
      setBusiness_Name("");
      setEmail("");
      setComment("");
      setService("");
      setDate("");
      setTime("");
    } catch (error) {
      setError((error as Error).message || "An error occurred");
    }
  };

  return (
    <>
      <div className="max-[640px]:rounded-none flex lg:w-[700px] md:w-[500px]  sm:w-[300px] my-59 mx-auto bg-slate-50 min-h-full sm:mx-[11]flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-xl mt-11 mb-11 sm:mx-[11]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Consultation Form
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <div className="flex flex-column content-center gap-x-5 flex-wrap">
              <label
                htmlFor="firstN"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="firstN"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  value={Fname}
                  onChange={(e) => setFname(e.target.value)}
                  className="block lg:w-[400px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            <div className="flex content-center gap-x-5 flex-wrap">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  value={Lname}
                  onChange={(e) => setLname(e.target.value)}
                  className="block lg:w-[400px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            <div className="flex content-center gap-x-12 flex-wrap">
              <label
                htmlFor="Num"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Number <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="Num"
                  name="text"
                  type="number"
                  autoComplete="text"
                  required
                  value={Number}
                  onChange={(e) => setnumber(e.target.value)}
                  className="block lg:w-[400px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading- px-3"
                />
              </div>
            </div>
            <div className="flex content-center gap-x-1 flex-wrap">
              <label
                htmlFor="BussN"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Business Name <span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="BussN"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  value={Business_Name}
                  onChange={(e) => setBusiness_Name(e.target.value)}
                  className="block lg:w-[400px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading- px-3"
                />
              </div>
            </div>

            <div className="flex content-center gap-x-5 flex-wrap">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address<span className="text-red-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full lg:w-[400px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div className="flex  gap-x-5 flex-wrap ">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="textarea"
                  className="block text-sm font-medium leading-6 text-gray-900 lg:mt-[-100px] px-3"
                >
                  Comment <span className="text-red-600">*</span>
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  name="textarea"
                  id="textarea"
                  cols={30}
                  rows={5}
                  required
                  value={Details}
                  onChange={(e) => setComment(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div className="mt-10 flex flex-wrap">
                <label
                  htmlFor="drop"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  Select the service<span className="text-red-600">*</span>
                </label>
                <select
                  name="dropdown"
                  id="drop"
                  required
                  value={Service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-40 border-2 rounded lg:ml-5 border-teal-500 focus:border-teal-500 active:border-teal-500"
                >
                  <option value="Accounting">Accounting</option>
                  <option value="Tax & Audit">Tax & Audit</option>
                  <option value="Financial Analysis">Financial Analysis</option>
                  <option value="Managenment Information System">
                    Management Information System
                  </option>
                  <option value="Financial Analysis">Financial Analysis</option>
                  <option value="BookKeeping /QuickBooks">
                    Bookkeeping/QuickBooks
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="Date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Schedule a Consultancy Meeting
              </label>
              <p className="font-thin py-2">
                {" "}
                A one time consulation fee is 50 USD , this is 30 minutes not
                refundable which will be returned back to you once you sign a
                contract with us , with one or more of our services
              </p>
              {/* <DatePickerWithRange
               value={Date}
              onChange={(e) => setDate(e.target.value)}
              /> */}
              <input
                type="date"
                name="date"
                id="time"
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                name="time"
                id="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-[100px] justify-center rounded-md px-3 py-1.5 text-sm font-semibold bg-[#22D6FD] leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
          </form>
          {error && <div className="text-red-600 text-center">{error}</div>}
          {success && (
            <div className="text-green-600 text-center">{success}</div>
          )}
        </div>
      </div>
    </>
  );
}
