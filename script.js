const container =  document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue){
        alert('Insira o link para gerar o QR code.')
        return;
    }
   generateBtn.innertext = "Gerando um QR code...";
   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
   qrImg.addEventListener('load', () => {
        generateBtn.innertext = "Gerar QR code";
        container.classList.add('active');
   });
});

qrInput.addEventListener('Keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    };
})