function superbowlWin(records) {
    const found = records.find((record) => {
        return (record.result === 'W') 
        }) 
    if (found) {
        return found.year
    }    
        console.log('found', found)
    }
