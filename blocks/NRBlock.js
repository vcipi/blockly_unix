var NRBlock = {
  type: "NR",
  category: "File and Directory Operations",
  unix_description: [
    {
      recordNumber: "NR"
    }
  ],
  message0: "%{BKY_RECORD_NUMBER} %1\n",
  args0: [
    {
      type: 'input_dummy',
      name: 'recordNumber'
    },
  ],
  colour: 130,
  output: null,
  // nextStatement: "Action",
  tooltip: "%{BKY_RECORD_NUMBER_TOOLTIP}",
  helpUrl: "%{BKY_RECORD_NUMBER_HELPURL}" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([NRBlock]);
