import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

// Lazy-load non-critical sections to improve performance
const About = dynamic(() => import("@/components/about"));
const BuildProcess = dynamic(() => import("@/components/BuildProcess"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Projects = dynamic(() => import("@/components/projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Badges = dynamic(() => import("@/components/badges"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Sri Charan Machabhakthuni — Backend Developer</title>
        <meta
          name="description"
          content="FastAPI, PostgreSQL & secure backend development portfolio of Sri Charan Machabhakthuni."
        />
        <meta name="keywords" content="FastAPI, Backend Developer, Sri Charan, PostgreSQL, WebSockets" />
        <meta name="author" content="Sri Charan Machabhakthuni" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Sri Charan Machabhakthuni — Backend Developer" />
        <meta
          property="og:description"
          content="Explore backend projects, case studies and real-world systems built with FastAPI + PostgreSQL."
        />
        <meta property="og:url" content="https://sri-charan-machabhakthuni.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/portfolio-banner.svg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sri Charan — Backend Developer" />
        <meta
          name="twitter:description"
          content="Secure backend systems, real-time apps, authentication & scalable APIs."
        />
        <meta name="twitter:image" content="/portfolio-banner.svg" />

        {/* Google verification */}
        <meta name="google-site-verification" content="WfIZz18GHMJ7YCVbbNtXrM0QOcOR5bz7B1VX54U3-68" />
      </Head>

      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* ✅ Immediate sections (fast to load + recruiter's priority) */}
        <Navbar />
        <Hero />
        <About />
        <BuildProcess />
        <TechStack />

        {/* ✅ Heavier sections — deferred for performance */}
        <Projects />
        <Testimonials />

        {/* ✅ Small trust layer + final conversion */}
        <Badges />
        <Contact />

        <Footer />
      </main>
    </>
  );
}
