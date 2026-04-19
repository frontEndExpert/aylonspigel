/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import styles from '../styles/aioffer.module.css';

export default function LandingPageEN() {
  const WA_LINK = 'https://wa.me/972559490215';

  const bullets = [
    {
      icon: '✅',
      title: 'High-Converting Landing Page',
      desc: 'Professional landing page designed to convert visitors into leads — sleek, fast, and mobile-optimized.',
    },
    {
      icon: '✅',
      title: 'Expert Ad Campaign',
      desc: 'Complete Facebook & Instagram ad setup, including creative, copy, and launch management.',
    },
    {
      icon: '✅',
      title: 'WhatsApp Automation',
      desc: 'Instant automated responses for every lead — ensure no potential client ever slips through the cracks.',
    },
    {
      icon: '✅',
      title: 'Weekly Performance Report',
      desc: 'Transparent results: see exactly how many leads you got and your cost per acquisition.',
    },
    {
      icon: '✅',
      title: 'Launch in 5–7 Business Days',
      desc: 'We handle everything from A to Z — you just focus on closing the sales.',
    },
  ];

  return (
    <>
      <Head>
        <title>Get 10–30 Ready Leads in 14 Days | First Choice AI</title>
        <meta name="description" content="Complete lead system: landing page, ads, and WhatsApp automation. Guaranteed results." />
      </Head>

      <div
        dir="ltr"
        className={ `${styles.pageWrapper} min-h-screen text-white bg-[#0d0d0d] font-sans` }
      >

        {/* ─── NAV ─── */ }
        <nav
          className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0d0d0d]/85 backdrop-blur-xl border-b border-purple-600/20"
        >
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black text-white">First Choice</span>
            <span
              className="text-2xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            >
              { ' ' }AI
            </span>
          </div>

          <a
            href={ WA_LINK }
            target="_blank"
            rel="noopener noreferrer"
            className={ `${styles.btnWa} hidden sm:inline-flex items-center gap-2 font-bold text-sm text-white rounded-full px-5 py-2.5 transition-transform hover:scale-105 bg-[#25D366]` }
          >
            <span>📲</span>
            <span>WhatsApp</span>
          </a>
        </nav>

        {/* ─── HERO ─── */ }
        <section className={ `relative overflow-hidden pt-36 pb-28 px-6 text-center ${styles.heroGradient}` }>
          <div
            className={ `${styles.heroBlob} absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none bg-purple-600/35 blur-[60px]` }
            style={ {
              background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)',
            } }
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-600/15 border border-purple-400/35 text-purple-200"
            >
              🔥 Limited to the first 3 clients
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white text-center">
              Get{ ' ' }
              <span className={ styles.gradientText }>10–30 Ready Leads</span>
              { ' ' }in 14 Days —{ ' ' }
              <br className="hidden sm:block" />
              <span className="text-yellow-400">Or You Don't Pay</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-10 mx-auto max-w-2xl text-gray-300 text-right 
            sm:text-center">"Hi, I am Aylon Spigel and I help businesses to combine <strong className="text-white">paid ads</strong> with <strong className="text-white">AI Agents</strong> to generate <strong className="text-white">more qualified leads</strong> and close more sales.
              <br />
              The businesses that adopt artificial intelligence today — will beat their competitors tomorrow. Those that don't — <strong className="text-white">will be left behind</strong>.
            </p>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 mx-auto max-w-2xl text-gray-300 text-center"
            >
              We build your entire lead generation system: landing page, ads, and AI Agents. <strong className="text-white">Powered by the latest AI</strong> — so your leads are smarter, faster, and cheaper than running ads alone.{ ' ' }
              <br /> We do the work: -{ ' ' }
              <strong className="text-white">You just answer the phone.</strong>
            </p>

            <a
              href={ WA_LINK }
              target="_blank"
              rel="noopener noreferrer"
              className={ `${styles.btnWa} ${styles.float} inline-flex items-center justify-center gap-3 rounded-full font-black text-xl text-white px-10 py-5 transition-transform hover:scale-105 bg-[#25D366] shadow-[0_8px_30_rgba(37,211,102,0.45)]` }
            >
              📲 Chat with us on WhatsApp
            </a>

            <p className="mt-5 text-sm text-gray-400">
              ✓ No upfront cost &nbsp;·&nbsp; ✓ No cancellation fees &nbsp;·&nbsp; ✓ Guaranteed results
            </p>
          </div>
        </section>

        {/* ─── WHAT YOU GET ─── */ }
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-purple-400">
                What's Included
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Everything Done For You —{ ' ' }
                <span className={ styles.gradientText }>End-to-End Solution</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              { bullets.map((b, i) => (
                <div
                  key={ i }
                  className={ `${styles.cardHover} rounded-2xl p-6 text-left bg-[#111827] border border-purple-600/25` }
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-purple-600/15 border border-purple-400/30 shadow-[0_0_16px_rgba(124,58,237,0.2)]"
                  >
                    { b.icon }
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{ b.title }</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{ b.desc }</p>
                </div>
              )) }

              {/* 6th guarantee card */ }
              <div
                className={ `${styles.cardHover} rounded-2xl p-6 text-left sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-600/20 to-purple-600/10 border border-purple-400/40` }
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-purple-600/25 border border-purple-400/50"
                >
                  🛡️
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Results Guarantee</h3>
                <p className="text-sm leading-relaxed text-purple-200">
                  Didn't get at least 10 leads in 14 days? You don't pay a dime. Simple as that.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIAL ─── */ }
        {/*<section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-8 text-purple-400">
              Hear from our clients
            </p>

            <div
              className="relative rounded-3xl p-10 text-left bg-[#111827] border border-purple-600/30 shadow-[0_0_60px_rgba(124,58,237,0.15)]"
            >
              <div
                className="absolute top-6 left-8 text-8xl font-serif leading-none select-none text-purple-600/20"
              >
                &ldquo;
              </div>

              <div className="flex justify-center gap-1 mb-6 text-2xl">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>

              <blockquote
                className="text-xl sm:text-2xl font-semibold leading-relaxed mb-8 text-white text-left"
              >
                &ldquo;Within two weeks, I started getting 3–5 leads a day from Facebook.
                The best investment I’ve made for my business.&rdquo;
              </blockquote>

              <div className="flex items-center justify-start gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl bg-gradient-to-br from-purple-600 to-purple-500"
                >
                  D
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">David Cohen</p>
                  <p className="text-sm text-gray-500">
                    Home Service Business Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ─── PRICING ─── */ }
        <section className="py-24 px-6">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-purple-400">
              Special Launch Price
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-10">
              An Investment That Pays for Itself
            </h2>

            <div
              className="rounded-3xl p-10 relative overflow-hidden bg-[#111827] border border-purple-600/40 shadow-[0_0_80px_rgba(124,58,237,0.2)]"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none blur-[30px]"
                style={ {
                  background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)',
                } }
              />

              <div className="relative z-10">
                <div
                  className={ `${styles.scarcityPulse} inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-6 bg-red-500/15 border border-red-500/40 text-red-400` }
                >
                  🔴 Only <strong>2 spots left!</strong>
                </div>

                <p className="text-2xl line-through mb-1 text-gray-500">
                  ₪4,000
                </p>

                <div className="flex items-end justify-center gap-2 mb-2">
                  <span
                    className="text-6xl sm:text-7xl font-black bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent"
                  >
                    ₪2,500
                  </span>
                </div>
                <p className="text-sm mb-8 text-gray-400">
                  Exclusive for the first 3 clients only
                </p>

                <div className="w-full h-px mb-8 bg-purple-600/25" />

                <ul className="text-left space-y-3 mb-8">
                  { [
                    'Landing Page + Ad Campaign + Automation',
                    '14-Day Guarantee — Results or no pay',
                    'All-inclusive, no hidden costs',
                  ].map((item, i) => (
                    <li
                      key={ i }
                      className="flex items-center justify-start gap-3 text-sm text-gray-300"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 bg-purple-600/25 text-purple-400"
                      >
                        ✓
                      </span>
                      <span>{ item }</span>
                    </li>
                  )) }
                </ul>

                <a
                  href={ WA_LINK }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ `${styles.btnWa} w-full flex items-center justify-center gap-3 rounded-full font-black text-lg text-white py-5 transition-transform hover:scale-105 bg-[#25D366] shadow-[0_8px_30_rgba(37,211,102,0.4)]` }
                >
                  📲 Message us on WhatsApp
                </a>

                <p className="mt-4 text-xs text-gray-500">
                  Quick 10-minute discovery call — no obligation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */ }
        <footer
          className="py-8 text-center text-sm border-t border-purple-600/20 text-gray-600"
        >
          Copyright © 2025{ ' ' }
          <span className="font-bold text-purple-600">First Choice AI</span>. All rights reserved.
        </footer>

      </div>
    </>
  );
}
