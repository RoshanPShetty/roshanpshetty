<script lang="ts">
	let skills = [
		{
			skill: "Frontend",
			logos: [
				"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
				"https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
				"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
				"https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
				"https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
				"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
				"https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
				"https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
				"https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
				"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
			],
		},
		{
			skill: "Backend",
			logos: [
				"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
				"https://www.vectorlogo.zone/logos/java/java-icon.svg",
				"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
				"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
				"https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg",
				"https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
				"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
			],
		},
		{
			skill: "Data Management",
			logos: [
				"https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
				"https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
				"https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
				"https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
				"https://www.vectorlogo.zone/logos/docker/docker-tile.svg",
				"https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
			],
		},
	];

	let currentSkill = skills[0];
</script>

<div class="py-16 bg-gray-800">
	<div class="container m-auto px-6 space-y-8">
		<div class="m-auto text-center">
			<h2 class="text-3xl font-bold md:text-4xl text-white">Skills</h2>
			<div
				class="flex justify-center overflow-x-auto overflow-y-hidden whitespace-nowrap border-gray-700"
			>
				<button
					on:click={() => (currentSkill = skills[0])}
					class={currentSkill.skill == "Frontend"
						? "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-white bg-transparent border-b-2 border-white-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
						: "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 text-white whitespace-nowrap cursor-base focus:outline-none hover:border-white hover:text-white"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
						><g fill="none" stroke-width="1.5"
							><g
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								clip-path="url(#svgIDa)"
								><path
									d="m17.674 11.408l-1.905 5.715a.6.6 0 0 1-.398.386L3.693 20.98a.6.6 0 0 1-.74-.765L6.745 8.841a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.615ZM3.296 20.602l6.364-6.364"
								/><path
									d="m17.792 11.056l2.828-2.829a2 2 0 0 0 0-2.828L18.5 3.277a2 2 0 0 0-2.829 0l-2.828 2.829m-1.062 6.01a1.5 1.5 0 1 0-2.121 2.122a1.5 1.5 0 0 0 2.121-2.122Z"
								/></g
							><defs
								><clipPath id="svgIDa"
									><path fill="#fff" d="M0 0h24v24H0z" /></clipPath
								></defs
							></g
						></svg
					>

					<span class="mx-1 text-sm sm:text-base"> Frontend </span>
				</button>

				<button
					on:click={() => (currentSkill = skills[1])}
					class={currentSkill.skill == "Backend"
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
							d="M3 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v.67l-2.5-1.11l-6.5 2.88V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h8c.06 2.25 1 4.4 2.46 6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M8 5h1V3H8v2m0 8h1v-2H8v2m0 8h1v-2H8v2M4 3v2h2V3H4m0 8v2h2v-2H4m0 8v2h2v-2H4m13.5-7l4.5 2v3c0 2.78-1.92 5.37-4.5 6c-2.58-.63-4.5-3.22-4.5-6v-3l4.5-2m0 1.94L15 15.06v2.66c0 1.54 1.07 2.98 2.5 3.34v-7.12Z"
						/></svg
					>

					<span class="mx-1 text-sm sm:text-base"> Backend </span>
				</button>

				<button
					on:click={() => (currentSkill = skills[2])}
					class={currentSkill.skill == "Data Management"
						? "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-white bg-transparent border-b-2 border-white-500 sm:px-4 -px-1 whitespace-nowrap focus:outline-none"
						: "inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 text-white whitespace-nowrap cursor-base focus:outline-none hover:border-white hover:text-white"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 16 16"
						><g fill="currentColor"
							><path
								d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"
							/><path
								d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"
							/><path
								d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876c-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"
							/></g
						></svg
					>

					<span class="mx-1 text-sm sm:text-base"> Data Management </span>
				</button>
			</div>
		</div>
		<div class="bg-gray-800 py-16">
			<div class="container m-auto space-y-8 px-6 text-gray-500 md:px-12">
				<div class="scrollbar-transparent overflow-x-auto">
					<div
						class="-mx-6 flex space-x-6 px-6 md:space-x-12 lg:justify-between"
					>
						{#each currentSkill.logos as logo}
							<img
								src={logo}
								loading="lazy"
								class="w-24 h-24 object-fit"
								alt="logo"
							/>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
