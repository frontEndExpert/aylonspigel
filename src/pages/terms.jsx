
import React from 'react';
import Link from 'next/link';
import App from '../components/App';
import styles from '../styles/terms.module.scss';
import Nav from '../components/Nav';

const TermsPage = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return <>
        { (
            <App title="AylonSpigel.com - Terms of Use"
                description="Terms of use for AylonSpigel.com - Learn how we collect, use, and protect your personal information." >
                <Nav />
                <div className={ styles.headbox } >
                    <main className={styles.container}>
                        <section className={styles.card}>
                            <h1>Terms of Use</h1>
                            <p className={styles.muted}>Last updated: May 23, 2026</p>

                            <div className={styles.notice}>
                            <strong>Important:</strong> By accessing or using aylonspigel.com, any subdomains, pages, web applications, dashboards, tools, embedded experiences, and linked apps operated by or on behalf of Aylon Spigel (collectively, the “Services”), you agree to these Terms of Use.
                        </div>

                        <p>
                            These Terms of Use govern your access to and use of <strong>aylonspigel.com</strong> and any related websites, applications, features, content, and services that link to or reference these Terms. If you do not agree to these Terms, do not use the Services.
                        </p>

                        <h2>1. Who We Are</h2>
                        <p>
                            The Services are operated by Aylon Spigel (“we,” “us,” or “our”). These Terms apply to the main website, any linked web apps, landing pages, product demos, tools, and related online services that are owned, controlled, or operated by us.
                        </p>

                        <h2>2. Eligibility</h2>
                        <p>
                            You must be at least 18 years old, or the age of legal majority in your jurisdiction, to use the Services. If you use the Services on behalf of a company or organization, you represent that you have authority to bind that entity to these Terms.
                        </p>

                        <h2>3. Use of the Services</h2>
                        <p>
                            You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to misuse the Services, interfere with their operation, attempt unauthorized access, or use them in a way that violates any applicable law or third-party rights.
                        </p>
                        <ul>
                            <li>Do not scrape, copy, reproduce, or redistribute content except as permitted by law or with our written permission.</li>
                            <li>Do not upload malicious code, attempt to bypass security, or disrupt system performance.</li>
                            <li>Do not use the Services to harass, defraud, impersonate, or infringe on others’ rights.</li>
                            <li>Do not reverse engineer or tamper with the underlying software unless allowed by applicable law.</li>
                        </ul>

                        <h2>4. Linked Apps and Third-Party Services</h2>
                        <p>
                            The Services may include links to third-party websites, APIs, platforms, or applications, including tools you open, connect, embed, or authenticate through the Services. Those third-party services are governed by their own terms and privacy policies.
                        </p>
                        <p>
                            We are not responsible for the availability, content, security, privacy practices, or actions of third-party services. Your use of any linked app or external service is at your own risk and may require separate accounts, permissions, or subscriptions.
                        </p>

                        <h2>5. Accounts and Access</h2>
                        <p>
                            Some parts of the Services may require an account, login, API key, secret, token, or other credentials. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account or authorized access.
                        </p>
                        <p>
                            If you believe your account, token, or access credentials have been compromised, you should change them immediately and notify us if appropriate.
                        </p>

                        <h2>6. User Content</h2>
                        <p>
                            If you submit, upload, generate, store, or transmit content through the Services, you retain any rights you have in that content, subject to any license you grant to us to operate, display, process, or deliver the Services.
                        </p>
                        <p>
                            You represent that you have the necessary rights to submit any content you provide and that your content does not violate any law or third-party right.
                        </p>

                        <h2>7. AI-Generated Content</h2>
                        <p>
                            Some Services may use artificial intelligence or automated systems to assist with content generation, analysis, scheduling, drafting, or formatting. AI-generated output may be inaccurate, incomplete, or unsuitable for publication without review.
                        </p>
                        <p>
                            You are responsible for reviewing and approving any output before relying on it or publishing it. We make no guarantee that AI-generated content will be error-free, compliant, or fit for a particular purpose.
                        </p>

                        <h2>8. Intellectual Property</h2>
                        <p>
                            The Services, including their design, code, branding, logos, visual layouts, and original content, are owned by us or our licensors and are protected by applicable intellectual property laws.
                        </p>
                        <p>
                            Except as expressly permitted, you may not copy, modify, distribute, display, perform, or create derivative works from the Services or our content without prior written consent.
                        </p>

                        <h2>9. Feedback</h2>
                        <p>
                            If you submit ideas, suggestions, bug reports, or feedback, you grant us the right to use them without restriction or compensation, unless otherwise agreed in writing.
                        </p>

                        <h2>10. Availability and Changes</h2>
                        <p>
                            We may modify, suspend, or discontinue any part of the Services at any time, with or without notice. We may also update these Terms from time to time. The updated Terms will take effect when posted on this page unless a later effective date is stated.
                        </p>

                        <h2>11. Disclaimers</h2>
                        <p>
                            The Services are provided on an “as is” and “as available” basis, without warranties of any kind, whether express or implied, to the fullest extent permitted by law.
                        </p>
                        <p>
                            We do not warrant that the Services will be uninterrupted, secure, or error-free, or that defects will be corrected.
                        </p>

                        <h2>12. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, goodwill, or business opportunity arising out of or related to your use of the Services.
                        </p>
                        <p>
                            Our total liability for any claim relating to the Services will not exceed the amount you paid us for the Service giving rise to the claim in the 12 months before the event, or USD $100 if you paid nothing, unless applicable law requires otherwise.
                        </p>

                        <h2>13. Indemnification</h2>
                        <p>
                            You agree to defend, indemnify, and hold harmless us and our affiliates, directors, officers, employees, contractors, and agents from and against claims, damages, liabilities, losses, and expenses arising from your use of the Services, your content, or your violation of these Terms or applicable law.
                        </p>

                        <h2>14. Termination</h2>
                        <p>
                            We may suspend or terminate your access to the Services at any time if we believe you have violated these Terms, created risk or legal exposure, or used the Services inappropriately.
                        </p>
                        <p>
                            You may stop using the Services at any time. Sections that by their nature should survive termination will survive, including intellectual property, disclaimers, limitation of liability, indemnification, and governing law.
                        </p>

                        <h2>15. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of the State of Israel, without regard to conflict-of-law principles, unless local consumer law requires otherwise. Any disputes will be handled in the competent courts located in Israel, unless otherwise required by law.
                        </p>

                        <h2>16. Contact</h2>
                        <p>
                            If you have questions about these Terms, contact us at:
                            <br />
                            <strong>Email:</strong> <a href="mailto:hello@aylonspigel.com">hello@aylonspigel.com</a>
                        </p>

                        </section>
                    </main>
                </div>
            </App>
        ) }
    </>
}

export default TermsPage