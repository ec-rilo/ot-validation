import insertChars from './insertChars.js';
import deleteChars from './deleteChars.js';
import skipChars from './skipChars.js';

function isValid(stale, latest, otjson) {
  const operationsArr = JSON.parse(otjson);
  if (operationsArr.length === 0) return true;

  let cursorPosition = 0;
  let newStr = stale;

  for (let i = 0; i < operationsArr.length; i++) {
    const operation = operationsArr[i];
    const operationName = operation.op;

    switch(operationName) {
      case 'insert':
        newStr = insertChars(cursorPosition, newStr, operation.chars);
        cursorPosition = cursorPosition + operation.chars.length;
        break;
      case 'delete':
        if (cursorPosition + operation.count > newStr.length) return false;
        newStr = deleteChars(cursorPosition, operation.count, newStr);
        break;
      case 'skip':
        if (cursorPosition + operation.count > newStr.length) return false;
        cursorPosition = skipChars(cursorPosition, operation.count);
    }
  }

  return newStr === latest;
}

/*
create operationsArr with the otjson parsed

if operationsArr is an empty array
  return true

create cursorPosition with 0 as value
create newStr with stale

iterate over operationsArr
  create operationName
  if operationName is insert
    have newStr be the invocation of insertChars passing in cursorPosition, newStr, chars
    cursorPosition will be cursorPosition + chars length
  if operationName is delete
    have newStr invoke deleteChars passing in cursorPosition, delete count, and newStr
  if operationName is skip
    have cursorPosition invoke skipChars passing in cursorPosition and skip count

if newStr and latest match AND cursorPosition equals latest length
  return true
otherwise
  return false
*/

/*
IN:
  - (string) - stale file contents
  - (string) - latest file contents
  - (JSON string)
  Contains the operations. Your function should validate that the sequence of operations, when applied to the stale contents, produces the latest contents. If it does not, or if the sequence of operations is invalid, your function should return false

OUT:
  - (boolean)
  if the newString and latest string match return true
  otherwise return false


CONS:
  - You can't skip past the end of a string
  - You can't delete past the end of a string
  - Delete operations are applied forward while keeping the cursor in place

EDGE:
  - if otjson is an empty array return true
*/

export default isValid;