import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
	title?: string;
	description?: string;
}

const SEO: React.FC<SEOProps> = ({
	title = "Akshat Goel - Engineer & Designer",
	description = "Akshat Goel is a software engineer and designer working at the intersection of design and code, specializing in user interfaces and software development.",
}) => {
	const jsonLd = {
		"@context": "http://schema.org",
		"@type": "Person",
		name: "Akshat Goel",
		jobTitle: "Engineer & Designer",
		url: "https://akshatgoel.vercel.app/",
		sameAs: [
			"https://github.com/akshatgoel07",
			"https://x.com/akshatgoel0",
			"https://www.linkedin.com/in/akshatgoel7",
		],
	};

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
		</Helmet>
	);
};

export default SEO;
