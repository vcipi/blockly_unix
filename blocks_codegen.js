var regOutputBlock = {
  type: "regOutput",
  category: "Regular Expressions",
  message0: "Put Regex",
  message1: "%1",
  args1: [
    {
      type: "input_statement", 
      name: "DO"
    }
  ],
  output: "String",
  "nextStatement": null,
  "colour": 120
}

var regPatternBlock = {
  type: "regPattern",
  category: "Regular Expressions",
  // unix_description: [
  //   {
  //     case_i: "-i",
  //     global: "-g",
  //     multi_line: "-m"
  //   }
  // ],
  message0: "Pattern %1",
  args0: [
    {
      type: "field_input",
      name: "regPattern",
      text: "............"// default text for the input
    }
  ],
  // message1: "%1 case insensitive",
  // args1: [
  //   {
  //     type: "field_checkbox",
  //     name: "case_i",
  //     checked: false // by default it's disabled
  //   }
  // ],
  // message2: "match all occurrences %1",
  // args2: [
  //   {
  //     type: "field_checkbox",
  //     name: "global",
  //     checked: false // by default it's disabled
  //   }
  // ],
  // message3: "%1 multi-line matching",
  // args3: [
  //   {
  //     type: "field_checkbox",
  //     name: "multi_line",
  //     checked: false // by default it's disabled
  //   }
  // ],
  output: "String",
  colour: 570,
  nextStatement: "Action",
  tooltip: "Define a pattern to search",
  helpUrl: "" // URL to further information or documentation.
};

var regWordMatchingBlock = {
  type: "regWordMatching",
  category: "Regular Expressions",
  unix_description: [
    {
      asWord: "\\b{word}\\b"
    }
  ],
  message0: "Match  %1 as a whole word %2 \n",
  args0: [
    {
      type: "input_value",
      name: "pattern",
      check: "String" 
    },
    {
      type: "field_checkbox",
      name: "asWord",
      checked: false // by default it's disabled
    }
  ],
  colour: 220,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Match in the file the characters as a whole word",
  helpUrl: "" // URL to further information or documentation.
};

var regAlternationBlock = {
  type: "regAlternation",
  category: "Regular Expressions",
  unix_description: [
    {
      alternation: "|"
    }
  ],
  message0: "Match  %1 or %2 \n",
  args0: [
    {
      type: "input_value",
      name: "pattern",
      check: "String" 
    },
    {
      type: "input_value",
      name: "pattern",
      check: "String" 
    }
  ],
  colour: 240,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Match in the file the first pattern or the second",
  helpUrl: "" // URL to further information or documentation.
};


var regAnchorBlock = {
  type: "regAnchor",
  category: "Regular Expressions",
  unix_description: [
    {
      line_start: "^",
      line_end: "$",
      //multi_line: "-m"
    }
  ],
  message0: "Define start and end anchors \n",
  message1: "pattern %1\n",
  args1: [{
    type: "input_value",
    name: "pattern",
    check: "String" 
  }],
  message2: "%1",
  args2: [
    {
      type: "field_dropdown",
      name: "reg_anchors",
      options: [
        [ "start of a line", "line_start" ],
        [ "end of a line", "line_end" ]
      ]
    }
  ],
  colour: 610,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "start and end of line anchors",
  helpUrl: "" // URL to further information or documentation.
};

var regExactBlock = {
  type: "regExact",
  unix_description: [
    {
      exactlyN: "{n}"
    }
  ],
  category: "Regular Expressions",
  message0: "match the previous \n exactly %1 times",
  args0:  [
    {
      type: "field_number",
      name: "METRIC",
      value: 1
    }
  ],
  tooltip: "Match the previous expression exact N times",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 290,
  extensions: [
    'integer_validation',
  ],
  helpUrl: "" // URL to further information or documentation.

};

var regDigitBlock = {
  type: "regDigit",
  unix_description: [
    {
      digit: "\\d",
      nonDigit: "\\D"
    }
  ],
  category: "Regular Expressions",
  message0: "Digit matching \n %1",
  args0: [
    {
      type: "field_dropdown",
      name: "digit_match",
      options: [
        [ "Match a digit ", "digit" ],
        [ "Match Non digit", "nonDigit" ]
      ]
    }
  ],
  tooltip: "Match any digit or match all except a digit",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 510,
  helpUrl: "" // URL to further information or documentation.

};

var regWordCharBlock = {
  type: "regWordChar",
  unix_description: [
    {
      wordChar: "\\w",
      nonWordChar: "\\W"
    }
  ],
  category: "Regular Expressions",
  message0: "Word character matcthing \n %1",
  args0: [
    {
    type: "field_dropdown",
    name: "char_match",
    options: [
      [ "Match a word char ", "wordChar" ],
      [ "Match Non word chars", "nonWordChar" ]
    ]
  }
],
  tooltip: "Match any word character or match all except word characters",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 550,
  helpUrl: "" // URL to further information or documentation.

};

var regWhitespaceBlock = {
  type: "regWhitespace",
  unix_description: [
    {
      whitespace: "\\s",
      nonWhitespace: "\\S"
    }
  ],
  category: "Regular Expressions",
  message0: "Whitespace matching\n %1",
  args0:  [
    {
    type: "field_dropdown",
    name: "char_match",
    options: [
      [ "Match a whitespace ", "whitespace" ],
      [ "Match Non whitespaces", "nonWhitespace" ]
    ]
  }
],
  tooltip: "Match any whitespace or all except whitespaces",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 590,
  helpUrl: "" // URL to further information or documentation.

};

var regCapturingGroupBlock = {
  type: "regCapturingGroup",
  unix_description: [
    {
      patternGroup: "()"
    }
  ],
  category: "Regular Expressions",
  message0: "Group the pattern %1\n",
  args0: [{
    type: "input_value",
    name: "pattern",
    check: "String" 
  }],
  tooltip: "Define a pattern group",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 420,
  helpUrl: "" // URL to further information or documentation.

};

var regAnyOneBlock = {
  type: "regAnyOne",
  unix_description: [
    {
      anyOne: "[]",
      notMatch: "^"
    }
  ],
  category: "Regular Expressions",
  message0: "match any of %1 characters",
  args0:  [
    {
      type: "field_input",
      name: "FILENAME",
      text: "abc" 
    }
  ],
  message1: "Not %1",
  args1:  [
    {
      type: "field_checkbox",
      name: "notMatch",
      checked: false
    }
  ],
  tooltip: "Match any one of the defined characters",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 340,
  helpUrl: "" // URL to further information or documentation.

};

var regMoreThanBlock = {
  type: "regMoreThan",
  unix_description: [
    {
      nMore: "{n,}"
    }
  ],
  category: "Regular Expressions",
  message0: "match the previous \n more than %1 times",
  args0:  [
    {
      type: "field_number",
      name: "METRIC",
      value: 1
    }
  ],
  tooltip: "Match the previous expression more than N times",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 270,
  extensions: [
    'integer_validation',
  ],
  helpUrl: "" // URL to further information or documentation.

};

var regBetweenBlock = {
  type: "regBetween",
  unix_description: [
    {
      betweenNM : "{n,m}",
    }
  ],
  category: "Regular Expressions",
  message0: "match the previous \n between %1 \n and %2 times",
  args0:  [
    {
      type: "field_number",
      name: "METRIC",
      value: 1
    },
    {
      type: "field_number",
      name: "METRIC",
      value: 3
    }
  ],
  tooltip: "Match the previous expression between N and M times",
  previousStatement: "Action",
  nextStatement: "Action",
  colour: 280,
  extensions: [
    'integer_validation',
  ],
  helpUrl: "" // URL to further information or documentation.

};

var regQuantBlock = {
  type: "regQuant",
  category: "Regular Expressions",
  unix_description: [
    {
      zeroOne: "?",
      oneMore: "+",
      zeroMore: "*",
      anyCharExceptNewLine : "."
    }
  ],
  message0: "Check pattern occurencies \n",
  message1: "%1",
  args1:   [
    {
      type: "field_dropdown",
      name: "reg_quant",
      options: [
        [ "zero or one", "zeroOne" ],
        [ "one or more", "oneMore" ],
        [ "zero or more", "zeroMore" ],
        [ "any char except new line", "anyCharExceptNewLine"]
      ]
    }
  ],
  message2: "pattern %1",
  args2: [{
    type: "input_value",
    name: "pattern",
    check: "String" 
  }],
  colour: 120,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "quantifiers of patterns",
  extensions: [
    'integer_validation',
  ],
  helpUrl: "" // URL to further information or documentation.
};

var gzipBlock = {
  type: "gzip", // TO DO. Finish gzip with rest of parameters!
  category: "File and Directory Operations",
  unix_description: [
    {
      keep: "-k",
	  compress_level: "???" //add only before the level of compression the command requires a string eg. in sort the column requires -k (sort -k3 test.csv)
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
      max: 9,

    }
  ],
  output: "String",
  colour: 270,  
  extensions: [
    'integer_validation',
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
  //nextStatement: "Action",
  tooltip: "Represents a filename.",
  helpUrl: "" // URL to further information or documentation.
};

var sedBlock = {
  type: "sed",
  category: "File and Directory Operations",
  unix_description: [
    {
      sub: "'s/{old_pattern}/{new_text}'",
      regex: '-E'
    }
  ],
  message0: "Stream edit in a file\n",
  message1: "search pattern %1 is Regex %2\n",
  args1: [{
    type: "input_value",
    name: "regPattern",
    check: "String" 
},
{
  type: "field_checkbox",
  name: "regex",
  checked: false // by default it's disabled
}
],
  message2: "text to change %1\n",
  args2: [{
    type: "field_input",
    name: "grepChangeText",
    text: "changeText" // default text for the input
}],
  message3: "in file %1",
  args3: [{
    type: "input_value",
    name: "FILENAME",
  check: "String" 
}],

};

var grepBlock = {
  type: "grep",
  category: "File and Directory Operations",
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
  message0: "Search in a file with a pattern \n For multiple patterns separate with space",
  message1: "pattern to search %1",
  args1:   [{

	  type: "input_value",
    name: "regPattern",
	  check: "String" 
  }],
  // [
  //   {
  //     type: "field_input",
  //     name: "pattern",
  //     text: "'pattern'" // default text for the input
  //   }
  // ],
  message2: "regular expression %1",
  args2: [
    {
      type: "field_checkbox",
      name: "regex",
      checked: false // by default it's disabled
    }
  ],
  message3: "case insensitive %1",
  args3: [
    {
      type: "field_checkbox",
      name: "case_ins",
      checked: false // by default it's disabled
    }
  ],
  message4: "whole word search %1",
  args4: [
    {
      type: "field_checkbox",
      name: "whole_word",
      checked: false // by default it's disabled
    }
  ],
  message5: "count the matches %1",
  args5: [
    {
      type: "field_checkbox",
      name: "count_lines",
      checked: false // by default it's disabled
    }
  ],
  message6: "show lines that don't match pattern %1",
  args6: [
    {
      type: "field_checkbox",
      name: "inverted",
      checked: false // by default it's disabled
    }
  ],
  message7: "Recursively in all subdirectories %1",
  args7: [
    {
      type: "field_checkbox",
      name: "recursive",
      checked: false // by default it's disabled
    }
  ],
  message8: "Display line numbers for matching lines %1",
  args8: [
    {
      type: "field_checkbox",
      name: "show_line_nums",
      checked: false // by default it's disabled
    }
  ],

  message9: "Search with multiple patterns%1",
  args9: [
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
  category: "I/O Redirection",
  unix_description: [
    {
      save_filename : '> '
    }
  ],
  args0: [
    {
      type: "field_input",
      name: "save_filename",
      text: "save.csv" // default file for saving
    }
  ],
  colour: 10,
  previousStatement: "Action",
  tooltip: "Saves a file with spectified name and extension and overrides if already exists",
  helpUrl: "" // URL to further information or documentation.
};

var appendBlock = {
  type: "append",
  message0: "append result to %1",
  category: "I/O Redirection",  
  unix_description: [
    {
      append_filename : '>> '
    }
  ],
  args0: [
    {
      type: "field_input",
      name: "append_filename",
      text: "save.csv" // default file for saving
    }
  ],
  colour: 10,
  previousStatement: "Action",
  tooltip: "Appends the result into an already existing file",
  helpUrl: "" // URL to further information or documentation.
};

var mkdirBlock = {
  type: "mkdir",
  category: "File and Directory Operations",
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

var changeDirectoryBlock = {
  type: "cd",
  message0: "change directory to %1",
  category: "File and Directory Operations",
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

var headBlock = {
  type: "head",
  message0: "Head command %1",
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
  category: "Data Processing",
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
  category: "Data Processing",
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
  category: "Data Processing",
  unix_description: [
    {
      desc: "-r",
      characters_sorting: "-d",
      numeric_sorting : '-n',
	  sort_delimiter : '-t',
	  sort_column : '-k',
	  uniq_elements : '???'

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
      //precision: 1 // allow only integers
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

  extensions: [
    'integer_validation',
  ],
  colour: 880,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "report or filter out repeated lines in a file",
  helpUrl: "" // URL to further information or documentation.
};


Blockly.defineBlocksWithJsonArray([
regOutputBlock,
regWordMatchingBlock,
regPatternBlock,
regAlternationBlock,
regExactBlock,
regMoreThanBlock,
regBetweenBlock,
regAnyOneBlock,
regCapturingGroupBlock,
regDigitBlock,
regWordCharBlock,
regWhitespaceBlock,
filenameBlock,
regAnchorBlock,
regQuantBlock,
gzipBlock,
grepBlock,
saveBlock,
appendBlock,
mkdirBlock,
lsBlock,
changeDirectoryBlock,
tailBlock,
headBlock,
uniqBlock,
wcBlock,
sortBlock,
sedBlock
]);


Blockly.Extensions.register('integer_validation', function() {
  var thisBlock = this;

  // Initialize a property to store the last valid value.
  this.lastValidValue = {};

  // Automatically attach validators to all integer fields.
  thisBlock.inputList.forEach(function(input) {
    input.fieldRow.forEach(function(field) {
      if (field instanceof Blockly.FieldNumber) {
        // Store the initial value as the last valid value.
        thisBlock.lastValidValue[field.name] = field.getValue();

        field.setValidator(function(newValue) {
          var intValue = Number(newValue);
          if (Number.isInteger(intValue)) {
            // Update last valid value to the new value.
            thisBlock.lastValidValue[field.name] = newValue;
            // Clear warning text since the value is valid.
            field.sourceBlock_.setWarningText(null);
            return newValue;
          } else {
            // Set warning text since the value is invalid.
            field.sourceBlock_.setWarningText('You must enter an integer.');
            // Revert to the last valid value.
            return thisBlock.lastValidValue[field.name];
          }
        });
      }
    });
  });
});


