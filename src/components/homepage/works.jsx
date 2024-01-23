import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							{/* <img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/> */}
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
							Freelancer focused on Web Development projects
							</div>
							<div className="work-duration">Nov 2023 - Present</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Commerzbank DTC Sofia</div>
							<div className="work-subtitle">
								Full-Stack Developer 
							</div>
							<div className="work-duration">Mar 2023 - Present</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Digital and Software Solutions</div>
							<div className="work-subtitle">
								Front-End and Full-Stack Developer
							</div>
							<div className="work-duration">Aug 2020 - Mar 2023</div>
						</div>

						
						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Adesso Bulgaria</div>
							<div className="work-subtitle">
								Front-End and Full-Stack Developer
							</div>
							<div className="work-duration">Mar 2019 - Aug 2020</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Berncon GMBH</div>
							<div className="work-subtitle">
								Front-End Developer
							</div>
							<div className="work-duration">Jan 2018 - Mar 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
