var condBlock = {
  type: "cond",
  category: "File and Directory Operations",
  unix_description: [
    {
      equals: "==",
      greater: ">",
      less: "<"
    }
  ],
  message0: "Define a condition to search in file\n For columns put $ before column number",
  message1: "%1",
  args1: [{
      type: "field_input",
      name: "condEqualcolumn",
	    check: "String" 
  }
],
message2: "%1",
args2:   [
  {
    type: "field_dropdown",
    name: "condEqualDrop",
    options: [
      [ "equals to ", "equals" ],
      [ "greater than", "greater" ],
      [ "less than", "less" ]
    ]
  }
],
message3: "%1",
args3: [{
    type: "field_input",
    name: "condEqualcolumn",
    check: "String" 
}
],

  colour: 540,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Search in a file with a specified condition",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([condBlock]);