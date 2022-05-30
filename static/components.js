function loadComponents() {
	const topbarContent = `
	<img alt="logo" class="logo" src="/static/favicon.ico">
	<a class="leftLink" href="/about">About</a>
	<a class="leftLink" href="/credits">Credits</a>
	<input type="search" class="leftLink" placeholder="Type an username">
	<img class="rightLink" src="/static/icons/theme.svg" onClick="changeTheme()">`
	document.getElementsByClassName("topbar")[0].innerHTML = topbarContent;
	const featuredUsers = getFeaturedUsers();
}

function getFeaturedUsers() {
	fetch("/static/featured.json")
		.then((res) => res.json())
		.then((data) => {
			var i = 0;
			const section = "";
			for (i == 0, i < data.length, i++) {
				var username = data[i].username;
				var id = data[i].id;
				var pfp = "https://uploads.scratch.mit.edu/get_image/user/${id}_64x64.png";
				const addition = `
				<div class="profile">
					<img src="${pfp}" alt="${username}’s profile picture">
					<a href="/viewer.html?user=${username}">${username}</a>
				</div>`
				var i += 1;
				var section += addition;
			}
		})
}
