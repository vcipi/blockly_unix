var regQuantBlock = {
  type: "regQuant",
  category: "Regular Expressions",
  unix_description: [
    {
      zeroOne: "patt?",
      oneMore: "patt+",
      zeroMore: "patt*",
      anyCharExceptNewLine : "."
    }
  ],
  message0: "Check occurencies of pattern \n",
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
    name: "regPattern",
    check: "String" 
  }],
  style: "Regular Expressions",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "quantifiers of patterns",
  extensions: [
    'integer_validation',
  ],
  helpUrl: "" // URL to further information or documentation.
};
Blockly.defineBlocksWithJsonArray([regQuantBlock]);