var tailBlock = {
  type: "tail",
  message0: "Tail of file %1",
  category: "Data Processing",
  unix_description: [
    {
      bytes: "-c",
      lines: "-n",
      desc: "-r"

    }
  ],
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
  message1: "metric %1",
  args1: [
    {
      type: "field_dropdown",
      name: "metric_type",
      options: [
        [ "lines from the end", "lines" ],
        [ "bytes from the end", "bytes" ]
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
  message3: "descending order %1",
  args3: [
    {
      type: "field_checkbox",
      name: "desc",
      checked: false // by default it's disabled
    }
  ],
  
  tooltip: "Output the last parts of files",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 260,
  extensions: [
    'integer_validation',
  ],
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([tailBlock]);