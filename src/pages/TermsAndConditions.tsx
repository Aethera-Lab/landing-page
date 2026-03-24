import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Section: React.FC<SectionProps> = ({ number, title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div id={`section-${number}`} className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-primary tracking-widest uppercase font-mono w-6 flex-shrink-0">
            {number}
          </span>
          <h2 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {title}
          </h2>
        </div>
        <span className="text-muted-foreground ml-4 flex-shrink-0">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {open && (
        <div className="pb-8 pl-10 pr-2 text-muted-foreground leading-relaxed text-[15px] space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2 mt-1">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-2">
    <h3 className="font-semibold text-foreground text-[15px]">{title}</h3>
    {children}
  </div>
);

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  const tocItems = [
    ['01', 'Acceptance of Terms'],
    ['02', 'Beta Disclaimer'],
    ['03', 'Definitions'],
    ['04', 'Eligibility'],
    ['05', 'Account Registration & KYC'],
    ['06', 'How It Works'],
    ['07', 'Fees & Charges'],
    ['08', 'Yield Distributions'],
    ['09', 'Risks & Investment Disclaimer'],
    ['10', 'EPC Obligations'],
    ['11', 'Prohibited Conduct'],
    ['12', 'Intellectual Property'],
    ['13', 'Third-Party Services'],
    ['14', 'Limitation of Liability'],
    ['15', 'Indemnification'],
    ['16', 'Governing Law & Disputes'],
    ['17', 'Modifications to Terms'],
    ['18', 'Termination'],
    ['19', 'Miscellaneous'],
    ['20', 'Contact & Grievance'],
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Manrope', sans-serif" }}>

      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Aethera<span className="text-primary">.</span>
          </span>
          <div className="w-16" />
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-primary opacity-5 blur-2xl pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10">
              <Shield size={13} className="text-primary" />
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Legal · Beta v1.0</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Terms &<br />
              <span className="text-primary">Conditions.</span>
            </h1>
            <p className="text-lg text-background/60 leading-relaxed max-w-lg">
              This agreement governs your use of the Aethera platform, operated by BayLeaf OÜ and Aethera Energy Private Limited. Please read carefully.
            </p>
          </div>

          <div className="flex flex-col gap-1 md:text-right text-sm text-background/40 font-medium">
            <span className="flex items-center md:justify-end gap-2">
              <FileText size={14} />
              Operated by
            </span>
            <span className="text-background/70 font-semibold">BayLeaf OÜ</span>
            <span className="text-background/50">Aethera Energy Pvt. Ltd.</span>
            <span className="mt-2 text-background/40">Version 1.0 (Beta)</span>
          </div>
        </div>
      </section>

      {/* Beta Warning Strip */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-start gap-3">
          <span className="mt-0.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 animate-pulse" />
          <p className="text-sm text-foreground font-medium">
            <span className="font-bold text-primary">Beta Platform: </span>
            Features, tokenomics, and processes may change without prior notice. Participation is voluntary and at your own risk.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 items-start">

        {/* Sticky TOC Sidebar */}
        <aside className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
          <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-4">
            Contents
          </p>
          <nav className="flex flex-col gap-0.5">
            {tocItems.map(([num, label]) => (
              <a
                key={num}
                href={`#section-${num}`}
                className="flex items-center gap-3 py-1.5 px-3 rounded-lg text-[13px] text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150 group"
              >
                <span className="text-[10px] font-mono font-bold text-primary/50 group-hover:text-primary transition-colors w-5 flex-shrink-0">
                  {num}
                </span>
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="bg-card rounded-2xl border border-border px-6 md:px-10 py-4 shadow-sm">

          {/* 01 */}
          <Section number="01" title="Acceptance of Terms" defaultOpen={true}>
            <p>
              By accessing, registering on, or using the Aethera platform ("Platform"), whether as a solar installer, EPC, investor, or visitor, you ("User") agree to be legally bound by these Terms and Conditions ("Terms").
            </p>
            <p>If you do not agree to these Terms, you must immediately cease using the Platform.</p>
            <p>These Terms constitute a legally binding agreement between you and:</p>
            <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-1 mt-2">
              <p className="font-semibold text-foreground">BayLeaf OÜ</p>
              <p>A private limited company incorporated under the laws of the Republic of Estonia, with registered address in Harju maakond, Tallinn, Keshlinna linnaosa, Ahtri tn 12, Estonia, 15551 ("Company", "we", "us", "our").</p>
            </div>
          </Section>

          {/* 02 */}
          <Section number="02" title="Beta Disclaimer">
            <div className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-4">
              <p className="font-bold text-foreground mb-3">THE PLATFORM IS CURRENTLY IN BETA.</p>
              <p className="mb-3">By using the Platform during its Beta phase, you expressly acknowledge and agree that:</p>
              <BulletList items={[
                'The Platform is an early-stage, experimental product and may contain bugs, errors, or incomplete functionality.',
                'Features, interfaces, tokenomics, fee structures, and processes may change without prior notice during Beta.',
                'Beta access may be revoked or modified at any time at our sole discretion.',
                'Data, transactions, or yields generated during Beta may be test-net or non-binding unless explicitly stated as mainnet in writing.',
                'Aethera provides no guarantees of uptime, data accuracy, or continuous service during the Beta period.',
                'Participation in Beta is voluntary and at your own risk.',
              ]} />
            </div>
            <p>Beta users will be notified in advance before the Platform transitions to public launch, at which point updated Terms will be issued.</p>
          </Section>

          {/* 03 */}
          <Section number="03" title="Definitions">
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-bold text-foreground w-40">Term</th>
                    <th className="text-left py-3 font-bold text-foreground">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Platform', "Aethera's web-based application for solar asset tokenization, investor participation, and yield distribution."],
                    ['EPC / Installer', 'Solar engineering, procurement, and construction company or installer registered on the Platform.'],
                    ['Investor', 'Individual or entity that purchases yield-bearing tokens on the Platform.'],
                    ['Project', 'A solar energy installation onboarded and tokenized through the Platform.'],
                    ['Tokens', "Digital instruments representing fractional revenue-sharing rights in a Project's kWh-linked income."],
                    ['kWh Oracle', 'On-chain data feed derived from IoT monitoring devices that measures actual electricity generation.'],
                    ['Yield / Distribution', 'Stablecoin payments made to token holders proportional to verified energy generation.'],
                    ['Stablecoin', 'USDC or INR-pegged stablecoin used for investment, settlement, and yield distribution on the Platform.'],
                    ['Smart Contract', 'Self-executing code deployed on the Stellar/Soroban blockchain governing token issuance and distributions.'],
                    ['KYC/AML', 'Know Your Customer and Anti-Money Laundering verification process.'],
                    ['Confidential Information', 'Any non-public information shared between User and Aethera.'],
                  ].map(([term, meaning], i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="py-3 pr-6 font-semibold text-foreground align-top">{term}</td>
                      <td className="py-3 text-muted-foreground align-top">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* 04 */}
          <Section number="04" title="Eligibility">
            <SubSection title="4.1 General Eligibility">
              <p>To use the Platform, you must:</p>
              <BulletList items={[
                'Be at least 18 years of age.',
                'Have the legal capacity to enter into binding contracts under applicable law.',
                'Not be a citizen or resident of a sanctioned jurisdiction (OFAC, EU, UN sanctions lists).',
                'Not be on any government watchlist or denied parties list.',
                'Have completed KYC/AML verification as required by the Platform.',
              ]} />
            </SubSection>
            <SubSection title="4.2 Investor Eligibility">
              <p>Investment on the Platform is open to:</p>
              <BulletList items={[
                'Indian residents (retail and HNI investors subject to applicable SEBI guidelines).',
                'Non-resident Indians (NRIs) subject to FEMA regulations.',
                "International investors subject to their home jurisdiction's securities and investment laws.",
              ]} />
              <p className="mt-2 font-medium text-foreground">You are solely responsible for determining whether your participation is lawful in your jurisdiction. Aethera does not provide legal or financial advice.</p>
            </SubSection>
            <SubSection title="4.3 EPC / Installer Eligibility">
              <p>To register as an EPC or installer:</p>
              <BulletList items={[
                'Must be a legally registered business entity in India.',
                'Must hold valid electrical contractor license and applicable regulatory approvals.',
                'Must be able to provide verifiable IoT monitoring data from installed projects.',
                "Must complete Aethera's full onboarding verification process.",
              ]} />
            </SubSection>
            <SubSection title="4.4 Restricted Jurisdictions">
              <p>Users from the following jurisdictions are <span className="font-semibold text-foreground">not permitted</span> to participate as investors:</p>
              <BulletList items={[
                'United States of America (unless qualified under applicable exemptions).',
                'Countries under FATF blacklist or grey list at time of registration.',
                'Any jurisdiction where participation would violate local law.',
              ]} />
              <p>Aethera reserves the right to update the restricted jurisdiction list at any time.</p>
            </SubSection>
          </Section>

          {/* 05 */}
          <Section number="05" title="Account Registration & KYC">
            <SubSection title="5.1 Account Creation">
              <p>You agree to provide accurate, complete, and current information during registration. You must promptly update any information that changes.</p>
            </SubSection>
            <SubSection title="5.2 KYC/AML Compliance">
              <p>All users must complete identity verification before transacting on the Platform. This includes:</p>
              <BulletList items={[
                'Individual users: Government-issued photo ID, proof of address, selfie verification.',
                'Indian users: Aadhaar-based e-KYC, PAN card.',
                'International users: Passport, proof of address, source of funds declaration.',
                'Corporate users: Certificate of incorporation, beneficial ownership declaration, director KYC.',
              ]} />
              <p>Aethera uses third-party KYC service providers. Submission of KYC documents constitutes consent to share your information with these providers.</p>
            </SubSection>
            <SubSection title="5.3 Account Security">
              <p>You are solely responsible for maintaining the confidentiality of your account credentials. Aethera shall not be liable for unauthorized access resulting from your failure to secure your credentials.</p>
            </SubSection>
            <SubSection title="5.4 Account Suspension">
              <p>Aethera reserves the right to suspend or terminate any account at its sole discretion, including but not limited to cases of:</p>
              <BulletList items={[
                'KYC failure or document fraud.',
                'Suspicious transaction activity.',
                'Breach of these Terms.',
                'Regulatory direction or court order.',
              ]} />
            </SubSection>
          </Section>

          {/* 06 */}
          <Section number="06" title="The Platform — How It Works">
            <SubSection title="6.1 For EPCs / Installers">
              <BulletList items={[
                'EPCs submit solar projects for tokenization by uploading required documentation, technical specifications, and IoT monitoring credentials.',
                'Aethera reviews and verifies each project before listing.',
                'Upon approval, smart contracts are deployed on the Stellar/Soroban blockchain to govern token issuance, kWh oracle feeds, and yield distributions.',
                'EPCs receive capital from investors in stablecoins (USDC) upon successful token sale.',
                'EPCs are responsible for project performance, monitoring data accuracy, and maintenance throughout the project tenor.',
              ]} />
            </SubSection>
            <SubSection title="6.2 For Investors">
              <BulletList items={[
                'Investors browse listed Projects, review documentation, and purchase Tokens using stablecoins.',
                'Tokens represent revenue-sharing rights — not equity, not debt, not ownership of the physical solar asset.',
                "Yield is distributed automatically by smart contracts based on verified kWh data from the project's IoT monitoring system.",
                'Investment amounts, tenor, projected yields, and distribution frequency are disclosed per Project listing.',
                'Aethera does not guarantee any specific return, yield rate, or capital protection.',
              ]} />
            </SubSection>
            <SubSection title="6.3 Token Nature">
              <p>Tokens issued on the Platform are utility/revenue-sharing instruments and are:</p>
              <BulletList items={[
                'NOT securities unless classified as such by applicable regulatory authority.',
                'NOT deposits, bonds, or fixed-income instruments.',
                'NOT guaranteed by Aethera, BayLeaf OÜ, or any government entity.',
                'Subject to the performance of the underlying solar project.',
              ]} />
            </SubSection>
          </Section>

          {/* 07 */}
          <Section number="07" title="Fees & Charges">
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-bold text-foreground">Fee Type</th>
                    <th className="text-left py-3 pr-6 font-bold text-foreground">Amount</th>
                    <th className="text-left py-3 font-bold text-foreground">Paid by</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Platform Origination Fee', '1.5–2.5% of capital raised', 'EPC'],
                    ['Annual Management Fee', '0.5% of active portfolio value', 'EPC'],
                    ['Transaction Fee', 'Disclosed at time of investment', 'Investor'],
                    ['Secondary Market Fee', '0.1–0.25% per transaction', 'Investor'],
                  ].map(([type, amount, by], i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="py-3 pr-6 font-medium text-foreground align-top">{type}</td>
                      <td className="py-3 pr-6 text-muted-foreground align-top">{amount}</td>
                      <td className="py-3 align-top">
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">{by}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <SubSection title="7.4 Fee Changes">
              <p>Aethera reserves the right to modify fee structures with 30 days' notice to registered users. Continued use of the Platform after such notice constitutes acceptance.</p>
            </SubSection>
            <SubSection title="7.5 Taxes">
              <p>Users are solely responsible for determining and fulfilling all tax obligations applicable to their transactions, including income tax, capital gains tax, GST (for Indian users), and any applicable withholding taxes.</p>
            </SubSection>
          </Section>

          {/* 08 */}
          <Section number="08" title="Yield Distributions">
            <SubSection title="8.1 Distribution Mechanism">
              <p>Yield distributions are triggered automatically by smart contracts upon receipt of verified kWh generation data from the Project's IoT oracle feed. Distributions are made in USDC stablecoin to the investor's registered wallet.</p>
            </SubSection>
            <SubSection title="8.2 Distribution Frequency">
              <p>Distribution frequency (monthly, quarterly) is defined per Project listing and governed by the applicable smart contract.</p>
            </SubSection>
            <SubSection title="8.3 No Yield Guarantee">
              <p>Aethera does not guarantee any minimum yield, distribution amount, or return on investment. Actual distributions depend entirely on:</p>
              <BulletList items={[
                'Actual electricity generated by the solar project.',
                'Accuracy and continuity of IoT monitoring data.',
                'Health and operational status of the installed system.',
                'Applicable tariff rates and revenue model of the project.',
              ]} />
            </SubSection>
            <SubSection title="8.4 Oracle Dependency">
              <p>If the IoT oracle feed is disrupted due to device failure, API downtime, or connectivity issues, distributions may be delayed. Aethera will communicate such delays but is not liable for delays caused by third-party monitoring systems outside its control.</p>
            </SubSection>
            <SubSection title="8.5 Stablecoin Risk">
              <p>Aethera does not guarantee the peg stability of any stablecoin used on the Platform. Users acknowledge and accept stablecoin-related risks.</p>
            </SubSection>
          </Section>

          {/* 09 */}
          <Section number="09" title="Risks & Investment Disclaimer">
            <div className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-4 mb-4">
              <p className="font-bold text-foreground">YOU SHOULD NOT INVEST MORE THAN YOU CAN AFFORD TO LOSE.</p>
            </div>
            <p>By participating as an investor on the Platform, you acknowledge and accept the following risks:</p>
            <BulletList items={[
              'Project performance risk: Solar projects may underperform due to weather, equipment failure, grid issues, or operational problems.',
              'Technology risk: Smart contracts may contain bugs; blockchain networks may experience downtime or forks.',
              "Oracle risk: IoT data may be inaccurate, delayed, or manipulated despite Aethera's validation measures.",
              'Regulatory risk: Laws governing tokenized assets, stablecoins, and digital investments may change in your jurisdiction.',
              'Liquidity risk: Tokens may have limited or no secondary market; you may not be able to exit before project tenor ends.',
              'Currency/stablecoin risk: Stablecoin values may fluctuate.',
              'EPC default risk: An EPC may fail to maintain the project, default on obligations, or become insolvent.',
              'Platform risk: Aethera is an early-stage company.',
            ]} />
            <p className="mt-4 font-semibold text-foreground">This Platform does not constitute financial advice, investment advice, or a solicitation to invest.</p>
          </Section>

          {/* 10 */}
          <Section number="10" title="EPC Obligations">
            <p>EPCs registered on the Platform agree to:</p>
            <BulletList items={[
              'Provide accurate and complete project documentation, technical specifications, and financial projections.',
              'Ensure IoT monitoring systems remain operational and connected throughout the project tenor.',
              'Notify Aethera within 24 hours of any material event affecting project performance, data integrity, or regulatory status.',
              'Maintain all required licenses, permits, and regulatory approvals for project operation.',
              'Not submit fraudulent, incomplete, or misleading project information.',
              'Honour all warranty and O&M commitments for the duration of the project.',
              "Cooperate fully with Aethera's audit and verification rights.",
            ]} />
            <p className="font-medium text-foreground">Breach of these obligations may result in account suspension, project delisting, and legal action.</p>
          </Section>

          {/* 11 */}
          <Section number="11" title="Prohibited Conduct">
            <p>Users shall NOT:</p>
            <BulletList items={[
              'Use the Platform for money laundering, terrorist financing, or any illegal financial activity.',
              'Submit false or fraudulent KYC documents, project information, or financial data.',
              'Attempt to hack, reverse-engineer, or disrupt the Platform or its smart contracts.',
              'Manipulate or tamper with IoT monitoring data or oracle feeds.',
              'Circumvent geographic restrictions using VPNs or other technical means.',
              'Use the Platform to solicit investments outside of the authorized Project listing process.',
              'Impersonate any person, entity, or Aethera representative.',
              'Engage in wash trading, price manipulation, or any deceptive market practices on the secondary market.',
            ]} />
            <p className="font-medium text-foreground">Violation may result in immediate account termination, forfeiture of funds, and criminal referral to appropriate authorities.</p>
          </Section>

          {/* 12 */}
          <Section number="12" title="Intellectual Property">
            <BulletList items={[
              'All content, software, smart contracts, interfaces, branding, logos, documentation, and methodologies on the Platform are the exclusive property of BayLeaf OÜ and/or Aethera Energy Private Limited.',
              'Users are granted a limited, non-exclusive, non-transferable license to access and use the Platform solely for its intended purpose.',
              'Users may not copy, modify, distribute, reverse-engineer, or create derivative works from any part of the Platform.',
              'Any feedback, suggestions, or ideas submitted by Users may be used by Aethera freely without compensation or attribution.',
            ]} />
          </Section>

          {/* 13 */}
          <Section number="13" title="Third-Party Services">
            <p>The Platform integrates with third-party services including but not limited to:</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['KYC Providers', 'Stellar Network', 'Soroban', 'Circle/USDC'].map((service) => (
                <span key={service} className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">
                  {service}
                </span>
              ))}
            </div>
            <p className="mt-4">Aethera is not responsible for the availability, accuracy, or conduct of third-party services. Use of third-party integrations is subject to their respective terms and policies.</p>
          </Section>

          {/* 14 */}
          <Section number="14" title="Limitation of Liability">
            <p>To the maximum extent permitted by applicable law:</p>
            <BulletList items={[
              "Aethera's total aggregate liability to any User shall not exceed the fees paid by that User to Aethera in the preceding 12 months.",
              'Aethera shall not be liable for any indirect, incidental, consequential, punitive, or special damages, including loss of profits, loss of data, or loss of investment.',
              'Aethera is not liable for losses arising from smart contract bugs, oracle failures, blockchain network issues, stablecoin de-pegging, EPC default, or regulatory changes.',
              'This limitation does not apply in cases of fraud, gross negligence, or wilful misconduct by Aethera.',
            ]} />
          </Section>

          {/* 15 */}
          <Section number="15" title="Indemnification">
            <p>You agree to indemnify, defend, and hold harmless BayLeaf OÜ, Aethera Energy Private Limited, their directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, or expenses arising from:</p>
            <BulletList items={[
              'Your breach of these Terms.',
              'Your violation of applicable law.',
              'Your fraudulent, negligent, or wilful conduct.',
              'Any third-party claims arising from your use of the Platform.',
            ]} />
          </Section>

          {/* 16 */}
          <Section number="16" title="Governing Law & Dispute Resolution">
            <SubSection title="16.1 Governing Law">
              <BulletList items={[
                'Laws of the Republic of Estonia apply to matters pertaining to BayLeaf OÜ.',
                'Laws of the Republic of India apply to matters pertaining to Aethera Energy Private Limited and Indian operations.',
              ]} />
            </SubSection>
            <SubSection title="16.2 Dispute Resolution">
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground w-12">Step</th>
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Process</th>
                      <th className="text-left py-3 font-bold text-foreground">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1', 'Written notice of dispute to Aethera', 'Day 0'],
                      ['2', 'Good faith negotiation between parties', '15 business days'],
                      ['3', 'Mediation (mutually agreed mediator)', '30 days'],
                      ['4', 'Binding arbitration', 'As per below'],
                    ].map(([step, process, timeline]) => (
                      <tr key={step} className="border-b border-border/50 last:border-0">
                        <td className="py-3 pr-4">
                          <span className="w-6 h-6 rounded-full bg-primary text-foreground text-xs font-bold inline-flex items-center justify-center">{step}</span>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">{process}</td>
                        <td className="py-3 text-muted-foreground font-medium">{timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="bg-muted rounded-xl px-4 py-3 text-sm">
                  <p className="font-semibold text-foreground mb-1">🇮🇳 Indian Users</p>
                  <p className="text-muted-foreground">Arbitration & Conciliation Act, 1996. Seat: Chennai, Tamil Nadu. Language: English.</p>
                </div>
                <div className="bg-muted rounded-xl px-4 py-3 text-sm">
                  <p className="font-semibold text-foreground mb-1">🌍 International Users</p>
                  <p className="text-muted-foreground">UNCITRAL Rules. Seat: Tallinn, Estonia. Language: English.</p>
                </div>
              </div>
            </SubSection>
            <SubSection title="16.3 Class Action Waiver">
              <p>Users waive any right to participate in class action lawsuits or class-wide arbitration against Aethera.</p>
            </SubSection>
          </Section>

          {/* 17 */}
          <Section number="17" title="Modifications to Terms">
            <p>Aethera reserves the right to update these Terms at any time. Material changes will be communicated via:</p>
            <BulletList items={['Email to registered users.', 'Prominent notice on the Platform.']} />
            <p>Continued use after the effective date of updated Terms constitutes acceptance. If you do not agree, you must cease using the Platform and request account closure.</p>
          </Section>

          {/* 18 */}
          <Section number="18" title="Termination">
            <BulletList items={[
              'Aethera may suspend or terminate your access to the Platform at any time with or without cause.',
              'Upon termination, your right to access the Platform ceases immediately.',
              'Active investments at the time of termination shall be managed in an orderly wind-down process, details of which will be communicated individually.',
              'Clauses 9, 12, 14, 15, 16, and 19 survive termination indefinitely.',
            ]} />
          </Section>

          {/* 19 */}
          <Section number="19" title="Miscellaneous">
            <BulletList items={[
              'Entire Agreement: These Terms, together with the Privacy Policy and any applicable Project Agreement, constitute the entire agreement between you and Aethera.',
              'Severability: If any provision is found invalid or unenforceable, the remaining provisions remain in full force.',
              'No Waiver: Failure to enforce any right under these Terms does not constitute a waiver of that right.',
              "Assignment: Aethera may assign its rights under these Terms to a successor entity. Users may not assign their rights without Aethera's written consent.",
              'Language: These Terms are drafted in English. In case of translation disputes, the English version prevails.',
            ]} />
          </Section>

          {/* 20 */}
          <Section number="20" title="Contact & Grievance Redressal">
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">General Queries</p>
                <a href="mailto:legal@getaethera.com" className="font-semibold text-foreground hover:text-primary transition-colors">
                  legal@getaethera.com
                </a>
              </div>
              <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">Indian Grievance Officer</p>
                <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                <p className="text-muted-foreground">Response within 30 days of receipt</p>
              </div>
              <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-2 sm:col-span-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">Estonian / International Matters</p>
                <p className="font-semibold text-foreground">BayLeaf OÜ - Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551</p>
                <a href="mailto:legal@bayleaf.ee" className="text-primary hover:underline">legal@bayleaf.ee</a>
              </div>
            </div>
          </Section>

        </article>
      </main>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-card mt-4">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Have questions about these terms?</p>
            <p className="font-semibold text-foreground mt-1">Our legal team is happy to clarify.</p>
          </div>
          <a
            href="mailto:legal@getaethera.com"
            className="px-7 py-3.5 bg-primary text-foreground font-bold rounded-full hover:bg-[#00b56b] transition-all transform hover:-translate-y-0.5 shadow-md shadow-primary/20 text-sm flex-shrink-0"
          >
            Contact Legal Team
          </a>
        </div>
      </section>

      <div className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2026 BayLeaf OÜ · Aethera Energy Private Limited</span>
          <span>Version 1.0 (Beta) · Subject to change</span>
        </div>
      </div>

    </div>
  );
};

export default TermsAndConditions;