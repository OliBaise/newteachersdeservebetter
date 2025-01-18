<script>
    window.addEventListener("message", function(event) {
        const iframes = document.querySelectorAll("iframe");
        if (event.data["datawrapper-height"]) {
            for (const key in event.data["datawrapper-height"]) {
                iframes.forEach(iframe => {
                    if (iframe.contentWindow === event.source) {
                        iframe.style.height = event.data["datawrapper-height"][key] + "px";
                    }
                });
            }
        }
    });
</script>
