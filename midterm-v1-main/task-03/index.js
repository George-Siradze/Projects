/**
 * პირობა იხილეთ HTML ფაილში
 */
document.getElementById('toggleButton').addEventListener('click', function() {
  const userList = document.getElementById('userList');
  const isHidden = userList.classList.toggle('hidden');
  this.textContent = isHidden ? 'Show Users' : 'Hide Users';

  if (!isHidden) {
    userList.innerHTML = users.map(user => `
      <div class="card">
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
      </div>
    `).join('');
  } else {
    userList.innerHTML = '';
  }
});

const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "https://fakeimg.pl/150x150",
  },
];
