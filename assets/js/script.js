document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('cvFile');
    const file = fileInput.files[0];

    if (file) {
        // Simulating file upload and processing
        const message = document.getElementById('message');
        message.textContent = "Processing your CV...";

        // Mock processing (replace with real processing)
        setTimeout(() => {
            window.location.href = 'result.html';
        }, 2000);
    }
});
