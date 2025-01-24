"use client";
import React, {useState } from "react";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Review from "./Review";
import ReviewXL from "./ReviewXL";
import { reviewData } from "@/constants";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Handle opening and closing of the modal
  const handleModalToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  // Handle form submission for modal
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address.");
      return;
    }

    // Placeholder for sending the message (e.g., API call to send email)
    console.log("Form data:", { name, email, message });

    // Close modal after successful submission
    setIsModalOpen(false);
    // Clear input fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="border-t border-t-hoverColor bg-bodyColor text-white/80">
      <Container className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start order-last">
          <h2 className="text-xl md:text-3xl mb-2 text-white">
            I&apos;m Available for freelance opportunities!
          </h2>
          <p className="w-auto md:max-w-[500px] text-white/70 font-thin leading-5">
            Have an exciting project you need help with?
          </p>

          <div className="flex flex-row gap-10">
            <Input
              placeholder="Tell me all about it"
              className="border-0 border-l-0 border-b-2 rounded-none hover:border-lightSky w-full md:w-[400px] mt-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className="mt-3 bg-lightSky text-bodyColor hover:bg-lightSky/80"
              onClick={handleModalToggle}
            >
              <Send />
            </Button>
          </div>

          <SocialLinks />
        </div>

        {/* Reviews */}
        <div className="justify-center grid grid-cols-1 md:grid-cols-2 mb-1 gap-1  md:order-last">
          <div className="border border-lightSky rounded-md">
            <ReviewXL reviewData={reviewData[1]} />
          </div>
          <div className="h-full justify-between gap-1">
            <div className="border border-lightSky mb-1 rounded-md h-2/4">
              <Review reviewData={reviewData[0]} />
            </div>
            <div className="border border-lightSky rounded-md h-2/4">
              <Review reviewData={reviewData[2]} />
            </div>
          </div>
        </div>
      </Container>

      {/* Modal for user input */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50">
          <div className="bg-bodyColor p-6 rounded-md w-96">
            <h3 className="text-lg text-white mb-4">Let&apos;s Chat!</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  placeholder="Your Name"
                  className="border-0 border-l-0 border-b-2 rounded-none hover:border-lightSky w-full"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Input
                  placeholder="Your Email"
                  className="border-0 border-l-0 border-b-2 rounded-none hover:border-lightSky w-full"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Input
                  placeholder="Your Message"
                  className="border-0 border-l-0 border-b-2 rounded-none hover:border-lightSky w-full"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <Button
                  className="bg-lightSky text-bodyColor hover:bg-lightSky/80"
                  type="submit"
                >
                  Send Message
                </Button>
                <Button
                  className="bg-red-500 text-white hover:bg-red-600"
                  type="button"
                  onClick={handleModalToggle}
                >
                  Close
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
