let moviesData = [];
let lastFilteredMovies = [];

// 1. Загрузка данных
async function loadMovies() {
    try {
        const response = await fetch('movies.json');
        if (!response.ok) throw new Error('Ошибка загрузки JSON');
        moviesData = await response.json();
    } catch (error) {
        console.error("Ошибка загрузки:", error);
    }
}

// 2. Поиск фильма
function findMovie() {
    const search = document.getElementById('search').value.toLowerCase();
    const genre = document.getElementById('genre').value;
    const yearRange = document.getElementById('year').value;
    const duration = document.getElementById('duration').value;
    const rating = document.getElementById('rating').value;
    const language = document.getElementById('language').value;
    const sort = document.getElementById('sort').value;

    let filtered = moviesData.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(search) || 
                              movie.description.toLowerCase().includes(search);
        const matchesGenre = !genre || movie.genre === genre;
        
        let matchesYear = true;
        if (yearRange === "до 1980") matchesYear = movie.year < 1980;
        else if (yearRange === "80-е") matchesYear = movie.year >= 1980 && movie.year < 1990;
        else if (yearRange === "90-е") matchesYear = movie.year >= 1990 && movie.year < 2000;
        else if (yearRange === "2000-е") matchesYear = movie.year >= 2000 && movie.year < 2010;
        else if (yearRange === "2010+") matchesYear = movie.year >= 2010;

        const matchesDuration = !duration || duration === "любая" || movie.duration === duration;
        
        let matchesRating = true;
        if (rating === "7+") matchesRating = movie.rating >= 7;
        else if (rating === "8+") matchesRating = movie.rating >= 8;

        let matchesLang = true;
        if (language === "английский") matchesLang = movie.language === "английский";
        else if (language === "русский") matchesLang = movie.language === "русский";
        else if (language === "другие") matchesLang = (movie.language !== "английский" && movie.language !== "русский");

        return matchesSearch && matchesGenre && matchesYear && matchesDuration && matchesRating && matchesLang;
    });

    // Сортировка
    if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
    else if (sort === "year") filtered.sort((a, b) => b.year - a.year);
    else if (sort === "title") filtered.sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === "random") filtered.sort(() => Math.random() - 0.5);

    lastFilteredMovies = filtered;
    displayMovie(filtered[0]);
    
    document.getElementById('anotherMovie').style.display = filtered.length > 1 ? 'block' : 'none';
}

// 3. Удиви меня
function surpriseMe() {
    if (moviesData.length === 0) return;
    resetFilters();
    const randomMovie = moviesData[Math.floor(Math.random() * moviesData.length)];
    displayMovie(randomMovie);
}

// 4. Показать другой из результатов
function findAnotherMovie() {
    if (lastFilteredMovies.length > 1) {
        lastFilteredMovies.shift(); 
        displayMovie(lastFilteredMovies[0]);
    } else {
        alert("Больше ничего не найдено");
        document.getElementById('anotherMovie').style.display = 'none';
    }
}

// 5. Отрисовка карточки (ТУТ БЫЛА ОШИБКА)
function displayMovie(movie) {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('show');

    if (!movie) {
        resultDiv.innerHTML = "<h2>Ничего не найдено</h2><p>Попробуйте сбросить фильтры.</p>";
        resultDiv.style.display = 'block';
        setTimeout(() => resultDiv.classList.add('show'), 50);
        return;
    }

    // ВАЖНО: Добавлен textarea с id="movieNote"
    resultDiv.innerHTML = `
        <span class="rating-tag">⭐ ${movie.rating}</span>
        <h2>${movie.title} (${movie.year})</h2>
        <p>${movie.description}</p>
        
        <textarea id="movieNote" placeholder="Ваша заметка к фильму (необязательно)..." 
            style="width: 100%; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); 
            border-radius: 8px; padding: 10px; color: white; margin-bottom: 15px;"></textarea>
        
        <div class="button-group" style="display: flex; gap: 10px;">
            <button onclick="addToWatched('${movie.title.replace(/'/g, "\\'")}')" 
                style="background: #22c55e; flex: 1;">В просмотренные</button>
            <button onclick="shareMovie('${movie.title.replace(/'/g, "\\'")}')" 
                style="background: #3b82f6; flex: 1;">Поделиться</button>
        </div>
    `;

    resultDiv.style.display = 'block';
    setTimeout(() => resultDiv.classList.add('show'), 50);
}

// 6. Просмотренные фильмы
function addToWatched(title) {
    const noteElement = document.getElementById('movieNote');
    const note = noteElement ? noteElement.value : ""; // Проверка на существование
    
    let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies') || '[]');
    
    if (!watchedMovies.some(m => m.title === title)) {
        watchedMovies.push({ title, note });
        localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
        updateWatchedList();
    } else {
        alert("Этот фильм уже есть в вашем списке!");
    }
}

function removeFromWatched(title) {
    let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies') || '[]');
    watchedMovies = watchedMovies.filter(movie => movie.title !== title);
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    updateWatchedList();
}

function updateWatchedList() {
    const watchedList = document.getElementById('watchedList');
    const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies') || '[]');
    
    if (watchedMovies.length === 0) {
        watchedList.innerHTML = '<li>Список пуст</li>';
        return;
    }

    watchedList.innerHTML = watchedMovies.map(movie => `
        <li>
            <div>
                <strong>${movie.title}</strong>
                ${movie.note ? `<p class="watched-note" style="margin: 0; font-size: 0.85rem; color: #9ca3af;">${movie.note}</p>` : ''}
            </div>
            <button onclick="removeFromWatched('${movie.title.replace(/'/g, "\\'")}')">Удалить</button>
        </li>
    `).join('');
}

// 7. Сброс и тема
function resetFilters() {
    document.getElementById('search').value = '';
    document.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
    document.getElementById('anotherMovie').style.display = 'none';
}

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggle');
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        btn.textContent = 'Тёмная тема';
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        btn.textContent = 'Светлая тема';
    }
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

function shareMovie(title) {
    // Находим фильм в lastFilteredMovies или moviesData
    const movie = lastFilteredMovies.find(m => m.title === title) || 
                 moviesData.find(m => m.title === title);
    
    if (movie) {
        const textToCopy = `Советую фильм: "${movie.title}" (${movie.year})\n\n${movie.description}\n\nРейтинг: ⭐ ${movie.rating}`;
        navigator.clipboard.writeText(textToCopy);
        alert("Фильм скопирован!");
    } else {
        // Если не нашли в фильмах - копируем только название
        navigator.clipboard.writeText("Советую фильм: " + title);
        alert("Название скопировано!");
    }
}
// Запуск
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    updateWatchedList();
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = `${savedTheme}-theme`;
});