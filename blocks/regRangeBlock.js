var regRangeBlock = {
  type: "regRange",
  category: "Regular Expressions",
  unix_description: [
    {
      //not : "[^[rangeChoice]]", // for example: [^[:upper:]]
      upper: "[[:upper:]]",
      lower: "[[:lower:]]",
      letters: "[[:alpha:]]",
      digit: "[[:digit:]]",
      alphanumeric: "[[:alnum:]]",
      punctuation: "[[:punct:]]",
      whitespace: "[[:space:]]",
      blanks: "[[:blank:]]",
      printable: "[[:print:]]",
      non_printable: "[[:cntrl:]]",
      graphical: "[[:graph:]]",
      hexadecimal: "[[:xdigit:]]",
      //custom: "[symbol1-symbol2]" // to discuss with Vag
    }
  ],
  message0: "Range matching %1",
  args0: [
    {
      type: "field_dropdown",
      name: "reg_Range",
      options: [
        [ "Uppercase letters", "upper" ],
        [ "Lowercase letters", "lower" ],
        [ "Letters", "letters" ],
        [ "Digits", "digit" ],
        [ "alphanumeric", "alphanumeric" ],
        [ "punctuation", "punctuation" ],
        [ "whitespace", "whitespace" ],
        [ "blanks", "blanks" ],
        [ "printable", "printable" ],
        [ "non printable", "non_printable" ],
        [ "graphical", "graphical" ],
        [ "hexadecimal", "hexadecimal" ],
        [ "Custom Range", "custom" ]
      ]
    }
  ],
  message1: "Not %1",
  args1: [
    {
      type: "field_checkbox",
      name: "not",
      checked: false // by default it's disabled
    }
  ],
  colour: 510,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Match in the file the designated range of characters",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regRangeBlock]);