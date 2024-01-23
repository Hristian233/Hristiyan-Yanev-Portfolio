import React from "react";

function article_1() {
	return {
		date: "20 Oct 2023",
		title: "Meet Hristiyan Yanev - SoftUni Article",
		description:
			"As one of their successful students I was invited for a personal interview where I introduce myself and talk about my studies",
			keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"><a href="https://softuni.bg/blog/success-story-2023-hristiyan-yanev">Link to Article 1</a></div>
					{/* <img
						src="https://softuni.bg/blog/success-story-2023-hristiyan-yanev"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "23 Dec 2023",
		title: "Video interview with me",
		description:
			"Short interview from the \"Code to Sucess\" rubric of the Software University",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"><a href="https://fb.watch/pLJbKEblTW/">Link to Video Interview</a></div>
					{/* <img
						src="https://fb.watch/pLJbKEblTW/"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "30 Jun 2020",
		title: "Face of the month - Hristiyan Yanev",
		description:
			"I was picked for face of the month while working at Adesso Bulgaria",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"><a href="https://www.linkedin.com/pulse/%2525D0%2525BB%2525D0%2525B8%2525D1%252586%2525D0%2525B5-%2525D0%2525BD%2525D0%2525B0-%2525D0%2525BC%2525D0%2525B5%2525D1%252581%2525D0%2525B5%2525D1%252586%2525D0%2525B0-%2525D1%252585%2525D1%252580%2525D0%2525B8%2525D1%252581%2525D1%252582%2525D0%2525B8%2525D1%25258F%2525D0%2525BD-%2525D1%25258F%2525D0%2525BD%2525D0%2525B5%2525D0%2525B2-ivaylo-valchev%3FtrackingId=KE%252BuoMiYQYcmk6wPwjV5QQ%253D%253D/?trackingId=KE%2BuoMiYQYcmk6wPwjV5QQ%3D%3D">Link to Article</a></div>
					{/* <img
						src="https://fb.watch/pLJbKEblTW/"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1, article_2, article_3];

export default myArticles;
