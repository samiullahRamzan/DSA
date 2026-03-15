const reverseString = (str) => {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
};

const isLetterOrNumber = (char) => {
    //   const code = char.charCodeAt(0);
    //   return (
    //     (code >= 65 && code <= 90) || // A–Z
    //     (code >= 97 && code <= 122) || // a–z
    //     (code >= 48 && code <= 57) // 0–9
    //   );

    // another way...

    return (
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9')
    );
};


var reverseWords = function(s) {

    s = reverseString(s);   

    let startIndex=0;
    let endIndex=0;
    let index=0;

    let reverseWordsinstr='';

    for(let i=0;i<=s.length;i++){

        if(isLetterOrNumber(s[i]) ){

            if(index==0){
                startIndex=i;
            }

            index++;
        }else{

            if(index>0){
                endIndex=i-1;

                for(let j=endIndex; j>=startIndex;j--){
                    reverseWordsinstr+=s[j];
                }

                if(endIndex != s.length-1){
                    reverseWordsinstr+=' ';
                }

                index=0;
            }
        }
    }

    return reverseWordsinstr.trim();
};


// by sharadha didi
var reverseWords1 = function(s) {

    s = reverseString(s);   
    let word='';
    let reverseWordsinstr='';

    for(let i=0;i<s.length;i++){

       while(i< s.length && s[i] != ' '){
          word+=s[i];
          i++
       }

      word=reverseString(word);

       if(word.length> 0){
        reverseWordsinstr+=" " + word;
        word='';
       }


    }

    return reverseWordsinstr.substring(1);
};


console.log('here is reverse word...',reverseWords1('the sky is blue'))



// another by sharadha didi...

// #include <string>
// #include <algorithm>
// using namespace std;

// string reverseWords(string s) {
//     int n = s.length();
//     string ans = "";

//     reverse(s.begin(), s.end());

//     for (int i = 0; i < n; i++) {
//         string word = "";

//         while (i < n && s[i] != ' ') {
//             word += s[i];
//             i++;
//         }

//         reverse(word.begin(), word.end());

//         if (word.length() > 0) {
//             ans += " " + word;
//         }
//     }

//     return ans.substr(1);
// }