document.addEventListener('DOMContentLoaded', () => {
    loadSettings();

    const settingsForm = document.getElementById('settingsForm');
    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        saveSettings();
    });

    // Handle logo upload
    const logoUpload = document.getElementById('logoUpload');
    logoUpload.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const logoPreview = document.getElementById('logoPreview');
                logoPreview.src = e.target.result;
                logoPreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });
});

// Function to save settings
function saveSettings() {
    const companyName = document.getElementById('companyName').value;
    const logoUrl = document.getElementById('logoPreview').src; // Get preview URL
    const currency = document.getElementById('currency').value;
    const themeColor = document.getElementById('themeColor').value;
    const language = document.getElementById('language').value;
    const notificationsEnabled = document.getElementById('notificationsToggle').checked;

    const settings = {
        companyName,
        logoUrl,
        currency,
        themeColor,
        language,
        notificationsEnabled
    };

    localStorage.setItem('settings', JSON.stringify(settings));
    showNotification('Settings saved successfully!'); // Show notification
}

// Function to load settings
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('settings'));

    if (settings) {
        document.getElementById('companyName').value = settings.companyName || '';
        document.getElementById('currency').value = settings.currency || '';
        document.getElementById('themeColor').value = settings.themeColor || '#007BFF';
        document.getElementById('language').value = settings.language || 'en';
        document.getElementById('notificationsToggle').checked = settings.notificationsEnabled || false;
        
        const logoPreview = document.getElementById('logoPreview');
        logoPreview.src = settings.logoUrl || '';
        logoPreview.style.display = settings.logoUrl ? 'block' : 'none';
    }
}

// Function to show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
