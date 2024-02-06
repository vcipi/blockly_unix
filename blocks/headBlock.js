var headBlock = {
  type: "head",
  message0: "Head of file",
  category: "Data Processing",
  unix_description: [
    {
      bytes: "-c",
      lines: "-n",
	  QUIET: "--quiet",
	  VERBOSE: "--verbose"

    }
  ],
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
  
  tooltip: "Output the first part of files",
  previousStatement: "Action",
  nextStatement: "Action",
  style: "Text Processing",
  extensions: [
    'integer_validation', 'disallow_multiple_filenames',
  ],
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([headBlock]);