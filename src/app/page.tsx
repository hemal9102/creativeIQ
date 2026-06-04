
"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [websiteActive, setWebsiteActive] = useState(true);
  const [seoActive, setSeoActive] = useState(true);
  const [socialActive, setSocialActive] = useState(true);

  const oneTimeTotal = websiteActive ? 15000 : 0;
  const monthlyTotal = (seoActive ? 3000 : 0) + (socialActive ? 7000 : 0);
  
  const selectedNames = [];
  if (websiteActive) selectedNames.push('Website');
  if (seoActive) selectedNames.push('SEO');
  if (socialActive) selectedNames.push('Social Media');

  let bonusText = '';
  if (websiteActive && seoActive && socialActive) {
    bonusText = '✨ All 3 Selected: Free CRM Integration & WhatsApp Lead Flow Setup Included (Worth ₹5,000!)';
  } else if (selectedNames.length > 0) {
    bonusText = '⚡ Custom bundle selected. Free growth consultation included!';
  } else {
    bonusText = '❌ Please select at least one package above to see your customized pricing.';
  }

  const selectedText = selectedNames.length > 0 ? selectedNames.join(' + ') : 'No packages selected';

  return (
    <>
      
  <div className="bg-glow"></div>
  <nav className="nav">
    <div className="container nav-inner">
      <a href="#" className="logo"><img src="/resources/1.png" alt="Creative IQ" /></a>
      <div className="nav-links">
        <a href="#pillars">Pillars</a><a href="#services">Services</a><a href="#campaigns">Campaigns</a><a href="#packages">Packages</a><a href="#plan">30-Day Plan</a><a href="#contact" className="btn">Get Free Audit</a>
      </div>
    </div>
  </nav>

  <header className="hero">
    <div className="container hero-grid">
      <div>
        <div className="eyebrow">⚡ AI-Optimized Growth Systems</div>
        <h1>Dominate Your Local Market With <span className="gradient-text">Creative IQ</span></h1>
        <p className="lead">We’ve moved past traditional marketing. We build AI-optimized growth systems that work while you sleep. Lower administrative friction, higher patient trust, and predictable growth—without the manual grind.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn">Get Free Growth Audit →</a>
          <a href="#system" className="btn secondary">See The System</a>
        </div>
        <div className="proof">
          <div className="proof-card"><strong>AI</strong><span>Automation-first marketing</span></div>
          <div className="proof-card"><strong>0₹</strong><span>Low-investment growth model</span></div>
          <div className="proof-card"><strong>Lead</strong><span>Not just likes & posts</span></div>
        </div>
      </div>
      <div className="hero-img-wrap" id="system">
        <img src="/resources/2.png" alt="Creative IQ Expert" />
      </div>
    </div>
  </header>

  <section>
    <div className="container compare">
      <div className="section-head" style={{textAlign: "left", margin: "0 0 8px", maxWidth: "900px"}}>
        <h2>Agencies give you posts. We give you a lead machine.</h2>
        <p>Creative content is not enough. Your business needs a system that generates, captures, follows up, and tracks leads.</p>
      </div>
      <div className="compare-grid">
        <div className="compare-box"><h3>Normal Agency</h3><ul><li>✦ Social media posts</li><li>✦ Random reels</li><li>✦ Captions and branding</li><li>✦ Likes-focused reporting</li></ul></div>
        <div className="compare-box"><h3>AI Growth Lab</h3><ul><li>✦ Reel-to-lead funnels</li><li>✦ WhatsApp inquiry system</li><li>✦ AI reply and follow-up</li><li>✦ Lead tracking and reports</li></ul></div>
      </div>
    </div>
  </section>

  <section id="pillars">
    <div className="container">
      <div className="section-head">
        <span className="badge">Growth-First Stack</span>
        <h2 style={{marginTop: "12px"}}>Our "Growth-First" Stack</h2>
        <p>We help medical practices and businesses dominate their local market using our AI-optimized growth systems.</p>
      </div>
      <div className="pillars-grid">
        {/*  */}
        <div className="pillar-card">
          <div className="pillar-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <h3>SEO & AEO</h3>
          <p>We don’t just rank for keywords; we ensure your practice is the answer when patients ask AI assistants for help.</p>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Answer Engine Optimization</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>High-Intent Keyword Targeting</span>
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="pillar-card">
          <div className="pillar-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <h3>GEO (Google Engine Optimization)</h3>
          <p>We turn your Google Business Profile into a 24/7 lead machine with automated review loops and local authority building.</p>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Automated Review Loops</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Local Authority Building</span>
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="pillar-card">
          <div className="pillar-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          </div>
          <h3>AI-Driven Software & Web</h3>
          <p>Custom, high-performance websites that function as your 24/7 digital receptionist, driving predictability to your workflow.</p>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>High-Performance Websites</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>24/7 Digital Receptionist</span>
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="pillar-card">
          <div className="pillar-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <h3>Conversion-Focused Social</h3>
          <p>No vanity metrics. We focus on educational content that builds trust and shortens your sales cycle.</p>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Educational Content</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Shorter Sales Cycles</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="services">
    <div className="container">
      <div className="section-head"><h2>What We Build</h2><p>A complete growth system for clinics, coaching classes, salons, restaurants, real estate brokers, and local service providers.</p></div>
      <div className="grid grid-3">
        <div className="card"><span className="badge">Funnel</span><h3>AI Lead Funnel</h3><p>Landing page, WhatsApp CTA, lead forms, CRM and follow-up system.</p></div>
        <div className="card"><span className="badge">Content</span><h3>Content Engine</h3><p>Reels, hooks, captions, carousels, offers and local festival content.</p></div>
        <div className="card"><span className="badge">Automation</span><h3>AI Assistant</h3><p>FAQ bot, appointment flow, lead qualification, auto-replies and booking support.</p></div>
        <div className="card"><span className="badge">Local</span><h3>Local Growth</h3><p>Google Business Profile, reviews, map ranking basics and location pages.</p></div>
        <div className="card"><span className="badge">Reports</span><h3>Weekly Reporting</h3><p>Leads generated, source tracking, best content and next-week action plan.</p></div>
        <div className="card"><span className="badge">Tool</span><h3>Content-to-Funnel Generator</h3><p>AI system that creates hooks, captions, ad copies, landing page copy and WhatsApp scripts.</p></div>
      </div>
    </div>
  </section>

  <section id="packages" className="pricing">
    <div className="container">
      <div className="section-head">
        <span className="badge">Interactive Configurator</span>
        <h2 style={{marginTop: "12px"}}>Build Your Custom Package</h2>
        <p>Choose exactly what your business needs. Toggle individual packages below to see your real-time investment calculation.</p>
      </div>
      <div className="grid grid-3">
        {/*  */}
        <div id="card-website" className={`card pricing-card ${websiteActive ? "pricing-active" : ""}`} onClick={(e) => e.stopPropagation()}>
          <div className="pricing-card-header">
            <span className="badge" style={{marginBottom: 0}}>Website</span>
            <label className="calc-toggle" onClick={(e) => { e.stopPropagation(); if ((e.target as HTMLElement).closest("#card-website")) setWebsiteActive(!websiteActive); else if ((e.target as HTMLElement).closest("#card-seo")) setSeoActive(!seoActive); else if ((e.target as HTMLElement).closest("#card-social")) setSocialActive(!socialActive); }}>
              <input type="checkbox" id="toggle-website" checked={websiteActive} onChange={() => setWebsiteActive(!websiteActive)} />
              <span className="calc-toggle-slider"></span>
            </label>
          </div>
          <h3>Website Development</h3>
          <div className="price">₹15,000 <span style={{fontSize: "14px", fontWeight: 600, color: "var(--muted)"}}>one-time</span></div>
          <ul>
            <li><span className="check">✓</span>Custom Business Website</li>
            <li><span className="check">✓</span>15–20 Webpages</li>
            <li><span className="check">✓</span>Mobile Responsive Design</li>
            <li><span className="check">✓</span>Basic SEO-Friendly Structure</li>
            <li><span className="check">✓</span>Contact Form Integration</li>
            <li><span className="check">✓</span>WhatsApp Integration</li>
            <li><span className="check">✓</span>Fast Loading Optimization</li>
            <li><span className="check">✓</span>Social Media Integration</li>
            <li><span className="check">✓</span>Google Maps Integration</li>
            <li><span className="check">✓</span>SSL Setup</li>
            <li><span className="check">✓</span>Admin Panel Access</li>
          </ul>
        </div>

        {/*  */}
        <div id="card-seo" className={`card pricing-card ${seoActive ? "pricing-active" : ""}`} onClick={(e) => { e.stopPropagation(); if ((e.target as HTMLElement).closest("#card-website")) setWebsiteActive(!websiteActive); else if ((e.target as HTMLElement).closest("#card-seo")) setSeoActive(!seoActive); else if ((e.target as HTMLElement).closest("#card-social")) setSocialActive(!socialActive); }}>
          <div className="pricing-card-header">
            <span className="badge" style={{marginBottom: 0}}>SEO</span>
            <label className="calc-toggle" onClick={(e) => { e.stopPropagation(); if ((e.target as HTMLElement).closest("#card-website")) setWebsiteActive(!websiteActive); else if ((e.target as HTMLElement).closest("#card-seo")) setSeoActive(!seoActive); else if ((e.target as HTMLElement).closest("#card-social")) setSocialActive(!socialActive); }}>
              <input type="checkbox" id="toggle-seo" checked={seoActive} onChange={() => setSeoActive(!seoActive)} />
              <span className="calc-toggle-slider"></span>
            </label>
          </div>
          <h3>Search Engine Optimization</h3>
          <div className="price">₹3,000 <span style={{fontSize: "14px", fontWeight: 600, color: "var(--muted)"}}>/month</span></div>
          <ul>
            <li><span className="check">✓</span>5 Keyword Targeting</li>
            <li><span className="check">✓</span>On-Page SEO Optimization</li>
            <li><span className="check">✓</span>Meta Title & Description Setup</li>
            <li><span className="check">✓</span>Image Alt Tag Optimization</li>
            <li><span className="check">✓</span>Google Search Console Setup</li>
            <li><span className="check">✓</span>Sitemap Submission</li>
            <li><span className="check">✓</span>Basic Technical SEO</li>
            <li><span className="check">✓</span>Monthly SEO Monitoring</li>
          </ul>
        </div>

        {/*  */}
        <div id="card-social" className={`card pricing-card ${socialActive ? "pricing-active" : ""}`} onClick={(e) => { e.stopPropagation(); if ((e.target as HTMLElement).closest("#card-website")) setWebsiteActive(!websiteActive); else if ((e.target as HTMLElement).closest("#card-seo")) setSeoActive(!seoActive); else if ((e.target as HTMLElement).closest("#card-social")) setSocialActive(!socialActive); }}>
          <div className="pricing-card-header">
            <span className="badge" style={{marginBottom: 0}}>Social</span>
            <label className="calc-toggle" onClick={(e) => { e.stopPropagation(); if ((e.target as HTMLElement).closest("#card-website")) setWebsiteActive(!websiteActive); else if ((e.target as HTMLElement).closest("#card-seo")) setSeoActive(!seoActive); else if ((e.target as HTMLElement).closest("#card-social")) setSocialActive(!socialActive); }}>
              <input type="checkbox" id="toggle-social" checked={socialActive} onChange={() => setSocialActive(!socialActive)} />
              <span className="calc-toggle-slider"></span>
            </label>
          </div>
          <h3>Social Media Management</h3>
          <div className="price">₹7,000 <span style={{fontSize: "14px", fontWeight: 600, color: "var(--muted)"}}>/month</span></div>
          <ul>
            <li><span className="check">✓</span>4 Professional Posts</li>
            <li><span className="check">✓</span>4 Creative Reels</li>
            <li><span className="check">✓</span>Weekly Posting Schedule</li>
            <li><span className="check">✓</span>Caption Writing</li>
            <li><span className="check">✓</span>Hashtag Research</li>
            <li><span className="check">✓</span>Content Planning</li>
            <li><span className="check">✓</span>Brand Consistency Management</li>
            <li><span className="check">✓</span>Social Media Optimization</li>
          </ul>
        </div>
      </div>

      {/*  */}
      <div className="pricing-total-box">
        <div className="pricing-total-inner">
          <div className="pricing-cost-row">
            <div className="pricing-cost-item">
              <div className="pricing-cost-label">One-Time Investment</div>
              <div className="pricing-cost-value" id="calc-onetime">₹{oneTimeTotal.toLocaleString("en-IN")}</div>
            </div>
            <div className="pricing-cost-item">
              <div className="pricing-cost-label">Monthly retainer</div>
              <div className="pricing-cost-value" id="calc-monthly">₹{monthlyTotal.toLocaleString("en-IN")}</div>
            </div>
          </div>
          <div style={{textAlign: "center"}}>
            <div className="pricing-cost-label">Selected Features</div>
            <div className="pricing-selected-list" id="calc-selected">{selectedText}</div>
            <div id="calc-bonus" style={{fontSize: "12.5px", fontWeight: 700, color: "#ffd3ff", marginTop: "8px"}}>{bonusText}</div>
          </div>
          <a id="pricing-whatsapp-btn" className="pricing-cta-btn" href="#" target="_blank" rel="noopener">Secure This Custom Plan →</a>
        </div>
      </div>
    </div>
  </section>

  <section id="campaigns" className="campaigns-sec">
    <div className="container">
      <div className="section-head">
        <span className="badge">Signature Playbooks</span>
        <h2 style={{marginTop: "12px"}}>3 Ready-to-Launch Campaigns</h2>
        <p>Acquire clients and build immense brand trust instantly with our pre-engineered viral marketing & growth blueprints.</p>
      </div>
      <div className="campaigns-grid">
        {/*  */}
        <div className="campaign-card">
          <div className="campaign-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>Offer Funnel</span>
          </div>
          <h3>Digital Marketing Plan Offer (Post/Reel)</h3>
          <p className="campaign-desc">Convert casual viewers into qualified leads with highly targeted social media reels and posts offering a personalized free growth blueprint.</p>
          <div className="campaign-blueprint">
            <div className="campaign-blueprint-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Campaign Blueprint</span>
            </div>
            <p>1 hook-heavy reel + 1 high-converting post + 1 automated lead-magnet DM funnel that routes users directly into your WhatsApp.</p>
          </div>
          <ul className="campaign-features">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Premium Reel Scripting & Editing</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>DM-to-WhatsApp Funnel Automation</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>High-Value Lead Magnets Creation</span>
            </li>
          </ul>
          <a href="https://wa.me/917069896317?text=Hi%2C%20I%20want%20to%20launch%20the%20Digital%20Marketing%20Offer%20Campaign" target="_blank" rel="noopener" className="campaign-action campaign-action-primary">Launch Campaign →</a>
        </div>

        {/*  */}
        <div className="campaign-card">
          <div className="campaign-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span>Incubator</span>
          </div>
          <h3>Creator & Influencer Incubator</h3>
          <p className="campaign-desc">Empower small creators and guide aspiring individuals to build authority, scale organic reach, and establish magnetic personal brands.</p>
          <div className="campaign-blueprint">
            <div className="campaign-blueprint-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Campaign Blueprint</span>
            </div>
            <p>Complete creator roadmap: Profile audit, lighting & editing set-up, 15 pre-written short-form hooks, and weekly pacing calls.</p>
          </div>
          <ul className="campaign-features">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Personal Authority Visual Design</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Short-Form Content System Setup</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Audience Growth & Monetization Plan</span>
            </li>
          </ul>
          <a href="https://wa.me/917069896317?text=Hi%2C%20I%20want%20to%20learn%20about%20the%20Creator%20Growth%20Incubator" target="_blank" rel="noopener" className="campaign-action campaign-action-primary">Join Incubator →</a>
        </div>

        {/*  */}
        <div className="campaign-card">
          <div className="campaign-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            <span>Brand Engine</span>
          </div>
          <h3>Influencer Marketing Engine</h3>
          <p className="campaign-desc">Harness the viral power of micro-influencers. We source, contract, and curate local creators to drive direct social trust and hyper-local awareness.</p>
          <div className="campaign-blueprint">
            <div className="campaign-blueprint-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Campaign Blueprint</span>
            </div>
            <p>Curated micro-influencer outreach network, co-branded campaign reels, customized promo discount codes, and ROI tracking.</p>
          </div>
          <ul className="campaign-features">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Niche-Relevant Creator Sourcing</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>End-to-End Content Coordination</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Clear Performance & Tracking Metrics</span>
            </li>
          </ul>
          <a href="https://wa.me/917069896317?text=Hi%2C%20I%20want%20to%20scale%20using%20the%20Influencer%20Marketing%20Engine" target="_blank" rel="noopener" className="campaign-action campaign-action-primary">Run Campaigns →</a>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="container">
      <div className="section-head"><h2>Best Niches To Start</h2><p>Start with one niche where leads have high value and business owners understand the need for inquiries.</p></div>
      <div className="grid grid-3">
        <div className="card"><h3>Clinics & Doctors</h3><p>AI appointment and patient inquiry system.</p></div>
        <div className="card"><h3>Coaching Classes</h3><p>AI admission inquiry + reels + WhatsApp follow-up.</p></div>
        <div className="card"><h3>Real Estate</h3><p>Property lead funnel with WhatsApp automation.</p></div>
        <div className="card"><h3>Restaurants & Cafes</h3><p>Reels + Google Maps + WhatsApp ordering growth system.</p></div>
        <div className="card"><h3>Salons & Beauty Clinics</h3><p>Instagram-to-booking AI system.</p></div>
        <div className="card"><h3>Local Services</h3><p>Search visibility, lead capture and follow-up automation.</p></div>
      </div>
    </div>
  </section>

  <section id="plan">
    <div className="container">
      <div className="section-head"><h2>30-Day Launch Plan</h2><p>Use zero investment and prove the idea with demos, outreach, and founder pricing.</p></div>
      <div className="timeline">
        <div className="card time-card"><h3>Week 1</h3><p>Choose niche, create brand, build one-page website, demo funnel, 10 sample reels and pitch deck.</p></div>
        <div className="card time-card"><h3>Week 2</h3><p>Contact 100 businesses, offer free audit, create personalized demos and book calls.</p></div>
        <div className="card time-card"><h3>Week 3</h3><p>Close first 2–3 clients with founder pricing and collect advance payment.</p></div>
        <div className="card time-card"><h3>Week 4</h3><p>Deliver results, show reports, collect testimonials and create case studies.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div className="container">
      <div className="section-head"><h2>Weekly Client Workflow</h2><p>A repeatable system your team can execute every week.</p></div>
      <div className="workflow"><div className="days">
        <div className="day"><b>Monday</b><span>AI research, content plan, offer selection</span></div>
        <div className="day"><b>Tuesday</b><span>Scripts, hooks, shoot/edit plan</span></div>
        <div className="day"><b>Wednesday</b><span>Video editing and landing page updates</span></div>
        <div className="day"><b>Thursday</b><span>Posting and WhatsApp flow testing</span></div>
        <div className="day"><b>Friday</b><span>Lead tracking and client report</span></div>
        <div className="day"><b>Saturday</b><span>Optimize next week and collect testimonials</span></div>
      </div></div>
    </div>
  </section>

  <section id="contact" className="cta">
    <div className="container">
      <div className="cta-box">
        <h2>Views are vanity. <span className="gradient-text">Leads are proof.</span></h2>
        <p>Get a free mini demo: 3 reel ideas, one landing page preview, and a WhatsApp lead flow for your business.</p>
        <a className="btn" href="https://wa.me/917069896317?text=Hi%2C%20I%20want%20a%20free%20AI%20growth%20audit" target="_blank" rel="noopener">Chat on WhatsApp →</a>
      </div>
    </div>
  </section>

  <footer>
    <div className="container footer-inner">
      <img src="/resources/1.png" alt="Creative IQ" style={{height: "44px", width: "auto", objectFit: "contain"}} />
      <span>Digital Marketing & Website Development</span>
      <span>© 2026 Creative IQ. All rights reserved.</span>
    </div>
  </footer>

  

    </>
  );
}
