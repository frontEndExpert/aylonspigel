import { Link } from 'react-router-dom';
//import classes from './firstchoice.module.css';

const FirstChoice = () => {
	return (
		<div className='blog-container'>
			<h1 className='blog-header'>First Choice</h1>
			<p>
				As someone who is trying to present this amazing offer, leaving this
				section empty is not good. But, if you realy want to increase the
				engagment on your site and avoid high bouncing rate, implementing
				gadjets like this videobot is a great idea as it will do its magic that
				can end up with increase sales and revenue.
			</p>

			<p>
				At this early stage you might have more questions as how it can help you
				and why.
			</p>
			<p>
				As sn expert on the subject I will be happy to jump on a call with you
				to understand more about your business needs so I can offer you a
				technological solution like the VideoBot.
			</p>

			<p>
				Book you appointment with me if you have not done it already,{' '}
				<a className='link' href='https://calendly.com/first-choice-ai'>
					click this link
				</a>
				.
			</p>

			<p>
				The following blog post might answer some quesitons:&nbsp;
				<Link className='link' to='/blog/robots-future'>
					blog
				</Link>
			</p>
		</div>
	);
};

export default FirstChoice;
