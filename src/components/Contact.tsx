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
      className={`py-14 sm:py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let’s Build Something Great</h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I’m open to full-time full-stack roles where I can contribute across architecture, implementation, and deployment. If you’re hiring, I’d be glad to discuss how I can support your product goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 items-start">
          <div className={`rounded-2xl border p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">Direct Contact</h3>
            <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Fastest response: email. You can also review my professional profile and code activity through LinkedIn and GitHub.
            </p>

            <div className={`rounded-xl border p-4 mb-6 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
              <p className="text-sm font-semibold mb-2 text-blue-500">Best fit roles</p>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Full Stack Developer • Backend-Focused Full Stack • Product Engineering Teams
              </p>
            </div>

            <div className="flex gap-5 sm:gap-6 text-2xl sm:text-3xl">
              <a
                href="mailto:AliSaker1999@hotmail.com"
                className="hover:text-blue-400 transition-colors"
                title="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-saker-001a00242/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/AliSaker1999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={`rounded-2xl border p-5 sm:p-6 space-y-4 text-left ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
            }`}
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
                placeholder="Tell me about your project or role"
                required
                className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black placeholder-gray-500"
                rows={5}
              />
            </div>

            {error && <p className="text-red-500 text-sm">Please fill in all fields.</p>}

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-full sm:w-auto"
            >
              Send Message
            </button>

            {messageSent && (
              <p className="text-green-500 mt-2">Message sent successfully. I’ll reply as soon as possible.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
