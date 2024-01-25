var columnBlock = {
    type: "column",
    category: "awk",
    unix_description: [
        {
            TEXT: "$str"
        }
      ],
    message0: '%{BKY_COLUMN} %1',
    args0: [
      {
        type: 'field_input',
        name: 'TEXT'
      },
    ],
    output: null,
    // 'style': 'logic_blocks',
    colour: 260,
    tooltip: "%{BKY_COLUMN_TOOLTIP}",
    helpUrl: "%{BKY_COLUMN_HELPURL}",
};

Blockly.defineBlocksWithJsonArray([columnBlock]);
