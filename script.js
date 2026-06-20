const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const message = inputs[2].value.trim();

    // ✅ Empty check
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill all fields!");
      return;
    }

    // ✅ Proper email validation (FIXED)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      alert("❌ Invalid email format!");
      return;
    }

    alert("✅ Message sent successfully!");
    form.reset();
  });
}