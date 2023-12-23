var headBlock = {
  type: "head",
  message0: "Head of file %1",
  category: "Data Processing",
  unix_description: [
    {
      bytes: "-c",
      lines: "-n",
	  QUIET: "--quiet",
	  VERBOSE: "--verbose"

    }
  ],
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: ["filename" , "filenamesCreate",]
  }],
  message1: "metric %1",
  args1: [
    {
      type: "field_dropdown",
      name: "metric_type",
      options: [
        [ "lines", "lines" ],
        [ "bytes", "bytes" ]
      ]
    }
  ],
  message2: "number of %1",
  args2: [
    {
      type: "field_number",
      name: "METRIC",
      value: 10, // default number of bytes
    }
  ],
  message3: "Quiet %1",
  args3: [
    {
      type: "field_checkbox",
      name: "QUIET",
      checked: false // by default it's disabled
    }
  ],
  message4: "Verbose %1",
  args4: [
    {
      type: "field_checkbox",
      name: "VERBOSE",
      checked: false // by default it's disabled
    }
  ],
  
  tooltip: "Output the first part of files",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 160,
  extensions: [
    'integer_validation',
  ],
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([headBlock]);