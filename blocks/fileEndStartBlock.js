var fileEndStartBlock = {
  type: "fileEndStart",
  unix_description: [
    {
      starts: "str*",
      ends: "*str",
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
      name: "str",
	    text: "............" // empty text for user to define filename
    }
  ],
  
  output: "string",
  // colour: 550,
  style : "filename_style",
  nextStatement: "Action",
  tooltip: "wildcard searching in filenames",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([fileEndStartBlock]);