$(document).ready(function(){
    console.log($('header button'))
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault()
        const enderecoNovaImagem = $('#url-imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src='${enderecoNovaImagem}' />`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" tittle="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(500);
        $('#url-imagem').val('')
    })
})

