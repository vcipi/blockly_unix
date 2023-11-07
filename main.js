Blockly.JavaScript = new Blockly.Generator('JavaScript');
let csvContent = "";

document.getElementById('executeButton').addEventListener('click', function onExecuteButtonClick() {

	console.log("Top blocks:", workspace.getTopBlocks());
    // Start from the first block
    let currentBlock = workspace.getTopBlocks()[0];
    let generatedCommand = '';

    while (currentBlock) {
		
		var blockDef = window[currentBlock.type + 'Block'];
        // Generate the command for the current block
        try {
            //generatedCommand += (generatedCommand ? " | " : "") + Blockly.JavaScript.forBlock[currentBlock.type](currentBlock);
			if(blockDef.category === "I/O Redirection"){
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
	console.log("filenameValue:", blockCategory);
  
    // Fetch the attached filename block's value
    var inputBlock = block.getInputTargetBlock('FILENAME');
    // If there's a connected block, and it's of type 'filename', get the field value
    var filenameValue = (inputBlock && inputBlock.type === 'filename')
        ? JSON.stringify(inputBlock.getFieldValue('FILENAME'))
        : '';
    console.log("filenameValue:", filenameValue);
  
    let commandParts = [];

    // Iterate over all inputs and their fields
    block.inputList.forEach((input) => {
	  console.log("input:", input.name);
	  input.fieldRow.forEach((field) => {
		console.log("field:", field);
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
	    else if (field  instanceof Blockly.FieldTextInput || field instanceof Blockly.FieldNumber) {
		  value = (blockDefinition.unix_description[0][field.name]== null)
				? field.getValue()
				: blockDefinition.unix_description[0][field.name] + field.getValue();
	    } 

	    // Add the processed value to the command parts
	    commandParts.push(value);
	  });
    });


    // Build the string command from parts
	let commandString;
	
	if(blockCategory==="I/O Redirection" || blockCategory === "Regular Expressions"){
		commandString = commandParts.join(' ');
	}
	else{
		commandString = blockType + ' ' + commandParts.join(' ') + ' ' + filenameValue;
	}

	
	console.log("command built:", commandString);
	
    // Here you can add any custom logic for special cases

    return commandString;
}



