setInterval(async function() {
  for (let i=1; i<=8; i++) {
    for (let j=1; j<=8; j++) {
      let id = i.toString() + "-" + j.toString();
      let item = document.getElementById(id);
      item.classList.toggle("dark");
      item.classList.toggle("light");
    }
  }
}, 250)
