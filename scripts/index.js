var typed = new Typed("#element", {
  strings: ["Web Developer", "Graphic Designer", "Web Designer"],
  typeSpeed: 50,
  loop: true,
});

const container = document.getElementById("experience-box");

experienceData.forEach((item) => {
  const div = document.createElement("div");
  div.className = "vertical-line";
  div.innerHTML = `
                <img class="image-top" src="${item.img}" alt="">
                    <div class="role-title">${item.title}</div>
                    <div class="company">${item.company}</div>
                    <div class="role-duration">${item.duration}</div>
                    <div class="role-description">${item.description}</div>
                `;
  container.appendChild(div);
});
