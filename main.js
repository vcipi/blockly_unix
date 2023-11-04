Blockly.JavaScript = new Blockly.Generator('JavaScript');
let csvContent = "";

document.getElementById('executeButton').addEventListener('click', function onExecuteButtonClick() {


	console.log("Top blocks:", workspace.getTopBlocks());
    // Start from the first block
    let currentBlock = workspace.getTopBlocks()[0];
    let generatedCommand = '';

    while (currentBlock) {
        // Generate the command for the current block
        if (Blockly.JavaScript.forBlock[currentBlock.type]) {
            generatedCommand += (generatedCommand ? " | " : "") + Blockly.JavaScript.forBlock[currentBlock.type](currentBlock);
        } else {
            console.error("No code generation function defined for block type:", currentBlock.type);
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

Blockly.JavaScript.getPreviousCommand = function(block) {
    let previousBlock = block.getPreviousBlock();
    if (previousBlock) {
        return Blockly.JavaScript.forBlock[block.type](previousBlock);
    }
    return "";
};

Blockly.JavaScript.forBlock['filename'] = function(block) {
    var filename = block.getFieldValue('FILENAME');
    return [JSON.stringify(filename), Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.forBlock['head'] = function(block) {
	
	var blockType = block.type;  // Get the block's type (e.g., "head")
    var blockDefinition = window[blockType + 'Block'];  // Construct the name of the block definition variable and access it

    // Fetch values from the block
    var metricType = block.getFieldValue('metric_type');
    var metricValue = block.getFieldValue('METRIC');
    var quiet = block.getFieldValue('QUIET') === 'TRUE';
    var verbose = block.getFieldValue('VERBOSE') === 'TRUE';
	
	
	// Fetch the attached filename block's value
    // Check if there's a connected input block for FILENAME
    var inputBlock = block.getInputTargetBlock('FILENAME');

    // If there's a connected block, and it's of type 'filename', get the field value
    var filenameValue = (inputBlock && inputBlock.type === 'filename') 
        ? JSON.stringify(inputBlock.getFieldValue('FILENAME')) 
        : '';
	console.log("filenameValue:", filenameValue);
	
    // Start constructing the UNIX command
    var command = 'head ';

    // Add the metric type (lines or bytes)
    var unixDescription = blockDefinition.unix_description[0][metricType];
    
	command += unixDescription + ' ' + metricValue + ' ';

    // Add quiet or verbose flags if they're selected
    if (quiet) {
        command += '--quiet ';
    }

    if (verbose) {
        command += '--verbose ';
    }
	
	console.log("Head block code generation:", command);
   
    // Add the filename to the command
    command += filenameValue;
    
    return command;
};

Blockly.JavaScript.forBlock['tail'] = function(block) {
	
	var blockType = block.type; 
    var blockDefinition = window[blockType + 'Block'];  // Construct the name of the block definition variable and access it

    // Fetch values from the block
    var metricType = block.getFieldValue('metric_type');
    var metricValue = block.getFieldValue('METRIC');
    var desc = block.getFieldValue('desc') === 'TRUE';
    var line_nums = block.getFieldValue('show_line_nums') === 'TRUE';
	
	
	// Fetch the attached filename block's value
    // Check if there's a connected input block for FILENAME
    var inputBlock = block.getInputTargetBlock('FILENAME');

    // If there's a connected block, and it's of type 'filename', get the field value
    var filenameValue = (inputBlock && inputBlock.type === 'filename') 
        ? JSON.stringify(inputBlock.getFieldValue('FILENAME')) 
        : '';
	console.log("filenameValue:", filenameValue);
	
	
    // Start constructing the UNIX command
    var command = 'tail ';

    // Add the metric type (lines or bytes)
    var unixDescription = blockDefinition.unix_description[0][metricType];

    command += unixDescription + ' ' + metricValue + ' ';

 
    if (desc) {
        command += '-r ';
    }

    if (line_nums) {
        command += '-????? ';
    }
	
	console.log("Head block code generation:", command);
   
    // Add the filename to the command
    command += filenameValue;
    
    return command;
};

Blockly.JavaScript.forBlock['wc'] = function(block) {
	
	// Fetch the attached filename block's value
    // Check if there's a connected input block for FILENAME
    var inputBlock = block.getInputTargetBlock('FILENAME');

    // If there's a connected block, and it's of type 'filename', get the field value
    var filenameValue = (inputBlock && inputBlock.type === 'filename') 
        ? JSON.stringify(inputBlock.getFieldValue('FILENAME')) 
        : '';
	console.log("filenameValue:", filenameValue);
	
    // Initialize command with 'wc' since it's the base command for word count
    let command = 'wc ';

    // Check each checkbox field and append the corresponding flag to the command
    if (block.getFieldValue('lines') === 'TRUE') {
        command += '-l ';
    }
    if (block.getFieldValue('words') === 'TRUE') {
        command += '-w ';
    }
    if (block.getFieldValue('bytes') === 'TRUE') {
        command += '-c ';
    }
    if (block.getFieldValue('chars') === 'TRUE') {
        command += '-m ';
    }
    if (block.getFieldValue('wc_all') !== 'TRUE') {
        // If 'wc_all' is not checked, then use the individual flags
        // Otherwise, we don't need to append any flags since 'wc' by default counts lines, words, and characters
        command += '-lwcm ';
    }
	
	// Add the filename to the command
    command += filenameValue;

    return command;
};

Blockly.JavaScript.forBlock['uniq'] = function(block) {
	
	var blockType = block.type;  
    var blockDefinition = window[blockType + 'Block'];  // Construct the name of the block definition variable and access it

    // Fetch values from the block
	var uniqparam = block.getFieldValue('uniq_parameter');

    // Fetch the attached filename block's value
    var inputBlock = block.getInputTargetBlock('FILENAME');
    var filenameValue = (inputBlock && inputBlock.type === 'filename') 
        ? JSON.stringify(inputBlock.getFieldValue('FILENAME')) 
        : '';
    
	// Start constructing the UNIX command
    var command = 'uniq ';
	
	var unixDescription = blockDefinition.unix_description[0][uniqparam];

    command += unixDescription + ' ';


    // Add the filename to the command
    command += filenameValue;

    return command;
};

Blockly.JavaScript.forBlock['sort'] = function(block) {
	
	let command = handleBlock(block);

    return command;
};

function handleBlock(block) {
	
    var blockType = block.type;  
    var blockDefinition = window[blockType + 'Block'];  // Construct the name of the block definition variable and access it
  
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
		  value = blockDefinition.unix_description[0][field.name] + field.getValue();
	    } 

	    // Add the processed value to the command parts
	    commandParts.push(value);
	  });
    });


    // Build the string command from parts
	let commandString = blockType + ' '
    commandString += commandParts.join(' ');
    commandString += filenameValue;
	
	console.log("command built:", commandString);
	
    // Here you can add any custom logic for special cases

    return commandString;
}



