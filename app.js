document.getElementById("loginBtn").addEventListener("click", () => {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (!u || !p) {
    document.getElementById("message").textContent = "Fields cannot be empty!";
} else if (u === "admin" && p === "123") {
    document.getElementById("message").textContent = "Login success!";
} else {
    document.getElementById("message").textContent = "Invalid credentials";
}
