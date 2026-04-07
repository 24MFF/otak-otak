
// ===================================
// EVENT LISTENERS - PAYMENT MODALS
// ===================================

// Payment Method Modal - Cancel button
document.getElementById('cancelPaymentMethod').addEventListener('click', hidePaymentMethodModal);

// DANA Payment Modal
document.getElementById('confirmDanaPayment').addEventListener('click', confirmDanaPayment);

// QRIS Payment Modal
document.getElementById('confirmQrisPayment').addEventListener('click', confirmQrisPayment);

// Bank Transfer Modal - Confirm button
document.getElementById('confirmBankTransfer').addEventListener('click', confirmBankTransfer);

// Bank Transfer Modal - Cancel button
document.getElementById('cancelBankTransfer').addEventListener('click', hideBankTransferModal);
