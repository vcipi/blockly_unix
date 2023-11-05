var regPatternBlock = {
  type: "regPattern",
  unix_description: [
    {
      case_i: "-i",
      global: "-g",
      multi_line: "-m"
    }
  ],
  message0: "Pattern %1",
  args0: [
    {
      type: "field_input",
      name: "regPattern",
      text: "............"// default text for the input
    }
  ],
  message1: "%1 case insensitive",
  args1: [
    {
      type: "field_checkbox",
      name: "case_i",
      checked: false // by default it's disabled
    }
  ],
  message2: "match all occurrences %1",
  args2: [
    {
      type: "field_checkbox",
      name: "global",
      checked: false // by default it's disabled
    }
  ],
  message3: "%1 multi-line matching",
  args3: [
    {
      type: "field_checkbox",
      name: "multi_line",
      checked: false // by default it's disabled
    }
  ],
  output: "String",
  colour: 570,
  // nextStatement: "Action",
  tooltip: "Define a pattern to search",
  helpUrl: "" // URL to further information or documentation.
};

var regAnchorBlock = {
  type: "regAnchor",
  unix_description: [
    {
      line_start: "^",
      line_end: "?",
      multi_line: "-m"
    }
  ],
  message0: "pattern %1",
  args0: [{
    type: "input_value",
    name: "pattern",
  check: "String" 
  }],
  message1: "%1 start of a line",
  args1: [
    {
      type: "field_checkbox",
      name: "line_start",
      checked: false // by default it's disabled
    }
  ],
  message2: "end of a line %1",
  args2: [
    {
      type: "field_checkbox",
      name: "line_end",
      checked: false // by default it's disabled
    }
  ],
  colour: 610,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "start and end of line anchors",
  helpUrl: "" // URL to further information or documentation.
};

var regQuantBlock = {
  type: "regQuant",
  unix_description: [
    {
      zeroOne: "?",
      oneMore: "+",
      zeroMore: "*",
      exactlyN: "{n}",
      nMore : "{n,}",
      betweenNM : "{n,m}",
      anyCharExceptNewLine : "."
    }
  ],
  message0: "Check pattern occurencies",
  message1: "zero or one %1",
  args1: [
    {
      type: "field_checkbox",
      name: "zeroOne",
      checked: false // by default it's disabled
    }
  ],
  message2: "%1 one or more",
  args2: [
    {
      type: "field_checkbox",
      name: "oneMore",
      checked: false // by default it's disabled
    }
  ],
  message3: "%1 zero or more",
  args3: [
    {
      type: "field_checkbox",
      name: "zeroMore",
      checked: false // by default it's disabled
    }
  ],
  message4: "exactly N %1",
  args4: [
    {
      type: "field_checkbox",
      name: "exactlyN",
      checked: false // by default it's disabled
    }
  ],
  message5: "%1 N or more",
  args5: [
    {
      type: "field_checkbox",
      name: "nMore",
      checked: false // by default it's disabled
    }
  ],
  message6: "between N & M %1",
  args6: [
    {
      type: "field_checkbox",
      name: "betweenNM",
      checked: false // by default it's disabled
    }
  ],
  message7: "%1 any character except new line",
  args7: [
    {
      type: "field_checkbox",
      name: "anyCharExceptNewLine",
      checked: false // by default it's disabled
    }
  ],
  message8: "pattern %1",
  args8: [{
    type: "input_value",
    name: "pattern",
  check: "String" 
  }],
  colour: 120,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "quantifiers of patterns",
  helpUrl: "" // URL to further information or documentation.
};

var gzipBlock = {
  type: "gzip", // TO DO. Finish gzip with rest of parameters!
  unix_description: [
    {
      keep: "-k"
    }
  ],
  message0: "File compress/decompress %1",
  args0: [
    {
      type: "field_input",
      name: "FILENAME",
      text: "default.txt" // default text for the input
    }
  ],
  message1: "keep original file %1",
  args1: [
    {
      type: "field_checkbox",
      name: "keep",
      checked: false // by default it's disabled
    }
  ],
  message2: "level of compression %1",
  args2: [
    {
      type: "field_number",
      name: "compress_level",
      value: 6, // default number compression level
      min: 1,
      max: 9 

    }
  ],
  output: "String",
  colour: 270,  
  extensions: [
    'integer_validation_com',
  ],
  // nextStatement: "Action",
  tooltip: "File compress/decompress",
  helpUrl: "" // URL to further information or documentation.
};

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
  // nextStatement: "Action",
  tooltip: "Represents a filename.",
  helpUrl: "" // URL to further information or documentation.
};

var grepBlock = {
  type: "grep",
  unix_description: [
    {
      regex: "-E",
      case_ins: "-i",
      whole_word: "-w",
      count_lines: "-c",
      inverted : "-v",
      recursive : "-r",
      show_line_nums : "-n",
      multiple_patterns : "-e"
    }
  ],
  message0: "Search in a file with a pattern\n For multiple patterns separate with space",
  message1: "pattern to search %1",
  args1: [
    {
      type: "field_input",
      name: "pattern",
      text: "'pattern'" // default text for the input
    }
  ],
  message2: "in file %1",
  args2: [{
    type: "input_value",
    name: "FILENAME",
  check: "String" 
  }],
  message3: "regular expression %1",
  args3: [
    {
      type: "field_checkbox",
      name: "regex",
      checked: false // by default it's disabled
    }
  ],
  message4: "case insensitive %1",
  args4: [
    {
      type: "field_checkbox",
      name: "case_ins",
      checked: false // by default it's disabled
    }
  ],
  message5: "whole word search %1",
  args5: [
    {
      type: "field_checkbox",
      name: "whole_word",
      checked: false // by default it's disabled
    }
  ],
  message6: "count the matches %1",
  args6: [
    {
      type: "field_checkbox",
      name: "count_lines",
      checked: false // by default it's disabled
    }
  ],
  message7: "%1 show lines that don't match pattern",
  args7: [
    {
      type: "field_checkbox",
      name: "inverted",
      checked: false // by default it's disabled
    }
  ],
  message8: "Recursively in all subdirectories %1",
  args8: [
    {
      type: "field_checkbox",
      name: "recursive",
      checked: false // by default it's disabled
    }
  ],
  message9: "Display line numbers for matching lines %1",
  args9: [
    {
      type: "field_checkbox",
      name: "show_line_nums",
      checked: false // by default it's disabled
    }
  ],

  message10: "Search with multiple patterns%1",
  args10: [
    {
      type: "field_checkbox",
      name: "show_line_nums",
      checked: false // by default it's disabled
    }
  ],
  
  colour: 646,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "search in a file with a pattern",
  helpUrl: "" // URL to further information or documentation.
};

var saveBlock = {
  type: "save",
  message0: "save result to %1",
  args0: [
    {
      type: "field_input",
      name: "save_filename",
      text: "save.csv" // default file for saving
    }
  ],
  colour: 10,
  previousStatement: "Action",
  tooltip: "Saves a file with spectified name and extension",
  helpUrl: "" // URL to further information or documentation.
};

var mkdirBlock = {
  type: "mkdir",
  unix_description: [
    {
      parents: "-p",
      verbose: "-v"
    }
  ],
  message0: "create directory",
  message1: "for multiple directories separate with space",
  message2: "write directory or path %1",
  args2: [{
	  type: "field_input",
    name: "directory",
	  text: "............" 
  }],
  
  message3: "create also parent directories %1",
  args3: [
    {
      type: "field_checkbox",
      name: "parents",
      checked: false // by default it's disabled
    }
  ],
  message4: "list directories created %1",
  args4: [
    {
      type: "field_checkbox",
      name: "verbose",
      checked: false // by default it's disabled
    }
  ],

  // output: "String",
  colour: 250,
  // previousStatement: "Action",
  // nextStatement: "Action",
  tooltip: "create directory",
  helpUrl: "" // URL to further information or documentation.
};

var lsBlock = {
  type: "ls",
  message0: "list files & directories %1",
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
    name: "directory",
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

var changeDirectoryBlock = {
  type: "cd",
  message0: "change directory to %1",
  args0: [
    {
      type: "field_input",
      name: "change_dir",
      text: "............" // empty text for user to define path
    }
  ],
  colour: 400,
  // nextStatement: "Action",
  tooltip: "change your directory",
  helpUrl: "" // URL to further information or documentation.
};

var tailBlock = {
  type: "tail",
  message0: "Tail command %1",
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

var headBlock = {
  type: "head",
  message0: "Head command %1",
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
	  check: "String" 
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

var wcBlock = {
  type: "wc",
  message0: "word count %1",
  unix_description: [
    {
      lines: "-l",
      words: "-w",
      bytes : "-c",
      chars : "-m"

    }
  ],
  args0: [{
      type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
  message1: "line count %1",
  args1: [
    {
      type: "field_checkbox",
      name: "lines",
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
  message0: "uniq %1\n",
  unix_description: [
    {
	  none: "",
      occurencies: "-c",
      duplicates: "-d",
      uniq : '-u'

    }
  ],
  args0: [{
	  type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
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
  message0: "sort %1",
  unix_description: [
    {
      desc: "-r",
      characters_sorting: "-d",
      numeric_sorting : '-n',
	  sort_delimiter : '-t',
	  sort_column : '-k'

    }
  ],
  args0: [{
	  type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
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
  regPatternBlock,
filenameBlock,
regAnchorBlock,
regQuantBlock,
gzipBlock,
grepBlock,
saveBlock,
mkdirBlock,
lsBlock,
changeDirectoryBlock,
tailBlock,
headBlock,
uniqBlock,
wcBlock,
sortBlock
]);

Blockly.Extensions.register('integer_validation', function() {
  // Add custom validation.
  // Validate the entire block whenever any part of it changes,
  // and display a warning if the block cannot be made valid.
  this.setOnChange(function(event) {
    const value = this.getFieldValue('METRIC');
    const valid = Number.isInteger((value));
    this.setWarningText(valid
      ? null
      : `You must enter an integer`);

  });
});

Blockly.Extensions.register('integer_validation_com', function() {
  // Add custom validation.
  // Validate the entire block whenever any part of it changes,
  // and display a warning if the block cannot be made valid.
  this.setOnChange(function(event) {
    const value = this.getFieldValue('compress_level');
    const valid = Number.isInteger((value));
    this.setWarningText(valid
      ? null
      : `You must enter an integer`);

  });
});

