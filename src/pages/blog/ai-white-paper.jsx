import React from "react";
import dynamic from 'next/dynamic';
import AIwhitePaper from "../../components/AIwhitePaper";
import App from '../../components/App';

const Nav = dynamic(() => import('../../components/Nav'), { ssr: true });

export default function Index() {
	return (
        <App title="The Definitive Guide to Slashing CAC and Accelerating Conversion with AI"
            description="Learn how AI can dramatically reduce Customer Acquisition Cost (CAC) and accelerate conversion rates. Discover AI-powered email qualification, video chatbots, and AI-powered live agents." >
            <Nav />
            <div className="pt-16">
                <AIwhitePaper />
            </div>
        </App>
    );
};

