// Sample order data
const orders = [
    { id: 1, item: 'Motorcycle Battery', quantity: 2, price: 1500, status: 'Shipped' },
    { id: 2, item: 'Brake Pads', quantity: 4, price: 500, status: 'Pending' },
    { id: 3, item: 'Oil Filter', quantity: 1, price: 300, status: 'Delivered' },
];

// Function to create an order card
function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card';

    const title = document.createElement('h4');
    title.textContent = `Order ID: ${order.id}`;
    card.appendChild(title);

    const itemDetails = document.createElement('p');
    itemDetails.textContent = `Item: ${order.item}`;
    card.appendChild(itemDetails);

    const quantityDetails = document.createElement('p');
    quantityDetails.textContent = `Quantity: ${order.quantity}`;
    card.appendChild(quantityDetails);

    const priceDetails = document.createElement('p');
    priceDetails.textContent = `Price: ₹${order.price}`;
    card.appendChild(priceDetails);

    const totalDetails = document.createElement('p');
    const total = order.quantity * order.price;
    totalDetails.textContent = `Total: ₹${total}`;
    card.appendChild(totalDetails);

    const statusDetails = document.createElement('p');
    statusDetails.textContent = `Status: ${order.status}`;
    card.appendChild(statusDetails);

    // Action buttons container
    const actionButtons = document.createElement('div');
    actionButtons.className = 'action-buttons';

    // View button
    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View';
    viewBtn.className = 'view-btn';
    viewBtn.addEventListener('click', function () {
        alert(`Viewing order ID: ${order.id}\nItem: ${order.item}\nQuantity: ${order.quantity}\nStatus: ${order.status}`);
    });

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', function () {
        const newQuantity = prompt('Enter new quantity:', order.quantity);
        if (newQuantity !== null) {
            order.quantity = newQuantity;
            updateOrderList();
        }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function () {
        if (confirm(`Are you sure you want to delete order ID: ${order.id}?`)) {
            orders.splice(orders.indexOf(order), 1); // Remove order from the array
            updateOrderList(); // Refresh the list
        }
    });

    // Invoice button
    const invoiceBtn = document.createElement('button');
    invoiceBtn.textContent = 'Download Invoice';
    invoiceBtn.className = 'invoice-btn';
    invoiceBtn.addEventListener('click', function () {
        downloadInvoice(order);
    });

    // Append buttons to actionButtons
    actionButtons.appendChild(viewBtn);
    actionButtons.appendChild(editBtn);
    actionButtons.appendChild(deleteBtn);
    actionButtons.appendChild(invoiceBtn);
    
    // Append action buttons to the card
    card.appendChild(actionButtons);

    return card;
}

// Function to update the order list in the DOM
function updateOrderList() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = ''; // Clear the current list
    orders.forEach(order => {
        const orderCard = createOrderCard(order);
        orderList.appendChild(orderCard); // Add each order card to the list
    });
}

// Function to download invoice
function downloadInvoice(order) {
    const total = order.quantity * order.price; // Calculate total amount

    // Create a unique string for the QR code
    const qrData = `Order ID: ${order.id}, Item: ${order.item}, Quantity: ${order.quantity}, Total: ₹${total}`;
    
    // Invoice HTML structure
    const invoiceHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #007BFF; border-radius: 10px; background-color: #f0f4f8;">
            <h2 style="color: #007BFF; text-align: center;">Invoice</h2>
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Item:</strong> ${order.item}</p>
            <p><strong>Quantity:</strong> ${order.quantity}</p>
            <p><strong>Price:</strong> ₹${order.price}</p>
            <p><strong>Total:</strong> ₹${total}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <p style="margin-top: 50px;">Signature: ______________________</p>
            <p style="text-align: center;">Thank you for your order!</p>
            <div id="qrcode" style="text-align: center;"></div>
        </div>
    `;

    // Create a new window for the invoice
    const invoiceWindow = window.open('', '', 'width=600,height=400');
    invoiceWindow.document.write(invoiceHTML);
    invoiceWindow.document.close();

    // Generate the QR code
    $(invoiceWindow.document).ready(function () {
        $('#qrcode').qrcode(qrData);
    });

    // Add a button to download the invoice as a PDF
    const downloadButton = invoiceWindow.document.createElement('button');
    downloadButton.innerText = 'Download as PDF';
    downloadButton.style.marginTop = '20px';
    downloadButton.style.padding = '10px 20px';
    downloadButton.style.backgroundColor = '#007BFF';
    downloadButton.style.color = '#fff';
    downloadButton.style.border = 'none';
    downloadButton.style.borderRadius = '5px';
    downloadButton.style.cursor = 'pointer';
    downloadButton.onclick = function () {
        const pdfWindow = window.open('', '', 'width=600,height=400');
        pdfWindow.document.write(invoiceHTML);
        pdfWindow.document.close();
        pdfWindow.print(); // Trigger print dialog for PDF download
    };

    invoiceWindow.document.body.appendChild(downloadButton);
}

// Add orders to the order list
document.addEventListener('DOMContentLoaded', function () {
    updateOrderList(); // Initialize the order list
});
