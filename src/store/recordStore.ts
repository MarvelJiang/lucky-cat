import fetch from "@/lib/fetch";
import clone from "@/lib/clone";
import save from "@/lib/save";


export default {
    recordList: fetch('recordList', '[]'),
    saveRecord: (record: RecordItem) => {
        const record2 = clone(record);
        record2.createAt = new Date();
        return record2
    },
    save: save,
}