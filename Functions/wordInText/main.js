var text = "Hello my friend. Hello, hello what are you doing hello i am programing a program with a lot of hello ";
var wordToSearch = "hello";
var isCaseSensitive = false;

CountOccurenceWord(text, wordToSearch);
CountOccurenceWord(text, wordToSearch, true);
function CountOccurenceWord(text, wordToSearch, isCaseSensitive) {
    isCaseSensitive = isCaseSensitive || false;
    var countSearchedWord = 0;

    if (isCaseSensitive === false) {
        text = text.toLowerCase();
        wordToSearch=wordToSearch.toLowerCase()
        var strArr = text.split(wordToSearch); //split is case-insensitive

        for (var str in strArr) {
            countSearchedWord++;
        }
        countSearchedWord--;
        document.write("The count of word '" + wordToSearch + "' (case-insensitive search)  is: " + countSearchedWord)
    }
    else {
        var index = text.indexOf(wordToSearch);//indexOf is case-sensitive

        while (index >= 0) {
            countSearchedWord++;
            index = text.indexOf(wordToSearch, index + 1);
        }
        document.write("The count of word '" + wordToSearch + "' (case-sensitive search)  is: " + countSearchedWord)
    }
}