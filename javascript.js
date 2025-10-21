function toggleRuta() {
  const ruta = document.getElementById("ruta");
  const style = window.getComputedStyle(ruta); // kolla faktisk stil

  if (style.display === "none") {
    ruta.style.display = "block"; // gör synlig
  } else {
    ruta.style.display = "none";  // gör osynlig
  }
}
