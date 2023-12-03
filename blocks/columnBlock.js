var columnBlock = {
    'type': 'column_search',
    category: "awk",
    unix_description: [
        {
            columnSearch: "$col"
        }
      ],
    'message0': 'column %1',
    'args0': [
      {
        'type': 'field_input',
        'name': 'columnSearch'
      },
    ],
    'output': 'String',
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NEGATE_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NEGATE_HELPURL}',
};

Blockly.defineBlocksWithJsonArray([columnBlock]);