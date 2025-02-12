const square1btn = document.querySelector(".square1btn");
const square2btn = document.querySelector(".square2btn");
const square3btn = document.querySelector(".square3btn");
const square1 = document.querySelector(".square1");
const square1video = document.querySelector(".square1video");
const square2 = document.querySelector(".square2");
const square2video = document.querySelector(".square2video");
const square3 = document.querySelector(".square3");
const square3video = document.querySelector(".square3video");

function addExpandListeners() {
    if (window.innerWidth > 1300) {
        square1btn.addEventListener('click', () => toggleExpand(square1, square1video));
        square2btn.addEventListener('click', () => toggleExpand(square2, square2video));
        square3btn.addEventListener('click', () => toggleExpand(square3, square3video));
    } else {
        removeExpandListeners();
    }
}

function toggleExpand(square, video) {
    document.querySelectorAll(".square1, .square2, .square3").forEach(sq => {
        sq.classList.remove("full");
    });

    square.classList.add("full");
    video.classList.add("nohover");

    setTimeout(() => {
        document.addEventListener("click", closeExpand);
    }, 100); 
}

function closeExpand(event) {
    if (!event.target.closest(".square1, .square2, .square3")) {
        document.querySelectorAll(".square1, .square2, .square3").forEach(sq => {
            sq.classList.remove("full");
        });
        document.removeEventListener("click", closeExpand);
    }
}

function removeExpandListeners() {
    square1btn.replaceWith(square1btn.cloneNode(true));
    square2btn.replaceWith(square2btn.cloneNode(true));
    square3btn.replaceWith(square3btn.cloneNode(true));
}

addExpandListeners();
window.addEventListener("resize", addExpandListeners);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#")) {  
                e.preventDefault();
                square1.classList.remove('full');
                square2.classList.remove('full');
                square3.classList.remove('full');
                square1video.classList.remove('nohover');
                square2video.classList.remove('nohover');
                square3video.classList.remove('nohover');
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
    }, { threshold: 0.5 });

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

