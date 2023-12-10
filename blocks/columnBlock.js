var columnBlock = {
    'type': 'column',
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
        'name': 'column'
      },
    ],
    'output': 'String',
    // 'style': 'logic_blocks',
    'colour': 260,
    'tooltip': 'put column',
    'helpUrl': '',
};

Blockly.defineBlocksWithJsonArray([columnBlock]);
