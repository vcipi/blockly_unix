var xargsBlock = {
  type: "xargs",
  category: "File and Directory Operations",
  unix_description: [
    {
      placeholder: "-I{}"

    }
  ],
  message0: "Execute following command\n for each item",
  message1: "use a palceholder %1",
  args1: [
    {
      type: "field_checkbox",
      name: "placeholder",
      checked: false // by default it's disabled
    }
  ],
  // output: "String",
  colour: 480,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Execute the following command for each item of a list or a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([xargsBlock]);