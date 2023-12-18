Blockly.JavaScript.init(workspace);
Blockly.JavaScript = new Blockly.Generator('JavaScript');
var generator = javascript.javascriptGenerator;

// Global replacement map
const replacementMap = {
  "findDuplicates": "uniq -d",
  "showUniqs": "uniq -u",
  //"or":"||",
  "and" : "&&",
  "window.alert" : "print"
  // Add more key-value pairs as needed
};

document.getElementById('executeButton').addEventListener('click', function onExecuteButtonClick() {

	console.log("Top blocks:", workspace.getTopBlocks());
    // Start from the first block
    let currentBlock = workspace.getTopBlocks()[0];
    let generatedCommand = '';

    while (currentBlock) {
		
		var blockDef = window[currentBlock.type + 'Block'];
		//console.log("currentBlock.type:", currentBlock.type);
        // Generate the command for the current block
        try {
			if(blockDef.category === "I/O Redirection"|| blockDef.category === "Regular Expressions"){
				generatedCommand += handleBlock(currentBlock);
			}else{
				generatedCommand += (generatedCommand ? " | " : "") + handleBlock(currentBlock);
			}
        }catch(error){
            console.error('An error occurred:', error.message);
			if (error.lineNumber) {
				console.log('Line Number:', error.lineNumber);
			}
			// For a complete stack trace:
			console.error(error.stack);
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
	console.log("HANDLEBLOCK - Block Type:", blockType);
    var blockDefinition = window[blockType + 'Block'];  // Construct the name of the block definition variable and access it
	var blockCategory = blockDefinition.category;
	console.log("HANDLEBLOCK - Block Category:", blockCategory);
  
    // Fetch the attached filename block's value
    var inputBlock = block.getInputTargetBlock('FILENAME');
	
	var filenameValue='';
	if(inputBlock && inputBlock.type === 'filename'){
		filenameValue = inputBlock.getFieldValue('FILENAME');
		console.log("HANDLEBLOCK - filenameValue:", filenameValue);
	}else if(inputBlock && inputBlock.type === 'filenamesCreate'){
		filenameValue = getFileNames(inputBlock);
		console.log("HANDLEBLOCK - MultiplefilenameValue:", filenameValue);
	}
	
	// Fetch the attached regex block
    var inputPatternBlock = block.getInputTargetBlock('regPattern');
	//console.log("inputPatternBlock:", inputPatternBlock.type);
    // If there's a connected block, and it's of type 'Regex', get the field value
	var patternValue='';
	var conditionValue='';
	if(inputPatternBlock && inputPatternBlock.type === 'regPattern'){
		patternValue = inputPatternBlock.getFieldValue('regPattern')
		console.log("HANDLEBLOCK - patternValue:", patternValue);
	}else if(inputPatternBlock && inputPatternBlock.type === 'regOr'){
		patternValue = getMultiplePatterns(inputPatternBlock);
		console.log("HANDLEBLOCK - MultiplepatternValue:", patternValue);
	}else if (inputPatternBlock && inputPatternBlock.type === 'condOutput'){
		conditionValue = handleConditionsAndLoops(inputPatternBlock);
		console.log("HANDLEBLOCK - conditionValue", conditionValue);
	}
	
		
	//get all the regex children blocks of the main block
	var regexBlocks = getRegexChildenBlocks(block);
	//console.log("HANDLEBLOCK - regexBlocks[] length:", regexBlocks.length);

	var regexStringValue = (regexBlocks.length > 0)
		? generateRegexString(regexBlocks)
		:'';
	
    console.log("HANDLEBLOCK - Regex String value:", regexStringValue);
  
    let commandParts = [];
	
	if (blockCategory === "Regular Expressions"){
		commandParts = handleRegexBlocks(block,blockDefinition,patternValue);
	}
	else{
		commandParts = handleMainBlocks(block,blockDefinition,filenameValue,patternValue,regexStringValue);
	}

	//in case of the awk the regexStringValue is already included in the command so we dont need it
	if(blockCategory==="awk"){
		regexStringValue='';
		let contains = commandParts.some(element => element && element.includes("-F'"))
		if (!contains) {commandParts[0] = "'" + commandParts[0];}
	}

    // Build the string command from parts
	let commandString;
	
	if(blockCategory==="I/O Redirection" ){
		commandString = commandParts.join(' ');
	}else if(blockCategory === "Regular Expressions") {
		commandString = regexStringValue + commandParts.join('');
	}
	else{
		commandString = blockType + ' ' + commandParts.join(' ') + ' ' + conditionValue + ' ' + regexStringValue + ' ' + filenameValue;
	}

	console.log("HANDLEBLOCK - command built:", commandString);
	
    // Here you can add any custom logic for special cases

    return commandString;
}

function handleMainBlocks(block,blockDefinition,filenameValue,patternValue,regexStringValue){
		console.log("handleMainBlocks init");
		let commandParts = [];
		
		//in case we don't have just a pattern in a main block but a full regex 
		console.log("handleMainBlocks - regexStringValue:", regexStringValue);
		console.log("handleMainBlocks - patternValue:", patternValue);
		if(regexStringValue !== null && patternValue === ''){
			patternValue = regexStringValue;
			console.log("handleMainBlocks - after patternValue:", patternValue);
		}
		
	    // Iterate over all inputs and their fields
		block.inputList.forEach((input) => {
		  //console.log("handleMainBlocks - input:", input.name);
		  input.fieldRow.forEach((field) => {
			//console.log("handleMainBlocks - field:", field);
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
					: blockDefinition.unix_description[0][field.name].replace("str",field.getValue());
			} 			
			else if (field instanceof Blockly.FieldNumber) {
			  value = (blockDefinition.unix_description[0][field.name]== null && field.getValue() != 0)
					? field.getValue()
					: (field.getValue() == 0)
						?''
						: blockDefinition.unix_description[0][field.name] + field.getValue();
			}
			else if (input.type === Blockly.INPUT_VALUE ){
			  if (block.getInputTargetBlock(input.name) && blockDefinition.unix_description[0][input.name]){
				  if (input.name === 'regPattern'){
					  value = (patternValue !== '') ? blockDefinition.unix_description[0][input.name].replace("patt",patternValue) : '';
				  }
				  else {
					  inputBlock = block.getInputTargetBlock(input.name)
					  var inputBlockDefinition = window[inputBlock.type + 'Block'];
					  
					  inputValue = (inputBlockDefinition && inputBlockDefinition.unix_description)
								? inputBlockDefinition.unix_description[0]['TEXT'].replace('str',inputBlock.getFieldValue('TEXT'))
								: inputBlock.getFieldValue("TEXT");
					  inputValueStr = getMultiplePrints(inputBlock);
					  console.log("handleMainBlocks -  inputValue:", inputValue);
					  console.log("handleMainBlocks -  inputValueStr:", inputValueStr);
					  if(inputValueStr !== '' && inputValue == null){
						  inputValue = inputValueStr;
						  //console.log("handleMainBlocks - after inputValue:", inputValue);
					  }
					  
					  value = (inputValue !== '') ? blockDefinition.unix_description[0][input.name].replace("str",inputValue) : '';
				  }
			  }else{
				  value = '';
			  }
			}

			console.log("handleMainBlocks - value:", value);
			// Add the processed value to the command parts
			commandParts.push(value);
		  });
		});
		
		return commandParts;
}

function handleRegexBlocks(block,blockDefinition,patternValue){
		console.log("handleRegexBlocks init");
		let commandParts = [];
	    // Iterate over all inputs and their fields
		block.inputList.forEach((input) => {
		  //console.log("handleRegexBlocks - input:", input.name);
		  input.fieldRow.forEach((field) => {
			//console.log("handleRegexBlocks - field:", field);
			let value;
			
			// Handle dropdowns
			if (field instanceof Blockly.FieldDropdown) {
			  paramselected = field.getValue();
			  //console.log("handleRegexBlocks - paramselected:", paramselected);
			  value = blockDefinition.unix_description[0][paramselected];
			  
			  value = (patternValue)
					? value.replace("patt",patternValue)
					: value.replace("patt",'');
			  //console.log("handleRegexBlocks - value:", value);
			}
			else if (field  instanceof Blockly.FieldCheckbox) {
			  if(field.name === 'notMatch' && field.getValue() === 'TRUE'){
				  commandParts.splice(-3);
				  value = (patternValue)
						? blockDefinition.unix_description[0][field.name].replace("patt",patternValue)
						: '';
			  }else if (field.name === 'not' && field.getValue() === 'TRUE'){ //custom for regRangeBlock
					commandParts = commandParts.map(element => {
						if (element) { // Check if the element is not undefined
							return element.replace("[[:", "[^[:");
						}
						return element; // Return the element as is if it's undefined
					});
			  }
			  else{
				  value = (field.getValue() === 'TRUE')
					? blockDefinition.unix_description[0][field.name]
					: '';
			  }
			
			  //console.log("handleRegexBlocks - commandParts:", commandParts);
			  //specifically made for the regForBlock so value m is replaced with the infinity option(commandParts.length - 2 is used because the last part of the list is an object with an undefined value - don't know what)
			  if (field.name === 'INFINITE' && field.getValue() === 'TRUE'){
				commandParts[commandParts.length - 2] = ', }';
				//console.log("handleRegexBlocks - commandParts:", commandParts);
			  }
			}
			else if (field instanceof Blockly.FieldNumber ) {
			  value = (blockDefinition.unix_description[0][field.name]== null)
					? field.getValue()
					: (patternValue)
						? blockDefinition.unix_description[0][field.name].replace("n" , field.getValue()).replace("m", field.getValue()).replace("patt",patternValue)
						: blockDefinition.unix_description[0][field.name].replace("n" , field.getValue()).replace("m", field.getValue()).replace("patt",'');
			  
			  //specifically made for the regForBlock in case n=m is replaced with the '}' option(commandParts.length - 2 is used because the last part of the list is an object with an undefined value - don't know what)
			  str = (commandParts[commandParts.length - 2]) ? commandParts[commandParts.length - 2] :'notValid';
			  //console.log("handleRegexBlocks - str:", str[str.length - 1]);
			  //console.log("handleRegexBlocks - str:", field.getValue());
			  //str.length - 1 is the n of the '{n' part of the command so far right before the m which is the current vlue that the user gives
			  if(str[str.length - 1] == field.getValue()){
					value = '}';
			  }
			}
			else if(field  instanceof Blockly.FieldTextInput){
			  value = (blockDefinition.unix_description[0][field.name]== null)
					? field.getValue()
					: (patternValue)
						? blockDefinition.unix_description[0][field.name].replace("patt",patternValue)
						: blockDefinition.unix_description[0][field.name].replace("patt",field.getValue());
			}
			else if (input.type === Blockly.INPUT_VALUE ){
			  value =  (blockDefinition.unix_description[0][input.name])
					? blockDefinition.unix_description[0][input.name].replace("patt",patternValue)
					: '';
			}
			else if (input.type === Blockly.INPUT_STATEMENT ){
			  value =  '';
			}
			
			console.log("handleRegexBlocks - value:", value);
			// Add the processed value to the command parts
			console.log("handleRegexBlocks - commandParts:", commandParts);
			commandParts.push(value);
		  });
		});
	
		return commandParts;
}

function handleConditionsAndLoops(block){
		console.log("handleConditionsAndLoops init");
		var blockCode;
		//console.log("handleConditionsAndLoops - block :", block.type);
		var innerBlock = block.getInputTargetBlock('DO');
		//console.log("handleConditionsAndLoops - innerBlock :", innerBlock);
		
		var doBlock = innerBlock.getInputTargetBlock('DO0');
		if (innerBlock.type === 'controls_if' && !doBlock) { // Check if the "do" block of an if statement is empty
			var conditionBlock = innerBlock.getInputTargetBlock('IF0'); // Get the first condition block
			if (conditionBlock) {
				blockCode = generator.blockToCode(conditionBlock)[0];
				blockCode = blockCode.replace(/'/g, '').replace(/;/g, '');
				blockCode = blockCode.replace(/\n/g, ' ').replace(/\s+/g, ' ') + "'";
			}
		}else {
			blockCode = generator.blockToCode(innerBlock);
			blockCode = blockCode.replace(/'/g, '').replace(/;/g, '');
			blockCode = "{" + blockCode.replace(/\n/g, ' ').replace(/\s+/g, ' ') + "}'";
		}

		console.log("handleConditionsAndLoops - code:", blockCode);

		return blockCode;
}

function generateRegexString(regexBlocksList){
	console.log("generateRegexString init");
	let regexStringCommand = '';

    for (let block of regexBlocksList) {
		//console.log('generateRegexString - Block Type: ', block.type);
		
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
	console.log("getRegexChildenBlocks init");
    var allBlocks = [];

    // Helper function to recursively add child blocks
    function addBlocks(block) {
        if (block) {
			var blockDefinition = window[block.type + 'Block'];
            // Check if the block's category is 'Regular Expressions'
            if ((block.type != 'regPattern' && block.type != 'regOr')  && blockDefinition) {
				if(blockDefinition.category === 'Regular Expressions'){
					allBlocks.push(block);
				}
            }

            // Add next connected block
            if (block.nextConnection && block.nextConnection.targetBlock()) {
                addBlocks(block.nextConnection.targetBlock());
            }
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

function getFileNames(block) {
	
	console.log("getFileNames - init");
    let fileNames = [];
    for (let i = 0; i < block.itemCount_; i++) {
        let inputBlock = block.getInputTargetBlock('ADD' + i);
        if (inputBlock) {
            let fileName = inputBlock.getFieldValue('FILENAME');
            if (fileName) {
                fileNames.push(fileName);
            }
        }
    }
    return fileNames.join(' ');
}

function getMultiplePatterns(block) {
	
	console.log("getMultiplePatterns - init");
    let patterns = [];
    for (let i = 0; i < block.itemCount_; i++) {
        let inputBlock = block.getInputTargetBlock('ADD' + i);
        if (inputBlock) {
            let patt = inputBlock.getFieldValue('regPattern');
            if (patt) {
                patterns.push(patt);
            }
        }
    }
    return patterns.join('|');
}

function getMultiplePrints(block) {
	
	console.log("getMultiplePrints - init");
    let prints = [];
    for (let i = 0; i < block.itemCount_; i++) {
        let inputBlock = block.getInputTargetBlock('ADD' + i);
        if (inputBlock) {
			let singlePrint;
			var blockDefinition = window[inputBlock.type + 'Block'];
			if (inputBlock.type == 'column'){
				singlePrint = blockDefinition.unix_description[0]['TEXT'].replace('str',inputBlock.getFieldValue('TEXT'));
			}
			else if(inputBlock.type == 'regPattern'){
				singlePrint = inputBlock.getFieldValue('regPattern');
			}
			else if(inputBlock.type == 'regOutput'){
				singlePrint = handleBlock(inputBlock);
			}
			else{
				singlePrint = '"' + inputBlock.getFieldValue('TEXT') + '"';
			}
            if (singlePrint) {
                prints.push(singlePrint);
            }
        }
    }
    return prints.join(',');
}

generator.forBlock['column'] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = '$' + `'${text}'`;
    return [code, generator.ORDER_ATOMIC];
};

generator.forBlock['multiplePrint'] = function(block) {
    var code = getMultiplePrints(block)
    return [code, generator.ORDER_ATOMIC];
};

generator.forBlock['regPattern'] = function(block) {
    var text = block.getFieldValue('regPattern');
    var code = `'${text}'`;
    return [code, generator.ORDER_ATOMIC];
};

generator.forBlock['regOutput'] = function(block) {
    var code = handleBlock(block);
    return [code, generator.ORDER_ATOMIC];
};

generator.forBlock['text'] = function(block) {
    var textValue = block.getFieldValue('TEXT');
    var code = '"' + textValue + '"';
    return [code, generator.ORDER_ATOMIC];
};


//***********************************
//EXTENSIONS FOR VALIDATIONS - START
//***********************************
Blockly.Extensions.register('integer_validation', function() {
  var thisBlock = this;

  // Initialize a property to store the last valid value.
  this.lastValidValue = {};

  // Automatically attach validators to all integer fields.
  thisBlock.inputList.forEach(function(input) {
    input.fieldRow.forEach(function(field) {
      if (field instanceof Blockly.FieldNumber) {
        // Store the initial value as the last valid value.
        thisBlock.lastValidValue[field.name] = field.getValue();

        field.setValidator(function(newValue) {
          var intValue = Number(newValue);
          if (Number.isInteger(intValue)) {
            // Update last valid value to the new value.
            thisBlock.lastValidValue[field.name] = newValue;
            // Clear warning text since the value is valid.
            field.sourceBlock_.setWarningText(null);
            return newValue;
          } else {
            // Set warning text since the value is invalid.
            field.sourceBlock_.setWarningText('You must enter an integer.');
            // Revert to the last valid value.
            return thisBlock.lastValidValue[field.name];
          }
        });
      }
    });
  });
});
//***********************************
//EXTENSIONS FOR VALIDATIONS - END
//***********************************



//************************
//LANG FOR LABELS - START
//************************
/**
 * Create a namespace for the application.
 */
var Unix = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Unix.LANGUAGE_NAME = {
  'en': 'English',
};

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Unix.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? deUnixURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Unix.getLang = function() {
  var lang = Unix.getStringParamFromUrl('lang', '');
  if (Unix.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'en';
  }
  return lang;
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Unix.LANG = Unix.getLang();

// // Load the Unix demo's language strings.
// document.write('<script src="msg/' + Unix.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="js/' + Unix.LANG + '.js"></script>\n');
//**********************
//LANG FOR LABELS - END
//**********************


//***************************
//MUTATORS FOR LISTS - START
//***************************
function getExtraBlockState(block) {
	// TODO: This is a dupe of the BlockChange.getExtraBlockState code, do we
	//    want to make that public?
	if (block.saveExtraState) {
	const state = block.saveExtraState();
	return state ? JSON.stringify(state) : '';
	} else if (block.mutationToDom) {
	const state = block.mutationToDom();
	return state ? Blockly.Xml.domToText(state) : '';
	}
	return '';
}

/**
 * Creates a minus image field used for mutation.
 * @param {Object=} args Untyped args passed to block.minus when the field
 *     is clicked.
 * @returns {Blockly.FieldImage} The minus field.
 */
function createMinusField(args = undefined) {
	const minus = new Blockly.FieldImage(minusImage_File, 15, 15, undefined, onClick_);
	/**
	* Untyped args passed to block.minus when the field is clicked.
	* @type {?(Object|undefined)}
	* @private
	*/
	minus.args_ = args;
	return minus;
}

/**
 * Calls block.minus(args) when the minus field is clicked.
 * @param {Blockly.FieldImage} minusField The field being clicked.
 * @private
 */
function onClick_(minusField) {
	// TODO: This is a dupe of the mutator code, anyway to unify?
	const block = minusField.getSourceBlock();

	if (block.isInFlyout) {
	return;
	}

	Blockly.Events.setGroup(true);
	const oldExtraState = getExtraBlockState(block);
	block.minus(minusField.args_);
	const newExtraState = getExtraBlockState(block);

	if (oldExtraState != newExtraState) {
	Blockly.Events.fire(new Blockly.Events.BlockChange(
		block, 'mutation', null, oldExtraState, newExtraState));
	}
	Blockly.Events.setGroup(false);
}

const minusImage_File =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw' +
    'MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS' +
    'JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw' +
    'IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K';


    /**
    * Creates a plus image field used for mutation.
    * @param {Object=} args Untyped args passed to block.minus when the field
    *     is clicked.
    * @returns {Blockly.FieldImage} The Plus field.
    */
function createPlusField(args = undefined) {
	const plus = new Blockly.FieldImage(plusImage_File, 15, 15, undefined, onClickPlus_);
	/**
	* Untyped args passed to block.plus when the field is clicked.
	* @type {?(Object|undefined)}
	* @private
	*/
	plus.args_ = args;
	return plus;
   }
   
   /**
    * Calls block.plus(args) when the plus field is clicked.
    * @param {!Blockly.FieldImage} plusField The field being clicked.
    * @private
    */
function onClickPlus_(plusField) {
	// TODO: This is a dupe of the mutator code, anyway to unify?
	const block = plusField.getSourceBlock();

	if (block.isInFlyout) {
	return;
	}

	Blockly.Events.setGroup(true);
	const oldExtraState = getExtraBlockState(block);
	block.plus(plusField.args_);
	const newExtraState = getExtraBlockState(block);

	if (oldExtraState != newExtraState) {
	Blockly.Events.fire(new Blockly.Events.BlockChange(
	   block, 'mutation', null, oldExtraState, newExtraState));
	}
	Blockly.Events.setGroup(false);
   }
   
const plusImage_File =
   'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC' +
   '9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT' +
   'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz' +
   'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW' +
   'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS' +
   '44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';
//*************************
//MUTATORS FOR LISTS - END
//*************************



