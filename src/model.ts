type RecordItem = {
    choices: string,
    notes: string,
    types: string,
    amount: string,
    createAt: Date | undefined,
}

const localStorageKeyName = 'recordList';
const model = {
    clone(data: RecordItem) {
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
    }
};

export {model};