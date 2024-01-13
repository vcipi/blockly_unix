var findBlock = {
  type: "find",
  message0: "Find files in\n",
  category: "File and Directory Operations",
  unix_description: [
    {
      path: "str",
      mtime: "-mtime -",
      mmin: "-mmin -",
      atime: "-atime -",
      amin: "-amin -",
      ctime: "-ctime -",
      cmin: "-cmin -",
      sizeLarger : "-size +",
      sizesmaller : "-size -",
      reverse: "-r",
      Kbs : "K",
      Mbs : "M",
      Gbs : "G"
    }
  ],

  message1: "directory %1",
  args1: [
    {
      type: "field_input",
      name: "path", 
      text: "",
    }
  ],
  message2: "modified last %1 %2",
  args2: [
    {
      type: "field_dropdown",
      name: "modified",
      options: [
        [ "choose", "choose" ],
        [ "days", "mtime" ],
        [ "minutes", "mmin" ]
      ]
    },
    {
      type: "field_input",
      name: "mnumber", 
      text: ""
    }
  ],
  message3: "accessed last %1 %2",
  args3: [
    {
      type: "field_dropdown",
      name: "accessed",
      options: [
        [ "choose", "choose" ],
        [ "days", "atime" ],
        [ "minutes", "amin" ]
      ]
    },
    {
      type: "field_input",
      name: "anumber", 
      text: ""
    }
  ],
  message4: "metadata changed last %1 %2",
  args4: [
    {
      type: "field_dropdown",
      name: "changed",
      options: [
        [ "choose", "choose" ],
        [ "days", "ctime" ],
        [ "minutes", "cmin" ]
      ]
    },
    {
      type: "field_input",
      name: "cnumber", 
      text: "",
    }
  ],
  message5: "size %1 than %2 %3",
  args5: [
    {
      type: "field_dropdown",
      name: "size",
      options: [
        [ "choose", "choose" ],
        [ "more than", "sizeLarger" ],
        [ "less than", "sizesmaller" ]
      ]
    },
    {
      type: "field_number",
      name: "METRIC",
      value: 0,
    },
    {
      type: "field_dropdown",
      name: "bytesMetric",
      options: [
        [ "choose", "choose" ],
        [ "Kbs", "Kbs" ],
        [ "Mbs", "Mbs" ],
        [ "Gbs", "Gbs" ]
      ]
    }
  ],
  message6: "with name like %1",
  args6: [
    {
      type: "input_value",
      name: "FILENAME",
	    check: ["filename" , "filenamesCreate",]
    }
  ],

  // output: "String",
  colour: 450,
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "list directory contents",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([findBlock]);