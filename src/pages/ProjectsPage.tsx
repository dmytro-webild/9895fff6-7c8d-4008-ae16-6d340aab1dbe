import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <main className="flex-grow">
        <HeroBillboard
          tag="Portfolio"
          title="Our Featured Projects"
          description="Explore our catalogue of successful digital transformations, innovative designs, and robust engineering solutions."
          primaryButton={{ text: "Start a Project", href: "/contact" }}
          secondaryButton={{ text: "Browse Catalogue", href: "#catalogue" }}
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
        />

        <div id="catalogue">
          <FeaturesMediaCards
            tag="Catalogue"
            title="Recent Deliveries"
            description="A curated selection of our finest work across various industries and technologies."
            items={[
              {
                title: "E-Commerce Platform Redesign",
                description: "A complete overhaul of a major retail platform, resulting in a 40% increase in conversion rates.",
                imageSrc: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop"
              },
              {
                title: "Fintech Mobile Application",
                description: "A secure and intuitive mobile banking app serving over 1 million active users daily.",
                imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
              },
              {
                title: "Healthcare Dashboard",
                description: "An analytics dashboard for healthcare providers to monitor patient outcomes in real-time.",
                imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop"
              },
              {
                title: "SaaS Marketing Website",
                description: "A high-performance marketing site built with modern web technologies to drive lead generation.",
                imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              }
            ]}
          />
        </div>

        <ContactCta
          tag="Next Steps"
          text="Ready to build something amazing together?"
          primaryButton={{ text: "Contact Us", href: "/contact" }}
          secondaryButton={{ text: "View Services", href: "/services" }}
        />
      </main>

      <FooterSimple
        brand="Webild"
        copyright="© 2024 Webild. All rights reserved."
        columns={[
          {
            title: "Company",
            items: [
              { label: "About", href: "/about" },
              { label: "Careers", href: "/careers" }
            ]
          },
          {
            title: "Services",
            items: [
              { label: "Design", href: "/services/design" },
              { label: "Engineering", href: "/services/engineering" }
            ]
          }
        ]}
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}