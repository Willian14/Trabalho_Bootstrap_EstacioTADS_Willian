


function validacao(){

// Validação do campo nome-------------------------------------------------------------------------------------------------------------------------------------
if(document.getElementById("nomet").value == ""){
		alert("Por favor, preencha o campo nome!");
		document.form1.nomet.focus();
		return false;
}
// Validação do campo Cpf------------------------------------------------------------------------------------------------------------------------------------------------	
if (document.getElementById("cpft").value == ""){
		alert("Preencha o campo CPF");
		document.form1.cpft.focus();
		return false;
}
// Validação do campo cidade-----------------------------------------------------------------------------------------------------------------------------------
if( document.getElementById("cidt").value == ""){
		alert("Por favor, preencha o campo Cidade!")
		document.form1.cidt.focus();
		return false;
}
// Validação do campo sexo-------------------------------------------------------------------------------------------------------------------------------------
if (document.getElementById("sext").selectedIndex == 0){
		alert("Por favor, escolha uma das opções do campo sexo(Masculino/Feminino)");
		document.form1.sext.focus();
		return false;
	}
// Validação do campo e-mail-----------------------------------------------------------------------------------------------------------------------------------	
if (document.getElementById("emailt").value.indexOf('@') == -1 || document.getElementById("emailt").value.indexOf('.') == -1 || document.getElementById("emailt").value ==""){
		alert("Por favor, digite um endereço de e-mail válido!");
		document.form1.emailt.focus();
		return false;
}
// Validação do campo Receber promoções-------------------------------------------------------------------------------------------------------------------------

if (!document.getElementById("ckb1").checked && !document.getElementById("ckb2").checked){
		alert("Por favor, escolha uma das opções no campo: Receber promoções!!!");
		document.form1.ckb1.focus();
		return false;
}
if (document.getElementById("ckb1").checked && document.getElementById("ckb2").checked){
		alert("Não podem ser selecionadas duas opções "+ "\n" + "ao mesmo tempo no campo Receber promoções!!!!" + 
		"Pro favor, desmarque uma das opções.")
	}
// validação do campo senha------------------------------------------------------------------------------------------------------------------------------------
if (document.getElementById("psw").value == ""){
		alert("Por favor, preencha o campo senha!");
		document.form1.psw.focus();
		return false;
	}
if (document.getElementById("psw").value.length < 6){
		alert("O campo senha deve ter no mínimo seis caracteres!!!");
		document.form1.psw.focus();
		return false;
	}

document.getElementById("btnvalores").disabled = false;

};
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// Função de máscara-------------------------------------------------------------------------------------------------------------------------------------------
function mascara(campo_passado,mascara){
		var campo = campo_passado.value.length;
		var saida = mascara.substring(0,1);
		var texto = mascara.substring(campo);
		if (texto.substring(0,1) != saida){
			campo_passado.value += texto.substring(0,1);
		}
	}
// FUNÇÃO CARREGAR DADOS---------------------------------------------------------------------------------------------------------------------------------------
function desabilitaBtnValores(){
	if(document.getElementById("nomet").value == ""){
		document.getElementById("btnvalores").disabled = true;
	}
}

function CarregarDados(){
	
	if (document.getElementById("cpft").value != ""){
		var CPF = document.getElementById("cpft").value;
	}	

	if(document.getElementById("nomet").value != ""){
		var nome = document.getElementById("nomet").value;
	}
	if (document.getElementById("endt").value != ""){
		var endereco = document.getElementById("endt").value;
	}
	if (document.getElementById("cidt").value != ""){
		var cidade = document.getElementById("cidt").value;
	}	
	if (document.getElementById("sext").selectedIndex == 1 ){
		var sexo = document.getElementById("masc").value;
		
	}
	else if (document.getElementById("sext").selectedIndex == 2){
		var sexo = document.getElementById("fem").value;
	}
	else{
		var sexo = null;
	}
	if (document.getElementById("telt").value != ""){
		var telefone = document.getElementById("telt").value;
	}
	if (document.getElementById("emailt").value != ""){
		var email = document.getElementById("emailt").value;
	}
	if(document.getElementById("ckb1").checked){
		var recebepro = document.getElementById("ckb1").value;
	}
	else if ( document.getElementById("ckb2").checked){
		var recebepro = document.getElementById("ckb2").value;
	}
	else{
		var recebepro = null;
	}
	if (document.getElementById("txta").value != ""){
		var texto = document.getElementById("txta").value;
	}else{
		var texto = "nenhuma observação digitada";
	}
	
	alert("CPF: " + CPF + "\n" + "Nome: "+ nome + "\n" + "Endereço: "+ endereco +"\n"+"Cidade: " + cidade + "\n" + "Sexo: " + sexo +"\n" +
        "Telefone: " + telefone + "\n " + "E-mail: " + email + "\n " + "Receber Promoções: " + recebepro + "\n" + "Obs: " + texto);	
}
// FUNÇÃO QUE DISPARA A MENSAGEM NA OPÇÃO SIM DO CAMPO RECEBER PROMOÇÕES---------------------------------------------------------------------------------------
function msgCheck(){
		if (document.form1.ckb1.checked){
		alert("A qualquer momento você poderá cancelar o recebimento dos e-mails\n"+
		" de promoção enviando um e-mail com o assunto STOP MAIL para o endereço"+" "+
		"contato@estacio.br");
		document.getElementById("ckb2").disableExternalCapture;
		document.form1.ckb1.focus();
		
		return true;
    }
}

// FUNÇÃO PARA BLOQUEAR A ENTRADA DE NÚMEROS  E CARACTERES ESPECIAIS NO CAMPO NOME-----------------------------------------------------------------------------------------------------
function soLetras(e){
	var tecla=new Number();
	if(window.event) {
		tecla = e.keyCode;
	}
	else if(e.which) {
		tecla = e.which;
	}
	else {
		return true;
	}
	if((tecla != "0") && (tecla !="8") && (tecla >= "48") && (tecla <= "57")){
		return false;
	}
	else if ((tecla >="58")&&(tecla <="64")|| (tecla >= "91")&&(tecla <="96")){
		return false;
	}
	else if((tecla >= "33") && (tecla <= "47")){
		return false;
	}
	else{
		return true;
	}
	
	
}
// FUNÇÃO PARA ACEITAR APENAS NÚMEROS---------------------------------------------------------------------------------------------------------------------------
function soNumeros(e){
	var tecla=new Number();
	if(window.event) {
		tecla = e.keyCode;
	}
	else if(e.which) {
		tecla = e.which;
	}
	else {
		return true;
	}
	if((tecla <= "47") || ( tecla >="58")){
		return false;
	}
	else{
		return true;
	}
	
	
}


// FUNÇÃO PARA TIRAR ESPAÇO DO CAMPO SENHA---------------------------------------------------------------------------------------------------------------------
function tiraEspacoSenha(e){
	var tecla=new Number();
	if(window.event) {
		tecla = e.keyCode;
	}
	else if(e.which) {
		tecla = e.which;
	}
	else {
		return true;
	}
	if(tecla == 32){
		return false;
	}
	else{
		return true;
	}
	
	
}

