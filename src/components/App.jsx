import React from "react"
import Nav from './Nav';
import Head from "./head"
import Script from 'next/script';

const App = (props) => {

  return (
    <main>
      <Head
        title={props.title || "Aylon Spigel & FirstChoiceAI"}
        description={props.description || "Aylon Spigel & FirstChoiceAI"}
      >
        
        <Script id="humanbot1"
				type='text/javascript'
				data-cfasync='false'
				src='https://humanchatdemo.com/build/js/humanbot_latest.js?v=1.4.12'
				crossOrigin='anonymous'
			>
         var aiBot = new AiBot(
            {{
              embedId: 'RuGpmx82DP5j',
              remoteBaseUrl: 'https://humanchatdemo.com/',
              version: '1.4.12',
            }}
            );
      </Script>
			
				
</Head>
      <Nav />
      {props.children}
    </main>
  )
};

export default App;
