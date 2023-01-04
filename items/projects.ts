type Project = {
	name: string;
	description: string;
	link: string;
	technologies: string[];
	finished: boolean;
};
export const Projs: Project[] = [
	{
		name: "Marketplace",
		description: `Marketplace is a webapp created with the T3 stack 
        whose goal was to simulate the functions and feeling of an e-commerce website like Amazon.
        It was built on NextJS using React, TRPC, Prisma, and Tailwind CSS. The website
        has login and logout features using Next-Auth. The website allows users to create
        and login using their accounts and browse through items that can be added
        to their cart. They can view their cart, edit item counts, remove items, and "purchase" items.
		Administrators are able to add items, edit items, and remove items.`,
		link: "https://github.com/noodaj/marketplace",
		technologies: ["ts", "react", "html", "tailwind", "next", "sqlite", "prisma"],
		finished: true,
	},
	{
		name: "To Do List",
		description: `This very basic todo list was created to help introduce me to 
		React and how React worked. Users can enter an item in their todo list along
		with a specifying priority which is defaulted to High. Once a todo has been entered,
		it will show up in their list of todos in that priority and in the all section. Users can
		change the current list of priorities with a dropdown menu. Each todo item has an option to
		change the priority, a completed button, and a delete button. If a todo is completed, it will
		still remain there unless it has been deleted.`,
		link: "https://github.com/noodaj/TodoList",
		technologies: ["react", "js", "html", "css"],
		finished: true,
	},
	{
		name: "Copycat Wordle",
		description: `Netflix, 2.0 app that has a Log In and Log Out Authentication
         with Google. It has a beautiful Home Screen with all the movies 
        looking like Netflix. There is also a subscription page 
        where you can see your actively monthly subscription. We also use 
        Stripe Payments for the monthly Netflix Subscriptions`,
		link: "",
		technologies: [
			"ts",
			"react",
			"express",
			"mongodb",
			"html",
			"css",
			"gql",
		],
		finished: false,
	},
	/*
	{
		name: "League Are You Toxic?",
		description: ``,
		link: "",
		technologies: [],
		finished: false,
	},
	*/
];
