

function main() {
  // argumentos de la línea de comandos (excepto el primer argumento, que es el nombre del script)
  const args = process.argv.slice(2);

  // Verifica si se proporcionaron argumentos
  if (args.length === 0) {
    console.log("Proporciona un JSON como argumento.");
    return;
  }

  // El primer argumento es tratado como el JSON
  const jsonString = args[0];

  try {
    // analizar el JSON
    const data = JSON.parse(jsonString);

    // Imprime el contenido del JSON
    console.log("Contenido del JSON:");
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.log(e.message);
  }
};

main()
