//"efeito de esconder formulário de cadastro"

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){
    console.log("test")

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide( );
            
});

});