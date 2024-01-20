var saveBlock = {
  type: "save",
  message0: "Save result to %1",
  category: "I/O Redirection",
  unix_description: [
    {
      save_filename : '> str'
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

Blockly.defineBlocksWithJsonArray([saveBlock]);