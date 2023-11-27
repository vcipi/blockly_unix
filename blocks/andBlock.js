var andBlock = {
  type: "and",
  category: "File and Directory Operations",
  unix_description: [
    {
      and: "&&"
    }
  ],
  message0: "AND",

  colour: 250,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "AND condition",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([andBlock]);