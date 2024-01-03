AOS.init();

const dataDoEvento = new Date("Jul 14, 2024 17:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento  = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const MinutoEmMs =  1000 * 60;

    const diasAteOEvento = Math.floor(tempoAteEvento  / diaEmMs);
    const horasAteOEvento =  Math.floor((tempoAteEvento  % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((tempoAteEvento  % horaEmMs) / MinutoEmMs);
    const segundosAteOEvento = Math.floor((tempoAteEvento  % MinutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (tempoAteEvento  < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);