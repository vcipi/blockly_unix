var echoBlock = {
  type: "echo",
  category: "File and Directory Operations",
  unix_description: [
    {
      echoInput : '"str"'
    }
  ],
  message0: "%{BKY_ECHO} %1",
  args0: [{
    type: "field_input",
    name: "echoInput", 
    text: "",
  }],
  style: "text_blocks",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "%{BKY_ECHO_TOOLTIP}",
  helpUrl: "%{BKY_ECHO_HELPURL}" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([echoBlock]);