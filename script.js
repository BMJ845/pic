function pickItem() {
    const items = ['1티어', '2티어', '3티어', '4티어'];
    const probabilities = [1, 9, 20, 70];

    const randomValue = Math.random() * 100;
    let selectedItem = '';

    if (randomValue < probabilities[0]) {
        selectedItem = items[0];
        document.getElementById('itemImage').src = 'item1.jpg';
    } else if (randomValue < probabilities[0] + probabilities[1]) {
        selectedItem = items[1];
        document.getElementById('itemImage').src = 'item2.jpg';
    } else if (randomValue < probabilities[0] + probabilities[1] + probabilities[2]) {
        selectedItem = items[2];
        document.getElementById('itemImage').src = 'item3.jpg';
    } else {
        selectedItem = items[3];
        document.getElementById('itemImage').src = 'item4.jpg';
    }

    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `뽑힌 아이템: ${selectedItem}를 뽑았습니다!`;
}
