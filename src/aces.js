import { action, condition, expression } from "../template/aceDefine.js";

const category = "general";

action(
  category,
  "SetEnabled",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Enabled",
    displayText: "Set Enabled {0}",
    description: "Sets the enabled state of the UI element",
    params: [
      {
        id: "enabled",
        name: "Enabled",
        desc: "Whether the UI element should be enabled",
        type: "boolean",
        initialValue: "false",
      },
    ],
  },
  function (enabled) {
    this.enabled = enabled;
  }
);

condition(
  category,
  "IsEnabled",
  {
    highlight: false,
    deprecated: false,
    listName: "Is Enabled",
    displayText: "Is Enabled",
    description: "Checks if the UI element is enabled",
    params: [],
  },
  function () {
    return this.enabled;
  }
);

// set classes, add classes, remove classes, set style, set style property, remove style property
action(
  category,
  "SetClasses",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Classes",
    displayText: "Set Classes {0}",
    description: "Sets the classes of the UI element",
    params: [
      {
        id: "classes",
        name: "Classes",
        desc: "A space-separated list of classes to apply to the element",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (classes) {
    this.setClasses(classes);
  },
  false
);

action(
  category,
  "AddClasses",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Add Classes",
    displayText: "Add Classes {0}",
    description: "Adds classes to the UI element",
    params: [
      {
        id: "classes",
        name: "Classes",
        desc: "A space-separated list of classes to add to the element",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (classes) {
    this.addClass(classes);
  },
  false
);

action(
  category,
  "RemoveClasses",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Remove Classes",
    displayText: "Remove Classes {0}",
    description: "Removes classes from the UI element",
    params: [
      {
        id: "classes",
        name: "Classes",
        desc: "A space-separated list of classes to remove from the element",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (classes) {
    this.removeClass(classes);
  },
  false
);

action(
  category,
  "SetStyle",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Style",
    displayText: "Set Style to {0}",
    description: "Sets the style of the UI element",
    params: [
      {
        id: "style",
        name: "Style",
        desc: "The style to apply to the element",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (style) {
    this.setStyle(style);
  },
  false
);

action(
  category,
  "SetStyleProperty",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Style Property",
    displayText: "Set Style Property {0} to {1}",
    description: "Sets a specific style property of the UI element",
    params: [
      {
        id: "property",
        name: "Property",
        desc: "The CSS property to set",
        type: "string",
        initialValue: "",
      },
      {
        id: "value",
        name: "Value",
        desc: "The value to set for the property",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (property, value) {
    this.setStyleProperty(property, value);
  },
  false
);

action(
  category,
  "RemoveStyleProperty",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Remove Style Property",
    displayText: "Remove Style Property {0}",
    description: "Removes a specific style property from the UI element",
    params: [
      {
        id: "property",
        name: "Property",
        desc: "The CSS property to remove",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (property) {
    this.removeStyleProperty(property);
  },
  false
);
