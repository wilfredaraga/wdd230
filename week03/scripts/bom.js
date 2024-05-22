const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value)

        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    };
})

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    })

    input.focus();
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter)
    setChapterList();

}