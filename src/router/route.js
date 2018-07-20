module.exports = class Route {
    constructor(template, defaults = {}) {
        this.template = template;
        this.defaults = defaults;
    }
    
    getTemplate() {
        return this.template;
    }
    
    getDefaults() {
        return this.defaults;
    }

    getPath() {
        const colonPos = this.template.indexOf(':');
        if(colonPos > -1) {
            return this._trimPath(this.template.substring(0, colonPos));
        }
        const starPos = this.template.indexOf('*');
        if(starPos > -1) {
            return this._trimPath(this.template.substring(0, starPos));
        }
        return this._trimPath(this.template);
    }

    _trimPath(path) {
        return path.replace(/\/+$/, '') || '/';
    }
};