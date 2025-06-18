function sendCommand(cmd) {
  const ip = document.getElementById('ip').value;
  if (!ip) {
    alert("Please enter IP address and port.");
    return;
  }
  fetch(`http://${ip}/${cmd}`)
    .then(() => alert("Command sent: " + cmd))
    .catch(() => alert("Failed to send command."));
}
