Blockly.JavaScript = new Blockly.Generator('JavaScript');
let csvContent = "";


// Global replacement map
const replacementMap = {
  "findDuplicates": "uniq -d",
  "showUniqs": "uniq -u",
  // Add more key-value pairs as needed
};

document.getElementById('executeButton').addEventListener('click', function onExecuteButtonClick() {

	console.log("Top blocks:", workspace.getTopBlocks());
    // Start from the first block
    let currentBlock = workspace.getTopBlocks()[0];
    let generatedCommand = '';

    while (currentBlock) {
		
		var blockDef = window[currentBlock.type + 'Block'];
        // Generate the command for the current block
        try {
			if(blockDef.category === "I/O Redirection"|| blockDef.category === "Regular Expressions"){
				generatedCommand += handleBlock(currentBlock);
			}else{
				generatedCommand += (generatedCommand ? " | " : "") + handleBlock(currentBlock);
			}
        }catch(error){
            console.error('An error occurred:', error.message);
            break;
        }
        // Move to the next connected block
        currentBlock = currentBlock.getNextBlock();
    }

	generatedCommand = replaceKeywords(generatedCommand);

    // Combine the constructed UNIX command and filename
    document.getElementById('resultsArea').innerText = generatedCommand;

    console.log("Generated command:", generatedCommand);
});

document.getElementById('resetButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to reset the workspace? Everything will be deleted.')) {
        workspace.clear();  // this clears the workspace
    }
});

function copyToClipboard() {
    // Get the text from the results area
    var text = document.getElementById('resultsArea').innerText;

    // Create a temporary text area element
    var textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        // Copy the text inside the text area to the clipboard
        document.execCommand('copy');
        alert('Text copied to clipboard!'); // Optional: Show a message indicating the text was copied
    } catch (err) {
        console.error('Unable to copy', err); // Log the error if the copy operation fails
    }

    // Clean up: Remove the temporary text area element
    document.body.removeChild(textArea);
}

// Attach the function to the 'click' event of the button
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

Blockly.JavaScript.forBlock['filename'] = function(block) {
    var filename = block.getFieldValue('FILENAME');
    return [JSON.stringify(filename), Blockly.JavaScript.ORDER_NONE];
};
	

function handleBlock(block) {
	
    var blockType = block.type;
    var blockDefinition = window[blockType + 'Block'];  // Construct the name of the block definition variable and access it
	var blockCategory = blockDefinition.category;
	console.log("HANDLEBLOCK - Block Category:", blockCategory);
  
    // Fetch the attached filename block's value
    var inputBlock = block.getInputTargetBlock('FILENAME');
    // If there's a connected block, and it's of type 'filename', get the field value
    var filenameValue = (inputBlock && inputBlock.type === 'filename')
        ? inputBlock.getFieldValue('FILENAME')
        : '';
    console.log("HANDLEBLOCK - filenameValue:", filenameValue);
	
	// Fetch the attached regex block
    var inputPatternBlock = block.getInputTargetBlock('regPattern');
	//console.log("inputPatternBlock:", inputPatternBlock.type);
    // If there's a connected block, and it's of type 'Regex', get the field value
    var patternValue = (inputPatternBlock && inputPatternBlock.type === 'regPattern')
        ? inputPatternBlock.getFieldValue('regPattern').replace(new RegExp(" ", 'g'), "|")
        : '';
	console.log("HANDLEBLOCK - patternValue:", patternValue);
		
	//get all the children of the top block
	var regexBlocks = getRegexChildenBlocks(block);
	console.log("HANDLEBLOCK - regexBlocks[] length:", regexBlocks.length);

	var regexStringValue = (regexBlocks.length > 0)
		? generateRegexString(regexBlocks)
		:'';
	
    console.log("HANDLEBLOCK - Regex String value:", regexStringValue);
  
    let commandParts = [];

    // Iterate over all inputs and their fields
	
	if (blockCategory === "Regular Expressions"){
		block.inputList.forEach((input) => {
		  console.log("HANDLEBLOCK - input:", input.name);
		  input.fieldRow.forEach((field) => {
			console.log("HANDLEBLOCK - field:", field);
			let value;
			
			// Handle dropdowns
			if (field instanceof Blockly.FieldDropdown) {
			  paramselected = field.getValue();
			  console.log("HANDLEBLOCK - paramselected:", paramselected);
			  value = blockDefinition.unix_description[0][paramselected];
			  
			  value = (patternValue)
					? value.replace("patt",patternValue)
					: value.replace("patt",'');
			  //console.log("HANDLEBLOCK - value:", value);
			}
			else if (field  instanceof Blockly.FieldCheckbox) {
			  value = field.getValue() === 'TRUE'
			  ? blockDefinition.unix_description[0][field.name]
			  : '';
			}
			else if (field  instanceof Blockly.FieldTextInput || field instanceof Blockly.FieldNumber ) {
			  value = (blockDefinition.unix_description[0][field.name]== null)
					? field.getValue()
					: (patternValue)
						? blockDefinition.unix_description[0][field.name].replace("n" , field.getValue()).replace("m", field.getValue()).replace("patt",patternValue)
						: blockDefinition.unix_description[0][field.name].replace("n" , field.getValue()).replace("m", field.getValue()).replace("patt",'');
			}
			else if (input.type === Blockly.INPUT_VALUE ){
			  value =  (blockDefinition.unix_description[0][input.name])
					? blockDefinition.unix_description[0][input.name].replace("patt",patternValue)
					: '';
			}
			else if (input.type === Blockly.INPUT_STATEMENT ){
			  value =  '';
			}
			
			console.log("HANDLEBLOCK - value:", value);
			// Add the processed value to the command parts
			commandParts.push(value);
		  });
		});
	}
	else{
		block.inputList.forEach((input) => {
		  console.log("HANDLEBLOCK - input:", input.name);
		  input.fieldRow.forEach((field) => {
			console.log("HANDLEBLOCK - field:", field);
			let value;
		  
			// Handle dropdowns
			if (field instanceof Blockly.FieldDropdown) {
			  paramselected = field.getValue();
			  value = blockDefinition.unix_description[0][paramselected];
			}
			// Handle checkboxes
			else if (field  instanceof Blockly.FieldCheckbox) {
			  value = field.getValue() === 'TRUE'
			  ? blockDefinition.unix_description[0][field.name]
			  : '';
			}
			// Handle text inputs (including numbers)
			else if (field  instanceof Blockly.FieldTextInput) {
			  value = (blockDefinition.unix_description[0][field.name]== null || field.getValue() == '')
					? field.getValue()
					: blockDefinition.unix_description[0][field.name] + field.getValue();
			} 			
			else if (field instanceof Blockly.FieldNumber) {
			  value = (blockDefinition.unix_description[0][field.name]== null && field.getValue() != 0)
					? field.getValue()
					: (field.getValue() == 0)
						?''
						: blockDefinition.unix_description[0][field.name] + field.getValue();
			}
			else if (input.type === Blockly.INPUT_VALUE ){
			  value =  (blockDefinition.unix_description[0][input.name])
					? blockDefinition.unix_description[0][input.name].replace("patt",patternValue)
					: '';
			}

			console.log("HANDLEBLOCK - value:", value);
			// Add the processed value to the command parts
			commandParts.push(value);
		  });
		});
	}


    // Build the string command from parts
	let commandString;
	
	if(blockCategory==="I/O Redirection" ){
		commandString = commandParts.join(' ');
	}else if(blockCategory === "Regular Expressions") {
		commandString = regexStringValue + commandParts.join('');
	}
	else{
		commandString = blockType + ' ' + commandParts.join(' ') + ' ' + regexStringValue + ' ' + filenameValue;
	}

	
	console.log("HANDLEBLOCK - command built:", commandString);
	
    // Here you can add any custom logic for special cases

    return commandString;
}

function generateRegexString(regexBlocksList){
	let regexStringCommand = '';

    for (let block of regexBlocksList) {
		console.log('generateRegexString - Block Type: ', block.type);
		
		var blockDef = window[block.type + 'Block'];
        // Generate the command for the current block
        try {
			regexStringCommand += handleBlock(block);
        }catch(error){
            console.error('An error occurred:', error.message);
            break;
        }
    }

    console.log("generateRegexString - Generated regex:", regexStringCommand);
	
	return regexStringCommand;
}

function getRegexChildenBlocks(startBlock) {
    var allBlocks = [];

    // Helper function to recursively add child blocks
    function addBlocks(block) {
        if (block) {
			var blockDefinition = window[block.type + 'Block'];
            // Check if the block's category is 'Regular Expressions'
            if (block.type != 'regPattern' && blockDefinition.category === 'Regular Expressions') {
                allBlocks.push(block);
            }

            // Add next connected block
            if (block.nextConnection && block.nextConnection.targetBlock()) {
                addBlocks(block.nextConnection.targetBlock());
            }

            // Add blocks connected to inputs
            //block.inputList.forEach(function(input) {
               // if (input.connection && input.connection.targetBlock()) {
                  //  addBlocks(input.connection.targetBlock());
                //}
            //});
        }
    }

    // Start with the first child block connected to an input, if it exists
    startBlock.inputList.forEach(function(input) {
        if (input.connection && input.connection.targetBlock()) {
            addBlocks(input.connection.targetBlock());
        }
    });

    return allBlocks;
}


// Function to replace keywords in a command
function replaceKeywords(command) {
  Object.keys(replacementMap).forEach((key) => {
    command = command.replace(new RegExp(key, 'g'), replacementMap[key]);
  });
  return command;
}






