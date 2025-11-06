function updatetime() {
    let now = new Date ();
    document.getElementById("current-time").innerText = now.toLocaleTimeString("id-ID", {timeZone:"Asia/Jakarta"});
}
setInterval(updatetime,1000);
updatetime();