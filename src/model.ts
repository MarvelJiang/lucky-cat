type RecordItem = {
    choices: string,
    notes: string,
    types: string,
    amount: string,
    createAt: Date | undefined,
}

type ItemSelected = {
    id: string,
    name: string
}

const model = {
    clone(data: any) {
        return JSON.parse(JSON.stringify(data))
    },
    fetch(localStorageName: string, baseItem: string) {
        return JSON.parse(window.localStorage.getItem(localStorageName) || baseItem);
    },
    save(localStorageName: string, data: RecordItem[] | ItemSelected[]) {
        window.localStorage.setItem(localStorageName, JSON.stringify(data))
    }
};

export {model};