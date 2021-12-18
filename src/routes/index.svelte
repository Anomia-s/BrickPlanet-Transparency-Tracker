<script type="text/javascript">
	import { user, username } from './userManager';
	import Gun from 'gun/gun';
	import { writable } from 'svelte/store';

	function getDate() {
		let today = new Date();

		let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

		let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

		return `${date} ${time}`;
	}

	let usernameInput;
	let passwordInput;
	let statusMessage = writable('');
	let messageLog = [];
	let messageSubscriber = statusMessage.subscribe(
		(variable) => messageLog.push(variable) && console.log(`[${getDate()}] - ${variable}`)
	);

	function login() {
		user.auth(usernameInput, passwordInput, ({ err }) => err && alert(err) && statusMessage.set(err));
	}

	function signup() {
		user.create(usernameInput, passwordInput, ({ err }) => {
			if (err) {
				alert(err);
			} else {
				login();
			}
		});
	}

	let categories = [
		{
			id: 0,
			name: 'Expenses',
			emojis: '📁',
			description: 'Its pog',
			updates: [
				{ title: 'Testing #1', date: '2021', contents: 'I love BrickPlanet??' },
				{ title: 'Testing #2', date: '2021', contents: 'I DONT love BrickPlanet??' },
				{ title: 'Testing #3', date: '2021', contents: 'what is LOVE??' }
			]
		}
	];
</script>

<div class="p-2 m-2  md:mx-auto container">
	<div class="text-center text-5xl" style="font-family: 'Source Sans Pro', sans-serif;">
		<strong>Are we Transparent yet?</strong> 🕵️
	</div>
	<div
		class="md:text-center md:text-justified  my-2 bg-blue-900 text-white rounded p-2 text-center sm:mx-auto"
	>
		"BrickPlanet Transparency Tracker" is a tool developed by Shiggy#9764 to keep track of <strong
			>transparency and corporate responsibility
		</strong>
		at BrickPlanet.
		<div class="my-5">
			Sadly, ever since the first release of BrickPlanet, the website and communities surrounding it
			have gone through 5 consecutive shut downs leading to large distrust and hate torwards the
			BrickPlanet community aswell as the developer himself, Isaac. This tool acts as a middle-man
			that evaluates the transparency and confidence that BrickPlanet offers to users.
		</div>
	</div>
	{#if !user.is}
		<div class="border-2 rounded m-2 text-center mx-auto">
			<input
				bind:value={usernameInput}
				class="bg-gray-200 shadow-inner focus:outline-none p-2 m-2 rounded"
				type=""
				name="username"
				placeholder="username"
			/>
			<br />
			<input
				bind:value={passwordInput}
				class="bg-gray-200 shadow-inner focus:outline-none p-2 m-2 rounded"
				type=""
				name="chat"
				placeholder="password"
			/>
			<div
				class="text-center mx-auto border-2 bg-black text-white font-bold w-max py-1 px-3 rounded border-black hover:bg-white hover:text-black m-2 cursor-pointer transition-all duration-500  "
			  on:click={login}
        >
				log in
			</div>
			<p />
			<div
				class="text-center mx-auto border-2 bg-black text-white font-bold w-max py-1 px-3 rounded border-black hover:bg-white hover:text-black m-2 cursor-pointer transition-all duration-500  "
				on:click={signup}
			>
				register
			</div>
		</div>
	{/if}
	{#each categories as { id, name, emojis, description, updates }, i}
		<div class="border-black border-2 p-2 cursor-pointer ">
			<div class="text-2xl  text-center select-none">{emojis}<strong>{name}</strong>{emojis}</div>

			<div name="statusContainer" class="">
				<div class="text-center italic font-thin">
					{description}
				</div>

				{#each updates as { date, title, contents }, i}
					<div>
						<div name="logContainer" class="bg-gray-600 text-white m-2 p-2 ">
							<div name="title" class="text-xl m-2">{title}</div>
							<div name="date" class="italic font-thin m-2">{date}</div>
							<div name="content" class="text-justified m-2">{contents}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
