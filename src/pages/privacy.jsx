
import React from 'react';
import Link from 'next/link';
import App from '../components/App';
import styles from '../styles/privacy.module.scss';
import Nav from '../components/Nav';

const PrivacyPage = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return <>
        {(
            <App title="AylonSpigel.com - Privacy Policy"
                description="Privacy Policy for AylonSpigel.com - Learn how we collect, use, and protect your personal information." >
                    <Nav />
                <div className={styles.headbox} >
                    <h1 className={styles.bigheader}>Privacy Policy</h1>
                    <p className="text-sm text-gray-400 mb-6">Last Updated: {currentDate}</p>
                    
                    <h2>Introduction</h2>
                    <p>Here at <b>AylonSpigel.com</b> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
                    
                    <h2>Information We Collect</h2>
                    <h3>Personal Information You Provide:</h3>
                    <p>We collect information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Fill out contact forms on our website</li>
                        <li>Subscribe to our newsletter or communications</li>
                        <li>Request information about our services</li>
                        <li>Communicate with us via email or other methods</li>
                    </ul>
                    <p>This information may include your name, email address, phone number, company name, and any other information you choose to provide.</p>
                    
                    <h3>Automatically Collected Information:</h3>
                    <p>When you visit our website, we automatically collect certain information about your device and browsing behavior, including:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>IP (internet protocol) address</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages you visit and time spent on pages</li>
                        <li>Referring website addresses</li>
                        <li>Date and time of your visit</li>
                    </ul>
                    
                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect for the following purposes:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>To respond to your inquiries and provide customer service</li>
                        <li>To send you information about our services (with your consent)</li>
                        <li>To improve our website and services</li>
                        <li>To analyze website usage and trends</li>
                        <li>To comply with legal obligations</li>
                        <li>To protect our rights and prevent fraud</li>
                    </ul>
                    
                    <h2>Data Sharing and Disclosure</h2>
                    <p><b>We do not sell, rent, loan, or give your email address or other personal information to third parties.</b> We may share your information only in the following circumstances:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li><b>Service Providers:</b> We may share information with third-party service providers who perform services on our behalf (such as web hosting, email delivery, analytics). These providers are contractually obligated to protect your information.</li>
                        <li><b>Legal Requirements:</b> We may disclose information if required by law, court order, or government regulation.</li>
                        <li><b>Business Transfers:</b> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                        <li><b>With Your Consent:</b> We may share information with your explicit consent.</li>
                    </ul>
                    
                    <h2>Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Remember your preferences and settings</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Improve website functionality</li>
                    </ul>
                    <p>We do not store personally identifiable information in cookies. You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.</p>
                    
                    <h2>Third-Party Services</h2>
                    <p>Our website may use third-party services (such as Google Analytics, advertising networks) that may collect information about your online activities across different websites. These services have their own privacy policies, and we encourage you to review them.</p>
                    <p>If we use third-party advertising in the future, these advertisers may use cookies and similar technologies to collect information about your visits to our site and other websites to provide targeted advertisements.</p>
                    
                    <h2>Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                    <p>Only authorized employees and service providers have access to your information, and they are required to maintain the confidentiality of such information.</p>
                    
                    <h2>Your Rights and Choices</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li><b>Right to Access:</b> You can request a copy of the personal information we hold about you.</li>
                        <li><b>Right to Correction:</b> You can request correction of inaccurate or incomplete information.</li>
                        <li><b>Right to Deletion:</b> You can request deletion of your personal information, subject to legal obligations.</li>
                        <li><b>Right to Opt-Out:</b> You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.</li>
                        <li><b>Right to Data Portability:</b> You can request a copy of your data in a structured, machine-readable format.</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.</p>
                    
                    <h2>Children&apos;s Privacy</h2>
                    <p>Our website is not directed to children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information from our records.</p>
                    <p>If you are under 18 years of age, please do not submit any personal information to our website without the consent of your parent or guardian.</p>
                    
                    <h2>International Data Transfers</h2>
                    <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our website, you consent to the transfer of your information to these countries.</p>
                    
                    <h2>Data Retention</h2>
                    <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                    
                    <h2>Links to Third-Party Websites</h2>
                    <p>Our website may contain links to third-party websites that are not controlled by <b>AylonSpigel.com</b>. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                    
                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Posting the updated policy on this page with a new &quot;Last Updated&quot; date</li>
                        <li>Placing a prominent notice on our website</li>
                        <li>Sending you an email notification (if we have your email address)</li>
                    </ul>
                    <p>Your continued use of our website after such changes constitutes your acceptance of the updated Privacy Policy.</p>
                    
                    <h2>Contact Us</h2>
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                    <ul className="list-none ml-0 mb-4">
                        <li><b>Email:</b> Via our &quot;Contact Us&quot; page on the website</li>
                        <li><b>Website:</b> <Link href="/" className="text-blue-400 hover:underline">AylonSpigel.com</Link></li>
                    </ul>
                    <p>We will respond to your inquiry within a reasonable timeframe and in accordance with applicable law.</p>
                    
                    <h2>California Privacy Rights (CCPA)</h2>
                    <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>The right to know what personal information we collect, use, and disclose</li>
                        <li>The right to request deletion of your personal information</li>
                        <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                        <li>The right to non-discrimination for exercising your privacy rights</li>
                    </ul>
                    
                    <h2>European Union Privacy Rights (GDPR)</h2>
                    <p>If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>The right to access, rectify, or erase your personal data</li>
                        <li>The right to restrict or object to processing of your personal data</li>
                        <li>The right to data portability</li>
                        <li>The right to withdraw consent at any time</li>
                        <li>The right to lodge a complaint with a supervisory authority</li>
                    </ul>
                    
                    <p className="mt-8 text-sm text-gray-400">This Privacy Policy is effective as of {currentDate} and applies to all information collected by AylonSpigel.com.</p>
                </div>
            </App>
        )}
    </>
}

export default PrivacyPage
