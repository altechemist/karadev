"use client";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React from "react";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset any previous messages
    setError(null);
    setSuccess(false);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address");
      return;
    }

    try {
      setLoading(true);
      
      // Send email
      if (!process.env.NEXT_PUBLIC_EMAIL_ENDPOINT) {
        throw new Error("Email endpoint is not defined");
      }

      const response = await axios.post(
        process.env.NEXT_PUBLIC_EMAIL_ENDPOINT,
        formData
      );

      if (response.status === 200) {
        setSuccess(true);
        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="bg-bodyColor text-white/80 px-4 py-20 md:px-20 min-h-screen content-center">
        <div>
          <h1 className="text-3xl text-center md:text-5xl font-bold text-lightSky">
            Get in Touch
          </h1>
          <h4 className="text-center text-white/70 text-lg md:text-xl mt-2">
            I’m always open to new projects, collaborations, or opportunities to
            connect. Whether you have a question or just want to say hi, my
            inbox is always open.
          </h4>
          
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mt-3">
              Message sent successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <Input
                placeholder="Your Name"
                className="border-0 border-l-0 border-b-2 rounded-none hover:border-lightSky"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Your Email"
                className="border-0 border-l-0 border-b-2 rounded-none hover:border-lightSky"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <Input
              placeholder="Your Message"
              className="border-0 border-l-0 border-b-2 rounded-none hover:border-lightSky w-full mt-5"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              className="mt-3 bg-lightSky text-bodyColor hover:bg-lightSky/80 w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
