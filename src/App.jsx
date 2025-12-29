import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import RuemuProfile from "./assets/ruemu.png";
import JetProfile from "./assets/jetcars.jpeg";
import RiderProfile from "./assets/rider.png";
import Jetswapprofile from "./assets/jetswapprofile.png";
import Franiferprofile from "./assets/franiferprofile.jpeg";
import Easymartprofile from "./assets/easymartprofile.png";
import SofiaProfile from "./assets/sofiaprofile.png";
import Jetwave from "./assets/jetwave.png";
import Pebble from "./assets/pebble.png";
import Eris from "./assets/eris.png";
import Carevita from "./assets/carevita.png";
import Iruemu from "./assets/iruemu.png";
import Orxy from "./assets/oryx.png";
import Maxim from "./assets/maxim.png"
import Jetlite from "./assets/jetlite.jpeg"
const heroSlides = [
  "I build systems that move people, money, and products.",
  "Fullstack & Mobile Engineer crafting real-world platforms.",
  "Designing calm, scalable, invisible technology since 2015.",
];

const projects = [
  { category: "React Native", title: "Jet – Passenger App", link: "https://apps.apple.com/app/jet-by-jetwave/id6744865299", image: JetProfile },
  { category: "React Native", title: "Rider – Driver App", link: "https://apps.apple.com/us/app/rider-by-jetwave/id6745846214", image: RiderProfile },
  { category: "React Native", title: "Jet Swap", link: "https://apps.apple.com/us/app/jet-swap/id6754054826", image: Jetswapprofile },
  { category: "React Native", title: "Jetlite", link: "#", image: Jetlite },
  { category: "React Native", title: "Franifer", link: "#", image: Franiferprofile },
  { category: "React", title: "EasyMart", link: "https://easy-mart-8jt5.vercel.app", image: Easymartprofile },
  { category: "React", title: "Sofia Jofiel", link: "https://sofia-8qwh.vercel.app", image: SofiaProfile },
  { category: "React", title: "Maxim Console CRM", link: "https://maxim-1b23.vercel.app/", image: Maxim },
  { category: "WordPress", title: "Jetwave Innovation", link: "https://jetwaveinnovation.com", image: Jetwave },
  { category: "WordPress", title: "Pebble Travel", link: "https://pebbletravel.co.ke/tours/", image: Pebble },
  { category: "WordPress", title: "Eris Industries", link: "https://erisindustries.co.ke", image: Eris },
  { category: "WordPress", title: "CareVita", link: "https://carevita.net/store/", image: Carevita },
  { category: "Wordpress", title: "Oryx Industries", link: "https://oryxindustries.net/", image: Orxy },
  { category: "Educational", title: "iRuemu Coding Blog", link: "https://iruemu.hashnode.dev/", image: Iruemu },
];

function App() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 🖋️ Pen-style typing animation
  useEffect(() => {
    const fullText = heroSlides[index];
    const speed = isDeleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % heroSlides.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* ================= MARQUEE ================= */}
      <div className="relative overflow-hidden border-y border-white/10 py-4">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap text-2xl md:text-4xl font-bold uppercase tracking-widest text-white/60"
        >
          <span className="mx-16">
            Fullstack · Mobile · React · React Native · Node · PHP · WordPress
          </span>
          <span className="mx-16">
            Fullstack · Mobile · React · React Native · Node · PHP · WordPress
          </span>
        </motion.div>
      </div>

      {/* ================= HERO ================= */}
     <section className="min-h-screen grid md:grid-cols-2 gap-12 px-6 md:px-20 py-32 items-center relative">
  {/* LEFT */}
  <div className="relative z-20 max-w-[720px]">
    <h1 className="text-[11vw] md:text-[5.8vw] leading-[0.95] font-extrabold tracking-tight">
      OGUNUYO
      <br />
      OGHENERUEMU
      <br />
      BROWN
    </h1>

    {/* 🖋️ Typed Text */}
    <div className="mt-10 h-16 flex items-center">
      <p className="text-xl md:text-2xl text-gray-400 font-mono">
        {displayText}
        <span className="inline-block w-[2px] h-6 bg-white ml-1 animate-pulse" />
      </p>
    </div>

    <p className="mt-10 text-gray-500 max-w-xl">
      Coding since 2015. I’ve built ride-hailing platforms, fintech
      products, crypto systems, e-commerce, and enterprise websites —
      from idea to scale.
    </p>
  </div>

  {/* RIGHT – IMAGE */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative z-10 max-w-[520px] justify-self-end"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black z-10 rounded-3xl" />
    <img
      src={RuemuProfile}
      alt="Ruemu Brown"
      className="rounded-3xl w-full object-cover grayscale hover:grayscale-0 transition duration-700"
    />
  </motion.div>
</section>


      {/* ================= WORK ================= */}
    <section className="px-6 md:px-20 py-40">
  <h2 className="text-6xl md:text-8xl font-extrabold mb-24">
    Selected Work
  </h2>

  <div className="grid md:grid-cols-2 gap-24">
    {projects.map((p, i) => (
      <motion.a
        key={i}
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.05 }}
        className="group block"
      >
        {/* IMAGE */}
        <div className="relative w-full max-w-[520px] h-[320px] overflow-hidden rounded-2xl bg-black">
          <motion.img
            src={p.image}
            alt={p.title}
            initial={{ scale: 1.03 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              w-full h-full
              object-contain
            "
          />
        </div>

        {/* TEXT */}
        <div className="mt-6 border-b border-white/10 pb-8">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {p.category}
          </p>
          <h3 className="mt-3 text-3xl md:text-4xl font-semibold">
            {p.title} ↗
          </h3>
        </div>
      </motion.a>
    ))}
  </div>
</section>



      {/* ================= STATEMENT ================= */}


<section className="relative px-6 md:px-20 py-40 bg-black overflow-hidden">
  {/* subtle background accent */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-5xl"
  >
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-[clamp(2rem,4vw,3.75rem)] md:text-[clamp(3rem,5vw,4.5rem)]
                 font-light leading-[1.25] tracking-[-0.01em] text-white"
    >
      I help businesses turn ideas into{" "}
      <span className="text-white font-normal">
        reliable, scalable products
      </span>.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.45, duration: 0.8 }}
      className="mt-8 text-[clamp(1.25rem,2.2vw,1.75rem)]
                 leading-relaxed text-gray-400 max-w-4xl"
    >
      From architecture to execution, I design and build systems that grow with
      users, support revenue, and withstand real-world demand.
    </motion.p>
  </motion.div>
</section>


      {/* ================= FOOTER ================= */}
      <footer className="px-6 md:px-20 py-20 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Ruemu Brown
        </p>

        <div className="flex gap-6 text-gray-400">
          <a href="mailto:ruemuogunuyo@yahoo.com" className="hover:text-white">
            Email
          </a>
          <a href="https://github.com/ruemu23" className="hover:text-white">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ogheneruemu-o-8293b3161"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
