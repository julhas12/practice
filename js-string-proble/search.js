const lyrics = 'tumi bondhu kala Pakhi ami jeno ki boshonto kale tumai bolte parini';
const searchString = 'KAla';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyricsLowercase.includes(searchString);

const lyricsLowercase = lyrics. toLowerCase();
// const doesExist = lyricsLowercase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowercase.includes(searchStringLower);

const doesExistOnline = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOnline);

//-----------------------

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tumi'));

if(lyrics.indexOf('tumai') !== -1){
    console.log('exist inside the string')
}
else{
    console.log('can not find it');
}

// startswith
console.log(lyrics.startsWith('tumi'))

console.log(lyrics.startsWith('tumi'))