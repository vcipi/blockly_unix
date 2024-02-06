var gzipBlock = {
  type: "gzip", 
  category: "File and Directory Operations",
  unix_description: [
    {
      keep: "-k",
      decompress: "-d"
    }
  ],
  message0: "%1 File",
  args0: [
    {
      type: "field_dropdown",
      name: "gzip",
      options: [
        [ "compress", "compress" ],
        [ "decompress", "decompress" ]
      ]
    }
  ],
  message1: "keep original file %1",
  args1: [
    {
      type: "field_checkbox",
      name: "keep",
      checked: true // by default it's disabled
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
  style: "File and Directory Operations",
  extensions: [
    'integer_validation',
  ],
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "File compress/decompress",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([gzipBlock]);