const harmless = (testNote, speechNote) =>{
    let dataset = speechNote.split(" ")
    let testData = speechNote.split(" ")

    let dataObj={}
    
    dataSet.forEach(word =>{
        if(!dataObj[word]){
            dataObj[word] = 0;
        }
        dataObj[word]++
    })
    return dataObj

}

console.log(
    harmless(
        "",
        "this is a boy and the boy loves to play so give the boy a break"
        )
    )