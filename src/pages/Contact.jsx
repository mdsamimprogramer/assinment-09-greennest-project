import React, { useState } from "react";
import { toast } from "react-toastify";
import { RiPhoneFill, RiMailFill, RiMapPinFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            toast.error("Please enter a valid email");
            return;
        }

        console.log(formData);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex justify-center items-center py-16 px-4">
            <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl p-8 md:p-12">
                <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Contact Us</h1>
                <p className="text-center text-gray-600 mb-8">
                    Have questions or suggestions? Send us a message and we’ll get back to you shortly.
                </p>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-gray-700">
                    <div className="flex items-center gap-2">
                        <RiPhoneFill className="text-green-800 text-xl" />
                        <span>+880 1743282144</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiMailFill className="text-green-800 text-xl" />
                        <span>support@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiMapPinFill className="text-green-800 text-xl" />
                        <span>Rangpur, Bangladesh</span>
                    </div>
                </div>

                {/* Form + Map */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={5}
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            disabled={!formData.name || !formData.email || !formData.message}
                            className="bg-green-800 text-white font-bold py-3 rounded-lg hover:bg-green-900 transition disabled:opacity-50"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Google Map */}
                    <div className="flex-1 w-full h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.399098581772!2d89.25020081542992!3d25.750711183625053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef2f9f58aaaf29%3A0x28d5f1e7f6e1a3d2!2sRangpur%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1701303935631!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex justify-center gap-6 mt-8 text-green-800 text-2xl">
                    <a href="https://www.facebook.com/md.samim.khan.22906" aria-label="Facebook"><RiFacebookFill /></a>
                    <a href="#" aria-label="Instagram"><RiInstagramFill /></a>
                    <a href="https://www.linkedin.com/in/samim01/" aria-label="LinkedIn"><RiLinkedinFill /></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
