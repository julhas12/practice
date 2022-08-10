function reverseWords(str) {
    words = str.split(' ');
    const result = [];
    // console.log(wors);
    //[ 'I', 'am', 'a', 'good', 'boy' ]
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    //   console.log(result);
    const reverse = result.join(' ');
    return result
}

const myString = 'I am a good boy';

reverseWords(myString);