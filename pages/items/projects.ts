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
        It uses NextJS 13, React, TRPC, Prisma, and Tailwind CSS. The website
        has login and logout features using Next-Auth. The website allows users to create
        and login using their accounts and browse through items that can be added
        to their cart. They can view their cart, edit item counts, remove items, and "purchase" items.
		Administrators are able to add items, edit items, and remove items.`,
		link: "https://github.com/noodaj/marketplace",
		technologies: ["ts", "html"],
		finished: true,
	},
	
	{
		name: "To Do List",
		description: `Netflix, 2.0 app that has a Log In and Log Out Authentication
         with Google. It has a beautiful Home Screen with all the movies 
        looking like Netflix. There is also a subscription page 
        where you can see your actively monthly subscription. We also use 
        Stripe Payments for the monthly Netflix Subscriptions`,
		link: "https://github.com/noodaj/marketplace",
		technologies: ["react", "js", "html", "css"],
		finished: true,
	},
	/*
	{
		name: "Copycat Wordle",
		description: `Netflix, 2.0 app that has a Log In and Log Out Authentication
         with Google. It has a beautiful Home Screen with all the movies 
        looking like Netflix. There is also a subscription page 
        where you can see your actively monthly subscription. We also use 
        Stripe Payments for the monthly Netflix Subscriptions`,
		link: "https://github.com/noodaj/marketplace",
		technologies: ["TypeScript"],
		finished: false,
	},
	*/
];
