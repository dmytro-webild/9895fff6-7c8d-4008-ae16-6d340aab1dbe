import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import BlogMediaCards from "@/components/sections/blog/BlogMediaCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      
      <main>
        <HeroBillboard
          tag="Our Blog"
          title="Insights & Stories"
          description="Read the latest news, tutorials, and insights from our team of experts."
          primaryButton={{ text: "Read Latest", href: "#latest" }}
          secondaryButton={{ text: "View All", href: "#all" }}
        />

        <div id="latest">
          <BlogMediaCards
            tag="Latest Posts"
            title="Featured Articles"
            description="Explore our most popular and recent content."
            items={[
              {
                category: "Design",
                title: "The Future of UI",
                excerpt: "Exploring upcoming trends in user interface design and how they impact user experience.",
                authorName: "Jane Doe",
                authorImageSrc: "https://i.pravatar.cc/150?u=1",
                date: "Oct 12, 2023",
                imageSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
              },
              {
                category: "Development",
                title: "React Performance Tips",
                excerpt: "How to optimize your React applications for speed and efficiency in production.",
                authorName: "John Smith",
                authorImageSrc: "https://i.pravatar.cc/150?u=2",
                date: "Oct 10, 2023",
                imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
              },
              {
                category: "Business",
                title: "Scaling Your Startup",
                excerpt: "Key strategies for growing your tech business and managing a growing team.",
                authorName: "Alice Johnson",
                authorImageSrc: "https://i.pravatar.cc/150?u=3",
                date: "Oct 05, 2023",
                imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              }
            ]}
          />
        </div>

        <ContactCta
          tag="Newsletter"
          text="Never miss an update. Subscribe to our newsletter for weekly insights."
          primaryButton={{ text: "Subscribe Now", href: "/contact" }}
          secondaryButton={{ text: "Follow on Twitter", href: "#" }}
        />
      </main>

      <FooterSimple
        brand="Webild"
        columns={[
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ]}
        copyright="© 2024 Webild. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}