import React from "react"
import HeadComponent from "./head";

const App = (props) => {

  return (
    <main>
      <HeadComponent
        title={props.title || "Aylon Spigel & FirstChoiceAI"}
        description={props.description || "Aylon Spigel CV & FirstChoiceAI Services - Digital Marketing and Web Application Development."}
      />
      
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      
      {/* eslint-disable-next-line */}
      <script id="robot1"
				data-cfasync='false'
				src='https://humanchatdemo.com/build/js/hb_latest.js?v=1.5.6'
				crossOrigin='anonymous'
			></script>
      {/* eslint-disable-next-line */}
			<script id='robot2' src='/static/js/robot.js' />
      
      {props.children}
    </main>
  )
};

export default App;
