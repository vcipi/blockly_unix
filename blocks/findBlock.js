var findBlock = {
  type: "find",
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
      Gbs : "G",
      current : ".",
      parent : "..",
      grandparent : "../.." ,
      subdirs : "-maxdepth 1",
      regPattern : "-name 'patt'",
      file : "-type f",
      directory : "-type d",
      both : "",
      exec : "-exec comman {} \\;"

    }
  ],

  message0: "Find in file hierarchy \n",
  message1: "search in %1 directory ",
  args1: [
    {
      type: "field_dropdown",
      name: "dir",
      options: [
        [ "choose", "choose" ],
        [ "current", "current" ],
        [ "parent", "parent" ],
        [ "grandparent", "grandparent" ]
      ]
    }
  ],
  message2: "for %1 ",
  args2: [
    {
      type: "field_dropdown",
      name: "type",
      options: [
        [ "files", "file" ],
        [ "directories", "directory" ],
        [ "both", "both" ]
      ]
    }
  ],
  message3: "Do not include subdirectories %1 ",
  args3: [
    {
      type: "field_checkbox",
      name: "subdirs",
      checked: true // by default it's enabled
    }
  ],
  message4: "Define other directory %1",
  args4: [
    {
      type: "field_input",
      name: "path", 
      text: "",
    }
  ],
  message5: "modified last %1 %2",
  args5: [
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
  message6: "accessed last %1 %2",
  args6: [
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
  message7: "metadata changed last %1 %2",
  args7: [
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
  message8: "size %1 than %2 %3",
  args8: [
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
  message9: "with name like %1",
  args9: [
    {
      type: "input_value",
      name: "regPattern"
    }
  ],
  message10: "execute following command in\n all files found %1",
  args10: [
    {
      type: "field_checkbox",
      name: "exec",
      checked: false // by default it's disabled
    }
  ],
  
  style: "File and Directory Operations",
  previousStatement: "Action",
  nextStatement: "Action",
  tooltip: "Find files in directories and subdirectories",
  helpUrl: "" // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([findBlock]);