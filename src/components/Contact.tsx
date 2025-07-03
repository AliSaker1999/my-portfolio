import React, { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!formRef.current) {
      console.error("Form reference is null");
      return;
    }

    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      setError(true);
      return;
    }

    setError(false);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setMessageSent(true);
          formRef.current?.reset();

          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        },
        (error) => {
          console.error("Failed to send email:", error?.text || error);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">
          Let's connect! Feel free to reach out or drop a message below.
        </p>

        {/* Contact Icons */}
        <div className="flex justify-center gap-10 text-3xl mb-10">
          <a
            href="mailto:AliSaker1999@hotmail.com"
            className="hover:text-blue-400"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-saker-001a00242/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AliSaker1999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto space-y-4 text-left"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black placeholder-gray-500"
              rows={5}
            />
          </div>

          {error && <p className="text-red-500 text-sm">Please fill in all fields.</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-transform duration-200 hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {messageSent && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
