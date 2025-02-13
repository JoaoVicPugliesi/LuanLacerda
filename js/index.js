document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#")) {  
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        header.classList.add('invisible');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear'); 
            }
        });
    }, { threshold: 0.2 });

    const elementsToObserve = document.querySelectorAll('.bio, .luan, .squares, .square1, .square2, .square3, .socialwall, .socialmedias, .sociainfo, .copyright');
    elementsToObserve.forEach(el => observer.observe(el));

    const storeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                
                if (window.innerWidth < 600) {
                    observer.unobserve(entry.target); 
                }
            }
        });
    }, { threshold: 0.1 });

    const storeElements = document.querySelectorAll('.store, .productstore');
    storeElements.forEach(el => storeObserver.observe(el));

    const socialSection = document.querySelector("#social");
    const socialElements = document.querySelectorAll(".socialwall, .socialmedias, .sociainfo, .copyright");

    if (socialSection) {
        const socialObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    socialElements.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add("appear");
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.3 });

        socialObserver.observe(socialSection);
    }

    document.querySelectorAll('.socialmedias a').forEach(link => {
        link.addEventListener('click', function(event) {
            console.log('Clicked:', this.href);
        });
    });

    const bio = document.querySelector(".bio");

    document.querySelector(".biobtn1").addEventListener('click', () => {
        bio.innerHTML = `
            <h3 class="bioname">Luan Lacerda</h3>
            <p class="biodescription">"Nascido em Macapá. Tornou-se pro em 2012. Agora chegado no UFC ele busca provar que é um dos melhores do mundo no MMA peso galo."</p>
            <div><a href="#store"><img class="arrow" src="images/down.png" alt=""></a></div>
        `;
    });

    document.querySelector(".biobtn2").addEventListener('click', () => {
        bio.innerHTML = `
            <h3 class="highlightname">Luan Lacerda - MMA Highlights</h3>
            <div class="highlightdiv">
                <video class="highlight" src="videos/highlights.mp4" poster="images/logo.png" controls autoplay loop></video>
            </div>
            <div><a href="#store"><img class="arrow" src="images/down.png" alt=""></a></div>
        `;

        setTimeout(() => {
            const video = document.querySelector(".highlight");
            if (video) {
                document.addEventListener("fullscreenchange", () => {
                    if (document.fullscreenElement === video) {
                        video.classList.add("fullscreen");
                    } else {
                        video.classList.remove("fullscreen");
                    }
                });
            }
        }, 100); 
    });

    document.querySelector(".biobtn3").addEventListener('click', () => {
        bio.innerHTML = `
            <div class="QandAdiv">
                <p class="QandA">Quando e por que você começou a treinar para lutar? Virei profissional em 2012...</p>
                <p class="QandA">Quais graduações e títulos você já conquistou? Melhor do Brasil...</p>
                <p class="QandA">Você tem algum herói? Meu pai, minha mãe e meu mestre Dedé Pederneiras.</p>
                <p class="QandA">O que significa para você lutar no UFC? O UFC é o maior evento de MMA...</p>
                <p class="QandA">Você fez faculdade e, se sim, qual foi o seu diploma? Estudei administração...</p>
                <p class="QandA">Qual era seu trabalho antes de começar a lutar? Nunca trabalhei...</p>
                <p class="QandA">Técnica de grappling favorita: Arm lock</p>
                <p class="QandA">Técnica de ataque favorita: Socos</p>
            </div>
            <div><a href="#store"><img class="arrow" src="images/down.png" alt=""></a></div>
        `;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const products  = document.querySelector(".products ");
    
    let isScrolling;

    function hideHeaderOnScroll() {
        header.classList.add("invisible");

        clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            header.classList.remove("invisible");
        }, 500);
    }

    window.addEventListener("scroll", hideHeaderOnScroll);
    products.addEventListener("scroll", hideHeaderOnScroll);
    
});
