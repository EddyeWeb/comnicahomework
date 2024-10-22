async function fetchUsersAndAssignColors() {
    try {
        const usersResponse = await fetch('https://dummyjson.com/users');
        if (!usersResponse.ok) {
            throw new Error('Hiba a felhasználók lekérésekor');
        }
        const usersData = await usersResponse.json();
        const users = usersData.users;

        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F833FF'];

        const usersWithColors = users.map((user, index) => {
            const assignedColor = colors[index % colors.length];
            return { ...user, color: assignedColor };
        });

        const userList = document.getElementById('userList');
        usersWithColors.forEach(user => {
            const listItem = document.createElement('li');
            listItem.style.backgroundColor = user.color;

            const userName = document.createElement('span');
            userName.className = 'user-name';
            userName.textContent = `${user.firstName} ${user.lastName}`;

            listItem.appendChild(userName);
            userList.appendChild(listItem);
        });

    } catch (error) {
        console.error('Hiba történt:', error.message);
    } finally {
        console.log('A folyamat befejeződött.');
    }
}

fetchUsersAndAssignColors();

// Codepen link
// https://codepen.io/peterbotta/pen/eYqGBZe