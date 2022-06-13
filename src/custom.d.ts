type ItemSelected = {
    id: string,
    name: string
}

interface Window {
    MyChoices: ItemSelected[],
    pushItem: (value: ItemSelected) => void
}