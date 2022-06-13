import clone from "@/lib/clone";

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
    saveRecord(record: RecordItem) {
        const record2 = clone(record);
        record2.createAt = new Date();
        return record2
    },
    fetch(localStorageName: string, baseItem: string) {
        return JSON.parse(window.localStorage.getItem(localStorageName) || baseItem);
    },
    save(localStorageName: string, data: RecordItem[]) {
        window.localStorage.setItem(localStorageName, JSON.stringify(data))
    }
};

export {model};