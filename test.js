// console.log('test');


let btnmoins = document.getElementsByClassName('btn-moins');
// console.log(btnmoins);

for (let minus of btnmoins){
    minus.addEventListener('click',function(){
        if ( minus.nextElementSibling.innerText > 0){
            minus.nextElementSibling.innerText --;
        }
        totalPrice()
    })

}

//plus 
var btnplus = document.getElementsByClassName('btn-plus');
// console.log(btnplus);
var priceElements =document.getElementsByClassName('price');

console.log(priceElements);
for (let plus of btnplus){
    plus.addEventListener('click',function(){
        plus.previousElementSibling.innerText ++;
      
        totalPrice()
        console.log('test',plus)

    })
}





 let removeBtn = document.getElementsByClassName('bx bx-x')
console.log(removeBtn)
for (let i=0;i<removeBtn.length;i++){
    removeBtn[i].addEventListener('click',function(){
        removeBtn[i].parentElement.parentElement.remove();
//update lil data
        totalPrice()
        console;log(removeBtn[i])
    })
}
console.log('test js file')

function totalPrice(){
    let quantity=document.getElementsByClassName('quantity');
    console.log(quantity);
    let prix=document.getElementsByClassName('price');
    console.log(prix);
    let sum = 0;
    for(let i=0; i<prix.length; i++){
        sum+=prix[i].innerText * quantity[i].innerText ;
   console.log('test sum ',sum)
    }
    document.getElementById('prixtotal').innerText = sum;
    console.log('test affiche',    document.getElementById('prixtotal').innerText    )

}

// let heartIcon = document.getElementsByClassName(' bxs-heart');
//  console.log(heartIcon)
//  for (let i=0; i<heartIcon.length;i++){    
//     heartIcon[i].addEventListener('click', function(){
        
//         if ( heartIcon[i].style.color === "grey") {
//             heartIcon[i].style.color === "red"
//         } else {
//             heartIcon[i].style.color === "grey"
//         }
//    })
//     console.log(heartIcon[i])
//  }

//  console.log('test js heart')


let likebtn = document.getElementsByClassName(' bxs-heart');
 console.log(likebtn)

for (let likes of likebtn){
    likes.addEventListener('click',function(){

        if ( likes.style.color ==="gray"){
            likes.style.color = "red"
          } else {
            likes.style.color ="gray"
          }
          totalPrice();

    })
}