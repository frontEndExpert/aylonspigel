import robot2 from '../assets/images/robot2a.png';
import robot3 from '../assets/images/robot3b.png';
import robot4 from '../assets/images/running-robot.gif';
import Image from 'next/image';

const RobotsFuture = () => {
	return (
		<div className='blog-container'>
			<h1 className='blog-header'>
				Videobots: The Future of Website Interaction
			</h1>
			<Image
				className='float-right robot3'
				src={robot3}
				alt='A robot booking an appointment'
				width={300}
				height={450}
			/>
			<p>
				Videobots are the next generation of website interaction. They are
				interactive chatbots that can be used to provide information, answer
				questions, and even book appointments.
			</p>

			<p>
				Videobots are a great way to improve your website&apos;s bounce rate. A high
				bounce rate means that people are leaving your website quickly, without
				interacting with it. Videobots can help to keep people on your website
				longer by providing them with engaging and informative content.
			</p>
			<Image src={robot4} className='float-left robot3' alt='A running robot' width={130}
				height={130} />
			<p>
				In addition to improving your bounce rate, videobots can also help you
				to generate leads and sales. Videobots can be used to collect emails,
				book appointments, and even complete financial transactions.
			</p>

			<p>
				If you want to improve your website&apos;s interaction and boost your leads
				and sales, then you need to consider using a videobot. Videobots are the
				future of website interaction, and they can help you to achieve your
				marketing goals.
			</p>
			<Image
				className='float-right robot2'
				src={robot2}
				alt='A robot booking an appointment'
				width={300}
				height={230}
			/>
			<ol>
				<li>Increased website engagement</li>
				<li>Improved bounce rate</li>
				<li>Increased lead generation</li>
				<li>Increased sales</li>
				<li>Enhanced customer service</li>
				<li>Reduced costs</li>
			</ol>

			<p>
				If you&#39;re interested in learning more about how videobots can help your
				business, then please contact us today.
			</p>
			<p>
				We would be happy to answer any questions you have and help you to get
				started with videobots.
			</p>
		</div>
	);
};

export default RobotsFuture;
