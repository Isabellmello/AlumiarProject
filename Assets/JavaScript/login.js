console.log("Arquivo JS carregado!");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    
    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    
    window.location.href = "home.html";

    /*
    
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        window.location.href = "home.html";
      } else {
        alert("Email ou senha incorretos");
      }
    })
    .catch(error => {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    });
    */
  });
});
