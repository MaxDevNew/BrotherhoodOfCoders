async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Сетевой ответ был не в порядке');
        }
        const data = await response.json();
        populateTable(data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function populateTable(posts) {
    const tableBody = document.querySelector('#postsTable tbody');
    posts.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchPosts();