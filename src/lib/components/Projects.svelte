<script lang="ts">
	import boggle from "$lib/assets/boggle.jpeg";
	import rideshare from "$lib/assets/rideshare.jpg";
	import lensstop from "$lib/assets/lensstop.jpg";
	import umassdesign from "$lib/assets/umassdesign.jpg";
	import interviewscommonality from "$lib/assets/interviewscommonality.jpg";
	import ratemydinning from "$lib/assets/ratemydinning.jpg";

	let projects = [
		{
			type: "Web",
			project: [
				{
					name: "Photography Portfolio",
					desc: "Explore a curated collection of stunning visuals capturing the essence of moments through Roshan's lens. From breathtaking landscapes to intimate portraits, each photograph tells a unique story. Dive in to discover the art of photography and the passion behind every shot.",
					demo: "https://roshanshetty.mypixieset.com/",
					github: "/",
					technologies: [
						"HTML",
						"CSS",
						"JavaScript",
						"TailwindCSS",
						"GitHub",
						"PixieSet",
					],
					image: lensstop,
				},
				{
					name: "Boggle",
					desc: "A fun game created using ReactJS, Node, Express, MongoDB, and Typescript as a project for students of CS497S to develop as homework modules.",
					github: "https://github.com/RoshanPShetty/boggle",
					demo: "https://roshanshettyboggle.netlify.app",
					technologies: [
						"ReactJS",
						"NodeJS",
						"Docker",
						"GitHub",
						"ExpressJS",
						"MongoDB",
						"Microservices",
					],
					image: boggle,
				},
				{
					name: "RideShare",
					desc: "Rideshare is a web application that allows people to share rides to common destinations through a sophisticated portal.",
					demo: "/",
					github: "https://github.com/RoshanPShetty/RideShare",
					technologies: [
						"ReactJS",
						"NodeJS",
						"Docker",
						"GitHub",
						"MongoDB",
						"Microservices",
					],
					image: rideshare,
				},
			],
		},
		{
			type: "Mobile",
			project: [
				{
					name: "RateMyDining",
					desc: "RateMyDining is a centralized mobile app designed to enhance the dining experience at UMass Amherst by providing real-time reviews and ratings, helping students discover and make informed decisions about diverse food options on campus.",
					github: "https://github.com/RoshanPShetty/RateMyDining",
					demo: "",
					technologies: [
						"React Native",
						"NodeJS",
						"ExpressJS",
						"Firebase",
						"TailwindCSS",
						"Typescript",
						"GitHub",
					],
					image: ratemydinning,
				},
				{
					name: "UMass Design",
					desc: "UMassDesign is a Flutter application that is built for the UMass Design Club. It was built in order to increase interactivity for the club and give a platform for everyone to post their work.",
					github: "https://github.com/RoshanPShetty/UMassDesign",
					demo: "",
					technologies: ["Flutter", "Firebase", "Dart", "GitHub"],
					image: umassdesign,
				},
				{
					name: "Interviews Commonality",
					desc: "Interviews Commonality is a mobile application that helps fasten the compilation and information derivation process for interviews conducted by FBI agents to help child rescue using Machine Learning.",
					github: "https://github.com/ML4CR/InterviewsCommonality",
					demo: "",
					technologies: [
						"ReactJS",
						"FastAPI",
						"Python",
						"GitHub",
						"GoogleAPI",
						"Docker",
						"MongoDB",
					],
					image: interviewscommonality,
				},
			],
		},
		// {
		// 	type: "Coming Soon",
		// 	project: [
		// 		{
		// 			name: "",
		// 			desc: "",
		// 			github: "",
		// 			demo: "",
		// 			technologies: [""],
		// 			image: "",
		// 		},
		// 	],
		// },
	];

	let currentProject = projects[0];
</script>

<div class="py-12 bg-gray-900">
	<div class="container m-auto px-6 space-y-8">
		<div class="m-auto text-center">
			<h2 class="text-3xl font-bold md:text-4xl text-white">Projects</h2>
			<div
				class="flex justify-center overflow-x-auto overflow-y-hidden whitespace-nowrap border-gray-700"
			>
				<button
					on:click={() => (currentProject = projects[0])}
					class={currentProject.type == "Web"
						? "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-white bg-transparent border-b-2 border-white-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
						: "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 text-white whitespace-nowrap cursor-base focus:outline-none hover:border-white hover:text-white"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
						/></svg
					>

					<span class="mx-1 text-sm sm:text-base"> Web </span>
				</button>

				<button
					on:click={() => (currentProject = projects[1])}
					class={currentProject.type == "Mobile"
						? "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-white bg-transparent border-b-2 border-white-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
						: "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 text-white whitespace-nowrap cursor-base focus:outline-none hover:border-white hover:text-white"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55l-1.27 1.27L7 16l7.19-7.19l-1.27-1.27z"
						/></svg
					>

					<span class="mx-1 text-sm sm:text-base"> Mobile </span>
				</button>

				<!-- <button
					on:click={() => (currentProject = projects[2])}
					class={currentProject.type == "Coming Soon"
						? "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-white bg-transparent border-b-2 border-white-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
						: "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 text-white whitespace-nowrap cursor-base focus:outline-none hover:border-white hover:text-white"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85l.75-1.23l-4-2.37V8M7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85M22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72Z"
						/></svg
					>

					<span class="mx-1 text-sm sm:text-base"> Coming Soon </span>
				</button> -->
			</div>
		</div>
		<div class="scrollbar-transparent overflow-x-auto">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-x-auto">
				{#each currentProject.project as project}
					<div
						class=" group p-6 sm:p-8 rounded-3xl border shadow-none border-gray-800 bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
					>
						<div class="relative overflow-hidden rounded-xl">
							<img
								src={project.image}
								alt={project.name}
								loading="lazy"
								width="1000"
								height="667"
								class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
							/>
						</div>
						<div class="mt-6 relative">
							<h3 class="text-2xl font-semibold text-white">
								{project.name}
							</h3>
							<div class="flex flex-wrap">
								{#each project.technologies as tech}
									<span
										class="whitespace-nowrap rounded-full bg-purple-700 px-2.5 py-0.5 text-sm text-white mr-2 mt-2"
									>
										{tech}
									</span>
								{/each}
							</div>
							<p class="mt-6 mb-8 text-gray-300">
								{project.desc}
							</p>
							<div class="flex gap-4 items-center justify-center">
								<a
									title="demo"
									target="blank"
									aria-label="demo"
									href={project.demo}
									class="flex items-center justify-between px-3 py-1 rounded-full border border-gray-100 bg-blue-700 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white border-gray-700 text-gray-300"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-2 h-2 mr-1 sm:w-6 sm:h-6"
										preserveAspectRatio="xMidYMid meet"
										viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
										/></svg
									>

									Demo
								</a>
								<a
									title="github"
									target="blank"
									aria-label="github"
									href={project.github}
									class="flex items-center justify-between px-3 py-1.2 rounded-full border border-gray-100 bg-black text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white border-gray-700 text-gray-300"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-2 h-2 mr-1 sm:w-6 sm:h-6"
										preserveAspectRatio="xMidYMid meet"
										viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
										/></svg
									>
									GitHub
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
