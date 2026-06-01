// Dados dos 10 carros para montagem
const bancoCarros = [
    { nome: "Esportivo Clássico", desc: "Foco em alta rotação, aerodinâmica refinada e tração traseira pura.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600" },
    { nome: "Superesportivo Moderno", desc: "Tecnologia de ponta, motor central-traseiro e controle eletrônico de tração.", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600" },
    { nome: "Muscle Car Americano", desc: "Muita força bruta em linha reta, motor V8 dianteiro tradicional e ronco agressivo.", img: "https://images.unsplash.com/photo-1611245801314-e0a5db91f805?w=600" },
    { nome: "Off-Road 4x4", desc: "Suspensão elevada, tração integral e chassi reforçado para aguentar qualquer terreno.", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600" },
    { nome: "Sedan de Luxo", desc: "Isolamento acústico premium, muito conforto interno e suavidade ao rodar.", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600" },
    { nome: "Hatch Hot Custom", desc: "Traseira curta, tração dianteira arisca e excelente agilidade em curvas fechadas.", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600" },
    { nome: "Carro de Corrida / F1", desc: "Downforce extrema, cockpit de fibra de carbono feito sob medida para pistas.", img: "https://images.unsplash.com/photo-1562591176-a29e41d1396b?w=600" },
    { nome: "SUV Elétrico", desc: "Baterias pesadas no assoalho baixando o centro de gravidade e torque instantâneo.", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600" },
    { nome: "JDM Tuning", desc: "Plataforma altamente modificável, motores turbo icônicos e cultura de rua.", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600" },
    { nome: "Hipercarro Conceito", desc: "Aerodinâmica ativa, propulsão híbrida e materiais aeroespaciais inovadores.", img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=600" }
];

// Mais fotos para a aba de Galeria
const fotosGaleria = [
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600"
];

// Alternar entre as Abas
function abrirAba(evt, nomeAba) {
    let i, conteudo, ababotoes;
    
    conteudo = document.getElementsByClassName("aba-conteudo");
    for (i = 0; i < conteudo.length; i++) {
        conteudo[i].classList.remove("active");
    }

    ababotoes = document.getElementsByClassName("aba-btn");
    for (i = 0; i < ababotoes.length; i++) {
        ababotoes[i].classList.remove("active");
    }

    document.getElementById(nomeAba).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Atualizar imagem e dados do carro selecionado na aba 1
function atualizarCarro() {
    const id = document.getElementById("select-carro").value;
    document.getElementById("carro-img").src = bancoCarros[id].img;
    document.getElementById("carro-descricao").innerText = bancoCarros[id].desc;
}

// Mostrar resumo da montagem das peças escolhidas na aba 1
function resumoMontagem() {
    const id = document.getElementById("select-carro").value;
    const carroNome = bancoCarros[id].nome;
    const motor = document.getElementById("motor").value;
    const chassi = document.getElementById("chassi").value;
    const pneus = document.getElementById("pneus").value;

    const divResultado = document.getElementById("resultado-construcao");
    divResultado.style.display = "block";
    divResultado.innerHTML = `
        <strong>Projeto Finalizado!</strong><br><br>
        Você construiu um <b>${carroNome}</b> com as seguintes peças:<br>
        <ul style="margin-left: 20px; margin-top: 10px;">
            <li>⚙️ <b>Motor:</b> ${motor}</li>
            <li>🏗️ <b>Chassi:</b> ${chassi}</li>
            <li>🛞 <b>Rodas:</b> ${pneus}</li>
        </ul>
    `;
}

// Carregar fotos na Galeria dinamicamente
function carregarGaleria() {
    const container = document.getElementById("container-galeria");
    
    // Adiciona as fotos extras da galeria
    fotosGaleria.forEach(url => {
        let img = document.createElement("img");
        img.src = url;
        img.alt = "Foto de Carro";
        container.appendChild(img);
    });

    // Adiciona as fotos dos 10 carros principais também para encher a galeria
    bancoCarros.forEach(carro => {
        let img = document.createElement("img");
        img.src = carro.img;
        img.alt = carro.nome;
        container.appendChild(img);
    });
}

// Inicia a galeria assim que a página carregar
window.onload = carregarGaleria;