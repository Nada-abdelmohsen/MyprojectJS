var contentDiv=document.createElement("div")
contentDiv.setAttribute("id","contentDiv")
document.body.appendChild(contentDiv)

var allImgDiv=document.createElement("div")
allImgDiv.setAttribute("id","allImgDiv")

var catDiv=document.createElement("div")
catDiv.setAttribute("class","animalDiv")
var catImg=document.createElement("img")
catImg.setAttribute("class","Images")
catImg.setAttribute("src","pianoImgs/cat.png")
catDiv.appendChild(catImg)
allImgDiv.appendChild(catDiv)
contentDiv.appendChild(allImgDiv)


var dogDiv=document.createElement("div")
dogDiv.setAttribute("class","animalDiv")
var dogImg=document.createElement("img")
dogImg.setAttribute("src","pianoImgs/dog.png")
dogImg.setAttribute("class","Images")
dogDiv.appendChild(dogImg)
allImgDiv.appendChild(dogDiv)
contentDiv.appendChild(allImgDiv)

var hourseDiv=document.createElement("div")
hourseDiv.setAttribute("class","animalDiv")
var hourseImg=document.createElement("img")
hourseImg.setAttribute("src","pianoImgs/hourse.png")
hourseImg.setAttribute("class","Images")
hourseDiv.appendChild(hourseImg)
allImgDiv.appendChild(hourseDiv)
contentDiv.appendChild(allImgDiv)

var sheepDiv=document.createElement("div")
sheepDiv.setAttribute("class","animalDiv")
var sheepImg=document.createElement("img")
sheepImg.setAttribute("src","pianoImgs/sheep.png")
sheepImg.setAttribute("class","Images")
sheepDiv.appendChild(sheepImg)
allImgDiv.appendChild(sheepDiv)
contentDiv.appendChild(allImgDiv)

var birdDiv=document.createElement("div")
birdDiv.setAttribute("class","animalDiv")
var birdImg=document.createElement("img")
birdImg.setAttribute("src","pianoImgs/bird.png")
birdImg.setAttribute("class","Images")
birdDiv.appendChild(birdImg)
allImgDiv.appendChild(birdDiv)
contentDiv.appendChild(allImgDiv)

var cowDiv=document.createElement("div")
cowDiv.setAttribute("class","animalDiv")
var cowImg=document.createElement("img")
cowImg.setAttribute("src","pianoImgs/cow.png")
cowImg.setAttribute("class","Images")
cowDiv.appendChild(cowImg)
allImgDiv.appendChild(cowDiv)
contentDiv.appendChild(allImgDiv)

var duckDiv=document.createElement("div")
duckDiv.setAttribute("class","animalDiv")
var duckImg=document.createElement("img")
duckImg.setAttribute("src","pianoImgs/duck.png")
duckImg.setAttribute("class","Images")
duckDiv.appendChild(duckImg)
allImgDiv.appendChild(duckDiv)
contentDiv.appendChild(allImgDiv)

var monkeyDiv=document.createElement("div")
monkeyDiv.setAttribute("class","animalDiv")
var monkeyImg=document.createElement("img")
monkeyImg.setAttribute("src","pianoImgs/monkey.png")
monkeyImg.setAttribute("class","Images")
monkeyDiv.appendChild(monkeyImg)
allImgDiv.appendChild(monkeyDiv)
contentDiv.appendChild(allImgDiv)

var roosterDiv=document.createElement("div")
roosterDiv.setAttribute("class","animalDiv")
var roosterImg=document.createElement("img")
roosterImg.setAttribute("src","pianoImgs/rooster.png")
roosterImg.setAttribute("class","Images")
roosterDiv.appendChild(roosterImg)
allImgDiv.appendChild(roosterDiv)
contentDiv.appendChild(allImgDiv)

var elephantDiv=document.createElement("div")
elephantDiv.setAttribute("class","animalDiv")
var elephantImg=document.createElement("img")
elephantImg.setAttribute("src","pianoImgs/elephant.png")
elephantImg.setAttribute("class","Images")
elephantDiv.appendChild(elephantImg)
allImgDiv.appendChild(elephantDiv)
contentDiv.appendChild(allImgDiv)


var floatDiv=document.createElement("div")
floatDiv.setAttribute("id","float")
contentDiv.appendChild(floatDiv)



/*=====================================================*/

var allKeyDiv=document.createElement("div")
allKeyDiv.setAttribute("id","allKeyDiv")

var keyOne=document.createElement("div")
keyOne.setAttribute("id","keyOne")
var catAudio=document.createElement("audio")
catAudio.setAttribute("id","catAudio")
catAudio.setAttribute("src","pianoSounds/cat.wav")
keyOne.appendChild(catAudio)
allKeyDiv.appendChild(keyOne)

keyOne.addEventListener("click",function(){
    catAudio.play()
})
contentDiv.appendChild(allKeyDiv)


var keyTwo=document.createElement("div")
keyTwo.setAttribute("id","keyTwo")
var dogAudio=document.createElement("audio")
dogAudio.setAttribute("id","dogAudio")
dogAudio.setAttribute("src","pianoSounds/dog.wav")
keyTwo.appendChild(dogAudio)
allKeyDiv.appendChild(keyTwo)

keyTwo.addEventListener("click",function(){
    dogAudio.play()
})
contentDiv.appendChild(allKeyDiv)


var keyThree=document.createElement("div")
keyThree.setAttribute("id","keyThree")
var horseAudio=document.createElement("audio")
horseAudio.setAttribute("id","hourseAudio")
horseAudio.setAttribute("src","pianoSounds/horse.wav")
keyThree.appendChild(horseAudio)
allKeyDiv.appendChild(keyThree)

keyThree.addEventListener("click",function(){
    horseAudio.play()
})
contentDiv.appendChild(allKeyDiv)

var keyFour=document.createElement("div")
keyFour.setAttribute("id","keyFour")
var sheepAudio=document.createElement("audio")
sheepAudio.setAttribute("id","sheepAudio")
sheepAudio.setAttribute("src","pianoSounds/sheep.mp3")
keyFour.appendChild(sheepAudio)
allKeyDiv.appendChild(keyFour)

keyFour.addEventListener("click",function(){
    sheepAudio.play()
})
contentDiv.appendChild(allKeyDiv)

var keyFive=document.createElement("div")
keyFive.setAttribute("id","keyFive")
var birdAudio=document.createElement("audio")
birdAudio.setAttribute("id","birdAudio")
birdAudio.setAttribute("src","pianoSounds/bird.wav")
keyFive.appendChild(birdAudio)
allKeyDiv.appendChild(keyFive)

keyFive.addEventListener("click",function(){
    birdAudio.play()
})
contentDiv.appendChild(allKeyDiv)

var keySix=document.createElement("div")
keySix.setAttribute("id","keySix")
var cowAudio=document.createElement("audio")
cowAudio.setAttribute("id","cowAudio")
cowAudio.setAttribute("src","pianoSounds/cow.wav")
keySix.appendChild(cowAudio)
allKeyDiv.appendChild(keySix)

keySix.addEventListener("click",function(){
    cowAudio.play()
})
contentDiv.appendChild(allKeyDiv)

var keySeven=document.createElement("div")
keySeven.setAttribute("id","keySeven")
var duckAudio=document.createElement("audio")
duckAudio.setAttribute("id","duckAudio")
duckAudio.setAttribute("src","pianoSounds/duck.mp3")

keySeven.appendChild(duckAudio)
allKeyDiv.appendChild(keySeven)

keySeven.addEventListener("click",function(){
    duckAudio.play()
})
contentDiv.appendChild(allKeyDiv)


var keyEight=document.createElement("div")
keyEight.setAttribute("id","keyEight")
var monkeyAudio=document.createElement("audio")
monkeyAudio.setAttribute("id","monkeyAudio")
monkeyAudio.setAttribute("src","pianoSounds/monkey.wav")
keyEight.appendChild(monkeyAudio)
allKeyDiv.appendChild(keyEight)

keyEight.addEventListener("click",function(){
    monkeyAudio.play()
})
contentDiv.appendChild(allKeyDiv)


var keyNine=document.createElement("div")
keyNine.setAttribute("id","keyNine")
var roosterAudio=document.createElement("audio")
roosterAudio.setAttribute("id","roosterAudio")
roosterAudio.setAttribute("src","pianoSounds/rooster.mp3")
keyNine.appendChild(roosterAudio)
allKeyDiv.appendChild(keyNine)

keyNine.addEventListener("click",function(){
    roosterAudio.play()
})
contentDiv.appendChild(allKeyDiv)

var keyTen=document.createElement("div")
keyTen.setAttribute("id","keyTen")
var elephantAudio=document.createElement("audio")
elephantAudio.setAttribute("id","elephantAudio")
elephantAudio.setAttribute("src","pianoSounds/elephant.mp3")
keyTen.appendChild(elephantAudio)
allKeyDiv.appendChild(keyTen)

keyTen.addEventListener("click",function(){
    elephantAudio.play()
})
contentDiv.appendChild(allKeyDiv)


