
var in1,in2,op,pt,ans;
pt=0;in1=0;in2=0;op=0;

function comp(){
  switch (op) {
    case '+':
      in1+=in2;
      break;
    case '-':
      in1-=in2;
      break;
    case '*':
      in1*=in2;
      break;
    case '/':
      in1/=in2;
      break;
}
}

function fx1(color){
  document.getElementById("ball").style.background=color;
}

function fx2(val1,op1){
  if(op1==0){
    if(pt==2){in1=0;in2=0;pt=0;}
    if(pt==0){in1*=10;in1+=val1;document.getElementById("disp").innerHTML=in1;}
    if(pt==1){in2*=10;in2+=val1;document.getElementById("disp").innerHTML=in2;}
  }
 if(op1==1){
   if(pt==2){in2=0;}
   document.getElementById("disp").innerHTML=val1;
   if(pt==1){
      comp();
      in2=0;
   }
   op=val1;
   pt=1;
  }
  if(op1==2){
    comp();
    document.getElementById("disp").innerHTML=in1;pt=2;
  }
  if(op1==3){
    if(pt==0){in1-=in1%10;in1/=10;document.getElementById("disp").innerHTML=in1;}
    if(pt==1){in2-=in2%10;in2/=10;document.getElementById("disp").innerHTML=in2;}
  }
}
function det(){
  document.getElementsById("res").innerHTML="B";
}




 /*document.addEventListener('DOMContentLoader',()=>{
   const cardArray=[
     {
       name:'img01'
       img:'ClipArts/ClipArt01.jpg'
            },
     {
       name:'img02'
       img:'ClipArts/ClipArt02.jpg'
            },
     {
       name:'img03'
       img:'ClipArts/ClipArt03.jpg'
            },
     {
       name:'img04'
       img:'ClipArts/ClipArt04.jpg'
            },
     {
       name:'img05'
       img:'ClipArts/ClipArt05.jpg'
           },
     {
       name:'img06'
       img:'ClipArts/ClipArt06.jpg'
           },
     {
       name:'img07'
       img:'ClipArts/ClipArt07.jpg'
           },
     {
       name:'img08'
       img:'ClipArts/ClipArt.jpg'
           }
   ]

   const grid=document.querySelector('.grid')
   const resultDisplay=document.querySelector('.grid')
   var cardsChosen=[]
   var cardsChosenId=[]
   var cardsWon=[]
   function createBoard(){
     for(let i=0;i<cardArray.length,i++){
       var card=document.creatElement('img')
       card.setAttribute('src','ClipArts/ClipArt09.jpg')
       card.setAttribute('data-id',i)
       card.appendChild(Card)
     }
   }
   function checkForMatch() {
     var cards=document.querySelectorAll('img')
     const optionOneId=cardsChosen[0]
     const optionTwoId=cardsChosen[1]
     if(optionOneId===cardsChosen[1]){
       alert{'you found a match'}
       cards[optionOneId].setAttribute('src','ClipArts/ClipArt09.jpg')
       cards[optionTwoId].setAttribute('src','ClipArts/ClipArt09.jpg')
       cardsWon.push(cardsChosen)
     }
     else{
       cards[optionOneId].setAttribute('src','ClipArts/ClipArt08.jpg')
       cards[optionTwoId].setAttribute('src','ClipArts/ClipArt08.jpg')
       alert.('sorry,try again')
     }
     cardsChosen=[]
     cardsChosenId=[]
     resultDisplay.textContent=cardWon.length;
   }
   function flipCard(){
      var cardId=this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src',cardArray[cardId].img)
      if (cardsChosen.length==2){
        setTimeOut(checkForMatch, 500)
      }
   }
   .createBoard(){

   }


 })
*/
