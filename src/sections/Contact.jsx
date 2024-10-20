import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ajay Developer',
          from_email: form.email,
          to_email: 'ajaysingh16601@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container p-8 rounded-lg shadow-lg" style={{background: "rgb(14 14 16)"}}>
          <h3 className="head-text text-3xl font-bold">Let’s talk</h3>
          <p className="text-lg text-gray-300 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-5">
            <label className="space-y-2">
              <span className="field-label text-gray-300">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input border border-gray-600 p-3 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label text-gray-300">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input border border-gray-600 p-3 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label text-gray-300">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input border border-gray-600 p-3 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="field-btn bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-600"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="inline ml-2 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
