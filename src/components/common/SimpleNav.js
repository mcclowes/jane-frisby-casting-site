import styled from "styled-components";
import { NavLink, Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import * as mixins from "src/components/style/mixins";
import * as vars from "src/components/style/vars";
import { objMap, } from "src/lib/util";
import routesConfig from "src/routesConfig";

// --------------------------------------------------

const wrapperPadding = R.map(o => `0 ${o}`)(vars.dim.nav.margin);

const Wrapper = styled.nav`
	 ${ mixins.bpEither(
		"height",
		vars.dim.nav.height,
	) }
	${ mixins.bpEither("padding", wrapperPadding )}
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 2;
	${props => props.whiteText ? "color: white;" : ""}

	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Logo = styled(Link)`
	font-size: 2em;
	font-family: ${vars.font.title.family};
	margin-right: auto;
`;

const LinkButton = styled(NavLink)`
	height: 100%;
	padding: 0 0.75em;
	display: flex;
	align-items: center;

	&.active span {
		text-decoration: underline;
	}
`;

const LinkText = styled.span``;

const SimpleNavLink = styled(NavLink)`
	height: 100%;
	0 ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
`;

export default props => (
	<Wrapper { ...props }>
		
	<Logo to = "/">{ props.home ? null : "Jane Frisby" }</Logo>
		{
			routesConfig
			.filter(R.prop("show"))
			.map(({ title, path, }) =>
				<LinkButton
					key = { path }
					to = { path }
					activeClassName = "active"
				>
					<LinkText>{ title }</LinkText>
				</LinkButton>,
			)
		}
	</Wrapper>
);

