import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/magnific-popup.css';
import '../styles/media-queries.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
