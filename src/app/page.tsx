"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Hydro Kingz Inc."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Hydro Kingz Inc."
      description="California’s elite leader in precision hydro excavation, utility locating, and sustainable industrial solutions. Driven by safety, innovation, and ethical partnership."
      buttons={[
        {
          text: "Request a Quote",
          href: "#contact",
        },
        {
          text: "Explore Services",
          href: "#services",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/heavy-construction-loader-bulldozer-construction-area_146671-19128.jpg",
          imageAlt: "Hydro excavation truck on site",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/excavator-digging-day-light-outdoors_23-2149194801.jpg",
          imageAlt: "Industrial excavation team",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/excavators-symbol-road-construction-work-tools-road-signs-brick_1417-1115.jpg",
          imageAlt: "California infrastructure support",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/heavy-machinery-used-construction-industry-engineering_23-2151307738.jpg",
          imageAlt: "Underground utility service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/heavy-excavator-digging-day-light-outdoors_23-2149194804.jpg",
          imageAlt: "Sustainable environmental solutions",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/volunteer-planting-trees-nature_1268-21661.jpg",
          imageAlt: "Precision industrial digging",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Unrivaled Precision in Every Dig"
      description="At Hydro Kingz Inc., we combine cutting-edge technology with unmatched expertise to lead California’s industrial sector. Our commitment to ethical business, safety, and sustainable environmental solutions ensures excellence on every project site."
      metrics={[
        {
          value: "100%",
          title: "Safety Compliant",
        },
        {
          value: "15+",
          title: "Years Experience",
        },
        {
          value: "500+",
          title: "Projects Completed",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/men-looking-tablet-medium-shot_23-2148921388.jpg"
      imageAlt="Hydro Kingz industrial site inspection"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Hydro Excavation",
          description: "Safe, non-destructive precision digging.",
          imageSrc: "http://img.b2bpic.net/free-photo/tourist-desert-landscape_23-2148129815.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-24002.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Utility Locating",
          description: "Accurate, high-tech underground mapping.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-black-african-american-man-posing-industrial-machinery_627829-3278.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/engineers-helmets-standing-by-factory_1157-35340.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Debris Removal",
          description: "Efficient, compliant site cleanup services.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-developing-photos_23-2149893967.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/young-volunteer-grabbing-trash-with-long-claw-tool-clean-forest_482257-91103.jpg",
          buttonText: "Learn More",
        },
      ]}
      title="Comprehensive Industrial Solutions"
      description="From hydro excavation and trenching to emergency industrial response, we deliver professional results with state-of-the-art equipment."
    />
  </div>

  <div id="why-choose" data-section="why-choose">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "Tech",
          title: "Modern Equipment",
          items: [
            "Vac-Truck Fleet",
            "GPS Mapping",
            "Leak Detection",
          ],
        },
        {
          id: "2",
          value: "Speed",
          title: "Rapid Response",
          items: [
            "24/7 Availability",
            "Critical Service",
            "Emergency Support",
          ],
        },
        {
          id: "3",
          value: "Trust",
          title: "Certified Team",
          items: [
            "Safety Trained",
            "Regulatory Experts",
            "Professional Crew",
          ],
        },
      ]}
      title="Why Trust Hydro Kingz?"
      description="We don't just dig; we partner for success through advanced tech, certified training, and unwavering ethics."
    />
  </div>

  <div id="partnerships" data-section="partnerships">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Project Partnership",
          price: "Contact Us",
          variant: "Growth Opportunity",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-engineers-with-laptop_23-2149354038.jpg",
        },
        {
          id: "2",
          name: "Investment Inquiry",
          price: "Contact Us",
          variant: "Future Equity",
          imageSrc: "http://img.b2bpic.net/free-photo/engineers-helmets-standing-by-factory_1157-35514.jpg",
        },
        {
          id: "3",
          name: "Regional Alliance",
          price: "Contact Us",
          variant: "Expansion",
          imageSrc: "http://img.b2bpic.net/free-photo/scene-construction-site-with-equipment_23-2151317262.jpg",
        },
        {
          id: "4",
          name: "Compliance Joint Venture",
          price: "Contact Us",
          variant: "Strategic",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-creative-illustration_23-2151980693.jpg",
        },
        {
          id: "5",
          name: "Technology Consortium",
          price: "Contact Us",
          variant: "Innovation",
          imageSrc: "http://img.b2bpic.net/free-photo/sunset-silhouette-driving-combine-harvester-meadow-generated-by-ai_188544-31051.jpg",
        },
        {
          id: "6",
          name: "Regional Contractor Referral",
          price: "Contact Us",
          variant: "Partnership",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-putting-protective-gloves_23-2148773452.jpg",
        },
      ]}
      title="Strategic Growth & Joint Ventures"
      description="We invite ethical partners to collaborate with Hydro Kingz Inc. for long-term sustainable growth and industrial excellence across California."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Jenkins",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-manual-worker-warehouse_329181-12798.jpg",
        },
        {
          id: "2",
          name: "Michael Reed",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessmen-office_1098-240.jpg",
        },
        {
          id: "3",
          name: "David Thorne",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-coworkers-discussing-diagram_1262-3734.jpg",
        },
        {
          id: "4",
          name: "Elena Vargas",
          imageSrc: "http://img.b2bpic.net/free-photo/inspector-factory-talking-phone-while-others-are-working_1303-30634.jpg",
        },
        {
          id: "5",
          name: "Marcus Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/solar-panels-manufacturing-factory-specialist-explains-production-process_482257-118103.jpg",
        },
      ]}
      cardTitle="Client & Partner Voices"
      cardTag="Trust"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What areas do you serve?",
          content: "We serve the entirety of California with primary hubs in major industrial centers.",
        },
        {
          id: "2",
          title: "Do you offer emergency services?",
          content: "Yes, our emergency response team is available 24/7 for critical utility and site issues.",
        },
        {
          id: "3",
          title: "How can we partner with you?",
          content: "Please contact us via our partnerships page to discuss potential joint ventures and investment inquiries.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We have the answers regarding our hydro excavation services and partnership opportunities."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact Us"
      title="Request Your Quote Today"
      description="Ready to get started on your next industrial project? Reach out to our team of experts in California."
      imageSrc="http://img.b2bpic.net/free-photo/person-walking-up-abandoned-building_23-2147770392.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Hydro Kingz Inc."
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Solutions",
          items: [
            {
              label: "Hydro Excavation",
              href: "#services",
            },
            {
              label: "Utility Locating",
              href: "#services",
            },
            {
              label: "Debris Removal",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Hydro Kingz Inc. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
