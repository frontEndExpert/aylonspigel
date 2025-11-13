import React from "react";
import dynamic from 'next/dynamic';
import RobotsFuture from "../../components/RobotsFuture";
import App from '../../components/App';

const Nav = dynamic(() => import('../../components/Nav'), { ssr: true });

export default function Index() {
	return (
        <App title="First Choice AI - The Future of Website Communication."
            description="First Choice AI - Digital Marketing and Web Application Development." >
            <Nav />
            <div className="pt-16">
                <RobotsFuture />
            </div>
        </App>
    );
};
