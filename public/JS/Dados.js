
console.log("conected")

//Imagem de Perfil
let profilePicture=document.getElementById("display");
let inputFile=document.getElementById("input-file");
inputFile.onchange=function (){
    profilePicture.src=URL.createObjectURL(inputFile.files[0]);
}
//Codigo comentado era suposto enviar o pedido para mudar a imagem de perfil
// inputFile.onchange = function () {
//     let formData = new FormData();
//
//     formData.append('profilePicture', inputFile.files[0]);
//
//     //Enviar para o servidor
//     fetch('/Routes/atualizaImagemRoute', {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 // Se foi com sucesso, então mudar a imagem
//                 profilePicture.src = URL.createObjectURL(inputFile.files[0]);
//             } else {
//                  // Se não for, então mostrar um erro na consola
//                 console.error('Erro na mudança de imagem de perfil:', data.error);
//             }
//         })
//         .catch(error => {
//             console.error('Erro:', error);
//         });
// };

//POP-UP
let popup = document.getElementById("popup");
let popup2 =document.getElementById('popup2')
function openPopUp(){
    popup.classList.add("open-popup");
}
function openPopUp2(){
    popup2.classList.add("open-popup2");
}
const usernameSelect = document.querySelector("#usernameText");
const EmailSelect = document.querySelector("#emailText");
const PasswordSelect = document.querySelector("#passwordText");
let username = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");


let ButaoSubmeter2 =document.getElementById("Confirmar2");
ButaoSubmeter2.addEventListener("click", function (){
    if(usernameSelect.value === "" || EmailSelect.value=== ""|| PasswordSelect.value === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tente de Novo!",
        });
    }
    else{
        username.placeholder=usernameSelect.value;
        email.placeholder=EmailSelect.value;
        password.placeholder=PasswordSelect.value;
        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Os Dados foram guardados com sucesso!",
            showConfirmButton: false,
            timer: 1500
        });
        popup2.classList.remove("open-popup2");
    }
})
function closePopUp2(){
    let timerInterval2;
    Swal.fire({
        title: "Closing...",
        html: "I will close in <b></b> milliseconds.",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval2 = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval2);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            popup2.classList.remove("open-popup2");
            console.log("I was closed by the timer");
        }
    });
}
function closePopUp(){
    let timerInterval;
    Swal.fire({
        title: "Closing...",
        html: "I will close in <b></b> milliseconds.",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            popup.classList.remove("open-popup");
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}
//Insersão de Coisas relacionadas ao Pais
const PaisesInfo={
    Portugal:{
        Lisboa:["1000","1000-004","1000-008","1000-009","1000-010"],
        Funchal:["9000","9000-006","9000-0014","9000-009","9000-019"],
        Porto:["1405-043","4000-008","4000-012","4000-013","4000-014"],
        Braga: ["4700-001", "4700-002", "4700-003", "4700-004", "4700-005"],
        Coimbra: ["3000-001", "3000-002", "3000-003", "3000-004", "3000-005"],
        Faro: ["8000-001", "8000-002", "8000-003", "8000-004", "8000-005"],
        Aveiro: ["3800-001", "3800-002", "3800-003", "3800-004", "3800-005"],
        Camara_de_Lobos: ["9300-001", "9300-002", "9300-003", "9300-004", "9300-005"],
        Santa_Cruz: ["9100-001", "9100-002", "9100-003", "9100-004", "9100-005"]
        },
    Espanha:{
        Madrid:["28001","28002","28003","28004","28005"],
        Barcelona:["08001","08002","08003","08004","08005"],
        Sevilha:["41001","41002","41003","41004","41005"],
        Valencia:["46001", "46002", "46003", "46004", "46005"],
        Zaragoza: ["50001", "50002", "50003", "50004", "50005"],
        Malaga: ["29001", "29002", "29003", "29004", "29005"],
        Murcia: ["30001", "30002", "30003", "30004", "30005"],
        Palma_de_Mallorca: ["07001", "07002", "07003", "07004", "07005"],
        Bilbao:["48001", "48002", "48003", "48004", "48005"]
        },
    Alemanha:{
        Berlim:["10176","10245","10115","10178","10247"],
        Munique:["80336","80538","80539","80634","80636"],
        Frankfurt:["60311","60316","60318","60320","60322"],
        Hamburgo: ["20095", "20097", "20099", "20144", "20146"],
        Colonia: ["50667", "50668", "50670", "50672", "50674"],
        Stuttgart: ["70173", "70174", "70176", "70178", "70180"],
        Dusseldorf: ["40210", "40211", "40212", "40213", "40215"],
        Dortmund: ["44135", "44137", "44139", "44141", "44143"],
        Essen: ["45127", "45128", "45130", "45131", "45133"]
    },
    Inglaterra:{
        Londres: ["SW1A 1AA", "EC1A 1BB", "NW1W 0RH", "SE1 9TG", "W1A 1HQ"],
        Manchester: ["M1 1AA", "M2 2BB", "M3 3RH", "M4 4TG", "M5 5HQ"],
        Liverpool: ["L1 1AA", "L2 2BB", "L3 3RH", "L4 4TG", "L5 5HQ"],
        Birmingham: ["B1 1AA", "B2 2BB", "B3 3RH", "B4 4TG", "B5 5HQ"],
        Leeds: ["LS1 1AA", "LS2 2BB", "LS3 3RH", "LS4 4TG", "LS5 5HQ"],
        Newcastle: ["NE1 1AA", "NE2 2BB", "NE3 3RH", "NE4 4TG", "NE5 5HQ"],
        Bristol: ["BS1 1AA", "BS2 2BB", "BS3 3RH", "BS4 4TG", "BS5 5HQ"],
        Sheffield: ["S1 1AA", "S2 2BB", "S3 3RH", "S4 4TG", "S5 5HQ"],
        Leicester: ["LE1 1AA", "LE2 2BB", "LE3 3RH", "LE4 4TG", "LE5 5HQ"]
    }
}
window.onload = function() {
    const PaisSelect = document.querySelector("#Pais1");
    const CidadeSelect = document.querySelector("#Cidade1");
    const CodigoSelect = document.querySelector("#Postal1");

    CidadeSelect.disabled = true;
    CodigoSelect.disabled = true;

    CidadeSelect.length = 1;
    CodigoSelect.length = 1;

    for (let pais in PaisesInfo) {
        PaisSelect.options[PaisSelect.options.length] = new Option(pais, pais);
    }

    PaisSelect.onchange = (e) => {
        CidadeSelect.disabled = false;

        CidadeSelect.length = 1;
        CodigoSelect.length = 1;

        for (let cidade in PaisesInfo[e.target.value]) {
            CidadeSelect.options[CidadeSelect.options.length] = new Option(cidade, cidade);
        }
    }

    CidadeSelect.onchange = (e) => {
        CodigoSelect.disabled = false;

        CodigoSelect.length = 1;

        let zips = PaisesInfo[PaisSelect.value][CidadeSelect.value];

        for (let i = 0; i < zips.length; i++) {
            CodigoSelect.options[CodigoSelect.options.length] = new Option(zips[i], zips[i]);
        }
    }
    let Pais = document.getElementById("pais");
    let Cidade = document.getElementById("cidade");
    let Codigo = document.getElementById("postal");
    let ButaoSubmeter =document.getElementById("Confirmar");
    ButaoSubmeter.addEventListener("click", function (){
        if(CidadeSelect.value === "" || PaisSelect.value=== ""|| CodigoSelect.value === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Tente de Novo!",
            });
        }
        else{
            Pais.placeholder=PaisSelect.value;
            Cidade.placeholder=CidadeSelect.value;
            Codigo.placeholder=CodigoSelect.value;
            Swal.fire({
                position: "middle",
                icon: "success",
                title: "Os Dados foram guardados com sucesso!",
                showConfirmButton: false,
                timer: 1500
            });
            popup.classList.remove("open-popup");
        }
    })
};