import React from "react";
import { Link } from "react-static";
import styled from "styled-components";
import { breakpoints } from "../utils";

import ExternalLink from "./ExternalLink";
import VideoThumbnail from "./VideoThumbnail";
import Card from "./Card";
import Thumbnail from "./Thumbnail";

export const GameButtons = ({ game, ...props }) => (
	<div {...props}>
		{game.demoUrl && (
			<Link to={`/games/${game.id}`} className="button success">
				<i className="fa fa-gamepad" /> Play
			</Link>
		)}
		{game.sourceUrl && (
			<ExternalLink to={game.sourceUrl} className="button primary">
				<i className="fa fa-code" /> Source
			</ExternalLink>
		)}
	</div>
);

const StyledCard = styled(Card)`
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;

	.title {
		grid-area: title;
		margin-bottom: 0;
	}
	.buttons {
		grid-area: buttons;
	}
	.description {
		grid-area: desc;
	}
	.thumbnail {
		grid-area: thumbnail;
	}

	@media (${breakpoints.desktop}) {
		display: grid;
		grid-template-columns: 12rem 1fr auto;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			"thumbnail title title" "thumbnail desc desc"
			"thumbnail .... buttons";
	}
`;

const GameCard = ({ game, ...props }) => (
	<StyledCard {...props}>
		<Link to={`/games/${game.id}`} className="thumbnail">
			<Thumbnail
				aspectRatio={1.5}
				src={game.thumbnail.file.url}
				alt={game.title}
			/>
		</Link>
		<h3 className="title">{game.title}</h3>
		<p className="description">{game.shortDescription}</p>
		<GameButtons className="buttons" game={game} />
	</StyledCard>
);

export default GameCard;
