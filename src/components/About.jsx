import React from 'react';
import Image from 'next/image';


const About = ({ data }) => {
	if (data) {
		var name = data.name;
		var profilepic = '/static/images/' + data.image;
		var bio = data.bio;
		var bio2 = data.bio2;
		var bio3 = data.bio3;
		var bio4 = data.bio4;
		var street = data.address.street;
		var city = data.address.city;
		var state = data.address.state;
		var zip = data.address.zip;
		var phone = data.phone;
		var email = data.email;
		var resumeDownload = data.resumedownload;
	}

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
					<h2>About Me</h2>

					<p style={{ color: '#ddddee' }}>{bio}</p>
					<p style={{ color: '#dddeef' }}>{bio2}</p>
					<p style={{ color: '#eeeeee' }}>{bio3}</p>
					<p style={{ color: '#eeeeee' }}>{bio4}</p>
					<div className='row'>
						<div className='columns contact-details'>
							<h2>Contact Details</h2>
							<p className='address' style={{ color: '#ddddee' }}>
								<span>{name}</span>
								<br />
								<span>
									{street}
									<br />
									{city} {state}, {zip}
								</span>
								<br />
								<span>{phone}</span>
								<br />
								<span>{email}</span>
							</p>
						</div>
						<div className='columns download'>
							<p>
								<a href={resumeDownload} className='button'>
									<i className='fa fa-download'></i>Download Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
