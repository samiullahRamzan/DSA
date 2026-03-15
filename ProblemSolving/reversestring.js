/**
 * @param {string} s
 * @return {string}
 */


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