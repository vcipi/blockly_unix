Blockly.JavaScript = new Blockly.Generator('JavaScript');
let csvContent = "";

document.getElementById('executeButton').addEventListener('click', function onExecuteButtonClick() {


	console.log("Top blocks:", workspace.getTopBlocks());
    var generatedCommand = Blockly.JavaScript.workspaceToCode(workspace);

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
        : '"filename.txt"';
	console.log("filenameValue:", filenameValue);
	
	
    // Start constructing the UNIX command
    var command = 'head ';

    // Add the metric type (lines or bytes)
    var unixDescription = blockDefinition.unix_description[0][metricType];
    if (metricType === 'lines') {
        command += unixDescription + ' ' + metricValue + ' ';
    } else if (metricType === 'bytes') {
        command += unixDescription + ' ' + metricValue + ' ';
    }

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

    return command
};