var filenameBlock = {
  type: "filename",
  message0: "Filename %1",
  args0: [
    {
      type: "field_input",
      name: "FILENAME",
      text: "default.txt" // default text for the input
    }
  ],
  output: "String",
  colour: 230,
  nextStatement: "Action",
  tooltip: "Represents a filename.",
  helpUrl: "" // URL to further information or documentation.
};

var tailBlock = {
  type: "tail",
  message0: "Tail command",
  unix_description: [
    {
      bytes: "-c",
      lines: "-n",
      desc: "-r"

    }
  ],
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
  message4: "Show line numbers %1",
  args4: [
    {
      type: "field_checkbox",
      name: "show_line_nums",
      checked: false // by default it's disabled
    }
  ],
  
  tooltip: "Output the last parts of files",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 260,
  extensions: [
    'head_tail_validation',
  ],
  helpUrl: "" // URL to further information or documentation.
};

var headBlock = {
  type: "head",
  message0: "Head command",
  unix_description: [
    {
      bytes: "-c",
      lines: "-n"

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
    'head_tail_validation',
  ],
  helpUrl: "" // URL to further information or documentation.
};

var wcBlock = {
  type: "wc",
  message0: "word count",
  unix_description: [
    {
      lines: "-l",
      words: "-w",
      bytes : "-c",
      chars : "-m"

    }
  ],
  message1: "line count %1",
  args1: [
    {
      type: "field_checkbox",
      name: "line",
      checked: false // by default it's disabled
    }
  ],

  message2: "words count %1",
  args2: [
    {
      type: "field_checkbox",
      name: "words",
      checked: false // by default it's disabled
    }
  ],

  message3: "bytes count %1",
  args3: [
    {
      type: "field_checkbox",
      name: "bytes",
      checked: false // by default it's disabled
    }
  ],

  message4: "chars count %1",
  args4: [
    {
      type: "field_checkbox",
      name: "chars",
      checked: false // by default it's disabled
    }
  ],

  message5: "count all parameters %1",
  args5: [
    {
      type: "field_checkbox",
      name: "wc_all",
      checked: true // by default it's enabled
    }
  ],

  // output: "String",
  colour: 440,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "word, line, character, and byte count in a file",
  helpUrl: "" // URL to further information or documentation.
};

var uniqBlock = {
  type: "uniq",
  message0: "uniq",
  unix_description: [
    {
      occurencies: "-c",
      duplicates: "-d",
      uniq : '-u'

    }
  ],
  message1: "parameter choice %1",
  args1: [
    {
      type: "field_dropdown",
      name: "uniq_parameter",
      options: [
        [ "none", "none" ],
        [ "occurencies", "occurencies" ],
        [ "duplicates", "duplicates" ],
        [ "uniq", "uniq" ]
      ]
    }
  ],

  // output: "String",
  colour: 220,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "report or filter out repeated lines in a file",
  helpUrl: "" // URL to further information or documentation.
};

var sortBlock = {
  type: "sort",
  message0: "sort",
  unix_description: [
    {
      desc: "-r",
      characters_sorting: "-d",
      numeric_sorting : '-n'

    }
  ],
  message1: "descending order %1",
  args1: [
    {
      type: "field_checkbox",
      name: "desc",
      checked: false // by default it's disabled
    }
  ],
  message2: "based on %1",
  args2: [
    {
      type: "field_dropdown",
      name: "sort_parameter",
      options: [
        [ "characters sorting", "characters_sorting" ],
        [ "numeric sorting", "numeric_sorting" ]
      ]
    }
  ],
  message3: "delimeter %1",
  args3: [
    {
      type: "field_input",
      name: "sort_delimiter",
      text: "insert file delimiter" // default text for the input
    }
  ],

  message4: "column to sort %1",
  args4: [
    {
      type: "field_number",
      name: "sort_column",
      value: 1, // default number of lines
      min: 1, // minimum value
      max: 1000, // it should be the maximum of the length of the files columns
      precision: 1 // allow only integers
    }
  ],
  message5: "unique elements output %1",
  args5: [
    {
      type: "field_checkbox",
      name: "uniq_elements",
      checked: false // by default it's disabled
    }
  ],

  // output: "String",
  colour: 880,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "report or filter out repeated lines in a file",
  helpUrl: "" // URL to further information or documentation.
};


Blockly.defineBlocksWithJsonArray([
wcBlock,
filenameBlock,
tailBlock,
headBlock,
uniqBlock,
sortBlock]);

Blockly.Extensions.register('head_tail_validation', function() {
  // Add custom validation.
  // Validate the entire block whenever any part of it changes,
  // and display a warning if the block cannot be made valid.
  this.setOnChange(function(event) {
    const metric = this.getFieldValue('METRIC');
    const valid = Number.isInteger(metric);
    this.setWarningText(valid
      ? null
      : `You must enter an integer`);

  });
});

