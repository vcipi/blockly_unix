var sortBlock = {
  type: "sort",
  message0: "Sort file%1",
  category: "Data Processing",
  unix_description: [
    {
      desc: "-r",
      // characters_sorting: "-d", Probably not needed. Same output as if left blank
      numeric_sorting : '-n',
	  sort_delimiter : "-t", // if blank shouldn't display the -t. Vag
	  sort_column : '-k',
	  uniq_elements : '-u'

    }
  ],
  args0: [{
	  type: "input_value",
      name: "FILENAME",
	  check: "String" 
  }],
  message1: "descending order %1",
  args1: [
    {
      type: "field_checkbox",
      name: "desc",
      checked: false // by default it's disabled
    }
  ],
  message2: "based on %1",
  args2: [
    {
      type: "field_dropdown",
      name: "sort_parameter",
      options: [
		[ "characters sorting", "characters_sorting" ],
        [ "numeric sorting", "numeric_sorting" ]
      ]
    }
  ],
  message3: "delimeter in quotes %1",
  args3: [
    {
      type: "field_input",
      name: "sort_delimiter",
      text: "" 
    }
  ],

  message4: "column to sort %1",
  args4: [
    {
      type: "field_number",
      name: "sort_column",
      value: "", // default number of column
      //min: 1, // minimum value
      //max: 1000, // it should be the maximum of the length of the files columns
      precision: 1 // allow only integers
    }
  ],
  message5: "unique elements output %1",
  args5: [
    {
      type: "field_checkbox",
      name: "uniq_elements",
      checked: false // by default it's disabled
    }
  ],

  extensions: [
    'integer_validation',
  ],
  colour: 880,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "report or filter out repeated lines in a file",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([sortBlock]);