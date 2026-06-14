import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Award, CheckCircle, Shield, Sparkles, Star, Users } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/young-people-having-fun_23-2149832986.jpg",
        "http://img.b2bpic.net/free-photo/family-moving-using-boxes_1157-35479.jpg",
        "http://img.b2bpic.net/free-photo/beautiful-young-african-american-woman-smiling-cheerful-friendly-face-laughing-confident_839833-29956.jpg",
        "http://img.b2bpic.net/free-photo/male-real-estate-agent-doing-business-showing-house-potential-buying-couple_23-2150164714.jpg",
        "http://img.b2bpic.net/free-photo/colleagues-sharing-high-five-office_482257-119313.jpg",
      ]}
      avatarText="Trusted by 500+ families"
      title="Crafting Timeless Spaces in the Heart of Madrid"
      description="We blend Mediterranean warmth with contemporary luxury to transform your home into a sanctuary of elegance and comfort."
      primaryButton={{
        text: "View Projects",
        href: "#projects",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      names={[
        "Madrid",
        "Barcelona",
        "Seville",
        "Valencia",
        "Bilbao",
        "Malaga",
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-happy-healthy-young-woman-with-dark-curly-hair-lying-comfortable-sofa-terrace_197531-22796.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Our Philosophy"
      title="Design that Reflects Your Essence"
      description="With over two decades of experience in the Madrid architecture and design scene, we specialize in curating bespoke interiors that tell your personal story through textures, light, and form."
      items={[
        {
          icon: Sparkles,
          title: "Bespoke Curation",
          description: "Every element is hand-selected to match your vision.",
        },
        {
          icon: CheckCircle,
          title: "Precision Execution",
          description: "From planning to installation, we manage every detail.",
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "We partner only with the finest local craftsmen.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cropped-top-view-young-beautiful-female-architect-hands-doing-blueprints-with-ruler-pen-white-table-coworking-space-business-concept_176420-8525.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Our Expertise"
      title="Comprehensive Design Services"
      description="End-to-end solutions tailored to your unique lifestyle."
      features={[
        {
          title: "Residential Design",
          description: "Full-scale home transformations and renovations.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-kitchen-surface-pull-out-drawer-loft-style-interior-design-details_169016-72762.jpg",
        },
        {
          title: "Space Optimization",
          description: "Maximizing functionality for urban Madrid flats.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-using-home-technology_23-2149216655.jpg",
        },
        {
          title: "Eco-Conscious Selection",
          description: "Sustainable sourcing for modern homes.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-arrangement-modern-vases_23-2149646500.jpg",
        },
        {
          title: "Luxury Finishing",
          description: "Premium lighting, textures, and bespoke furniture.",
          imageSrc: "http://img.b2bpic.net/free-photo/lobby-living-room-hotel_1150-11124.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="projects" data-section="projects">
    <SectionErrorBoundary name="projects">
          <FeaturesImageBento
      tag="Featured Work"
      title="Selected Projects in Madrid"
      description="Discover our latest transformations across the city."
      items={[
        {
          title: "Luxury Flat",
          description: "Barrio de Salamanca renovation",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-reading-book-reading-club-library_23-2150293528.jpg",
        },
        {
          title: "Urban Oasis",
          description: "Modern terrace concept",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg",
        },
        {
          title: "Boutique Villa",
          description: "Contemporary architecture",
          imageSrc: "http://img.b2bpic.net/free-photo/young-coworkers-gathering-table-office_23-2147668778.jpg",
        },
        {
          title: "Townhouse Staging",
          description: "Modern living transformation",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-blurry-man-walking_23-2150378941.jpg",
        },
        {
          title: "Minimalist Loft",
          description: "Open plan urban living",
          imageSrc: "http://img.b2bpic.net/free-photo/ai-generated-house-design_23-2150666254.jpg",
        },
        {
          title: "Traditional Fusion",
          description: "Renovating history",
          imageSrc: "http://img.b2bpic.net/free-photo/bathroom-interior-background-white-spa-towels-wood_1258-111485.jpg",
        },
        {
          title: "Private Residence",
          description: "Custom luxury detail",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-furniture-shop-store-interior_74190-4976.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="By the Numbers"
      title="A Track Record of Excellence"
      description="Results that speak for themselves."
      metrics={[
        {
          icon: Award,
          title: "Completed Projects",
          value: "350+",
        },
        {
          icon: Star,
          title: "Satisfied Clients",
          value: "500+",
        },
        {
          icon: Users,
          title: "Design Experts",
          value: "25+",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Client Stories"
      title="What Homeowners Say"
      description="Our passion is building your dream."
      testimonials={[
        {
          name: "Elena R.",
          role: "Salamanca Resident",
          quote: "The design team turned my outdated flat into a modern masterpiece. Truly exceptional quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-couch_23-2148751504.jpg",
        },
        {
          name: "Carlos M.",
          role: "Villa Owner",
          quote: "They captured our vision perfectly. The attention to detail is unmatched in Madrid.",
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-young-couple-with-their-baby-sitting-cardboard-boxes-their-new-home_23-2148060078.jpg",
        },
        {
          name: "Sofia G.",
          role: "Art Collector",
          quote: "A seamless process from concept to completion. I couldn't be happier with the results.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-bathrobe-indoors_1153-8058.jpg",
        },
        {
          name: "Diego V.",
          role: "Architect",
          quote: "Their eye for texture and balance is superb. Highly recommended for any interior project.",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-woman-drawing-looking-camera_23-2147770011.jpg",
        },
        {
          name: "Isabel P.",
          role: "Business Owner",
          quote: "Simply wonderful to work with. They made the renovation process stress-free and exciting.",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-discussing-new-ideas_176420-1665.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Questions"
      title="Everything You Need to Know"
      description="Clear answers to start your design journey."
      categories={[
        {
          name: "Process",
          items: [
            {
              question: "How long does a renovation take?",
              answer: "Projects typically range from 2 to 6 months depending on scope.",
            },
            {
              question: "Do you offer consultations?",
              answer: "Yes, we provide initial site consultations to discuss your goals.",
            },
          ],
        },
        {
          name: "Services",
          items: [
            {
              question: "Do you design commercial spaces?",
              answer: "Our focus is primarily high-end residential interiors.",
            },
            {
              question: "Do you source furniture?",
              answer: "We manage sourcing, procurement, and installation as part of our service.",
            },
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to transform your home in Madrid? Let's discuss your vision over a private consultation."
      primaryButton={{
        text: "Contact Us",
        href: "mailto:hello@studiomadrid.es",
      }}
      secondaryButton={{
        text: "Book a Tour",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
