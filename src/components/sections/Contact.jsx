import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const ContactInfo = ({ icon: Icon, title, value, link, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
  >
    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
      {link ? (
        <a
          href={link}
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 flex items-center space-x-1"
        >
          <span>{value}</span>
          {link.startsWith('http') && <ExternalLink className="w-4 h-4" />}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">{value}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: personalInfo.linkedin
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available for remote work',
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's start a conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out to me through any of the following methods. 
                I typically respond within 24 hours.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <ContactInfo
                  key={method.title}
                  icon={method.icon}
                  title={method.title}
                  value={method.value}
                  link={method.link}
                  index={index}
                />
              ))}
            </div>

            {/* Additional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Ready to work together?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                I'm available for freelance projects, full-time opportunities, and collaborations.
              </p>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm inline-flex items-center space-x-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary py-4 text-lg font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
