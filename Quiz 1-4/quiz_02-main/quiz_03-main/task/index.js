fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          const grid = document.querySelector('.grid');
          users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('card');
            const header = document.createElement('div');
            header.classList.add('card-header');
            const avatar = document.createElement('div');
            avatar.classList.add('card-avatar');
            avatar.textContent = user.name[0].toUpperCase();
            header.appendChild(avatar);
            const body = document.createElement('div');
            body.classList.add('card-body');
            const title = document.createElement('h3');
            title.classList.add('card-title');
            title.textContent = user.name;
            const address = document.createElement('p');
            address.classList.add('card-address');
            address.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}`;
            body.appendChild(title);
            body.appendChild(address);
            card.appendChild(header);
            card.appendChild(body);
            grid.appendChild(card);
          });
          const searchInput = document.querySelector('.search-input');
          searchInput.addEventListener('input', event => {
            const searchTerm = event.target.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
              const name = card.querySelector('.card-title').textContent.toLowerCase();
              if (name.includes(searchTerm)) {
                card.style.display = 'block';
              } else {
                card.style.display = 'none';
              }
            });
          });
        });

