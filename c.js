// Submit form event listener
form.addEventListener('submit', (e) => {
    // Get reference to form
const form = document.querySelector('form');
// Submit form event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get file 
    const file = document.querySelector('input[type="file"]').files[0];
    // Check if file was chosen
    if (!file) {
        // Output error message
        resultsDiv.innerHTML = '<p>No file chosen.</p>';
        return;
    }
    // Create FormData object
    const formData = new FormData();
    // Add file to formData
    formData.append('file', file);
    // Create XHR object
    const xhr = new XMLHttpRequest();
    // Open XHR
    xhr.open('POST', 'url_of_api', true);
    // Set XHR onload function
    xhr.onload = () => {
        if (xhr.status === 200) {
            // Parse response
            const data = JSON.parse(xhr.responseText);
            // Check for errors
            if (data.errors) {
                // Output errors
                let output = '';
                data.errors.forEach((error) => {
                    output += `<p>${error}</p>`;
                });
                resultsDiv.innerHTML = output;
            }
            // Check for vulnerabilities
            if (data.vulnerabilities) {
                // Output vulnerabilities
                let output = '';
                data.vulnerabilities.forEach((vulnerability) => {
                    output += `<p>Vulnerability: ${vulnerability.name}<br>Remediation: ${vulnerability.remediation}</p>`;
                });
                resultsDiv.innerHTML = output;
            } else {
                // Output no vulnerabilities
                resultsDiv.innerHTML = '<p>No vulnerabilities found.</p>';
            }
        } else {
            // Output error message
            resultsDiv.innerHTML = '<p>Error scanning file.</p>';
        }
    }
    // Send formData
    xhr.send(formData);
});

    e.preventDefault();
    // Get file 
    const file = document.querySelector('input[type="file"]').files[0];
    // Check if file was chosen
    if (!file) {
        // Output error message
        resultsDiv.innerHTML = '<p>No file chosen.</p>';
        return;
    }
    // Show loading indicator
    const loadingDiv = document.querySelector('#loading');
    loadingDiv.innerHTML = '<p>Loading...</p>';
    // Create FormData object
    const formData = new FormData();
    // Add file to formData
    formData.append('file', file);
    // Create XHR object
    const xhr = new XMLHttpRequest();
    // Open XHR
    xhr.open('POST', 'url_of_api', true);
    // Set XHR onload function
    xhr.onload = () => {
        // Hide loading indicator
        loadingDiv.innerHTML = '';
        if (xhr.status === 200) {
            // Parse response
            const data = JSON.parse(xhr.responseText);
            // Check for errors
            if (data.errors) {
                // Output errors
                let output = '';
                data.errors.forEach((error) => {
                    output += `<p>${error}</p>`;
                });
                resultsDiv.innerHTML = output;
            }
            // Check for vulnerabilities
            if (data.vulnerabilities) {
                // Output vulnerabilities
                let output = '';
                data.vulnerabilities.forEach((vulnerability) => {
                    output += `<p>Vulnerability: ${vulnerability.name}<br>Remediation: ${vulnerability.remediation}</p>`;
                });
                resultsDiv.innerHTML = output;
            } else {
                // Output no vulnerabilities
                resultsDiv.innerHTML = '<p>No vulnerabilities found.</p>';
            }
        } else {
            // Output error message
            resultsDiv.innerHTML = '<p>Error scanning file.</p>';
        }
    }
    // Send formData
    xhr.send(formData);
}); 