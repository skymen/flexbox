import { id, addonType } from "../../config.caw.js";
import AddonTypeMap from "../../template/addonTypeMap.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      const properties = this._getInitProperties();
      this.enabled = true;
      this.classes = [];
      this.style = {};
      this._computedStyles = undefined;
      if (properties) {
        this.enabled = properties[0];
        this.setClasses(properties[1]);
        this.setStyle(properties[2]);
      }
    }

    _postCreate() {
      this.instance.__flexbox_ui_element = this;
    }

    addClass(...classes) {
      classes = classes.map((x) => x.split(" ").filter((c) => c.trim())).flat();
      this.classes = [...new Set([...this.classes, ...classes])];
      this._computedStyles = undefined;
    }

    removeClass(...classes) {
      classes = classes.map((x) => x.split(" ").filter((c) => c.trim())).flat();
      this.classes = this.classes.filter((c) => !classes.includes(c));
      this._computedStyles = undefined;
    }

    setClasses(...classes) {
      classes = classes.map((x) => x.split(" ").filter((c) => c.trim())).flat();
      this.classes = classes;
      this._computedStyles = undefined;
    }

    setStyle(style) {
      this.style = this.behavior.controller.layout.parseStyle(style);
      this._computedStyles = undefined;
    }

    setStyleProperty(property, value) {
      this.behavior.controller.layout.setPropertyInStyle(
        this.style,
        property,
        value
      );
      this._computedStyles = undefined;
    }

    removeStyleProperty(property) {
      this.behavior.controller.layout.removePropertyFromStyle(
        this.style,
        property
      );
      this._computedStyles = undefined;
    }

    _tick() {
      console.log("tick");
    }

    _trigger(method) {
      this.dispatch(method);
      super._trigger(self.C3[AddonTypeMap[addonType]][id].Cnds[method]);
    }

    on(tag, callback, options) {
      if (!this.events[tag]) {
        this.events[tag] = [];
      }
      this.events[tag].push({ callback, options });
    }

    off(tag, callback) {
      if (this.events[tag]) {
        this.events[tag] = this.events[tag].filter(
          (event) => event.callback !== callback
        );
      }
    }

    dispatch(tag) {
      if (this.events[tag]) {
        this.events[tag].forEach((event) => {
          if (event.options && event.options.params) {
            const fn = self.C3[AddonTypeMap[addonType]][id].Cnds[tag];
            if (fn && !fn.call(this, ...event.options.params)) {
              return;
            }
          }
          event.callback();
          if (event.options && event.options.once) {
            this.off(tag, event.callback);
          }
        });
      }
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return {
        enabled: this.enabled,
        classes: this.classes,
        style: this.style,
        computedStyles: this._computedStyles,
      };
    }

    _loadFromJson(o) {
      this.enabled = o.enabled !== undefined ? o.enabled : true;
      this.classes = o.classes !== undefined ? o.classes : [];
      this.style = o.style !== undefined ? o.style : {};
      this._computedStyles =
        o.computedStyles !== undefined ? o.computedStyles : {};
    }
  };
}
