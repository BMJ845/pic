function pickItem() {
    const items = ['1티어', '2티어', '3티어', '4티어'];
    const probabilities = [1, 9, 20, 70];

    

const randomValue = Math.random() * 100;
    
   
let selectedItem = '';

    

if (randomValue < probabilities[0]) {
        selectedItem = items[
        selectedItem = items[

        selectedItem =

       
0];
        document.getElementById('itemImage').src = 'item1.jpg';
    } 
    }
else if (randomValue < probabilities[0] + probabilities[1]) {
        selectedItem = items[
        selectedItem = items

        selectedItem

       
1];
        
       
document.getElementById('itemImage').src = 'item2.jpg';
    } 
    } els

    }

 
else if (randomValue < probabilities[0] + probabilities[1] + probabilities[2]) {
        selectedItem = items[
        selectedItem = 

        selected

        selec

       
2];
        
        doc

    
document.getElementById('itemImage').src = 'item3.jpg';
    } 
    
else {
        selectedItem = items[
        selectedItem = items[

        selectedItem =

        select

       
3];
        
        documen

        d

   
document.getElementById('itemImage').src = 'item4.jpg';
    }

    
    }

    co

    }

 

  
const resultText = document.getElementById('resultText');
    resultText.
    resultText

    resultT

    resu

    r

  
innerHTML = `뽑힌 아이템: ${selectedItem}`;
}
