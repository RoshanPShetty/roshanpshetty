<script lang="ts">
	let experiences = [
		{
			company: "U-Tutors",
			title: "Lead Full Stack Developer",
			dateStart: "Jan. 2023",
			dateEnd: "Present",
			description:
				"Designing and implementing a student-to-student tutoring platform with an intuitive interface and integrated scheduling/payment systems.Collaborating on enhancing platform security, improving UX, and boosting user engagement through marketing and outreach.",
			companyLogo:
				"https://media.licdn.com/dms/image/C4D0BAQGCj-Gyoq47Bg/company-logo_200_200/0/1644088275985?e=1683763200&v=beta&t=rx40WuqNDiap609UYWj4TG1uF1_lB-uGNYpSOo98qbc",
		},
		{
			company: "University of Massachusetts Amherst",
			title: "MS Course Grader",
			dateStart: "Sep. 2022",
			dateEnd: "Dec. 2022",
			description: "Course grader for the Scalable Web Systems",
			companyLogo:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/UMass_Amherst_Athletics_logo.svg/2505px-UMass_Amherst_Athletics_logo.svg.png",
		},
		{
			company: "GRUBBRR",
			title: "Full Stack Developer Intern",
			dateStart: "Jun. 2022",
			dateEnd: "Dec. 2022",
			description:
				"Designed Menu Builder Tool with dynamic data nesting and 10+ features, including Excel interface. Improved system performance by 20% by transitioning to a reactive Svelte model with data immutability and consistency.",
			companyLogo:
				"https://media-exp1.licdn.com/dms/image/C560BAQGKT8eu4FDVuQ/company-logo_200_200/0/1624570564117?e=2147483647&v=beta&t=_K4py6m7h7u022ZVrl47VpKO0gvRgNx50xqSjiaeK4Y",
		},
		{
			company: "UMass Amherst School of Public Health & Health Sciences",
			title: "IT Assistant",
			dateStart: "Jan. 2022",
			dateEnd: "May. 2022",
			description:
				"Supported and maintained over 400 in-house computer systems and desktops for the School of Public Health through ServiceNow and Tenable.io to detect vulnerabilities. Used KACE Systems for imaging computers and configuring drivers.",
			companyLogo:
				"data:image/jpeg;base64,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",
		},
		{
			company: "Tata Consultancy Services",
			title: "Business Analyst Intern",
			dateStart: "Jun. 2021",
			dateEnd: "Aug. 2021",
			description:
				"Implemented machine learning models like Random Forest Algorithm through Exploratory Data Analysis (EDA) of time series data to determine appropriate machine learning algorithms by decomposing level, trend, seasonality, and noise using Python for o9 implementation",
			companyLogo:
				"https://pbs.twimg.com/profile_images/1348913543983165440/MDrjijV6_400x400.png",
		},
		{
			company: "UMass Amherst College of Social and Behavioral Sciences",
			title: "Fullstack Developer",
			dateStart: "Jun. 2021",
			dateEnd: "Aug. 2021",
			description:
				"Developed shiny application for DACSS faculty to store, access, and edit school data. Visualized UMass Amherst data using R in the form of a schedule as an interactive shiny application published on the school website - dacss.shinyapps.io/Schedule/",
			companyLogo:
				"https://www.umass.edu/sbs/sites/default/files/styles/list/public/images/news/thumbs/SBS_Secondary_RGBnews-thumb_6.png?itok=u8W720tD",
		},
		{
			company: "University of Massachusetts Amherst",
			title: "Resident Assistant",
			dateStart: "Jan. 2021",
			dateEnd: "Jan. 2022",
			description:
				"Offered residential experience supporting students’ learning, personal growth, and academic achievement. Fostering inclusive communities, creating social and educational opportunities, and providing safe and well-maintained residences.",
			companyLogo:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/UMass_Amherst_Athletics_logo.svg/2505px-UMass_Amherst_Athletics_logo.svg.png",
		},
	];
</script>

<div class="py-12 bg-gray-900">
	<div class="container m-auto px-6 space-y-8">
		<div class="m-auto text-center">
			<h2 class="text-3xl font-bold md:text-4xl text-white">Experiences</h2>
		</div>

		<div class="scrollbar-transparent overflow-x-auto">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-x-auto">
				{#each experiences as experience}
					<!-- <div
							class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400"
						>
							<h3 class="text-xl font-semibold tracking-wide">
								{experience.company}
							</h3>
							<span
								class="my-2 text-xs font-bold tracking-widest text-light-blue-600 uppercase"
							>
								{experience.title}
							</span>
							<time class="text-xs tracking-wide uppercase text-gray-400"
								>{experience.dateStart} - {experience.dateEnd}
							</time>
							<p class="mt-3">
								{experience.description}
							</p>
						</div> -->
					<!-- <div
						class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
					>
						<img
							class="object-scale-down object-center w-full h-56"
							src={experience.companyLogo}
							alt="avatar"
						/>

						<div class="px-6 py-4">
							<h1 class="text-xl font-semibold text-gray-800 dark:text-white">
								{experience.title}
							</h1>

							<p class="py-2 text-gray-700 dark:text-gray-400">
								{experience.description}
							</p>

							<div
								class="flex items-center mt-4 text-gray-700 dark:text-gray-200"
							>
								<svg
									aria-label="suitcase icon"
									class="w-6 h-6 fill-current"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M14 11H10V13H14V11Z" /><path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
									/>
								</svg>

								<h1 class="px-2 text-sm">{experience.company}</h1>
							</div>

							<div
								class="flex items-center mt-4 text-gray-700 dark:text-gray-200"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-6 h-6 fill-current"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M12 14q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-4 0q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm8 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14Zm-4 4q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm-4 0q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm8 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10ZM5 8h14V6H5Zm0 0V6v2Z"
									/></svg
								>

								<h1 class="px-2 text-sm">
									{experience.dateStart} - {experience.dateEnd}
								</h1>
							</div>
						</div>
					</div> -->
					<div
						class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
					>
						<span
							class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
						/>

						<div class="justify-between sm:flex">
							<div>
								<h3 class="text-xl font-bold text-white">
									{experience.company}
								</h3>

								<p
									class="mt-1 text-xs font-bold tracking-widest text-light-blue-600 uppercase"
								>
									{experience.title}
								</p>
							</div>

							<div class="ml-3 hidden flex-shrink-0 sm:block">
								<img
									alt="Paul Clapton"
									src={experience.companyLogo}
									class="h-16 w-16 rounded-lg object-cover shadow-sm"
								/>
							</div>
						</div>

						<div class="mt-4 sm:pr-8">
							<p class="text-sm text-gray-200">
								{experience.description}
							</p>
						</div>

						<div class="mt-6 flex">
							<dd class="text-xs text-gray-400">
								{experience.dateStart} - {experience.dateEnd}
							</dd>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
