class Project{
	static build(element,{name,src,description}){		let elem = `
		<div class="project">
			<h3 class="name">${name}</h3>
			<p>go to: <a href="${src}" class="link">${name}</a></p>
			<p class="description">description: <br>${description}</p>
			<br>
		</div>`
		element.innerHTML += elem;
		return elem;
	}
}

fetch('./projects.json')
  .then((response) => {return response.json()})
  .then((data)=>{
		let projectsElement = document.getElementById('projects');
		for (var p of data) {
			Project.build(projectsElement,p);
		}
})
