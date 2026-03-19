

const links = document.querySelectorAll('.tabs ul li a');
const tabs = document.querySelectorAll('.tabs ul li');
const panels = document.querySelectorAll('.tabs div');

function showTab(id) {
	tabs.forEach(function (tab) {
		tab.classList.remove('active');
	});

	panels.forEach(function (panel) {
		panel.classList.remove('active');
	});

	links.forEach(function (link) {
		if (link.getAttribute('href') === '#' + id) {
			link.parentElement.classList.add('active');
		}
	});

	document.getElementById(id).classList.add('active');
}

links.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		let id = this.getAttribute('href').replace('#', '');
		showTab(id);
	});
});


showTab('tabpanel1');