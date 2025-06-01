document.getElementById("clickMe").addEventListener("click", async () => {
  try {
    const res = await fetch("/api");
    const data = await res.json();
    document.getElementById("message").textContent = data.message;
  } catch (err) {
    document.getElementById("message").textContent = "Error fetching API";
    console.error(err);
  }
});
