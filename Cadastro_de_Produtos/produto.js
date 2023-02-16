var Produto = function() {
    this.id;
    this.nome;
    this.preco;

    this.salvar = function(){
        this.id = (Produto.dados.length +1)
        Produto.dados.push(this);
    }
}

Produto.dados = [];

Produto.qtdMenoresQue50 = function (){
    var qtd = 0;
    for (i=0; i< Produto.dados.length; i++){
        var p = Produto.dados[i];
        if(parseFloat(p.preco) < 50) {
            qtd++
        }
    }

    return qtd;
}

Produto.nomeProdutosEntre50e100 = function(){
    var nome=[];
    for(i=0; i<Produto.dados.length; i++){
        var p = Produto.dados[i];
        if(parseFloat(p.preco) >=50 && (p.preco)<= 100){
            nome.push(p.nome);
        }

    }
    return nome.join(", ");

}

Produto.mediaPrecoAcimaDe100 = function(){
    var somaSuperior100 = 0;
    var qtdSuperior100 = 0;
    for(i=0; i< Produto.dados.length; i++){
        var p = Produto.dados[i];
        if(parseFloat(p.preco)> 100){
            somaSuperior100 += parseFloat(p.preco);
            qtdSuperior100++;
        }
        
    }
    var media = somaSuperior100 / qtdSuperior100;
    return media;
}
