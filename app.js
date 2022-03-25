
let horaComienzo = parseInt(process.argv[2])
let minutosComienzo = parseInt(process.argv[3])
let duracion = parseInt(process.argv[4])

const main = (hora, minutos, duracion) => {
  let h = Math.floor(duracion / 60);
  let m = duracion % 60;

  let minutosTotales = minutos + m
  let minutosFinalizacion = minutosTotales % 60;
  let horaFinalizacion = (hora + h) % 24;
  minutosTotales >= 60 ? horaFinalizacion = horaFinalizacion + 1 : '';

  console.log(`${hora}:${minutos} -> ${horaFinalizacion}:${minutosFinalizacion}`);
}

main(horaComienzo,minutosComienzo,duracion)