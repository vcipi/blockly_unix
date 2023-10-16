Blockly.JavaScript = new Blockly.Generator('JavaScript');
let csvContent = "";

document.getElementById('executeButton').addEventListener('click', function onExecuteButtonClick() {
    if (!csvContent) {
        alert("Please upload a CSV file first.");
        return;
    }

    var generatedCode = Blockly.JavaScript.workspaceToCode(workspace);

    console.log("Generated code:", generatedCode);  // Log the generated code for debugging purposes
    
    console.log("Before executing generated code");
    eval(generatedCode);
    console.log("After executing generated code");
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


Blockly.JavaScript['head'] = function(block) {
  var file = block.getFieldValue('FILE');
  
  var bytesEnabled = block.getFieldValue('BYTES_ENABLE') === 'TRUE';
  var bytes = block.getFieldValue('BYTES');
  
  var linesEnabled = block.getFieldValue('LINES_ENABLE') === 'TRUE';
  var lines = block.getFieldValue('LINES');
  
  var quiet = block.getFieldValue('QUIET') === 'TRUE';
  var verbose = block.getFieldValue('VERBOSE') === 'TRUE';

  var options = [];
  if (bytesEnabled) {
    options.push(`bytes: ${bytes}`);
  }

  if (linesEnabled) {
    options.push(`lines: ${lines}`);
  }

  if (quiet) {
    options.push('quiet: true');
  }

  if (verbose) {
    options.push('verbose: true');
  }

  var code = `head("${file}", { ${options.join(', ')} });\n`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};