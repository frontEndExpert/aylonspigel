/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import styles from '../styles/ai-lead-qualification.module.scss';

const LeadsAI = () => {
  return (
    <div className={styles.pageWrapper} dir="rtl">
      <Head>
        <title>AI Lead Qualification System in 7 Days | First Choice AI</title>
        <meta name="description" content="Build custom AI systems that automatically qualify every inbound lead." />
      </Head>

      {/* NAV */}
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <a href="#" className={styles.logo}>First Choice <span>AI</span></a>
          <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnNav}`}>Book Free Call →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.container}>
          <div className={styles.eyebrow}>For marketing agencies, consultants & B2B service teams in Israel</div>
          <h1 className="text-white">Every Hour You Spend<br /><span className={styles.gradientText}>Sorting Leads</span><br />Is an Hour You're Not Selling</h1>
          <p className={styles.heroSub}>
            You're running a B2B service business. Leads come in — from your website, LinkedIn, referrals — and somewhere between "this looks interesting" and "let's get on a call," most of them disappear.
          </p>
          <div className={styles.heroValue}>
             First Choice AI builds you a custom AI system that qualifies every inbound lead automatically — scoring them against your ideal client profile, enriching their details, and telling you exactly who to call, what to say, and who to skip. <strong>Live in 7 days.</strong>
          </div>
          <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge} ${styles.btnGlow}`}>
            → Book Your Free 20-Min Scoping Call
          </a>
          <div className={styles.heroBadges}>
            <span>Setup from ₪500</span>
            <span className={styles.sep}>·</span>
            <span>Live in 7 days</span>
            <span className={styles.sep}>·</span>
            <span>No developers needed</span>
            <span className={styles.sep}>·</span>
            <span>Connects to your existing tools</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>The Problem</div>
          <h2>You're Not Short on Leads.<br /><span className={styles.gradientText}>You're Short on the Right Ones.</span></h2>
          <p className={styles.sectionIntro}>Here's the week most B2B founders describe to us:</p>
          <div className={styles.weekGrid}>
            <div className={styles.weekCard}>
              <div className={styles.weekDay}>Monday</div>
              <p>Three new leads from the contact form. Spend 45 minutes looking them up on LinkedIn, checking their websites, trying to figure out if they can actually afford you.</p>
            </div>
            <div className={styles.weekCard}>
              <div className={styles.weekDay}>Tuesday</div>
              <p>Reply to two of them. One ghosts you. One says "just exploring options."</p>
            </div>
            <div className={styles.weekCard}>
              <div className={styles.weekDay}>Thursday</div>
              <p>A referral comes in. Looks promising. You're in back-to-back calls all day.</p>
            </div>
            <div className={styles.weekCard}>
              <div className={styles.weekDay}>Friday</div>
              <p>You finally reply. They say they already went with someone else.</p>
            </div>
            <div className={`${styles.weekCard} ${styles.weekCardFull}`}>
              <div className={styles.weekDay}>Weekend</div>
              <p>You wonder why your pipeline is full but your calendar isn't.</p>
            </div>
          </div>
          <div className={styles.problemCallout}>
            <p>The problem isn't your lead volume. It's that every lead looks the same when it arrives — and you're burning hours on manual research just to figure out who's worth five minutes of your time.</p>
            <p className={styles.problemBold}>And while you're busy researching, your best prospects are talking to someone who replied faster.</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>The Solution</div>
          <h2>What If Every Lead Arrived<br /><span className={styles.gradientText}>Already Qualified?</span></h2>
          <p className={styles.sectionIntro}>That's exactly what your new system does.</p>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>🔍</div>
              <div className={styles.stepNum}>Step 1</div>
              <h3>Enrich</h3>
              <p>It pulls everything about them: company name, website, industry, team size, LinkedIn profile, role. Research that used to take you 20 minutes, done in 20 seconds.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>⚖️</div>
              <div className={styles.stepNum}>Step 2</div>
              <h3>Score</h3>
              <p>It compares the lead against your Ideal Client Profile and gives it a clear tag:</p>
              <div className={styles.scoreTags}>
                <span className={`${styles.tag} ${styles.hot}`}>🔴 Hot</span>
                <span className={`${styles.tag} ${styles.warm}`}>🟡 Warm</span>
                <span className={`${styles.tag} ${styles.nurture}`}>🔵 Nurture</span>
                <span className={`${styles.tag} ${styles.dis}`}>⚫ Disqualified</span>
              </div>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}>📲</div>
              <div className={styles.stepNum}>Step 3</div>
              <h3>Alert You</h3>
              <p>For every Hot lead, you get an instant notification with a brief:</p>
              <div className={styles.alertPreview}>
                <span className={styles.alertDot}></span>
                <p>"This is a 12-person digital marketing agency in Tel Aviv... Here's what I'd say to open the conversation…"</p>
              </div>
              <p className={styles.stepFooter}>The draft message is already written. You just hit send.</p>
            </div>
          </div>
          <div className={styles.solutionResult}>
            <strong>The result:</strong> you spend zero time on leads that aren't ready, and you never miss the ones that are.
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>What You Get</div>
          <h2>Everything Built for How<br /><span className={styles.gradientText}>Your Business Actually Works</span></h2>
          <div className={styles.deliverablesGrid}>
            <div className={styles.deliverableCard}>
              <div className={styles.delCheck}>✅</div>
              <div>
                <h4>Custom AI qualification workflow</h4>
                <p>Built specifically for your ICP. The scoring rules reflect how you actually think about great clients.</p>
              </div>
            </div>
            <div className={styles.deliverableCard}>
              <div className={styles.delCheck}>✅</div>
              <div>
                <h4>ICP Workshop (Day 1)</h4>
                <p>A focused 45-minute session where we define exactly who your best clients are.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Pricing</div>
          <h2>Simple Pricing.<br /><span className={styles.gradientText}>No Retainer Traps.</span></h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingIcon}>🔧</div>
              <h3>One-Time Setup</h3>
              <div className={styles.pricingAmount}>₪500 – ₪5,000</div>
              <ul className={styles.pricingIncludes}>
                <li>ICP Workshop</li>
                <li>Full system build</li>
                <li>Tool connections</li>
              </ul>
              <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>Book Your Free Call →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>The Timeline</div>
          <h2>From Zero to Live<br /><span className={styles.gradientText}>in One Week.</span></h2>
          <div className={styles.timelineWrap}>
            <div className={styles.timelineItem}>
              <div className={styles.tlBadge}>📅 Days 1–2</div>
              <div className={styles.tlBody}>
                <h3>Discovery & ICP Workshop</h3>
                <p>We meet for 45 minutes. You tell me about your best clients, your worst-fit leads, and how your current process works. I map it all into a scoring model and get to building.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.tlBadge}>📅 Days 3–5</div>
              <div className={styles.tlBody}>
                <h3>Build & Connect</h3>
                <p>I build the full qualification workflow and connect it to your tools. You don't need to do anything — I handle the setup entirely.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.tlBadge}>📅 Days 6–7</div>
              <div className={styles.tlBody}>
                <h3>Test, Tune & Hand Off</h3>
                <p>We run your real recent leads through the system and look at the results together. I tune the scoring based on your feedback, then hand you a live, working system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Client Results</div>
          <h2>Real Results from B2B Founders<br /><span className={styles.gradientText}>Who Were Exactly Where You Are</span></h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteMark}>"</div>
              <p>Before this, I was spending Sunday evenings going through leads from the week... Now I get a Slack message the moment something good comes in. I've taken back at least four hours every week.</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>NR</div>
                <div>
                  <strong>Noa R.</strong>
                  <span>Founder, Digital Marketing Agency · Tel Aviv</span>
                </div>
              </div>
            </div>
            <div className={`${styles.testimonialCard} ${styles.testimonialFeatured}`}>
              <div className={styles.quoteMark}>"</div>
              <p>Within the first two weeks, a lead came in rated Hot... and it turned into a ₪38,000 project. The system paid for itself ten times over before the month was out.</p>
              <div className={styles.testimonialHighlight}>₪38,000 project · First 2 weeks</div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>DK</div>
                <div>
                  <strong>Daniel K.</strong>
                  <span>CEO, B2B HR Consulting Firm · Herzliya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section id="fit">
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Is This for You?</div>
          <h2>This Was Built for<br /><span className={styles.gradientText}>One Type of Business Owner</span></h2>
          <div className={styles.fitGrid}>
            <div className={`${styles.fitBox} ${styles.fitYes}`}>
              <h3>✅ This is the right fit if:</h3>
              <ul>
                <li>You run a B2B service business.</li>
                <li>You get inbound leads but have no consistent system to sort them.</li>
                <li>You're the main salesperson in the business.</li>
              </ul>
            </div>
            <div className={`${styles.fitBox} ${styles.fitNo}`}>
              <h3>❌ Probably not the right fit if:</h3>
              <ul>
                <li>You have very little inbound volume.</li>
                <li>You're looking for a full CRM rebuild.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className={styles.container}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutAvatar}>AS</div>
            <div className={styles.aboutText}>
              <div className={styles.sectionLabel}>About</div>
              <h2>Hi, I'm Aylon Spigel —<br /><span className={styles.gradientText}>Founder of First Choice AI</span></h2>
              <p>I'm a B2B founder, just like you. I know what it's like to run a services business where you're the product, the salesperson, and the operations team all at once.</p>
              <p>I built this offer because I had the same problem: leads coming in, no system to sort them, and hot opportunities going cold while I was buried in research.</p>
              <p className={styles.aboutPromise}>If it doesn't feel right after the scoping call, I'll tell you. I only take on projects I'm confident will deliver a clear return.</p>
              <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary + " " + styles.btn}>→ Let's talk about your lead flow</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBg}></div>
        <div className={styles.container + " " + styles.ctaContent}>
          <h2>A Hot Lead Is Coming In<br /><span className={styles.gradientText}>This Week.</span><br />Will You Know It's Hot?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-slate-400">Book a free 20-minute scoping call. We'll look at your current lead flow, get clear on what a great lead looks like, and I'll tell you exactly what I'd build.</p>
          <a href="https://calendly.com/first-choice-ai/30min" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge} ${styles.btnGlow}`}>
            → Book My Free Scoping Call
          </a>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center">
        <div className={styles.container}>
          <div className={styles.logo}>First Choice <span>AI</span></div>
          <p className="mt-4 text-slate-400">© 2024 First Choice AI. Built for Israeli Founders.</p>
        </div>
      </footer>
    </div>

  );
};

export default LeadsAI;
