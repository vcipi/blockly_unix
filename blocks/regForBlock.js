var regForBlock = {
  type: "regFor",
  category: "Regular Expressions",
  message0: "Match the pattern From %1\n To %2 times OR To infinite %3\n(for exactly n times 'From' and 'To' values must be equal)",
  unix_description: [
    {
      FROM : "patt{n",
      TO : ",m}",
    }
  ],
  args0: [
    {
      type: "field_number",
      name: "FROM",
      value: 0
    },
    {
      type: "field_number",
      name: "TO"
    },
	{
      type: "field_checkbox",
      name: "INFINITE",
      checked: false
    }
  ],
  message1: "%1",
  args1: [
    {
      type: "input_statement",
      name: "DO"
    }
  ],
  previousStatement: null,
  nextStatement: null,
  style: "Regular Expressions",
  tooltip: "",
  helpUrl: ""
};

Blockly.defineBlocksWithJsonArray([regForBlock]);