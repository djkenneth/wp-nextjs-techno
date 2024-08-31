import Link from "next/link";

import graphqlQuery from '@/lib/client'
import type { TemplateHomeQuery, OurServicesSection, CaseStudiesSection, ProcessSection, TestimonialSection, OurExperienceSection, Company, ContactSection, HeroSection, AboutSection } from '@/types/graphql'
import { TemplateHomeDocument } from "@/graphql/sdk";

// Craft Imports
import Balancer from "react-wrap-balancer";

// Components
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import CaseStudies from "@/components/Sections/CaseStudies";
import Process from "@/components/Sections/Process";
import Testimonials from "@/components/Sections/Testimonials";
import OurServices from "@/components/Sections/OurServices";
import OurExperience from "@/components/Sections/OurExperience";
import LatestArticle from "@/components/Sections/LatestArticle";
import Newsletter from "@/components/Sections/Newsletter";
import CompanyInfo from "@/components/Sections/CompanyInfo";
import Contact from "@/components/Sections/Contact";

// Icons
import { File, Pen, Tag, Boxes, User, Folder, ArrowRight } from "lucide-react";

import { notFound } from "next/navigation";

// This page is using the craft.tsx component and design system
export default async function Home() {

  const { pageBy: pageData } = await graphqlQuery<TemplateHomeQuery>(TemplateHomeDocument, {
    uri: "home"
  })

  if (!pageData) {
    notFound();
  }

  const {
    title,
    content,
    heroSection,
    aboutSection,
    ourServicesSection,
    caseStudiesSection,
    processSection,
    testimonialSection,
    ourExperienceSection,
    company,
    contactSection } = pageData;

  return (
    <>
      {/*  */}
      <Hero {...heroSection as HeroSection} />
      <About heroSection={heroSection as HeroSection} aboutSection={aboutSection as AboutSection} />
      <OurServices {...ourServicesSection as OurServicesSection} />
      <CaseStudies {...caseStudiesSection as CaseStudiesSection} />
      <Process {...processSection as ProcessSection} />
      <Testimonials {...testimonialSection as TestimonialSection} />
      <OurExperience {...ourExperienceSection as OurExperienceSection} />
      <LatestArticle />
      <Newsletter />
      <CompanyInfo {...company as Company} />
      <Contact {...contactSection as ContactSection} />
    </>
  );
}

// This is just some example JS to demonstrate automatic styling from brijr/craft
const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <h1>
        <Balancer>
          Hello World, welcome to the Next.js and WordPress Starter by{" "}
          <a href="https://9d8.dev">9d8</a>.
        </Balancer>
      </h1>
      {/* Vercel Clone Starter */}
      <a
        className="h-16 block"
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F9d8dev%2Fnext-wp&env=WORDPRESS_URL,WORDPRESS_HOSTNAME&envDescription=Add%20WordPress%20URL%20with%20Rest%20API%20enabled%20(ie.%20https%3A%2F%2Fwp.example.com)%20abd%20the%20hostname%20for%20Image%20rendering%20in%20Next%20JS%20(ie.%20wp.example.com)&project-name=next-wp&repository-name=next-wp&demo-title=Next%20JS%20and%20WordPress%20Starter&demo-url=https%3A%2F%2Fwp.9d8.dev"
      >
        {/* eslint-disable-next-line */}
        <img
          className="not-prose my-4"
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
        />
      </a>
      <p>
        This is <a href="https://github.com/9d8dev/next-wp">next-wp</a>, created
        as a way to build WordPress sites with Next.js at rapid speed. This
        starter is designed with <a href="https://ui.shadcn.com">shadcn/ui</a>,{" "}
        <a href="https://github.com/brijr/craft">brijr/craft</a>, and Tailwind
        CSS. Use <a href="https://components.bridger.to">brijr/components</a> to
        build your site with prebuilt components. The data fetching and
        typesafety is handled in <code>lib/WordPress.ts</code> and{" "}
        <code>lib/WordPress.d.ts</code>. Questions? Email 9d8dev@gmail.com
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts"
        >
          <Pen size={32} />
          <span>
            Posts{" "}
            <span className="block text-sm text-muted-foreground">
              All posts from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/pages"
        >
          <File size={32} />
          <span>
            Pages{" "}
            <span className="block text-sm text-muted-foreground">
              Custom pages from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/authors"
        >
          <User size={32} />
          <span>
            Authors{" "}
            <span className="block text-sm text-muted-foreground">
              List of the authors from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/tags"
        >
          <Tag size={32} />
          <span>
            Tags{" "}
            <span className="block text-sm text-muted-foreground">
              Content by tags from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/categories"
        >
          <Boxes size={32} />
          <span>
            Categories{" "}
            <span className="block text-sm text-muted-foreground">
              Categories from your WordPress
            </span>
          </span>
        </Link>
        <a
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://github.com/9d8dev/next-wp"
        >
          <Folder size={32} />
          <span>
            Documentation{" "}
            <span className="block text-sm text-muted-foreground">
              How to use `next-wp`
            </span>
          </span>
        </a>
      </div>
    </article>
  );
};
