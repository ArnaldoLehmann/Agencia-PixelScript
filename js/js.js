document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.getElementById('header');
    const body = document.body;
    
    // Função para atualizar o estado do Header (Fixo/Não Fixo)
    function updateHeaderStatus() {
        // Verifica se a rolagem vertical é maior que 50 pixels
        if (window.scrollY > 50) { 
            header.classList.add('sticky');
            body.classList.add('header-active'); // Ativa a compensação de padding no body
        } else {
            header.classList.remove('sticky');
            body.classList.remove('header-active'); // Desativa a compensação
        }
    }

    // 1. FUNCIONALIDADE: HEADER FIXO (STICKY HEADER)
    window.addEventListener('scroll', updateHeaderStatus);
    updateHeaderStatus();

    // -------------------------------------------------------------

    // 2. FUNCIONALIDADE: SCROLL SUAVE (SMOOTH SCROLLING)
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight; 

                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight, 
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------------------------------------------------------------
    
    // 3. FUNCIONALIDADE: FEEDBACK DO FORMULÁRIO (REMOVIDO, AGORA É GERENCIADO PELO FORMSUBMIT)
    // A simulação de envio com JavaScript não é mais necessária.
    
});
