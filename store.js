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

let store = null;

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }
  if (store === null) {
    store = new Store(isServer, initialData);
  }
  return store;
}
