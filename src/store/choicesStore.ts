import clone from "@/lib/clone";
import fetch from "@/lib/fetch";
import save from "@/lib/save"

export default {
    MyChoices: fetch('choicesItem', `[{"id": "in", "name": "入账"}]`),
    pushItem: function (value: ItemSelected) {
        let i: number;
        let index: undefined | number;
        for (i = 0; i < this.MyChoices.length; i++) {
            if (this.MyChoices[i].id === value.id) {
                index = i
            }
        }
        if (index) {
            this.MyChoices.splice(index, 1);
        } else {
            this.MyChoices.push(value);
        }
        // if (this.selectedItem.indexOf(value) === -1) {
        //   this.selectedItem.push(value);
        //   console.log(this.selectedItem);
        // } else {
        //   const index = this.selectedItem.indexOf(value);
        //   this.selectedItem.splice(index, 1);
        //   console.log(this.selectedItem);
        // }
        const choicesItem = clone(this.MyChoices);
        save('choicesItem', choicesItem)
    },
}