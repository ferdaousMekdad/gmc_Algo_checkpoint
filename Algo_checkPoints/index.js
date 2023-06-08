var sentence ="Hello world hi.";
var length=0;
var words=1;
var vowels =0;
 var i=0;

 while(i<sentence.length){
    length++;
    var c= sentence.charAt(i);

    if(c === " "){
        words++;
    }
    if (c.match(/[aeiou]/i)){
        vowels++;
    }
    i++;
 }

 console.log("length:"+length);
 console.log("words:"+words);
 console.log("vowels:"+vowels);