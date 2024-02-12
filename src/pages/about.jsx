import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle reference">
									For a complete list of my services please
									check below
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<div className="subtitle about-subtitle">
									Frontend: <br />
									- Appr. 5 years of working with Front-End
									technologies like Angular and React. I also
									have experience in developing application in
									pure HTML/CSS with Javascript <br /> <br />
									Backend: <br /> - I have 2 years of
									experience developing Back-End. I have
									worked with Java Spring and Javascript with
									Nest.JS and Node.JS <br /> <br />
									DevOps: <br />
									- Deploying and hosting webpages on various
									cloud services. <br />- Monitoring with
									Dynatrace and Kibana
									<br /> - API Testing with Postman and
									Thunder Client <br /> <br />
									Load testing: <br />- Creating and
									developing scripts with VuGen and
									LoadRunner. The purpose of the scripts is to
									simulate different scenarios in which
									multiple (virtual) users visit your
									application and use your services to see how
									much load they can withstand
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
