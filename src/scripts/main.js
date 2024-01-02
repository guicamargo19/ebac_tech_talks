AOS.init();

const dataDoEvento = new Date("Jan 2, 2024 16:44:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distaciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distaciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distaciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distaciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distaciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('hero-text').innerHTML = 'O maior evento de tecnologia do Brasil começou!';
        document.getElementById('contador').innerHTML = '';
    }
}, 1000);