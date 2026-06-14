// Created by add_section_from_catalog (TestimonialMarqueeCards).

import React from 'react';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';

export default function TestimonialsSection(): React.JSX.Element {
  return (
    <div data-webild-section="testimonials" id="testimonials">
      <TestimonialMarqueeCards
        description="Our passion is building your dream."
        testimonials={[{"imageSrc":"http://img.b2bpic.net/free-photo/woman-sitting-couch_23-2148751504.jpg","quote":"The design team turned my outdated flat into a modern masterpiece. Truly exceptional quality.","role":"Salamanca Resident","name":"Elena R."},{"imageSrc":"http://img.b2bpic.net/free-photo/overhead-view-young-couple-with-their-baby-sitting-cardboard-boxes-their-new-home_23-2148060078.jpg","quote":"They captured our vision perfectly. The attention to detail is unmatched in Madrid.","role":"Villa Owner","name":"Carlos M."},{"imageSrc":"http://img.b2bpic.net/free-photo/portrait-beautiful-woman-bathrobe-indoors_1153-8058.jpg","quote":"A seamless process from concept to completion. I couldn't be happier with the results.","name":"Sofia G.","role":"Art Collector"},{"imageSrc":"http://img.b2bpic.net/free-photo/lovely-woman-drawing-looking-camera_23-2147770011.jpg","quote":"Their eye for texture and balance is superb. Highly recommended for any interior project.","role":"Architect","name":"Diego V."},{"imageSrc":"http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-discussing-new-ideas_176420-1665.jpg","quote":"Simply wonderful to work with. They made the renovation process stress-free and exciting.","role":"Business Owner","name":"Isabel P."}]}
        title="What Homeowners Say"
        tag="Client Stories"
      />
    </div>
  );
}
