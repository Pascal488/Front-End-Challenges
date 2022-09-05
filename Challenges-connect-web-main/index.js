const projects = [
	{
		name: 'Profile card component',
        site:
			'http://front-end-challange-1-git-master-pascal488.vercel.app/',

        github:'https://github.com/Pascal488/Front-end-challange-1'
    },
		
	{
		name: 'Social proof section master',
        site:
			'https://front-end-challenge-2.vercel.app/',
		github:'https://github.com/Pascal488/Front-end-challenge-2'
		
	},


	{
		name: 'Four card feature section',
		site:
			'https://front-end-challege-3-pascal488.vercel.app/',
		github:'https://github.com/Pascal488/Front-end-challege-3'
	},
	
	{
		name: 'single-price-grid-component',
        site:
			'https://front-end-challege-4.vercel.app/',
		github:'https://github.com/Pascal488/Front-end-challege-4'
		
	},
	
	
	{
		name: 'Huddle landing page with a single introductory section',
        site:
			'https://front-end-challenge-5.vercel.app/',
		github:'https://github.com/Pascal488/Front-end-challenge-5'
	
	},
		
	
];

const list = document.getElementById('list');

projects.forEach(({ name, site, github}, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}index.html">
			<img src="./${name}/design/desktop-design.jpg" alt="${name}">
			<p>${i + 1}. ${formatProjectName(name)}</p>

		</a>
		<div class="links-container">
			<a href="${site}" class="git">
            <i class="fas fa-eye"></i>
			</a>
            <a href="${github}" class="blue">
        	<i class="fab fa-github-square"></i>
			
        </a>

		</div>
	`;
	list.appendChild(listItem);

});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

//>>>LOVE WINS ALL<<<<