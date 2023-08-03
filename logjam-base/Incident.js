export default class Incident extends Error {
    #errorCode;
    #customFields;

    constructor() {
        this.#errorCode = null;
        this.#customFields = {};
    }

    /**
     * 
     * @param {String|Object} json The JSON, as a string or object, to reconstruct an Incident.
     */
    constructor(json) {
        // TODO
    }

    getCode() {
        return this.#errorCode;
    }
    setCode(errorCode) {
        if(typeof(errorCode) !== 'string') throw new Error('errorCode must be a string');
        this.#errorCode = errorCode;
    }

    getField(key) {
        if(typeof(key) !== 'string') throw new Error('key must be a string');
        return this.#customFields[key];
    }
    getFields() {
        return Object.freeze(this.#customFields);
    }
    setField(key, value) {
        if(typeof(key) !== 'string') throw new Error('key must be a string');
        this.#customFields[key] = value;
    }

    build() {
        // TODO: Build the JSON representation of this Incident.
    }

    toString() {
        // TODO: human readable string
    }
}
