import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = ({ data }) => {
	const router = useRouter();
	const isHebrew = !(router.pathname?.includes('-en') || router.pathname === '/index-en');
	const privacyLink = isHebrew ? '/privacy-he' : '/privacy';
	if (data) {
		var networks = data.social.map(function (network) {
			// Map social network names to brand colors
			const brandColors = {
				facebook: 'hover:from-blue-500 hover:to-blue-600',
				linkedin: 'hover:from-blue-700 hover:to-blue-800',
				github: 'hover:from-gray-700 hover:to-gray-800',
				twitter: 'hover:from-blue-400 hover:to-blue-500',
				instagram: 'hover:from-pink-500 hover:to-purple-600',
				youtube: 'hover:from-red-600 hover:to-red-700'
			};

			const hoverColor = brandColors[network.name.toLowerCase()] || 'hover:from-blue-700 hover:to-purple-700';

			return (
				<li key={ network.name }>
					<a
						href={ network.url }
						className={ `w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white ${hoverColor} transition-all duration-300 transform hover:scale-125 shadow-lg hover:shadow-xl cursor-pointer` }
						target="_blank"
						rel="noopener noreferrer"
						aria-label={ `Visit our ${network.name} page` }
					>
						<i className={ `${network.className} text-xl` }></i>
					</a>
				</li>
			);
		});
	}

	return (
		<footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-16">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-3 gap-12 items-center">
						{/* Brand Section */ }
						<div className="text-center md:text-left">
							<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
								{ data?.name }
							</h3>
							<p className="text-gray-300 mb-6">
								{ data?.footerSub }
							</p>
							<div className="flex justify-center md:justify-start space-x-4">
								{ networks }
							</div>
						</div>



						{/* Contact & Legal */ }
						<div className="text-center md:text-right">
							<h4 className="text-lg font-semibold mb-6">{ data?.legal }</h4>
							<div className="space-y-3">
								<p className="text-white">
									<a href={ `mailto:${data?.email}` } className="text-white hover:text-green transition-colors duration-300 cursor-pointer">
										{ data?.email }
									</a>
								</p>
								<p>
									<a href={ `tel:${data?.phone}` } className="text-white hover:text-green transition-colors duration-300 cursor-pointer">
										{ data?.phone }
									</a>
								</p>
								<p>
									<Link href={ privacyLink } legacyBehavior>
										<a
											className="privacy-link font-bold hover:text-blue-300 transition-colors duration-300 block"
											style={ {
												cursor: 'pointer',
												color: '#ffffff',
												textDecoration: 'none',
												display: 'block',
												pointerEvents: 'auto'
											} }
										>
											{ data?.policy }
										</a>
									</Link>
								</p>
							</div>
						</div>
					</div>

					{/* Divider */ }
					<div className="border-t border-gray-700 mt-12 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<div className="text-white text-sm">
								Made with ❤️ by{ ' ' }
								<a
									title='frontend expert'
									href='http://www.aylonspigel.com/'
									className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
									target="_blank"
									rel="noopener noreferrer"
								>
									{ data?.name }
								</a>
							</div>

							<div className="text-white text-sm">
								© { new Date().getFullYear() } All rights reserved
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Back to Top Button */ }
			<div id='go-top' className="fixed bottom-8 right-8 z-50">
				<a
					className='smoothscroll bg-gradient-to-r from-blue-600 to-purple-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110'
					title='Back to Top'
					href='#home'
				>
					<i className='icon-up-open text-xl'></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
