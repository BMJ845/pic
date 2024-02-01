function pickItem() {
    
   
const items = ['1티어', '2티어', '3티어', '4티어'];
    
   
const probabilities = [1, 9, 20, 70];

    

   


const randomValue = Math.random() * 100;
    let selectedItem = '';

    

   
if (randomValue < probabilities[0]) {
        selectedItem = items[
        selectedItem = items

        selectedItem

       
0];
        
       
document.getElementById('itemImage').src = 'item1.jpg';
    } 
   
else if (randomValue < probabilities[0] + probabilities[1]) {
        selectedItem = items[
        selectedItem = items[

        selectedItem =

       
1];
        
       
document.getElementById('itemImage').src = 'item2.jpg';
    } 
    }
else if (randomValue < probabilities[0] + probabilities[1] + probabilities[2]) {
        selectedItem = items[
        selectedItem = items

        selectedItem =

        selectedI

        selec

        se

       

    

 
2];
        
        documen

     
document.getElementById('itemImage').src = 'item3.jpg';
    } 
    } e

   
else {
        selectedItem = items[
        selectedItem = ite

        selectedItem

        select

        

   
3];
        
        docu

        

   
document.getElementById('itemImage').src = 'item4.jpg';
    }

    
    }

  

  
const resultText = document.getElementById('resultText');
    resultText.
    resultText

    resultTe

    resul

    re

   
innerHTML = `뽑힌 아이템: ${selectedItem}`;
}
