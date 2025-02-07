import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-green-500">
            Get in Touch
          </h1>
          <p className="mt-4 text-muted-foreground">
          Have a question or need therapy? I'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <FaLocationCrosshairs className="h-8 w-8 text-green-500" />
            <h3 className="mt-6 text-lg font-medium tracking-tight text-green-500">
              {" "}
              Address
            </h3>
            <address className="mt-3 text-muted-foreground not-italic text-center">
              Vill: Joaria Thana: Tungipara
              <br />
              Dist: Gopalganj Div: Dhaka, Bangladesh
            </address>
          </div>
          <div className="flex flex-col items-center">
            <FiPhoneCall className="h-8 w-8 text-green-500" />
            <h3 className="mt-6 text-lg font-medium tracking-tight text-green-500">
              Phone
            </h3>
            <p className="mt-3 text-muted-foreground text-center">
              +88 01600219920
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineEmail className="h-8 w-8 text-green-500" />
            <h3 className="mt-6 text-lg font-medium tracking-tight text-green-500">
              Email
            </h3>
            <p className="mt-3 text-muted-foreground text-center">
              bosurubel@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
