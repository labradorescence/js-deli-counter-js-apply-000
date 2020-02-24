let katzDeliLine = [];

const takeANumber = (currentLine, name) => {
  console.log('takeANumber console empty', currentLine)
  currentLine.push(name)
  console.log('takeANumber console name number', currentLine)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

const nowServing = (currentLine) => {
  console.log('NOW SERVING currentLine length falsey', currentLine)
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
      console.log('NOW SERVING currentLine length truthy', currentLine)
      return `Currently serving ${currentLine.shift()}.`
      console.log('currentLine.shift', currentLine.shift)
//       pop(): Remove an item from the end of an array.
//       push(): Add items to the end of an array.
//       shift(): Remove an item from the beginning of an array.
//      unshift(): Add items to the beginning of an array.

    }
  }

const currentLine = (currentLine) => {
  if(!currentLine.length){
  return `The line is currently empty.`
}else{

  let lineNameNum = [];
console.log('CURRENT LINE console: currentLine', currentLine)
  for(let i = 0; i < currentLine.length; i++){
    lineNameNum.push(`${i+1}. ${currentLine[i]}`)
  }
  return `The line is currently: ${lineNameNum.join(', ')}`
}
}
