var teeBlock = {
  type: "tee",
  category:  "Data Processing",
  unix_description: [
    {
    append : "-a"
    }
  ],
  message0: "Save to file &\n and continue processing\n",

  message1: "append to file %1",
  args1: [
    {
      type: "field_checkbox",
      name: "append",
      checked: false // by default it's disabled
    }
  ],
  colour: 510,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "The tee utility copies standard input to standard output, making a copy in zero or more files.",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([teeBlock]);