
    const webVersion = "5.3"; // Website-required version

    function checkVersion() {
        const appVersion = Android.getAppVersion(); // Android to WebView version fetch

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
            showConfirmButton: true,
            confirmButtonText: "Update Now",
            confirmButtonColor: "#3085d6",
            backdrop: true,
            didOpen: () => {
                // Optional: Disable closing via clicking background
                const popup = Swal.getPopup();
                popup.classList.add("no-close");
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to Play Store or APK link
                window.location.href = "https://your-update-link.com";
            }
        });
    }

    // Run on load
    window.onload = checkVersion;



