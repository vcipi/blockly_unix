var mkdirBlock = {
  type: "mkdir",
  category: "File and Directory Operations",
  unix_description: [
    {
      parents: "-p",
      verbose: "-v"
    }
  ],
  message0: "Create directory",
  message1: "for multiple directories separate with space",
  message2: "create also parent directories %1",
  args2: [
    {
      type: "field_checkbox",
      name: "parents",
      checked: false // by default it's disabled
    }
  ],
  message3: "list directories created %1",
  args3: [
    {
      type: "field_checkbox",
      name: "verbose",
      checked: false // by default it's disabled
    }
  ],

  message4: "write directory or path %1",
  args4: [{
	  type: "field_input",
      name: "directory",
	  text: "............" 
  }],
  
  style: "File and Directory Operations",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "create directory",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([mkdirBlock]);