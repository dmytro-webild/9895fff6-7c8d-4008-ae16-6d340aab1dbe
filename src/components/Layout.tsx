import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Image, Instagram, Linkedin } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",    "href": "#about"
  },
  {
    "name": "Projects",    "href": "#projects"
  },
  {
    "name": "Contact",    "href": "#contact"
  },
  {
    "name": "Hero",    "href": "#hero"
  },
  {
    "name": "Features",    "href": "#features"
  },
  {
    "name": "Metrics",    "href": "#metrics"
  },
  {
    "name": "Testimonials",    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Studio Madrid"
      logoImageSrc="https://storage.googleapis.com/webild/default/no-image.jpg?id=37zs7n"
      ctaButton={{
        text: "Book Consultation",        href: "#contact"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Studio Madrid Interior Design"
      copyright="© 2024 Studio Madrid. All rights reserved."
      socialLinks={[
        {
          icon: "Instagram",          href: "#"},
        {
          icon: "Linkedin",          href: "#"},
        {
          icon: "Image",          href: "#"},
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
