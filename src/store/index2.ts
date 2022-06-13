import recordStore from "@/store/recordStore";
import choicesStore from "@/store/choicesStore";

const store = {
    ...recordStore,
    ...choicesStore,
};

export default store;