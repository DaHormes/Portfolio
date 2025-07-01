"use client";

import React from 'react';

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";


export function ContactForm() {

  //Form handling
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Extract form data
    const formData = new FormData(event.target);
  
    try {
      // Send the form data to Netlify
      await fetch("forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
  
      // Show success message
      alert("Message sent. Thanks, I will be reaching out to you!");
  
      // Clear the form fields
      event.target.reset();
    } catch (error) {
      // Show error message
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="px-8 py-16 scroll-smooth" id="contact">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Let&apos;s Connect
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and I will personally reach out to you within 24
                hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <a
                  href="https://wa.me/2348133637808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-5 items-center hover:underline"
                >
                  <Typography variant="h6" color="white" className="mb-2">
                  +234 813 363 7808
                  </Typography>
                </a>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <a
                  href="mailto:gideon@dahormes.com"
                  className="flex my-2 gap-5 items-center hover:underline"
                >
                  <Typography variant="h6" color="white" className="mb-2">
                    gideon@dahormes.com
                  </Typography>
                </a>
                <Button
                  onClick={() => navigator.clipboard.writeText("gideon@dahormes.com")}
                  className="text-white hover:text-blue-400 transition"
                  title="Copy email address"
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4v6a2 2 0 01-2 2h-2m-4 0v4m0 0h4m-4 0H8" />
                  </svg>
                </Button>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleFormSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    id="first-name"
                    name="first-name"
                    required
                    placeholder="eg. Gideon"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    id="last-name"
                    name="last-name"
                    required
                    placeholder="eg. Mark"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  required
                  placeholder="eg. gideon@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Design"
                    defaultChecked
                  />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interest" label="Development" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interest" label="Support" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="interest" label="Other" />
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  placeholder="Kindly let me know about the project. Tell me as much details as Ok."
                  id="message"
                  name="message"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button type="submit" className="w-full md:w-fit" color="gray" size="md">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
