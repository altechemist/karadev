"use client";
import { Container } from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Statistics from "@/components/Statistics";
import { useState } from "react";
import axios from "axios";

import image from "../../public/path.png";
import ServicesPage from "./services/page";
import WorkPage from "./work/page";
import ExperiencePage from "./experience/page";

export default function Home() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal visibility
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Handle form submission in the modal
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Send the email via API
      if (!process.env.NEXT_PUBLIC_EMAIL_ENDPOINT) {
        throw new Error("Email endpoint is not defined");
      }

      const response = await axios.post(process.env.NEXT_PUBLIC_EMAIL_ENDPOINT, {
        name,
        email,
        message
      });

      if (response.status === 200) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send email");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  return (
    <div className="bg-bodyColor text-white/80">
      {/* Hero Banner */}
      <Container className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen content-center">
        <div className="flex flex-col items-center min-h-full md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h2 className="text-xl md:text-3xl mb-2 text-white">
              Hello, World!
            </h2>
            <h1 className="text-lightSky text-3xl md:text-5xl font-bold mb-2">
              I&apos;m Karabelo
            </h1>
          </div>
          <p className="w-auto md:max-w-[500px] text-white/70 font-thin leading-5">
            As a software engineer, I specialize in creating innovative and
            user-centered solutions. With a solid background in computer science
            and hands-on experience in full-stack web and mobile app
            development, I’m passionate about building software that makes a
            positive impact.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="flex flex-col items-center md:items-start gap-3">
            <Input
              placeholder="How can I help you bring your ideas to life?"
              className="border-0 border-l-0 border-b-2 rounded-none hover:border-lightSky w-full md:w-[400px] mt-2"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="button" className="mt-3 bg-lightSky text-bodyColor hover:bg-lightSky/80 w-full md:w-[400px]" onClick={() => setIsModalOpen(true)}>
              Let&apos;s Chat
            </Button>
          </form>
          <SocialLinks />
          <div className="mt-4">
            <Statistics />
          </div>
        </div>

        <div className="flex justify-center items-baseline">
          <div className="relative w-[450px] h-[450px] rounded-xl overflow-hidden">
            <Image
              src={image}
              alt="John Doe"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </Container>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-bodyColor p-6 rounded-lg w-96">
            <h3 className="text-center text-xl font-semibold mb-4">Let&apos;s Chat!</h3>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">Message sent successfully!</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  placeholder="Your Name"
                  className="w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  placeholder="Your Email"
                  className="w-full"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <Input
                  placeholder="Your Message"
                  className="w-full"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  hidden
                />
              </div>
              <div className="flex justify-center">
                <Button
                  className="bg-lightSky text-bodyColor hover:bg-lightSky/80 w-full"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 text-white  w-full hover:bg-red-600-full text-center"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Services */}
      <ServicesPage />

      {/* Projects */}
      <WorkPage />

      {/* Experience */}
      <ExperiencePage />

      {/* Contact */}
      <div className="py-20"></div>
    </div>
  );
}
