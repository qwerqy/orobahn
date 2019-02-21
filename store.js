import { action, observable } from "mobx";
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

class Store {
  @observable darkMode = false;

  constructor(isServer, initialData = {}) {
    if (initialData) {
      Object.assign(this, initialData);
    }
  }

  @action toggleDarkMode = bool => {
    this.darkMode = bool;
  };
}

export default Store;
