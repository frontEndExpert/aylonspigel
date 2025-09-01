import Head from 'next/head'

export default function HeadComponent({ title, description }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			
			{/* Google Fonts */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link 
				href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap" 
				rel="stylesheet" 
			/>
			
			{/* Meta tags for better SEO */}
			<meta name="keywords" content="web development, AI automation, chatbots, React, Next.js, frontend developer, Israel" />
			<meta name="author" content="Aylon Spigel" />
			<meta name="robots" content="index, follow" />
			
			{/* Open Graph tags */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="en_US" />
			
			{/* Twitter Card tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
		</Head>
	)
}