function save(localStorageName: string, data: RecordItem[]) {
    window.localStorage.setItem(localStorageName, JSON.stringify(data))
}

export default save;