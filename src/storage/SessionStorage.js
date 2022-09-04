export class SessionStorage {
    static _set(key, val) {
        return window.sessionStorage.setItem(key, JSON.stringify(val));
    }
    static _remove(key) {
        return window.sessionStorage.removeItem(key);
    }
    static _get(key) {
        const item = window.sessionStorage.getItem(key);
        if (!item) {
            return null;
        }
        return JSON.parse(item);
    }

    static setItem(key, val) {
        console.log('called the set');
        return new Promise((res) => res(this._set(key, val)));
    }

    static removeItem(key) {
        return window.sessionStorage.removeItem(key);
    }

    static getItem(key) {
        console.log('called the get');
        return new Promise((res) => res(this._get(key)));
    }

    static updateItem(key, val) {
        console.log('called the update');
        return new Promise((res) => res(this._set(key, val)));
    }
}
