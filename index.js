class Formatter {

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  static sanitize(str){
    str = str.replace(/[^a-z0-9 -']/gi, '');
    str = str.replace('!', '');


      return str;
  }

  static titleize(str){
    const small_words = ['a', 'an', 'and', 'but', 'for', 'of', 'from', 'at', 'by', 'the'];

    return str.split(' ').map((word, index) => {
      if (index !== 0 && small_words.includes(word)) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(' ');
  }
}

// function capitalizeWords(arr) {
//   return arr.map(element => {
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//   });
// }