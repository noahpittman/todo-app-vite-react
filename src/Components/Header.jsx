import React from "react";
import styled from "styled-components";

// Styles

const Container = styled.div`
	text-align: center;
	padding-bottom: 1rem;
`;

// Component

const Header = () => {
	return (
		<Container>
			<h1>To Do List</h1>
			<p className="bio">Input something you need to do!</p>
		</Container>
	);
};

export default Header;
