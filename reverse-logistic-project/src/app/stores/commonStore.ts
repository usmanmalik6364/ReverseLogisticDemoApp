import { makeAutoObservable } from "mobx";

class CommonStore {
  theme: "light" | "dark" = "light";

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(theme: "light" | "dark") {
    this.theme = theme;
  }
}

export default CommonStore;