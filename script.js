document.getElementById('formEndereco').addEventListener('submit',async(event)=>{
    event.preventDefault();

    const rua = document.getElementById('rua').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;

    const adressData ={
        rua,
        cidade,
        estado,
        cep
    };

    try{
        const response = await fetch('http://localhost:3000/api/enderecos',{
            method: 'POST',
            headers: {
                'Contend-Type': 'application/jason'
            },
            body: JSON.stringify(adressData)
        });

        const result = await response.json();

        if (response.ok){
            document.getElementById('message').innerText = 'Endereço enviado com sucesso.';
            document.getElementById('formEndereco').requestFullscreen();

        }else{
            document.getElementById('message').innerText = 'Erro: ${result.message}';

        }

    }catch (erro){
        document.getElementById('message').innerText = 'Erro na comunicaco com o servidor ';
    }

});