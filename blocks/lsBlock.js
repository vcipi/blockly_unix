var lsBlock = {
  type: "ls",
  message0: "List files & directories %1",
  category: "File and Directory Operations",
  unix_description: [
    {
      detailed: "-l",
      recursively: "-R",
      hidden: "-a",
      reverse: "-r"

    }
  ],
  args0: [{
	  type: "input_value",
      name: "FILENAME", // we should put FILENAME or directory. Go in main 88-93 rows. To discuss with Vag
	  check: "String" 
  }],
  message1: "show details %1",
  args1: [
    {
      type: "field_checkbox",
      name: "detailed",
      checked: false // by default it's disabled
    }
  ],
  message2: "%1 search in all subdirectories",
  args2: [
    {
      type: "field_checkbox",
      name: "recursively",
      checked: false // by default it's disabled
    }
  ],
  message3: "show hidden files %1",
  args3: [
    {
      type: "field_checkbox",
      name: "hidden",
      checked: false // by default it's disabled
    }
  ],
  message4: "%1 show in reverse order",
  args4: [
    {
      type: "field_checkbox",
      name: "reverse",
      checked: false // by default it's disabled
    }
  ],

  // output: "String",
  colour: 480,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "list directory contents",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([lsBlock]);