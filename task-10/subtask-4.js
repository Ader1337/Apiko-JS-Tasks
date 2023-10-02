function calculateWordsInString(string) {
    let wordCount = 0
    let wordArr = []
    string = string.trim()
    wordArr = string.split(' ')
    wordArr.forEach(word => {
        if(word !== '')
            wordCount++
    });

    console.log(wordCount)
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
