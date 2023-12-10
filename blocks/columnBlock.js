var columnBlock = {
    type: "column",
    category: "awk",
    unix_description: [
        {
            TEXT: "$str"
        }
      ],
    'message0': 'column %1',
    'args0': [
      {
        'type': 'field_input',
        'name': 'TEXT'
      },
    ],
    'output': 'String',
    // 'style': 'logic_blocks',
    'colour': 260,
    'tooltip': 'put column',
    'helpUrl': '',
};

Blockly.defineBlocksWithJsonArray([columnBlock]);
