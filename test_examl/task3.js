/**
 * პირობა იხილეთ HTML ფაილში
 */
const toggleButton = document.getElementById("toggleButton");
const userList = document.getElementById("userList");

toggleButton.addEventListener("click", () => {
  if (userList.classList.contains("hidden")) {
    renderUsers(users);
    userList.classList.remove("hidden");
    toggleButton.textContent = "Hide Users";
  } else {
    userList.innerHTML = "";
    userList.classList.add("hidden");
    toggleButton.textContent = "Show Users";
  }
});

function renderUsers(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <div class="card-header">
            <div class="user-info">
              <div class="avatar">
                <img src="${user.avatar}" alt="${user.name}" />
              </div>
              <div class="user-details">
                <h3>${user.name}</h3>
                <p class="user-email">${user.email}</p>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p class="user-id">User ID: ${user.id}</p>
          </div>
        `;
    userList.appendChild(card);
  });
}



const users = [
  { id: 1, name: "Alex Johnson", email: "alex@example.com", avatar: "https://fakeimg.pl/150x150" },
  { id: 2, name: "Sarah Williams", email: "sarah@example.com", avatar: "https://fakeimg.pl/150x150" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", avatar: "https://fakeimg.pl/150x150" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", avatar: "https://fakeimg.pl/150x150" },
  { id: 5, name: "David Wilson", email: "david@example.com", avatar: "https://fakeimg.pl/150x150" },
  { id: 6, name: "Jessica Garcia", email: "jessica@example.com", avatar: "https://fakeimg.pl/150x150" },
  { id: 7, name: "Daniel Rodriguez", email: "daniel@example.com", avatar: "https://fakeimg.pl/150x150" },
  { id: 8, name: "Ashley Martinez", email: "ashley@example.com", avatar: "https://fakeimg.pl/150x150" },
];

