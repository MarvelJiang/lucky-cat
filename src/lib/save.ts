function save(data: RecordItem[]) {
    window.localStorage.setItem('recordList', JSON.stringify(data))
}

export default save;