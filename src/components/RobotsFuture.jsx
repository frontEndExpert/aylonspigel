import robot5 from '../assets/images/robots5.png';
import robot3 from '../assets/images/robot3b.png';
import robot4 from '../assets/images/running-robot.gif';
import arrowRight from '../assets/images/arrow1.png'
import Image from 'next/image';

const RobotsFuture = () => {
	return (
		<div className='blog-container'>
			<h1 className='blog-header'>
				Videobots: The Future of Website Interaction
			</h1>
			<div className='my-10' >
			<Image
				className='ml-[50px] float-right robot3'
				src={robot3 || '/static/images/aylon.png'}
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
			</div>
			<div className='my-20' >
			<Image src={robot4 || '/static/images/aylon.png'} className='float-left robot4' alt='A running robot' width={130}
				height={130} />
			<p>
				In addition to improving your bounce rate, videobots can also help you
				to generate leads and sales. Videobots can be used to collect emails,
				book appointments, and even complete financial transactions.
			</p>

			<p >
				If you want to improve your website&apos;s interaction and boost your leads
				and sales, then you need to consider using a videobot. Videobots are the
				future of website interaction, and they can help you to achieve your
				marketing goals.
			</p>
			</div>
			<div className="mt-20 h-[300px]" >
				<Image
					className='float-right robot5'
					src={robot5 || '/static/images/aylon.png'}
					alt='A robot booking an appointment'
					width={500}
					height={300}
				/>
				<ul className="list-disc m-15">
					<li>Increased website engagement</li>
					<li>Improved bounce rate</li>
					<li>Increased lead generation</li>
					<li>Increased sales</li>
					<li>Enhanced customer service</li>
					<li>Reduced costs</li>
				</ul>
			</div>
			<div >
			<p>
			<h2 className='font-bold'>Introducing Our Innovative Chatbot Solutions:</h2>

			<br/>Discover the Future with Our Video Chat Bot!

			<br/>Immerse your visitors in a unique interactive experience with our cutting-edge video chat bot. This sophisticated tool not only engages users by making direct eye contact and moving its lips but is also packed with valuable information about your business. It goes beyond conventional chatbots, providing meaningful answers to your visitors inquiries.

			<br/><span className='font-bold'>Key Features:</span>
		<ol className='list-decimal pl-[50px]'>
			<li><span className='font-bold'>Personalized Interaction:</span> The video chat bot collects information about your visitors, enabling personalized interactions.</li>

			<li><span className='font-bold'>Appointment Booking:</span> Seamlessly integrate with your calendar, allowing visitors to book appointments 24/7.</li>

			<li><span className='font-bold'>Multilingual Support:</span> Works flawlessly in any language, ensuring a global reach for your business.</li>

			<li><span className='font-bold'>Cost-Efficient:</span> Even with just one new paying customer, the chatbot covers its own cost. Subsequent customers contribute to pure profit for your business.</li>

			</ol>
			<br/>Embrace the future of customer engagement with our video chat bot. Elevate your online presence and transform visitors into loyal customers!
			</p>
			<p>
				If you&#39;re interested in learning more about how videobots can help your
				business, then please contact us today.
			</p>

			<p>
				We would be happy to answer any questions you have and help you to get
				started with videobots.
			</p>
			<div className="flex flex-row flex-nowrap gap-5" >
				<p>You can click the circle on the bottom right to open the chat  with the video Bot </p> 
				<Image
					className='arrow '
					src={arrowRight || '/static/images/aylon.png'}
					alt='point to video bot'
					width={200}
					height={30}
				/>
			</div>
	       </div>
		</div>
	);
};

export default RobotsFuture;
