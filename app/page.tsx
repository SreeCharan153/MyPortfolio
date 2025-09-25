import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

// Lazy-load non-critical sections for better performance
const About = dynamic(() => import("@/components/about"));
const Projects = dynamic(() => import("@/components/projects"));
const Skills = dynamic(() => import("@/components/skills"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Sri Charan Machabhakthuni - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Sri Charan Machabhakthuni, a Computer Science student and developer. Explore projects, skills, and contact information."
        />
        <meta name="keywords" content="Sri Charan Machabhakthuni, portfolio, developer, projects, skills, contact" />
        <meta name="author" content="Sri Charan Machabhakthuni" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Sri Charan Machabhakthuni - Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Sri Charan Machabhakthuni, featuring projects, skills, and contact information."
        />
        <meta name="google-site-verification" content="WfIZz18GHMJ7YCVbbNtXrM0QOcOR5bz7B1VX54U3-68" />
        <meta property="og:url" content="https://sri-charan-machabhakthuni.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/portfolio-banner.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sri Charan Machabhakthuni - Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Sri Charan Machabhakthuni, featuring projects, skills, and contact information."
        />
        <meta name="twitter:image" content="/portfolio-banner.png" />
      </Head>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills/>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
