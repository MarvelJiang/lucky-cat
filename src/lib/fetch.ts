function fetch(localStorageName: string, baseItem: string) {
    return JSON.parse(window.localStorage.getItem(localStorageName) || baseItem);
}

export default fetch;