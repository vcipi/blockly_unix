var regLookaheadBlock = {
  type: "regLookahead",
  category: "Regular Expressions",
  unix_description: [
    {
      positive : "(?= patt)",
      negative : "(?! patt)"
    }
  ],
  message0: "pattern %1 followed by %2",
  args0: [
    {
      type: "field_dropdown",
      name: "reg_lookahead",
      options: [
        [ "is", "positive" ],
        [ "is not", "negative" ]
      ]
    },
    {
      type: "input_value",
      name: "regPattern",
      check: "String" 
    }


  ],
  style: "Regular Expressions",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Match a pattern that follows or doesn't follow another pattern",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regLookaheadBlock]);