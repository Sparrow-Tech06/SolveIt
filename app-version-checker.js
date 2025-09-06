
    const webVersion = "5.2"; // Website-required version

    function checkVersion() {
       // const appVersion = Android.getAppVersion(); // Android to WebView version fetch
        const appVersion = 5.3 ; // demo for web Android to WebView version fetch
        if (appVersion !== webVersion) {
            showUpdatePopup();
        }
    }

    function showUpdatePopup() {
        Swal.fire({
            title: "New Version Available",
            text: "Your app version is outdated. Please update to continue.",
            icon: "warning",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            showCancelButton: false,
            backdrop: true,
            didOpen: () => {
                // Optional: Disable closing via clicking background
                const popup = Swal.getPopup();
                popup.classList.add("no-close");
            }
        });
    }

    // Run on load
    window.onload = checkVersion;



