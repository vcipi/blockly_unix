var showUniqsBlock = {
  type: "showUniqs",
  message0: "Show only the unique lines in file\n",
  category: "Data Processing",
  unix_description: [
    {
      uniq : '-u' // uniq -u
    }
  ],

  style: "Text Processing",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "find and show only unique lines in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([showUniqsBlock]);