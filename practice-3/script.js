let data = [];
    
// Функция загрузки данных
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = await response.json();
    renderTable(data);
}

// Функция генерации таблицы
function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Функция сортировки таблицы по возрастанию и убыванию по клику на заголовок
const sortOrder = {};

document.querySelectorAll("th").forEach((headerCell, columnIndex) => {
  sortOrder[columnIndex] = true; 
  headerCell.addEventListener("click", () => {
    sortColumn(columnIndex);
    sortOrder[columnIndex] = !sortOrder[columnIndex]; 
  });
});

function sortColumn(columnIndex) {
  const table = document.querySelector("#dataTable tbody");
  const rows = Array.from(table.querySelectorAll("tr"));


  const sortedRows = rows.sort((a, b) => {
    const aText = a.querySelectorAll("td")[columnIndex].textContent.trim();
    const bText = b.querySelectorAll("td")[columnIndex].textContent.trim();

    if (columnIndex === 0) {
      const aNum = parseInt(aText, 10);
      const bNum = parseInt(bText, 10);
      return sortOrder[columnIndex] ? aNum - bNum : bNum - aNum;
    } else {
      return sortOrder[columnIndex]
        ? aText.length - bText.length
        : bText.length - aText.length;
    }
  });

  table.innerHTML = "";
  sortedRows.forEach(row => table.appendChild(row));
}

// Функция для фильтрации таблицы
function filterTable() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const filteredData = data.filter(item => 
        item.title.toLowerCase().includes(searchValue) || 
        item.body.toLowerCase().includes(searchValue)
    );
    renderTable(filteredData);
}

// Обработчик события для поиска
document.getElementById('searchBar').addEventListener('input', function() {
    if (this.value.length >= 3) {
        filterTable();
    } else {
        renderTable(data);
    }
});

// Данные при загрузке страницы
window.onload = fetchData;