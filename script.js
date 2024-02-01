function pickItem() {
    const items = ['아이템1', '아이템2', '아이템3', '아이템4'];
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `뽑힌 아이템: ${selectedItem}`;
}
