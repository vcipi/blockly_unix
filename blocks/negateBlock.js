var negateBlock = {
    'type': 'negate',
    category: "awk",
    unix_description: [
      {
        negate: "!"
      }
    ],
    'message0': 'not %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'negate'
      },
    ],
    'output': 'Boolean',
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NEGATE_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NEGATE_HELPURL}',
};

Blockly.defineBlocksWithJsonArray([negateBlock]);