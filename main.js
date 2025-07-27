document.addEventListener("DOMContentLoaded", () => {
    const bookmarkInput = document.getElementById('bookmarkInput');
    const addBookmarkBtn = document.getElementById('addBookmarkBtn');
    const bookmarkList = document.getElementById('bookmarkList');

    const loadBookmarks = () => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.forEach(bookmark => {
            addBookmarkToList(bookmark);
        });
    };

    const addBookmarkToList = (bookmark) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${bookmark}" target="_blank">${bookmark}</a>
            <button class="delete">Видалити</button>
        `;
        bookmarkList.appendChild(li);
        li.querySelector('.delete').addEventListener('click', () => {
            li.remove();
            removeBookmark(bookmark);
        });
    };

    const addBookmark = () => {
        const bookmark = bookmarkInput.value;
        if (bookmark) {
            addBookmarkToList(bookmark);
            saveBookmark(bookmark);
            bookmarkInput.value = '';
        }
    };

    const saveBookmark = (bookmark) => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };

    const removeBookmark = (bookmark) => {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks = bookmarks.filter(b => b !== bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };

    addBookmarkBtn.addEventListener('click', addBookmark);
    loadBookmarks();
});





document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const saveBtn = document.getElementById('saveBtn');

    const loadData = () => {
        const username = localStorage.getItem('username') || '';
        const password = localStorage.getItem('password') || '';
        usernameInput.value = username;
        passwordInput.value = password;
    };

    const saveData = () => {
        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('password', passwordInput.value);
    };

    saveBtn.addEventListener('click', saveData);
    loadData();
});
