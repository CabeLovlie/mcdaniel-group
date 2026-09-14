// Single source of truth for firm details used across pages, footer, and JSON-LD.
export const site = {
  name: 'McDaniel Group',
  contactName: 'Doug McDaniel',
  tagline: 'Forensic Accounting & Business Valuations',
  url: 'https://www.mcdanielgrp.com',
  phone: '206-383-1471',
  phoneHref: 'tel:+12063831471',
  email: 'dmcdaniel@mcdanielgrp.com',
  emailHref: 'mailto:dmcdaniel@mcdanielgrp.com',
  addressLocality: 'Bellevue',
  addressRegion: 'WA',
  postalCode: '98004',
  addressLine: 'Downtown Bellevue, WA 98004',
  hours: 'Monday–Friday, 8 AM–5 PM',
  hoursShort: 'Mon–Fri, 8 AM–5 PM',
} as const;

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'For counsel', href: '/#counsel' },
  { label: 'About Doug', href: '/#about' },
  { label: 'Contact', href: '/contact' },
] as const;
