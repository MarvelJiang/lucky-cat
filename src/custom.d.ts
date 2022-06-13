type ItemSelected = {
    id: string,
    name: string
}

type RecordItem = {
    choices: string,
    notes: string,
    types: string,
    amount: string,
    createAt: Date | undefined,
}

interface Window {
    store: {
        MyChoices: ItemSelected[],
        pushItem: (value: ItemSelected) => void,
        recordList: RecordItem[],
        saveRecord: (record: RecordItem) => RecordItem,
        save: (localStorageName: string, data: RecordItem[]) => void
    }
}