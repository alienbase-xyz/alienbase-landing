import { defineStore } from "pinia";

interface IStore {
    visible: boolean;
    advertiser: boolean;
}

interface IActions {
    toggle: (v?: boolean) => void;
    untoggleAdveriser: () => void;
}

export const useMenuStore = defineStore<"menu", IStore, {}, IActions>("menu", {
    state: () => ({
        visible: false,
        advertiser: true,
    }),
    actions: {
        toggle(v?: boolean) {
            this.visible = v != undefined ? v : !v;
        },
        untoggleAdveriser() {
            this.advertiser = false;
        }
    }
});
