import { action, condition, expression } from "../template/aceDefine.js";

const flow = "flow";
const classes = "classes";
const style = "style";

action(
  flow,
  "SetEnabled",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Enabled",
    displayText: "{my}: Set Enabled: [b]{0}[/b]",
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
  flow,
  "IsEnabled",
  {
    highlight: false,
    deprecated: false,
    listName: "Is Enabled",
    displayText: "{my}: Is Enabled",
    description: "Checks if the UI element is enabled",
    params: [],
  },
  function () {
    return this.enabled;
  }
);

// set classes, add classes, remove classes, set style, set style property, remove style property
action(
  classes,
  "SetClasses",
  {
    highlight: true,
    deprecated: false,
    isAsync: false,
    listName: "Set Classes",
    displayText: "{my}: Set classes to [b]{0}[/b]",
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
  classes,
  "AddClasses",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Add Classes",
    displayText: "{my}: Add [b]{0}[/b] to classes",
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
  classes,
  "RemoveClasses",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Remove Classes",
    displayText: "{my}: Remove [b]{0}[/b] from classes",
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
  style,
  "SetStyle",
  {
    highlight: true,
    deprecated: false,
    isAsync: false,
    listName: "Set Style",
    displayText: "{my}: Set style to [i]{0}[/i]",
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
  style,
  "SetStyleProperty",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set Style Property",
    displayText: "{my}: Set style property [b]{0}[/b] to [b]{1}[/b]",
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
  style,
  "RemoveStyleProperty",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Remove Style Property",
    displayText: "{my}: Remove property [b]{0}[/b] from style",
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
