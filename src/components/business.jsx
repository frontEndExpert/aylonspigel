import React, {useState} from 'react';
import Image from 'next/image';


const Business = ({ data }) => {
	const [pic, setPic] = useState(0);

	if (data) {
		var name = data.name;
		var profilepic = '/static/images/' + data.image;
		var street = data.address.street;
		var city = data.address.city;
		var state = data.address.state;
		var zip = data.address.zip;
		var phone = data.phone;
		var email = data.email;
		var resumeDownload = data.resumedownload;
	}

	const pictures=['doctor6.png','Inanna.jpg','slaves1.jpg','landing3.png','logo1.png','townhead.png']

	function waitXSeconds(x) {
		return new Promise(resolve => {
		  setTimeout(() => {
			resolve();
		  }, x * 1000);
		});
	  }

	  function getImage() {
		var pic = 0;


		return pictures[pic];
	  }
	// for (var i = 0; i < pictures.length; i++) {
	// 	if (i==pictures.length){
	// 		i=0;
	// 	}
	// 	waitXSeconds(10);
	// }

	return (
		<section id='about'>
			<div className='row'>
				<div className='three columns'>
					<Image
						className='profile-pic'
						src={profilepic}
						alt="Aylon's Profile Pic"
						width={120}
						height={120}
					/>
				</div>
				<div className='nine columns main-col'>
					<span  className='header-text text-long text-white'>What to expect</span>
					
					<div className="text-long" >
						<p className="mb-4" style={{ color: '#eeeeee' }}>
						Specializing in Harnessing the Power of AI for Exceptional Web Design, Automation, and Visuals:

At the forefront of AI technology, I bring you unparalleled expertise in crafting compelling web designs, seamless automation, and visually stunning content. My specialization extends to AI conversational design and cutting-edge chatbots, with a particular emphasis on promoting the unique and highly engaging video chat bot—a proven lead magnet for superior results.

Understanding that each business is unique, I offer bespoke solutions tailored to your specific needs. For a deeper understanding of your requirements and a customized solution proposal, don&apos;t hesitate to reach out. Let&apos;s elevate your business through the strategic integration of AI tools.
						</p>
					</div>
					<div id="picture" className="picture">
						<Image src={`/static/images/${getImage()}`} width={500} height={500} alt="" className="pic" />
					</div>
					<p className="mb-6" style={{ color: '#eeeeee' }}>Please feel free to book an appointment with me or simply send me an email first. </p>
					<div className='row'>
						<div className='columns contact-details'>
							<h2>Contact Details</h2>
							<p className='address' style={{ color: '#ddddee' }}>
								<span>{name}</span>
								<br />
								<span>
									{city} {state}, {zip}
								</span>
								<br />
								<span>{phone}</span>
								<br />
								<span>{email}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Business;
