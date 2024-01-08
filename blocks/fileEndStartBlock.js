var fileEndStartBlock = {
  type: "fileEndStart",
  unix_description: [
    {
      starts: "patt*",
      ends: "*patt",
    }
  ],
  message0: "Filename %1  %2",
  args0: [
    {
      type: "field_dropdown",
      name: "metric_type",
      options: [
        [ "starts with", "starts" ],
        [ "ends with", "ends" ]
      ]
    },
    {
      type: "field_input",
      name: "filename",
	    text: "............" // empty text for user to define filename
    }
  ],
  
  output: "filename",
  colour: 550,
  nextStatement: "Action",
  tooltip: "Represents a filename.",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([fileEndStartBlock]);