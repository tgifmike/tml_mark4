import React from 'react';

const About = () => {
	return (
		<main className="p-4">
			<div>
				<h1 className="text-4xl font-bold font-mono pb-4">
					Welcome to my blog!
				</h1>
			</div>
			<div className="py-2 px-4">
				<p className="text-xl">
					I was a passionate restaurant manager with over 20 years of experience
					in the culinary world. My journey began a server, then I worked my way
					up and though just about every job/position that exists in a
					restaurant. I quickly fell in love with the art of hospitality and the
					rhythm of service. Although I am no long in the trenchs, but i keep a
					toe dipped in doing software testing for Point of Sales Systems.
				</p>
			</div>
			<div className="p-1">
				<h2 className="text-2xl font-semibold">What You`ll Find Here</h2>
			</div>
			<div className="px-4">
				<p className="text-xl">
					This blog is a blend of insights, tips, and stories from my daily life
					managing a restaurant. Whether you`re a fellow manager, an aspiring
					restaurateur, or simply a food enthusiast, I aim to share:
				</p>
			</div>
			<div className="pl-10">
				<ul className="list-disc p-4 text-xl italic">
					<li>
						Management Tips: Strategies to enhance team performance and create a
						positive work environment.
					</li>
					<li>
						Industry Insights: Trends, challenges, and opportunities in the
						restaurant business.
					</li>
					{/* <li>
						Menu Development: Creative ideas for crafting unique and enticing
						menus that delight guests.
					</li> */}
					<li>
						Customer Experience: Ways to elevate service and foster lasting
						relationships with patrons.
					</li>
					<li>
						Behind-the-Scenes Stories: Anecdotes and lessons learned from my
						experiences in the fast-paced restaurant industry.
					</li>
				</ul>
			</div>
			<div className="p-1">
				<h3 className="text-2xl font-semibold">My Philosophy</h3>
			</div>
			<div className="px-4">
				<p className="text-xl">
					I believe that a restaurant is more than just a place to eat—it`s a
					community hub where memories are made. My goal is to inspire others to
					create spaces where people feel welcomed and cherished. Every dish
					served and every smile shared contributes to the unique tapestry of
					our culinary landscape.
				</p>
			</div>
			<div className="p-1">
				<h4 className="text-2xl font-semibold">Join The Journey</h4>
			</div>
			<div className="px-4">
				<p className="text-xl">
					I invite you to explore my posts, share your thoughts, and engage with
					a community of like-minded individuals. Together, we can learn, grow,
					and celebrate the incredible world of food and hospitality! Thank you
					for stopping by, and I hope you find inspiration in here.
				</p>
			</div>
		</main>
	);
};

export default About;
