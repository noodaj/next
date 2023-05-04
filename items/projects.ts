type Project = {
	name: string;
	description: string;
	link: string;
	technologies: string[];
	finished: boolean;
};

export const Projs: Project[] = [
	{
		name: "Wordle",
		description: `Wordle, a game where players guess 5 letter words with limited attempts.`,
		link: "https://github.com/noodaj/wordle",
		technologies: [
			"vite",
			"ts",
			"react",
			"express",
			"mongodb",
			"framer",
			"tailwind",
		],
		finished: true,
	},
	{
		name: "Marketplace",
		description: `Ecommerce is one of the most common ways for us to do shoppping from the comfort
		of our own homes. Marketplace is a full-stack webapp that allows creates a simulation for users to browse, search, and "purchase"
		products.`,
		link: "https://github.com/noodaj/marketplace",
		technologies: ["ts", "react", "tailwind", "next", "sqlite", "prisma"],
		finished: true,
	},
	{
		name: "To Do List",
		description: `Like the name implies, this is a basic to do list that helps users manage their tasks 
		efficiently. Users add tasks that they need to complete and check them off when they are completed. `,
		link: "https://github.com/noodaj/TodoList",
		technologies: ["react", "js", "html", "css"],
		finished: true,
	},
	{
		name: "Machine Learning Gross and Rating Prediction",
		description: `A group project machine learning model that predicts a movie's gross based on their budget. Based on the
		movie's profit, number of votes, and the director, a director score is given.`,
		link: "https://github.com/noodaj/ml-project",
		technologies: ["python"],
		finished: true,
	},
	{
		name: "Are You A Toxic Player?",
		description: `League of Legends a popular online MMO, where players compete against each other in 5v5 matches. This
		webapp is to determine if you are a toxic player by going through game statistics.`,
		link: "",
		technologies: ["ts", "react", "express", "bootstrap"],
		finished: false,
	},
];
