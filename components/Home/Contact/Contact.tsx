"use client"
import React, { useState } from "react";
import { BiEnvelope, BiMap } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert("Message sent successfully");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed to send message");
    }

  };


  return (
    <div className="pt-16 pb-16">
      <div
        className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 
        items-center "
      >
        {/** Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see If I can help
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            React out too me today and let's discuss how I can help you achieve
            your goals
          </p>
          <div className="mt-7">
            <a href="mailto:mchitravansh@gmail.com" className="flex items-center space-x-3 mb-4 cursor-pointerpointer">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text">mchitravansh@gmail.com</p>
            </a>

            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text">India</p>
            </div>
          </div>
          {/**Social Icons */}

          <div className="flex items-center mt-8 space-x-3">
            {/* <div className ="w-14 h-14 bg-blue-950/60 rouded-full flex flex-col items-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
                        <FaFacebook className="text-white w-6 h-18" />
                        </div> */}

            <a href="https://www.linkedin.com/in/chitravansh-mohan-7b042b1bb"
              target="_blank"
              rel="noopener noreferrer" 
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
              <FaLinkedin className="text-white w-6 h-6 " />
            </a>

            <a href="https://github.com/Chitravansh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-slate-950 transition-all duration-300">
              <FaGithub className="text-white w-6 h-6" />
            </a>

            <a href="https://x.com/Chitravansh_Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-slate-950 transition-all duration-300">
              <FaXTwitter className="text-white w-6 h-6" />
            </a>

            <a href="https://substack.com/@chitravanshmohan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-300">
              <SiSubstack className="text-white w-6 h-6" />
            </a>
          </div>
        </div>

        {/**Form  */}
        <form
          onSubmit={handleSubmit}
          // data-aos="zoom-in"
          // data-aos-anchor-placement="top-center"
          // data-aos-delay="10"
          className=" md:p-10 px-4 py-3.5 bg-[#131332] rounded-lg ">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            required
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Mobile Number with Country Code"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <button type="submit"
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;

{
  /**
      
      const socials = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/your-linkedin-username",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/your-github-username",
    },
    {
      icon: <FaXTwitter />,
      link: "https://twitter.com/your-twitter-username",
    },
    {
      icon: <SiSubstack />,
      link: "https://your-substack-url",
    },
  ];
  
  
  <div className="flex items-center mt-8 space-x-3">
    {socials.map((item, index) => (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300"
      >
        <span className="text-white w-6 h-6 text-2xl">
          {item.icon}
        </span>
      </a>
    ))}
  </div>
  
      
      */
}
