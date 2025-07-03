import React, { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'your_service_id',
        'your_template_id',
        formRef.current,
        'your_public_key'
      )
      .then(
        () => {
          setMessageSent(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
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
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border focus:outline-none text-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border focus:outline-none mt-4 text-black"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-md border focus:outline-none mt-4 text-black"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
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
