const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(record) {
    for(const win of record) {
        if(win.result === 'W') {
            return win.year
        }
    }
}

record.find(superbowlWin)