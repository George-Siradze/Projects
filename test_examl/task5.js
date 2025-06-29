fetch("https://swapi.tech/api/people/")
  .then((res) => res.json())
  .then((data) => {
    const characters = data.results;
    const tableBody = document.getElementById("charactersTableBody");
    characters.forEach((character) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${character.name}</td>
      `;
      tableBody.appendChild(row);
    });

    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm)
      );
      tableBody.innerHTML = "";
      filteredCharacters.forEach((character) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${character.name}</td>
        `;
        tableBody.appendChild(row);
      });
    });

    const addForm = document.getElementById("addCharacterForm");
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const characterName = document.getElementById("characterName").value;
      const newCharacter = {
        name: characterName,
        custom: true,
      };
      characters.push(newCharacter);
      const newRow = document.createElement("tr");
      newRow.classList.add("custom-character");
      newRow.innerHTML = `
        <td>${characterName}</td>
      `;
      tableBody.appendChild(newRow);
      addForm.reset();
    });
  });
