import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplitMediaGrid from "@/components/sections/hero/HeroSplitMediaGrid";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FeaturesMediaCarousel from "@/components/sections/features/FeaturesMediaCarousel";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function BarrioDeSalamancaPenthousePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Studio"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Inquire Now", href: "/contact" }}
      />

      <main className="flex-grow">
        <HeroSplitMediaGrid
          tag="Featured Project"
          title="Barrio de Salamanca Penthouse"
          description="A masterclass in modern elegance located in the heart of Madrid's most exclusive neighborhood. This complete renovation blends classic architectural details with contemporary luxury."
          primaryButton={{ text: "View Gallery", href: "#gallery" }}
          secondaryButton={{ text: "Project Details", href: "#details" }}
          items={[
            { imageSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
            { imageSrc: "https://images.unsplash.com/photo-1600607687931-cecebd808ce3?auto=format&fit=crop&w=800&q=80" },
            { imageSrc: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80" },
            { imageSrc: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" }
          ]}
        />

        <div id="details">
          <AboutFeaturesSplit
            tag="Design Philosophy"
            title="Elevating Urban Living"
            description="Every detail of this penthouse was meticulously crafted to maximize natural light and create a seamless flow between indoor and outdoor spaces, respecting the building's heritage while introducing modern comforts."
            imageSrc="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
            items={[
              { icon: "✨", title: "Custom Millwork", description: "Bespoke oak paneling and integrated storage solutions throughout the residence." },
              { icon: "🌇", title: "Panoramic Terrace", description: "A 150sqm wrap-around terrace offering unobstructed views of the Madrid skyline." },
              { icon: "🎛️", title: "Smart Integration", description: "State-of-the-art climate, lighting, and audio control systems hidden from view." }
            ]}
          />
        </div>

        <div id="gallery">
          <FeaturesMediaCarousel
            tag="Spaces"
            title="Explore the Residence"
            description="Take a closer look at the distinct areas that make up this extraordinary home."
            items={[
              { title: "The Grand Salon", description: "Featuring restored original moldings and a custom marble fireplace.", buttonIcon: "→", imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
              { title: "Master Suite", description: "A private sanctuary with dual walk-in closets and a spa-inspired en-suite.", buttonIcon: "→", imageSrc: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80" },
              { title: "Chef's Kitchen", description: "Minimalist design hiding professional-grade appliances behind custom cabinetry.", buttonIcon: "→", imageSrc: "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?auto=format&fit=crop&w=800&q=80" }
            ]}
          />
        </div>

        <ContactCta
          tag="Start Your Project"
          text="Ready to transform your space into something extraordinary?"
          primaryButton={{ text: "Book a Consultation", href: "/contact" }}
          secondaryButton={{ text: "Back to Portfolio", href: "/projects" }}
        />
      </main>

      <FooterMinimal
        brand="Studio"
        copyright="© 2024 Studio. All rights reserved."
      />
    </div>
  );
}