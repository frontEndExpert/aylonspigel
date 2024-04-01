import React, {useState} from 'react';

const Resume = ({ data }) => {
	const [revealText, setRevealText] = useState(false);

	if (data) {
		var skillmessage = data.skillmessage;
		var education = data.education.map(function (education) {
			return (
				<div key={education.school}>
					<h3>{education.school}</h3>
					<p className='info'>
						{education.degree} <span>&bull;</span>
						{education.city} <span>&bull;</span>
						<span>{education.graduated}</span>
					</p>
					<p>{education.description}</p>
				</div>
			);
		});
		var work = data.work.map(function (work) {
			return (
				<div key={work.company} className='mt-[20px]'>
					<h3>{work.company}</h3>
					<p className='info' >
						{work.title}
						<span>&bull;</span> <em className='date'>{work.years}</em>
					</p>
					<p>{work.description}</p>
				</div>
			);
		});
		
	}

	const toggleText = () => {
        setRevealText(!revealText)
    }

	return (
		<section id='resume'>
			<div className='row work'>
				<div className='three columns header-col'>
						<span onClick={toggleText} className='header-text text-long'>Work & Education<span style={{fontSize: '12px', fontWeight:'100', textDecoration: 'none' }}>click to reveal text</span></span>
				</div>

				<div className={revealText ? "nine columns main-col text-long" : "nine columns main-col text-short"} >{work}</div>
				

			</div>

			<div className={revealText ? 'row education' : 'hide'}>
				<div className='three columns header-col'>
						<span className='header-text text-long'>Education</span>
				</div>

				<div className={revealText ? "nine columns main-col text-long" : "nine columns main-col text-short"} >
					<div className='row item'>
						<div className='twelve columns'>{education}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
