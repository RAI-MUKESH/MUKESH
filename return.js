document.getElementById('inventory-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const partName = document.getElementById('part-name').value.trim();
    const partNumber = document.getElementById('part-number').value.trim();
    const partCategory = document.getElementById('part-category').value.trim();
    const partPrice = parseFloat(document.getElementById('part-price').value.trim());
    const partQuantity = parseInt(document.getElementById('part-quantity').value.trim(), 10);

    if (partName && partNumber && partCategory && partPrice && partQuantity) {
        addPartToInventory(partName, partNumber, partCategory, partPrice, partQuantity);

        // Clear input fields after adding the part
        document.getElementById('part-name').value = '';
        document.getElementById('part-number').value = '';
        document.getElementById('part-category').value = '';
        document.getElementById('part-price').value = '';
        document.getElementById('part-quantity').value = '';
    }
});

function addPartToInventory(name, number, category, price, quantity) {
    const inventoryList = document.getElementById('inventory-list');
    const totalValue = (price * quantity).toFixed(2);
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${number}</td>
        <td>${category}</td>
        <td>₹${price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>₹${totalValue}</td>
        <td><button onclick="removePart(this)">Remove</button></td>
    `;

    inventoryList.appendChild(row);
}

function removePart(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
