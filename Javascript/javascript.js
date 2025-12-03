
//social media
document.getElementById("insta").addEventListener("click",function(){
    window.open("https://www.instagram.com/prosseqjr/","_blank");
});

document.getElementById("email.header").addEventListener("click",function(){
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=prosseq@gmail.com","_blank");
});

document.getElementById("linkedin").addEventListener("click",function(){
    window.open("https://www.linkedin.com/company/prosseq/","_blank");
});

//footer
document.getElementById("angela").addEventListener("click",function(){
    window.open("https://api.whatsapp.com/send/?phone=%2B559484156976&text&type=phone_number&app_absent=0","_blank");
});

document.getElementById("local").addEventListener("click",function(){
    window.open("https://maps.app.goo.gl/pPuR1sgQm4FprYHh6","_blank");
});

//form tentativa

// Espera o HTML carregar
document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".form"); // seu form já tem class="form"
  const URL = "https://script.google.com/macros/s/AKfycbwhPB59mnJ0AJ0ZevBuZqoHR3TiyudZgj_u139fQkZGTsr40gBhji5zG2KR7sT93jSkCQ/exec";

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // impede recarregar a página

    // Coleta os dados exatamente pelos IDs que você já tem
    const data = new FormData();
    data.append("Nome", document.getElementById("nome").value);
    data.append("Numero", document.getElementById("numero").value);
    data.append("Email", document.getElementById("email").value);
    data.append("Mensagem", document.getElementById("mensagem").value);

    // Desativa o botão enquanto envia
    const button = document.querySelector(".button-form");
    button.disabled = true;
    button.textContent = "Enviando...";

    try {
      await fetch(URL, {
        method: "POST",
        body: data
      });

      alert("✔ Mensagem enviada com sucesso!");
      form.reset(); // limpa o formulário

    } catch (err) {
      alert("❌ Erro ao enviar. Verifique a internet e tente novamente.");
      console.error("Erro:", err);
    }

    button.disabled = false;
    button.textContent = "Enviar";
  });

});
