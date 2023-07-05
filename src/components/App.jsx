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
        
</Head>
<noscript>
    You need to enable JavaScript to run this app.
  </noscript>
{/* eslint-disable-next-line */}
  <script id="robot1"
				data-cfasync='false'
				src='https://humanchatdemo.com/build/js/humanbot_latest.js?v=1.4.13'
				crossOrigin='anonymous'
			></script>
      {/* eslint-disable-next-line */}
			<script id='robot2' src='/static/js/robot.js' />
      <Nav />
      {props.children}
    </main>
  )
};

export default App;