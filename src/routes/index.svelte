<script type="text/javascript">
	import { user } from '../components/userManager';
	import Login from '../components/Login.svelte';
	import Header from '../components/Header.svelte';
	function getDate() {
		let today = new Date();

		let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

		let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

		return `${date} ${time}`;
	}

	let categories = [
		{
			id: 1,
			name: 'Income',
			emojis: '💵',
			description: 'How much money is BrickPlanet generating?',
			updates: [
				{ title: 'December Batch #2', date: '2021', contents: 'No Data.' },
				{ title: 'December Batch #1', date: '2021', contents: 'No Data.' },
				{ title: 'Beginnings', date: '2021', contents: 'Transparency Updates begin.' }
			]
		},
		{
			id: 0,
			name: 'Expenses',
			emojis: '📁',
			description: 'How expensive is it to run BrickPlanet?',
			updates: [
				{ title: 'December Batch #2', date: '2021', contents: 'No Data.' },
				{ title: 'December Batch #1', date: '2021', contents: 'No Data.' },
				{ title: 'Beginnings', date: '2021', contents: 'Transparency Updates begin.' }
			]
		}
	];
</script>

<div class="p-2 m-2  md:mx-auto container">
	<Header />
	<Login />
	<div class="text-center text-4xl">We're not!<br>❌</div>
	<p class=" border-4 rounded border-black w-max mx-auto p-2 m-3 bg-red-500 text-white text-center italic">Status: BrickPlanet has not been released yet. Thus no data.</p>
	{#each categories as { id, name, emojis, description, updates, isOpen }, i}
		<div class="border-black border-2 p-2  my-1">
			<div class="text-2xl  text-center select-none" class:hidden={isOpen}>
				{emojis}<strong>{name}</strong>{emojis}
			</div>

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
