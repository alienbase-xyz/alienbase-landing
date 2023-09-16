import { defineStore } from "pinia";

interface IStore {
    visible: boolean;
}

interface IActions {
    toggle: (v?: boolean) => void;
}

export const useMenuStore = defineStore<"menu", IStore, {}, IActions>("menu", {
    state: () => ({
        visible: false,
    }),
    actions: {
        toggle(v?: boolean) {
            this.visible = v != undefined ? v : !v;
        }
    }
});
