<script lang="ts">
	import profile from "$lib/assets/profile.jpg";
	import resume from "$lib/assets/Shetty_Roshan_Praveen_Resume.pdf";
</script>

<section>
	<div
		class="px-4 py-12 bg-gray-800 mx-auto sm:px-6 md:px-12 lg:px-24 lg:py-24"
	>
		<div class="flex flex-wrap items-center mx-auto max-w-7xl">
			<div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
				<div>
					<div class="relative w-full max-w-lg">
						<div
							class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"
						/>

						<div
							class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
						/>
						<div class="relative">
							<img
								class="object-cover object-center mx-auto rounded-lg shadow-2xl"
								alt="Profile"
								src={profile}
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0"
			>
				<span
					class="mb-8 text-xs font-bold tracking-widest text-light-blue-600 uppercase"
				>
					Hello There 👋, I am
				</span>
				<h1
					class="mb-8 text-4xl font-bold leading-none tracking-tighter text-white md:text-7xl lg:text-5xl"
				>
					Roshan Praveen Shetty.
				</h1>
				<p class="mb-8 text-base leading-relaxed text-left text-gray-400">
					I’m passionate about innovating and creating new products that solve real-world problems and push the boundaries of technology. My drive to build and explore new ideas is matched by my love for <strong class="text-white font-italic underline"><a href="https://roshanshetty.mypixieset.com/" target="_blank">photography</a></strong>, where I capture moments and perspectives that inspire and intrigue me. Whether through cutting-edge software or a well-timed photograph, I’m dedicated to bringing creativity and innovation to everything I do. Let’s connect and explore how we can make a difference together!
				</p>
				<div class="flex justify-center w-full mt-2 -mx-4 text-left">
					<button
						class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
					>
						<a download href={resume} class="flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"
								/></svg
							>
							<span class="mx-1">Download Resume</span>
						</a></button
					>
				</div>
			</div>
		</div>
	</div>
</section>
