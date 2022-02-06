const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(records) {
    const found = records.find((record) => {
        return (record.result === 'W') 
        }) 
    if (found) {
        return found.year
    }    
        console.log('found', found)
    }

console.log(superbowlWin(record))