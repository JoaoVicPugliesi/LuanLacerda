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
                    targetSection.classList.add("background");
                }
            }
        });
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

    const elementsToObserve = document.querySelectorAll('.bio, .luan, .squares, .square1, .square2, .square3, .socialwall, .socialmedias, .sociainfo, .copyright, .store, .productstore');
    elementsToObserve.forEach(el => observer.observe(el));

    const storeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
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

    let questions;
    let currentIndex = 0;
    const bio1 = document.querySelector(".bio1");
    const bio2 = document.querySelector(".bio2.invisible");
    const bio3 = document.querySelector(".bio3.invisible");
    let home = document.querySelector('.links a[href="#home"]');
    let about = document.querySelector('.links a[href="#about"]');
    let store = document.querySelector('.links a[href="#store"]');
    let biodescription = document.querySelector('.biodescription');
    let socialh3 = document.querySelector('.social h3');
    let biobtn1 = document.querySelector('.biobtn1 h3');
    let saibammais = document.querySelector('.saibamais');
    let selectedLanguage = document.querySelector('.selected-language');
    const language1 = document.querySelector('.language1');
    const language2 = document.querySelector('.language2');

    language1.addEventListener('click', () => {
        localStorage.setItem('language', 'pt');
        updatelanguage();
    });

    language2.addEventListener('click', () => {
        localStorage.setItem('language', 'en');
        updatelanguage();
    });

    function updatelanguage() {
        if(localStorage.getItem('language') == 'pt') {
            questions = [
                "Quando e por que você começou a treinar para lutar? Virei profissional em 2012. Sou um dos melhores do mundo e quero provar isso, mas para isso preciso estar 100% em forma.",
                "Quais graduações e títulos você já conquistou? Melhor do Brasil, Campeão do Shooto Brasil, faixa-preta de BJJ.",
                "Você tem algum herói? Meu pai, minha mãe e meu mestre Dedé Pederneiras.",
                "O que significa para você lutar no UFC? O UFC é o maior evento de MMA do mundo; é onde estão os melhores lutadores do planeta, onde todo lutador sonha estar. É um sonho que se torna realidade. E aqui no UFC, ser campeão significa que você é o melhor do mundo. Você se torna um campeão mundial de MMA.",
                "Você fez faculdade e, se sim, qual foi o seu diploma? Estudei administração por um ano e meio.",
                "Qual era seu trabalho antes de começar a lutar? Nunca trabalhei. Sempre me dediquei à luta.",
                "Técnica de grappling favorita: Arm lock",
                "Técnica de ataque favorita: Socos"
            ];
            home.textContent = 'Início';
            about.textContent = 'Sobre';
            store.textContent = 'Loja';
            selectedLanguage.textContent = '🇧🇷 PT';
            biodescription.textContent = "Nascido em Macapá. Tornou-se pro em 2012. Agora chegado no UFC ele busca provar que é um dos melhores do mundo do MMA peso galo max.61kg.";
            socialh3.textContent = "Obrigado por chegar até aqui. Siga-me nas redes sociais ou me mande um email."
            biobtn1.textContent = "Descrição";
            saibammais.textContent = "Saiba Mais";
        } 
        
        if (localStorage.getItem('language') == 'en') {
           questions = [
            "When and why did you start training to fight? Turned pro in 2012. I am one of the best in the world and I want to prove it, but for that, I need to be 100% in shape.",
            "What degrees and titles have you won? Best in Brazil, Shooto Brazil Champion, BJJ black belt.",
            "Do you have any heroes? My father, my mother, and my master Dedé Pederneiras.",
            "What does it mean for you to fight in the UFC? The UFC is the biggest MMA event in the world; it’s where the best fighters on the planet are, where every fighter dreams of being. It’s a dream come true. And here in the UFC, being a champion means you are the best in the world. You become an MMA world champion.",
            "Did you go to college, and if so, what was your degree? I studied business administration for a year and a half.",
            "What was your job before you started fighting? I never worked. I’ve always dedicated myself to fighting.",
            "Favorite grappling technique: Arm lock",
            "Favorite striking technique: Punches"
        ];
           home.textContent = 'Home';
           about.textContent = 'About';
           store.textContent = 'Store';
           selectedLanguage.textContent = '🇺🇸 EN';
           biodescription.textContent = "Born in Macapá. He turned pro in 2012. Now he's on the UFC, looking to prove that he's one of the best in the world in MMA at bantamweight max (61kg).";
           socialh3.textContent = "Thanks for reading this far. Follow me on social media or send me an email."
           biobtn1.textContent = "Description";
           saibammais.textContent = "Learn More";
        }

        if (!bio3.classList.contains("invisible")) {
            document.querySelector(".QandA").textContent = questions[currentIndex];
        }
    }

    updatelanguage();

    document.querySelector(".biobtn1").addEventListener('click', () => {
        bio1.classList.remove('invisible');
        bio2.classList.add('invisible');
        bio3.classList.add('invisible');
    });

    document.querySelector(".biobtn2").addEventListener('click', () => {
        bio2.classList.remove('invisible');
        bio1.classList.add('invisible');
        bio3.classList.add('invisible');

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

    document.querySelector(".biobtn3").addEventListener("click", () => {
        const QandA = document.querySelector(".QandA");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
    
        bio3.classList.remove("invisible");
        bio1.classList.add("invisible");
        bio2.classList.add("invisible");
    
        function displayQuestion(index) {
            QandA.textContent = questions[index];
            prev.disabled = index === 0;
            next.disabled = index === questions.length - 1;
        }
    
        prev.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                displayQuestion(currentIndex);
            }
        });
    
        next.addEventListener("click", () => {
            if (currentIndex < questions.length - 1) {
                currentIndex++;
                displayQuestion(currentIndex);
            }
        });
    
        displayQuestion(currentIndex);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const products = document.querySelector(".products ");

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

function toggleDropdown() {
    document.querySelector('.custom-select').classList.toggle('open');
}

