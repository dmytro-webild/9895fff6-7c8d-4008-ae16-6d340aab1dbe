import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { ArrowUpRight, Loader2 } from "lucide-react";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import { useButtonClick } from "@/hooks/useButtonClick";
import useBlogPosts from "@/hooks/useBlogPosts";

export default function BlogPage() {
  return (
    <>
      <div data-webild-section="HeroBillboard"><section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30"><HeroBackgroundSlot /><div className="flex flex-col gap-12 md:gap-15 w-content-width mx-auto"><div className="flex flex-col items-center gap-3 text-center"><div className="px-3 py-1 mb-1 text-sm card rounded w-fit"><p>Design Journal</p></div><TextAnimation text="Stories of Space and Light" variant="fade-blur" gradientText={true} tag="h1" className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance" /><TextAnimation text="Explore our latest thoughts on bespoke interiors, architectural trends, and the art of curating spaces that reflect your personal essence." variant="fade-blur" gradientText={false} tag="p" className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="Read Latest" href="#latest" variant="primary" /><Button text="Explore Topics" href="#topics" variant="secondary" animationDelay={0.1} /></div></div><ScrollReveal variant="fade-blur" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden"><ImageOrVideo imageSrc="https://picsum.photos/seed/2089910226/1200/800" className="aspect-4/5 md:aspect-video" /></ScrollReveal></div></section></div>
      <div data-webild-section="BlogMediaCards"><section aria-label="Blog section" className="py-20"><div className="w-content-width mx-auto flex justify-center"><Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} /></div></section></div>
    </>
  );
}
