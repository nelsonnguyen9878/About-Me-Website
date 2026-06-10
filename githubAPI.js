const username = "nelsonnguyen9878";

fetch(`https://api.github.com/users/${username}/repos`)
  .then((response) => response.json())
  .then((repos) => {
    const container =
      document.getElementById("repo-container");
    repos.forEach((repo) => {
      const card =
      document.createElement("div");

      card.classList.add("repo-card");

      card.innerHTML = `
        <div>
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description"}</p>
        </div>

        <div>
          ⭐ ${repo.stargazers_count}
        </div>

        <div>
          ${repo.language || "N/A"}
        </div>
      `;

      container.appendChild(card);
    });
  });