import React from "react";
import { withRouteData, Head } from "react-static";
import styled from "styled-components";

import { breakpoints, createTitle } from "../utils";
import config from "../config.json";

import ExternalLink from "../components/ExternalLink";
import Card from "../components/Card";
import GameCard from "../components/GameCard";
import Pen from "../components/PenCard";
import About from "../components/About";
import TitleWithButton from "../components/TitleWithButton";
import { GamesLayout } from "../components/Layouts";

const Layout = styled.div`
	main {
		grid-area: main;
	}
	aside {
		grid-area: side;
	}

	@media (${breakpoints.phone}) {
		display: block;
	}
	@media (${breakpoints.desktop}) {
		display: grid;

		grid-template-columns: 3fr 1fr;
		grid-template-areas: "main side";
	}
`;

const PensLayout = styled.div`
	display: grid;
	grid-gap: 1rem;
	padding: 0.5rem;

	@media (${breakpoints.phone}) {
		grid-template-columns: 1fr;
	}
	@media (${breakpoints.tablet}) {
		grid-template-columns: 1fr 1fr;
	}
	@media (${breakpoints.desktop}) {
		grid-template-columns: 1fr;
	}
`;

const HomePage = withRouteData(({ pens, games }) => {
	const headers = {
		about: (
			<h2>
				<i className="fa fa-info-circle" /> About
			</h2>
		),
		games: (
			<h2>
				<i className="fa fa-gamepad" /> Games
			</h2>
		),
		pens: (
			<TitleWithButton>
				<h3>
					<i className="fa fa-codepen" /> Pens
				</h3>
				<ExternalLink
					className="button success"
					href={config.socialLinks.find(link => link.id === "codepen").href}
				>
					<i className="fa fa-link" /> More
				</ExternalLink>
			</TitleWithButton>
		)
	};

	return (
		<Layout>
			<Head>
				<title>{createTitle()}</title>
			</Head>

			<main>
				<section>
					<Card header={headers.about}>
						<About />
					</Card>
				</section>

				<section>
					<Card header={headers.games}>
						<GamesLayout>
							{games.map(game => <GameCard key={game.id} game={game} />)}
						</GamesLayout>
					</Card>
				</section>
			</main>

			<aside>
				<Card header={headers.pens}>
					<PensLayout>
						{pens.map(pen => <Pen key={pen.id} pen={pen} />)}
					</PensLayout>
				</Card>
			</aside>
		</Layout>
	);
});

export default HomePage;
