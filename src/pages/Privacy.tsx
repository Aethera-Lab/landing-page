import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, FileText, ChevronDown, ChevronUp, Eye, Shield, Globe, Database } from 'lucide-react';

interface SectionProps {
  number: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Section: React.FC<SectionProps> = ({ number, title, icon, children, defaultOpen = false }) => {
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
          <div className="flex items-center gap-2.5">
            {icon && <span className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</span>}
            <h2 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
              {title}
            </h2>
          </div>
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

const DataTable: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto -mx-1 mt-2">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-border">
          {headers.map((h) => (
            <th key={h} className="text-left py-3 pr-6 font-bold text-foreground last:pr-0">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border/50 last:border-0">
            {row.map((cell, j) => (
              <td key={j} className="py-3 pr-6 last:pr-0 text-muted-foreground align-top">
                {j === 0 ? <span className="font-medium text-foreground">{cell}</span> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  const tocItems = [
    ['01', 'Introduction & Who We Are', <Globe size={14} />],
    ['02', 'Data We Collect', <Database size={14} />],
    ['03', 'Why We Collect Your Data', <Eye size={14} />],
    ['04', 'How We Use Your Data', <FileText size={14} />],
    ['05', 'Data Sharing & Disclosure', <Shield size={14} />],
    ['06', 'International Data Transfers', <Globe size={14} />],
    ['07', 'Data Retention', <Database size={14} />],
    ['08', 'Data Security', <Lock size={14} />],
    ['09', 'Your Rights', <Shield size={14} />],
    ['10', 'Cookies & Tracking', <Eye size={14} />],
    ['11', "Children's Privacy", <Shield size={14} />],
    ['12', 'Third-Party Links', <Globe size={14} />],
    ['13', 'Beta-Specific Data Notice', <FileText size={14} />],
    ['14', 'Changes to This Policy', <FileText size={14} />],
    ['15', 'Contact & DPO', <Lock size={14} />],
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
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary opacity-5 blur-2xl pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10">
              <Lock size={13} className="text-primary" />
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Privacy · Beta v1.0</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Privacy<br />
              <span className="text-primary">Policy.</span>
            </h1>
            <p className="text-lg text-background/60 leading-relaxed max-w-lg">
              We are committed to protecting your personal data. This policy explains what we collect, why we collect it, and how you can control it.
            </p>
          </div>

          <div className="flex flex-col gap-1 md:text-right text-sm text-background/40 font-medium">
            <span className="flex items-center md:justify-end gap-2">
              <FileText size={14} />
              Operated by
            </span>
            <span className="text-background/70 font-semibold">BayLeaf OÜ</span>
            <span className="text-background/50">getaethera.com</span>
            <span className="mt-2 text-background/40">Version 1.0 (Beta)</span>
          </div>
        </div>
      </section>

      {/* Jurisdiction Strip */}
      <div className="border-b border-border bg-card">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex flex-wrap gap-6 items-center">
          <span className="text-xs font-bold text-primary tracking-widest uppercase">Applies under</span>
          {[
            { flag: '🇪🇺', label: 'GDPR (EU/EEA)' },
            { flag: '🇮🇳', label: 'DPDPA 2023 (India)' },
            { flag: '🌍', label: 'All global users' },
          ].map(({ flag, label }) => (
            <span key={label} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <span>{flag}</span>
              {label}
            </span>
          ))}
          <span className="ml-auto text-xs text-muted-foreground hidden md:block">
            We do not sell your personal data. Ever.
          </span>
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
                key={num as string}
                href={`#section-${num}`}
                className="flex items-center gap-3 py-1.5 px-3 rounded-lg text-[13px] text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150 group"
              >
                <span className="text-[10px] font-mono font-bold text-primary/50 group-hover:text-primary transition-colors w-5 flex-shrink-0">
                  {num}
                </span>
                {label as string}
              </a>
            ))}
          </nav>

          {/* Quick trust badge */}
          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-xs font-bold text-primary mb-1">Our promise</p>
            <p className="text-xs text-muted-foreground leading-relaxed">We never sell your data. All processors are bound by GDPR-equivalent agreements.</p>
          </div>
        </aside>

        {/* Content */}
        <article className="bg-card rounded-2xl border border-border px-6 md:px-10 py-4 shadow-sm">

          {/* 01 */}
          <Section number="01" title="Introduction & Who We Are" icon={<Globe size={16} />} defaultOpen={true}>
            <p>
              BayLeaf OÜ ("we", "us", "our", "Company"), incorporated under the laws of the Republic of Estonia, operates the Aethera platform ("Platform") — a blockchain-based solar asset tokenization and investor yield distribution service accessible at <span className="text-foreground font-medium">getaethera.com</span>.
            </p>
            <p>We are committed to protecting the privacy and personal data of every user who interacts with our Platform — whether you are a solar EPC, installer, investor, or visitor.</p>
            <p>This Privacy Policy explains:</p>
            <BulletList items={[
              'What personal data we collect',
              'Why we collect it',
              'How we use, store, and protect it',
              'Your rights as a data subject',
              'How to contact us',
            ]} />
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              <div className="bg-muted rounded-xl px-4 py-3 text-sm">
                <p className="font-semibold text-foreground mb-1">🇮🇳 Indian Users</p>
                <p className="text-muted-foreground">Additionally governed by India's Digital Personal Data Protection Act, 2023 (DPDPA).</p>
              </div>
              <div className="bg-muted rounded-xl px-4 py-3 text-sm">
                <p className="font-semibold text-foreground mb-1">🇪🇺 EU/EEA Users</p>
                <p className="text-muted-foreground">Additionally governed by the General Data Protection Regulation (GDPR).</p>
              </div>
            </div>
          </Section>

          {/* 02 */}
          <Section number="02" title="Data We Collect" icon={<Database size={16} />}>
            <SubSection title="2.1 Data You Provide Directly">
              <p className="font-medium text-foreground text-sm mb-2">For all users (EPCs, Investors, Visitors):</p>
              <BulletList items={['Full name', 'Email address', 'Mobile number', 'Country of residence', 'Account login credentials (encrypted)']} />

              <p className="font-medium text-foreground text-sm mt-4 mb-2">For KYC / Identity Verification:</p>
              <BulletList items={[
                'Government-issued photo ID (Aadhaar, Passport, National ID)',
                'PAN card (Indian users)',
                'Proof of address (utility bill, bank statement)',
                'Selfie / liveness verification photograph',
                'Date of birth',
                'Nationality',
              ]} />

              <p className="font-medium text-foreground text-sm mt-4 mb-2">For Corporate / EPC Users:</p>
              <BulletList items={[
                'Company legal name and registration number',
                'GST/VAT number',
                'Director/partner names and KYC documents',
                'Bank account details (for fund disbursements)',
                'Company financials and project documentation',
              ]} />

              <p className="font-medium text-foreground text-sm mt-4 mb-2">For Investors:</p>
              <BulletList items={[
                'Source of funds declaration',
                'Investment preferences and risk profile',
                'Wallet address(es) for token receipt and stablecoin distributions',
                'Bank account details (if applicable for fiat on/off ramp)',
              ]} />
            </SubSection>

            <SubSection title="2.2 Data We Collect Automatically">
              <p>When you use the Platform, we automatically collect:</p>
              <BulletList items={[
                'IP address and approximate geolocation',
                'Device type, browser, and operating system',
                'Pages visited, time spent, and click patterns',
                'Session duration and login timestamps',
                'Cookies and similar tracking technologies (see Section 10)',
              ]} />
            </SubSection>

            <SubSection title="2.3 Data from Third Parties">
              <p>We may receive data about you from:</p>
              <BulletList items={[
                'KYC providers — identity verification results, watchlist screening',
                'Blockchain networks (Stellar/Soroban) — public transaction records',
                'IoT monitoring platforms (TrackSo, Huawei, SolarEdge) — energy generation data linked to your project',
                'Stablecoin/payment processors (USDC/Circle) — transaction confirmations',
                'Fraud detection services — risk scoring, AML screening results',
              ]} />
            </SubSection>
          </Section>

          {/* 03 */}
          <Section number="03" title="Why We Collect Your Data" icon={<Eye size={16} />}>
            <DataTable
              headers={['Purpose', 'Data Used', 'Legal Basis']}
              rows={[
                ['Account registration and access', 'Name, email, phone', 'Contract performance'],
                ['KYC/AML compliance', 'ID documents, PAN, selfie', 'Legal obligation'],
                ['Project onboarding (EPCs)', 'Company docs, financials', 'Contract performance'],
                ['Investment processing', 'Wallet address, source of funds', 'Contract performance'],
                ['Yield/stablecoin distributions', 'Wallet address, banking details', 'Contract performance'],
                ['Fraud prevention and security', 'IP, device data, transaction history', 'Legitimate interest / Legal obligation'],
                ['Platform improvement (Beta)', 'Usage data, feedback', 'Legitimate interest'],
                ['Marketing communications', 'Email, preferences', 'Consent (opt-in only)'],
                ['Legal and regulatory compliance', 'All relevant data', 'Legal obligation'],
                ['Dispute resolution', 'Account and transaction data', 'Legitimate interest / Legal obligation'],
                ['Tax reporting', 'Identity, transaction data', 'Legal obligation'],
              ]}
            />
            <div className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-3 mt-4">
              <p className="text-sm font-medium text-foreground">
                We do not use your personal data for automated decision-making or profiling that produces legal effects, unless explicitly stated and consented to.
              </p>
            </div>
          </Section>

          {/* 04 */}
          <Section number="04" title="How We Use Your Data" icon={<FileText size={16} />}>
            <SubSection title="4.1 Platform Operations">
              <BulletList items={[
                'Creating and managing your account',
                'Verifying your identity and eligibility',
                'Processing investments, token issuances, and yield distributions',
                'Sending transaction confirmations and platform notifications',
              ]} />
            </SubSection>
            <SubSection title="4.2 Compliance">
              <BulletList items={[
                'Conducting KYC/AML screening',
                'Screening against OFAC, EU, UN, and other sanctions lists',
                'Reporting to regulatory authorities as required by law',
                'Maintaining audit trails for financial transactions',
              ]} />
            </SubSection>
            <SubSection title="4.3 Security">
              <BulletList items={[
                'Detecting and preventing fraud, unauthorized access, and suspicious activity',
                'Monitoring platform health and integrity',
                'Investigating security incidents',
              ]} />
            </SubSection>
            <SubSection title="4.4 Communications">
              <BulletList items={[
                'Sending essential service communications (account updates, security alerts, transaction confirmations)',
                'Sending marketing communications only with your explicit consent',
                'Responding to support queries and complaints',
              ]} />
            </SubSection>
            <SubSection title="4.5 Product Improvement (Beta)">
              <BulletList items={[
                'Analyzing usage patterns to improve platform UX',
                'Processing feedback and testimonials (with consent)',
                'Internal research and analytics',
              ]} />
            </SubSection>
          </Section>

          {/* 05 */}
          <Section number="05" title="Data Sharing & Disclosure" icon={<Shield size={16} />}>
            <div className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-3 mb-4">
              <p className="font-bold text-foreground">We do not sell your personal data. Ever.</p>
            </div>
            <p>We share your data only in the following circumstances:</p>

            <SubSection title="5.1 Service Providers (Data Processors)">
              <DataTable
                headers={['Provider Type', 'Purpose']}
                rows={[
                  ['KYC/AML verification providers', 'Identity verification and screening'],
                  ['Cloud hosting (AWS)', 'Platform infrastructure and data storage'],
                  ['IoT monitoring platforms', 'Energy data integration'],
                  ['Blockchain network (Stellar)', 'Transaction processing — note: blockchain data is public'],
                  ['Stablecoin processors (Circle/USDC)', 'Payment settlement'],
                  ['Email service providers', 'Communications'],
                  ['Analytics tools', 'Platform usage analysis'],
                ]}
              />
              <p className="mt-3 text-sm">All processors are bound by data processing agreements ensuring GDPR-equivalent protections.</p>
            </SubSection>

            <SubSection title="5.2 Legal & Regulatory Disclosure">
              <p>We may disclose your data to:</p>
              <BulletList items={[
                'Regulatory authorities (SEBI, RBI, ESMA, FIU) when legally required',
                'Law enforcement agencies with valid legal process',
                'Courts or arbitral tribunals in connection with legal proceedings',
              ]} />
            </SubSection>

            <SubSection title="5.3 Business Transfers">
              <p>In the event of a merger, acquisition, or sale of assets, your data may be transferred to the successor entity. You will be notified in advance with opt-out options where legally required.</p>
            </SubSection>

            <SubSection title="5.4 With Your Consent">
              <p>We may share your data with third parties for purposes not listed above only with your explicit prior consent.</p>
            </SubSection>
          </Section>

          {/* 06 */}
          <Section number="06" title="International Data Transfers" icon={<Globe size={16} />}>
            <p>BayLeaf OÜ is incorporated in Estonia (EU). Your data may be transferred to and processed in:</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                { region: 'Estonia / EU', detail: 'Primary operations' },
                { region: 'India', detail: 'EPC operations, project data' },
                { region: 'United States', detail: 'AWS cloud infrastructure, Circle/USDC' },
                { region: 'Other countries', detail: 'Where our service providers operate' },
              ].map(({ region, detail }) => (
                <div key={region} className="flex items-start gap-3 bg-muted rounded-xl px-4 py-3 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">{region}</span>
                    <span className="text-muted-foreground"> — {detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="bg-muted rounded-xl px-4 py-3 text-sm">
                <p className="font-semibold text-foreground mb-1">🇪🇺 EU/EEA Users</p>
                <p className="text-muted-foreground">Transfers conducted under Standard Contractual Clauses (SCCs) approved by the European Commission, or other GDPR-compliant mechanisms.</p>
              </div>
              <div className="bg-muted rounded-xl px-4 py-3 text-sm">
                <p className="font-semibold text-foreground mb-1">🇮🇳 Indian Users</p>
                <p className="text-muted-foreground">Transfers comply with India's Digital Personal Data Protection Act, 2023 cross-border transfer provisions.</p>
              </div>
            </div>
          </Section>

          {/* 07 */}
          <Section number="07" title="Data Retention" icon={<Database size={16} />}>
            <p>We retain your personal data for as long as necessary to fulfill the purposes described in this Policy:</p>
            <DataTable
              headers={['Data Type', 'Retention Period']}
              rows={[
                ['Account and KYC data', '5 years after account closure (AML compliance)'],
                ['Transaction and investment records', '7 years (financial regulations)'],
                ['Project documentation (EPCs)', '7 years after project completion'],
                ['IoT/energy generation data', '7 years per project'],
                ['Marketing consent records', 'Until consent withdrawn + 3 years'],
                ['Support and communication records', '3 years after resolution'],
                ['Security/fraud logs', '2 years'],
                ['Cookie/analytics data', 'Max 13 months'],
              ]}
            />
            <p className="mt-3">After retention periods expire, data is <span className="font-medium text-foreground">securely deleted or anonymized</span>.</p>
          </Section>

          {/* 08 */}
          <Section number="08" title="Data Security" icon={<Lock size={16} />}>
            <SubSection title="Technical Measures">
              <BulletList items={[
                'AES-256 encryption for data at rest',
                'TLS 1.3 encryption for data in transit',
                'Multi-factor authentication (MFA) for account access',
                'Role-based access controls (RBAC) — minimum access principle',
                'Regular penetration testing and security audits',
                'Immutable audit logs for all data access events',
                'Secure document storage on IPFS/Arweave for project documents',
              ]} />
            </SubSection>
            <SubSection title="Organizational Measures">
              <BulletList items={[
                'Staff data protection training',
                'Confidentiality agreements for all team members and contractors',
                'Data breach response protocol (72-hour notification to authorities as required by GDPR)',
                'Third-party vendor security assessments',
              ]} />
            </SubSection>
            <div className="bg-muted rounded-xl px-5 py-3 text-sm mt-2">
              <p className="font-semibold text-foreground mb-1">Note on Blockchain Data</p>
              <p className="text-muted-foreground">Transactions recorded on the Stellar blockchain are publicly visible and immutable. Wallet addresses and transaction amounts may be publicly viewable. We minimize on-chain personal data to wallet addresses only.</p>
            </div>
          </Section>

          {/* 09 */}
          <Section number="09" title="Your Rights" icon={<Shield size={16} />}>
            <SubSection title="9.1 Rights for EU/EEA Users (GDPR)">
              <DataTable
                headers={['Right', 'What It Means']}
                rows={[
                  ['Access', 'Request a copy of all personal data we hold about you'],
                  ['Rectification', 'Request correction of inaccurate or incomplete data'],
                  ['Erasure ("Right to be Forgotten")', 'Request deletion of your data (subject to legal retention requirements)'],
                  ['Restriction', 'Request we restrict processing of your data'],
                  ['Portability', 'Receive your data in a structured, machine-readable format'],
                  ['Objection', 'Object to processing based on legitimate interest or direct marketing'],
                  ['Withdraw Consent', 'Withdraw any consent given at any time'],
                  ['Lodge a Complaint', 'File a complaint with the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon) at www.aki.ee'],
                ]}
              />
            </SubSection>

            <SubSection title="9.2 Rights for Indian Users (DPDPA 2023)">
              <p>As an Indian user, you have the right to:</p>
              <BulletList items={[
                'Access a summary of your personal data processed by us',
                'Correction and erasure of inaccurate or no-longer-necessary data',
                'Grievance redressal — raise complaints with our Data Protection Officer',
                'Nominate a representative to exercise rights on your behalf in case of incapacitation or death',
              ]} />
              <div className="bg-muted rounded-xl px-5 py-4 text-sm mt-3 space-y-1">
                <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">Grievance Officer</p>
                <a href="mailto:privacy@getaethera.com" className="font-semibold text-foreground hover:text-primary transition-colors">privacy@getaethera.com</a>
                <p className="text-muted-foreground">Response within 30 days of receipt of complaint</p>
              </div>
            </SubSection>

            <SubSection title="9.3 Rights for All Other Users">
              <p>Regardless of jurisdiction, all Aethera users may:</p>
              <BulletList items={[
                'Request access to their personal data',
                'Request correction of inaccurate data',
                'Request account deletion (subject to legal retention requirements)',
                'Opt out of marketing communications at any time',
              ]} />
              <p className="mt-3">To exercise any of these rights, contact us at:{' '}
                <a href="mailto:privacy@getaethera.com" className="text-primary hover:underline font-medium">privacy@getaethera.com</a>.
                We will respond within <span className="font-medium text-foreground">30 days</span> of a verified request.
              </p>
            </SubSection>
          </Section>

          {/* 10 */}
          <Section number="10" title="Cookies & Tracking" icon={<Eye size={16} />}>
            <SubSection title="10.1 What We Use">
              <DataTable
                headers={['Cookie Type', 'Purpose', 'Duration']}
                rows={[
                  ['Essential', 'Platform functionality, session management', 'Session'],
                  ['Security', 'Fraud detection, authentication', '30 days'],
                  ['Analytics', 'Platform usage and improvement', '13 months'],
                  ['Marketing', 'Personalized communications (with consent)', '13 months'],
                ]}
              />
            </SubSection>
            <SubSection title="10.2 Your Cookie Choices">
              <BulletList items={[
                'On first visit, you will be presented with a cookie consent banner.',
                'You may accept all, reject non-essential, or customize your preferences.',
                'You can change cookie preferences at any time via the Cookie Settings link in the Platform footer.',
                'Rejecting non-essential cookies will not affect your ability to use core Platform features.',
              ]} />
            </SubSection>
          </Section>

          {/* 11 */}
          <Section number="11" title="Children's Privacy" icon={<Shield size={16} />}>
            <p>
              The Aethera Platform is <span className="font-semibold text-foreground">not intended for persons under 18 years of age</span>. We do not knowingly collect personal data from minors. If we become aware that a minor has registered on the Platform, we will immediately delete their account and associated data.
            </p>
            <p>
              If you believe a minor has provided us with personal data, please contact{' '}
              <a href="mailto:privacy@getaethera.com" className="text-primary hover:underline">privacy@getaethera.com</a> immediately.
            </p>
          </Section>

          {/* 12 */}
          <Section number="12" title="Third-Party Links" icon={<Globe size={16} />}>
            <p>
              The Platform may contain links to third-party websites, monitoring dashboards, or blockchain explorers. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you interact with.
            </p>
          </Section>

          {/* 13 */}
          <Section number="13" title="Beta-Specific Data Notice" icon={<FileText size={16} />}>
            <div className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-4">
              <p className="font-bold text-foreground mb-3">During the Beta phase:</p>
              <BulletList items={[
                'Additional usage data may be collected to improve the Platform.',
                'Beta users may be invited to participate in feedback sessions or interviews — participation is entirely voluntary.',
                'Testimonials or feedback submitted during Beta may be used in marketing materials only with your explicit written consent.',
                'Beta data may be reset or deleted upon transition to public launch, with advance notice provided.',
              ]} />
            </div>
          </Section>

          {/* 14 */}
          <Section number="14" title="Changes to This Policy" icon={<FileText size={16} />}>
            <p>We may update this Privacy Policy from time to time. When we make material changes:</p>
            <BulletList items={[
              'We will notify registered users by email.',
              'We will display a prominent notice on the Platform.',
              'The "Effective Date" at the top of this Policy will be updated.',
            ]} />
            <p>Continued use of the Platform after the effective date of changes constitutes your acceptance of the updated Policy. If you do not agree, you must cease using the Platform and request account deletion.</p>
          </Section>

          {/* 15 */}
          <Section number="15" title="Contact & Data Protection Officer" icon={<Lock size={16} />}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">General Privacy Queries</p>
                <a href="mailto:privacy@getaethera.com" className="font-semibold text-foreground hover:text-primary transition-colors block">privacy@getaethera.com</a>
              </div>

              <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">Data Protection Officer (DPO)</p>
                <a href="mailto:dpo@aethera.xyz" className="font-semibold text-foreground hover:text-primary transition-colors block">dpo@getaethera.com</a>
              </div>

              <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">Data Controller</p>
                <p className="font-semibold text-foreground">BayLeaf OÜ</p>
                <p className="text-muted-foreground">Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551</p>
              </div>

              <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">Grievance Officer (India — DPDPA)</p>
                <a href="mailto:privacy@getaethera.com" className="font-semibold text-foreground hover:text-primary transition-colors block">privacy@getaethera.com</a>
                <p className="text-muted-foreground">Response within 30 days</p>
              </div>

              <div className="bg-muted rounded-xl px-5 py-4 text-sm space-y-2 sm:col-span-2">
                <p className="text-xs font-bold text-primary tracking-widest uppercase">Supervisory Authority (EU/EEA)</p>
                <p className="font-semibold text-foreground">Estonian Data Protection Inspectorate</p>
                <p className="text-muted-foreground">Andmekaitse Inspektsioon</p>
                {/*<div className="flex flex-wrap gap-3 mt-1">
                  <a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">www.aki.ee</a>
                  <a href="mailto:info@aki.ee" className="text-primary hover:underline text-sm">info@aki.ee</a>
                </div>*/}
              </div>
            </div>
          </Section>

        </article>
      </main>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-card mt-4">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Questions about your privacy or data rights?</p>
            <p className="font-semibold text-foreground mt-1">Our Data Protection Officer is here to help.</p>
          </div>
          <a
            href="mailto:privacy@aethera.xyz"
            className="px-7 py-3.5 bg-primary text-foreground font-bold rounded-full hover:bg-[#00b56b] transition-all transform hover:-translate-y-0.5 shadow-md shadow-primary/20 text-sm flex-shrink-0"
          >
            Contact Privacy Team
          </a>
        </div>
      </section>

      <div className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2026 BayLeaf OÜ. All rights reserved.</span>
          <span>Version 1.0 (Beta) · Effective from Beta launch date</span>
        </div>
      </div>

    </div>
  );
};

export default Privacy;