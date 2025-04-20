document.addEventListener('DOMContentLoaded', function () {
            let alertShown = false; // Flag to track if alert is shown

            // Function to show SweetAlert when internet is disconnected
            function showOfflineAlert() {
                Swal.fire({
                    icon: 'error',
                    title: 'No Internet Connection',
                    text: 'Please check your internet connection.',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    showConfirmButton: false,
                });
                alertShown = true;
            }

            // Function to check internet connection
            function checkInternetConnection() {
                if (!navigator.onLine) {
                    if (!alertShown) {
                        showOfflineAlert();
                    }
                } else {
                    if (alertShown) {
                        Swal.close(); // Close the alert when connection is back
                        alertShown = false;
                    }
                }
            }

            // Initial connection check
            checkInternetConnection();

            // Add event listeners for connection change
            window.addEventListener('offline', showOfflineAlert);
            window.addEventListener('online', function () {
                if (alertShown) {
                    Swal.close();
                    alertShown = false;
                }
            });

            // Periodically check connection every 5 seconds
            setInterval(checkInternetConnection, 5000);
        });