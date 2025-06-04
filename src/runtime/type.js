export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      if (self.C3.Plugins.flexbox_controller === undefined) {
        alert(
          "UI Controller plugin is not loaded. Please ensure it is included in your project."
        );
      }

      this._tryRegisterBehavior();
    }

    _tryRegisterBehavior() {
      if (globalThis.__flexbox_controller) {
        globalThis.__flexbox_controller._registerBehavior(this.behavior);
      } else {
        globalThis.__flexbox_behavior = this.behavior;
      }
    }

    _onCreate() {}
  };
}
