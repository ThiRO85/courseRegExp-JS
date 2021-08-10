const texto = `
Lista telefônica:
    - (21) 12345-6789
    - (11) 98765-4321
    - 5678-4321
    - (85)3434-5656
    - (1) 4321-7890
    `;

    console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g));