import React from "react";

const ContactUs = () => {
  return (
    <div className="wrapper px-4 sm:px-6 my-20">
      <h3 className="font-Inter font-semibold text-[#000000]">Contact</h3>
      <h1 className="mt-3 bg-gradient-to-r from-[#4DC16F] to-[#003917] bg-clip-text text-transparent font-bold text-3xl">
        Let’s start new project
      </h1>
      <p className="mt-3 font-Inter leading-[24px] tracking-[.5px] text-justify">
        We're committed to providing you with the best possible support. Now
        that you have a better understanding of who we are, it's your turn to
        reach out and take the first step toward building a strong and
        successful business relationship. Our dedicated team is here to help you
        every step of the way.
      </p>

      <div className="mt-12 flex flex-col md:flex-row   justify-between gap-24">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div>
              <div className="relative w-max">
                <h1 className="font-Inter font-semibold text-[#000000]">
                  Address
                </h1>
                <div className="absolute w-full h-[1px] bg-[#000000] -top-4 left-0"></div>
              </div>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                House 220, Boatghat,
              </p>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                Khilkhet, Dhaka 1229
              </p>
            </div>
            <div>
              <div className="relative w-max">
                <h1 className="font-Inter font-semibold text-[#000000]">
                  Phone
                </h1>
                <div className="absolute w-full h-[1px] bg-[#000000] -top-4 left-0"></div>
              </div>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                +8801717171809
              </p>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                +8801717171809
              </p>
            </div>
            <div>
              <div className="relative w-max">
                <h1 className="font-Inter font-semibold text-[#000000]">
                  Email
                </h1>
                <div className="absolute w-full h-[1px] bg-[#000000] -top-4 left-0"></div>
              </div>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                +mail@archiaxisbd.com,
              </p>
              <p className="font-Inter leading-[24px] tracking-[.5px] ">
                +mail@archiaxisbd.com,
              </p>
            </div>
          </div>
          <div className="mt-14 flex flex-col md:flex-row justify-between">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-md w-full bg-[#F7FFEE] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded-md w-full bg-[#F7FFEE] focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone"
                  className="p-3 border border-gray-300 rounded-md w-full bg-[#F7FFEE] focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="p-3 border border-gray-300 rounded-md w-full bg-[#F7FFEE] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col md:col-span-2">
                <label
                  htmlFor="message"
                  className="font-Inter mb-1 font-semibold text-[#000000]"
                >
                  Your Message (optional)
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="p-3 border border-gray-300 rounded-md w-full h-32 resize-none bg-[#F7FFEE] focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className=" cursor-pointer px-7 py-3 rounded-full w-max bg-gradient-to-r from-[#003917] to-[#4DC16F]   text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-[45%] ">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.857066413867!2d90.42684567593547!3d23.789763187046946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73db80f4a61%3A0x3e51b86de0ff3fd1!2sKhilkhet%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1682345678901!5m2!1sen!2sbd"
        width="100%"
        height="80%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Khilkhet Location"
      ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;
