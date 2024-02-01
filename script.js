function pickItem() {
    
    co

   
const items = ['1티어', '2티어', '3티어', '4티어'];
    
   
const probabilities = [1, 9, 20, 70];

    

   


const randomValue = Math.random() * 100;
    let selectedItem = '';

    

    i


  
if (randomValue < probabilities[0]) {
        selectedItem = items[
        selectedItem = i

        selectedIt

        sele

     
0];
        
        docu

       

  
document.getElementById('itemImage').src = 'item1.jpg';
    } 
    } e

  
else if (randomValue < probabilities[0] + probabilities[1]) {
        selectedItem = items[
        selectedItem = ite

        select

        

    
1];
        
        doc

     
document.getElementById('itemImage').src = 'item2.jpg';
    } 
    }
else if (randomValue < probabilities[0] + probabilities[1] + probabilities[2]) {
        selectedItem = items[
        selectedItem = items[

        selectedItem = it

        selectedItem 

        selectedI

        selec

        s

      

   
2];
        
        docu

        

    
document.getElementById('itemImage').src = 'item3.jpg';
    } 
    } e
else {
        selectedItem = items[
        selectedItem
3];
        document.getElementById('itemImage').src = 'item4.jpg';
    }

    
    }

    
const resultText = document.getElementById('resultText');
    resultText.innerHTML = `뽑힌 아이템: ${selectedItem}`;
}
