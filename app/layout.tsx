import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { get } from 'lodash';

import "./globals.css";

import graphqlQuery from "@/lib/client";
import { GetHeaderPageDocument, GetFooterPageDocument } from "@/graphql/sdk";
import type { GetHeaderPageQuery, GetFooterPageQuery } from '@/types/graphql'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Main } from "@/components/craft";
import { mainMenu, contentMenu } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// import Logo from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ArrowRight, MapPinned, Search, ShoppingBasket } from "lucide-react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaEnvelopeOpenText } from "react-icons/fa";
import { FaXTwitter, FaPhoneVolume } from "react-icons/fa6";

import { notFound } from "next/navigation";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WordPress & Next.js Starter by 9d8",
  description:
    "A starter template for Next.js with WordPress as a headless CMS.",
  metadataBase: new URL("https://wp.9d8.dev"),
};

// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const Nav = async ({ className, children, id }: NavProps) => {

  const { customHeader, loading, error } = await graphqlQuery<GetHeaderPageQuery>(GetHeaderPageDocument)

  if (!customHeader) {
    notFound();
  }

  const headerBackgroundColor = get(customHeader, 'header.headerBackgroundColor');
  const logo = get(customHeader, 'header.logo.node');
  const menus = get(customHeader, 'header.menus');
  const cart = get(customHeader, 'header.cart');

  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b",
        "fade-in",
        className,
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-7xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">kenneth</h2>
          <div className="w-40 h-12 relative">
            {logo && (
              <Image
                src={`${process.env.WORDPRESS_URL}${logo?.uri}`}
                alt={`${logo?.title}` || 'Logo'}
                className="dark:invert"
                fill
                sizes='100vw'
                style={{ objectFit: 'contain' }}
              ></Image>
            )}
          </div>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {menus && menus?.map(({ title, url }: any) => (
              <Button key={title} asChild variant="ghost" size="sm">
                <Link href={url}>
                  {title.toUpperCase()}
                </Link>
              </Button>
            ))}
          </div>
          {/* <Button className="hidden sm:flex bg-blue-800 size-8" size="icon">
            <Search strokeWidth={3} className="h-4 w-4" />
          </Button>
          <Link href={cart?.url!} className="relative hidden sm:flex">
            <Button className="bg-blue-800 size-8" size="icon">
              <ShoppingBasket strokeWidth={3} className="h-4 w-4" />
            </Button>
            <Badge className="absolute -top-2 -right-2 z-10 px-1">0</Badge>
          </Link> */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = async () => {
  const { customFooter, loading, error } = await graphqlQuery<GetFooterPageQuery>(GetFooterPageDocument)

  if (!customFooter) {
    notFound();
  }

  const footerBackground = get(customFooter, 'footer.footerBackground.node');
  const logo = get(customFooter, 'footer.footerLogo.node');
  const description = get(customFooter, 'footer.description');
  const followUsSection = get(customFooter, 'footer.followUsSection');
  const quickLinksSection = get(customFooter, 'footer.quickLinksSection');
  const contactInfoSection = get(customFooter, 'footer.contactInfoSection');

  return (
    <footer style={{ backgroundImage: `url(${process.env.WORDPRESS_URL}${footerBackground?.uri})` }} className="bg-center bg-no-repeat bg-cover">
      <Section>
        <Container className="gap-10 grid grid-cols-1 md:grid-cols-[1fr_0.5fr_1fr_1fr] md:gap-5">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">kenneth/components</h3>
              <div className="w-40 h-12 relative">
                <Image
                  src={`${process.env.WORDPRESS_URL}${logo?.uri}`}
                  alt={`${logo?.title}` || 'Logo'}
                  className="dark:invert hover:opacity-75 transition-all"
                  fill
                  sizes='100vw'
                  style={{ objectFit: 'contain' }}
                ></Image>
              </div>
            </Link>
            <p className="text-white">
              {description}
            </p>
            <div className="space-y-5">
              <p className="text-xl text-white font-bold">{followUsSection?.title}</p>
              <div className="flex items-center gap-4">
                {followUsSection && followUsSection.socialMedia?.map((social) => (
                  <Button key={social?.iconTitle} className={`bg-[#187dff] size-9 ${!social?.show && 'hidden'}`} size="icon">
                    {social?.iconTitle === 'facebook' && (
                      <FaFacebookF />
                    )}

                    {social?.iconTitle === 'instagram' && (
                      <FaInstagram />
                    )}

                    {social?.iconTitle === 'x' && (
                      <FaXTwitter />
                    )}

                    {social?.iconTitle === 'pinterest' && (
                      <FaPinterestP />
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="text-white font-medium text-xl">{quickLinksSection?.title}</h5>
            <div className="space-y-5">
              {quickLinksSection && quickLinksSection.menus?.map((link) => (
                <Link
                  className="hover:underline underline-offset-4 text-white flex items-center"
                  key={link?.title}
                  href={link?.url || '/'}
                >
                  <ArrowRight strokeWidth={1} className="mr-2" />
                  {link?.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="text-white font-medium text-xl">Popular Post</h5>
            <div className="flex flex-col divide-y">
              <div className="flex items-center gap-2 py-5">
                <div className="w-20 h-12 relative">
                  <Image
                    src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2023/10/crypto-blog-img1-80x80.jpg'}
                    alt="Logo"
                    className="dark:invert"
                    fill
                    sizes='100vw'
                    style={{ objectFit: 'contain' }}
                  ></Image>
                </div>
                <div>
                  <p className="text-white text-lg font-bold">Content strategy can helpengage customers.</p>
                  <p className="text-[#9eb3ef] text-base font-normal">October 29, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2 py-5">
                <div className="w-20 h-12 relative">
                  <Image
                    src={'https://wp.ditsolution.net/techno-new/wp-content/uploads/2023/10/crypto-blog-img1-80x80.jpg'}
                    alt="Logo"
                    className="dark:invert"
                    fill
                    sizes='100vw'
                    style={{ objectFit: 'contain' }}
                  ></Image>
                </div>
                <div>
                  <p className="text-white text-lg font-bold">Content strategy can helpengage customers.</p>
                  <p className="text-[#9eb3ef] text-base font-normal">October 29, 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="text-white font-medium text-xl">{contactInfoSection?.title}</h5>
            <div className="flex flex-col gap-6">
              {contactInfoSection && contactInfoSection.contactInfo?.map((contactInfo) => (
                <div key={contactInfo?.title} className="flex items-center gap-4">
                  <div className="size-10 rounded-full flex justify-center items-center bg-[#3d65de]">
                    {contactInfo?.icon === 'map-pin' && (
                      <MapPinned size={20} color="#ffffff" strokeWidth={2} />
                    )}

                    {contactInfo?.icon === 'envelope' && (
                      <FaEnvelopeOpenText color="white" />
                    )}

                    {contactInfo?.icon === 'phone' && (
                      <FaPhoneVolume color="white" />
                    )}
                  </div>
                  <div>
                    <p className="text-white text-lg font-bold">{contactInfo?.title}</p>
                    <p className="text-[#9eb3ef] text-base font-normal">{contactInfo?.description}.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          {/* <ThemeToggle /> */}
          <p className="text-white">
            © <a href="">Techno</a>. All rights reserved.
            2024-present.
          </p>
          <div className="flex justify-center text-white gap-5">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
