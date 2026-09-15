// Review content belongs here. Fields with review: true need Doug's confirmation.
export const site = {
  name: 'McDaniel Group', contactName: 'Doug McDaniel', tagline: 'Forensic Accounting & Business Valuations',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://mcdaniel-group.netlify.app',
  indexingEnabled: import.meta.env.PUBLIC_SITE_IS_PRODUCTION === 'true',
  phone: '206-383-1471', phoneHref: 'tel:+12063831471', email: 'dmcdaniel@mcdanielgrp.com', emailHref: 'mailto:dmcdaniel@mcdanielgrp.com',
  hours: 'Monday–Friday, 8 AM–5 PM', hoursShort: 'Mon–Fri, 8 AM–5 PM',
  location: { mode: 'meetings-by-appointment', publicLabel: 'Bellevue, Washington · Meeting details to be confirmed', locality: 'Bellevue', region: 'WA', postalCode: '', review: true },
} as const;

export const navLinks = [
  { label: 'Expertise', href: '/#expertise' },
  { label: 'About Doug', href: '/about' },
  { label: 'Representative Work', href: '/#representative-work' },
  { label: 'Contact', href: '/contact' },
] as const;
// Service copy is kept with the rest of the public-facing content so Doug can review it in one place.
export const services = [
  { slug: 'forensic-accounting', title: 'Forensic Accounting', question: 'Where did the money go?', description: 'Trace funds, reconstruct financial records, and examine disputed transactions to establish what the records show.', overview: 'When financial records are incomplete or transactions are in dispute, a clear accounting of the facts is the starting point. McDaniel Group examines the records, follows the movement of funds, and explains the findings for counsel and business decision-makers.', matters: ['Asset tracing and disputed transfers', 'Alleged misappropriation or waste', 'Fidelity claims and financial investigations'], work: ['Review and reconcile available financial records.', 'Trace relevant transactions and identify missing information.', 'Document findings, source records, and limitations in a clear report.'], records: 'Bank statements, general ledgers, transaction records, and relevant agreements. The appropriate document request depends on the matter.' },
  { slug: 'business-valuations', title: 'Business Valuations', question: 'What is the business worth?', description: 'Understand the value of a closely held company, partnership interest, or professional practice in a dispute or transaction.', overview: 'A useful valuation explains both the conclusion and the assumptions behind it. McDaniel Group provides business valuation analysis for disputes, divorce matters, legal claims, and transactions involving closely held businesses and ownership interests.', matters: ['Ownership and shareholder disputes', 'Divorce and business interest valuations', 'Transactions involving closely held companies'], work: ['Establish the valuation purpose, date, and scope.', 'Analyze financial performance and the relevant business information.', 'Explain the valuation approach, assumptions, and conclusion in writing.'], records: 'Financial statements, tax returns, ownership agreements, and information about the business and its operations.' },
  { slug: 'fraud-investigations', title: 'Fraud Investigations', question: 'What happened, and what was the impact?', description: 'Examine suspected financial misconduct through record review, reconstruction, and analysis of the financial impact.', overview: 'Financial irregularities call for a careful examination of the evidence. McDaniel Group reviews business records, reconstructs transactions, and investigates the financial questions at issue without assuming the outcome.', matters: ['Suspected misuse of company funds', 'Unexplained transactions or accounting discrepancies', 'Incomplete or conflicting business records'], work: ['Define the transactions and questions to investigate.', 'Examine records and, where appropriate, interview relevant parties.', 'Document the findings and quantify the identified financial impact.'], records: 'Accounting records, bank transactions, invoices, supporting documents, and relevant communications. Agree on a secure transfer method before sharing records.' },
  { slug: 'economic-loss', title: 'Economic Loss Calculations', question: 'How much was lost?', description: 'Quantify claimed financial losses with calculations that connect the underlying records, assumptions, and conclusions.', overview: 'A damages analysis needs to explain how a claimed loss was calculated. McDaniel Group evaluates disputed amounts and economic losses, helping counsel understand the financial basis of a claim and the assumptions that affect it.', matters: ['Disputed financial losses in commercial claims', 'Early assessment of potential damages', 'Review of opposing damages calculations'], work: ['Identify the claimed loss and relevant financial information.', 'Develop calculations with explicit assumptions and supporting records.', 'Explain the analysis and evaluate alternative or opposing calculations.'], records: 'Historical financial statements, relevant contracts, transaction records, and any existing damages calculations or expert reports.' },
  { slug: 'expert-witness', title: 'Expert Witness Testimony', question: 'Can the financial analysis be clearly explained?', description: 'Support the presentation and examination of financial evidence through expert reports, deposition support, and testimony.', overview: 'Complex financial findings must be understandable to the people evaluating them. McDaniel Group supports counsel with expert reports and testimony on forensic accounting, valuation, and economic loss matters.', matters: ['Financial issues in litigation and dispute resolution', 'Review of opposing expert reports', 'Deposition and trial preparation'], work: ['Define the financial questions and the scope of the opinion.', 'Prepare clear explanations of the analysis and its supporting evidence.', 'Assist with examination of expert findings and provide testimony as engaged.'], records: 'The relevant case background, scheduling requirements, financial records, and any existing expert reports. Contact Doug to discuss availability and scope.' },
  { slug: 'construction-real-estate', title: 'Construction & Real Estate Advisory', question: 'What do the project records support?', description: 'Analyze the financial aspects of construction and real estate disputes, including cost overruns and contract claims.', overview: 'Project disputes often involve detailed contracts, changing costs, and competing accounts of the financial impact. McDaniel Group examines the financial records supporting construction and real estate claims.', matters: ['Delay and cost-overrun claims', 'Construction contract disputes', 'Property-related financial damages'], work: ['Review the contract and the financial questions in dispute.', 'Analyze project costs and supporting documentation.', 'Explain the financial basis of the claim and the limits of the available records.'], records: 'Contracts, project budgets, cost reports, invoices, change orders, and the financial records relevant to the dispute.' },
] as const;
export const hero = {
  eyebrow: 'Bellevue, Washington · For counsel and closely held businesses',
  title: 'Forensic accounting and business valuation for consequential disputes.',
  body: 'Independent financial analysis, expert reporting, and testimony for counsel and closely held businesses.',
  media: {
    poster: '/images/bellevue-1600.webp',
    alt: 'Glass towers in downtown Bellevue beneath a cloudy Pacific Northwest sky',
    // Add approved, optimized files here to enable the desktop background video.
    videoWebm: '',
    videoMp4: '',
  },
} as const;

export const credibilityItems = [
  { value: '[Professional credentials to confirm]', label: 'Credentials', review: true },
  { value: '[Years of relevant experience to confirm]', label: 'Experience', review: true },
  { value: '[Expert testimony experience to confirm]', label: 'Litigation support', review: true },
  { value: 'Bellevue, Washington', label: 'Based in', review: false },
] as const;

export const expertiseGroups = [
  {
    number: '01',
    title: 'Investigations & Forensic Accounting',
    description: 'Follow the financial evidence through disputed transactions, suspected misconduct, asset tracing, and incomplete records.',
    items: ['Asset tracing', 'Disputed transactions', 'Fraud and misconduct', 'Financial-record reconstruction'],
    href: '/services/forensic-accounting',
  },
  {
    number: '02',
    title: 'Business Valuation',
    description: 'Assess closely held companies and ownership interests when value is central to a dispute, transaction, or decision.',
    items: ['Closely held companies', 'Ownership interests', 'Shareholder and marital disputes', 'Transaction-related valuations'],
    href: '/services/business-valuations',
  },
  {
    number: '03',
    title: 'Damages & Expert Support',
    description: 'Quantify economic loss and present financial analysis in reports, rebuttal work, depositions, and testimony.',
    items: ['Lost profits and economic damages', 'Expert reports', 'Rebuttal analysis', 'Deposition and testimony support'],
    href: '/services/economic-loss',
  },
] as const;

export const serviceQualificationPlaceholder = '[Relevant qualifications and experience to confirm]' as const;
export const profile = { title: '[Professional title to confirm]', shortBio: '[Add a concise biography: Doug’s professional background, primary specialties, and the kinds of financial questions he handles.]', longBio: '[Add Doug’s professional history, education, areas of specialization, and approach to forensic accounting and valuation work.]', credentials: [['Professional credentials', '[Credentials and certifications to confirm]'], ['Education', '[Education to confirm]'], ['Years in practice', '[Experience to confirm]'], ['Courts and jurisdictions', '[Jurisdictions to confirm]'], ['Professional memberships', '[Memberships to confirm]']], cv: { label: 'Download CV', href: '', review: true }, headshot: { label: 'Doug McDaniel headshot', review: true } } as const;
export const representativeEngagement = {
  title: 'Representative engagement to be confirmed',
  intro: 'Replace these private-review fields with one approved, anonymized matter that shows the financial work without identifying a client or implying a guaranteed result.',
  details: [
    ['Financial question', '[Financial question to confirm]'],
    ['Matter context', '[Organization or dispute type to confirm]'],
    ['Records examined', '[Records examined to confirm]'],
    ['Analysis performed', '[Analysis performed to confirm]'],
    ['Work product', '[Work product delivered to confirm]'],
    ['Use of the analysis', '[How the analysis was used to confirm]'],
  ],
} as const;
export const contactContent = { heading: 'Check fit and availability.', intro: 'Contact Doug McDaniel with a general overview of the matter and any important deadlines.', draftHelp: 'This form creates a draft in your email application. Review it and send it there; the website does not send a message on your behalf.', recordsNotice: 'Please provide only a general description. Do not include account numbers, confidential documents, or sensitive case details. A secure way to share records can be arranged after the initial conversation.', engagementNotice: 'Contacting McDaniel Group does not create an engagement. Work begins only after scope, terms, and a secure transfer method have been confirmed.', engagementNoticeReview: true } as const;
export const legalContent = { privacy: { title: 'Privacy', intro: 'Review draft: Doug should approve this privacy notice before publication.', sections: [['Information from a general inquiry', 'A visitor may choose to provide a name, email address, phone number, organization, and a general description of an inquiry. The website does not provide a document-upload feature.'], ['How information is used', 'Information from a general inquiry may be used to respond to the inquiry and evaluate whether an initial conversation is appropriate.'], ['Information to avoid sending', 'Do not send confidential records, account numbers, or sensitive case details through the public website or its email-draft form.']] }, disclaimer: { title: 'Disclaimer', intro: 'Review draft: Doug should approve this disclaimer and obtain any needed legal review before publication.', sections: [['General information', 'Website content provides general information about McDaniel Group and its services. It is not advice for a particular matter.'], ['No engagement', 'Contacting McDaniel Group, using the website, or creating an email draft does not create a professional engagement.'], ['Availability', 'McDaniel Group may not be able to accept every matter. Availability, scope, and engagement terms are determined through a separate process.'], ['Confidential records', 'Do not send confidential records through the public website. A secure transfer method may be arranged only after availability, engagement terms, and next steps have been confirmed.'], ['Engagement process', 'Work begins only through an agreed engagement process.']] } } as const;
