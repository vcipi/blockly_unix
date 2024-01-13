var echoBlock = {
  type: "echo",
  category: "File and Directory Operations",
  unix_description: [
    {
      echoInput : '"str"'
    }
  ],
  message0: "write arguments to the standard output\n %1",
  args0: [{
    type: "field_input",
    name: "echoInput", 
    text: "",
  }],
  colour: 110,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "write arguments to the standard output",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([echoBlock]);