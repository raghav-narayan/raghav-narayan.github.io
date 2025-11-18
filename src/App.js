import React from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import SideNav from "./components/SideNav";
import IntroSection from "./components/IntroSection";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <SideNav />
      <main> {/* Padding to offset fixed navbar */} 
        <HeroSection />
        <SectionDivider />
        <IntroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <TestimonialsSection />
        <CertificationsSection />
        <ContactSection />
        {/* <ScrollToTopButton /> */}
      </main>
    </>
  );
}
