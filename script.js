let input = document.getElementById("input")
let submit = document.getElementById("submit")
let sentence = document.getElementById("sentence")
let getVowels = document.getElementById("get-vowels")
let vowels = document.getElementById("vowels")

let mySentence = ""
let myVowels = ["a", "e", "i", "o", "u"]
 let count = ''


submit.addEventListener("click", function(){
  mySentence +=input.value;
  console.log(mySentence)
  sentence.innerHTML += input.value;
   input.value = "" ;
})

  getVowels.addEventListener("click", function(){
  for(let i of mySentence.toLowerCase()){
    if(myVowels.includes(i)){
      count++
    }
  }
    vowels.innerHTML += count
})

