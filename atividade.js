function escreva(frase) {
    document.write(frase);
}
function pulalinha() {
    document.write("<p></p>")

}
function calculoIdade(idade) {
    if (idade <= 17) {
        return "ADOLESCENTE";
    }
    if (idade >= 18 && idade <= 29) {
        return "JOVEM"
    }
    if (idade >= 30 && idade <= 59) {
        return "ADULTO"
    }
    if (idade >= 60) {
        return "IDOSO"
    }

}

var ano = parseInt(prompt("Digite seu ano atual:"))


escreva("<h1> << COMEX >> </h1>")
escreva("<hr>")
pulalinha()

escreva("<h3>:: Lista de clientes </h3")
escreva("<hr>")

var Raysa = (ano - 2006);
escreva("<h3> - Código: 1 </h3>")
pulalinha()
escreva("Nome : Raysa ")
pulalinha()
escreva("Mês de nascimento: fevereiro ")
pulalinha()
escreva("Ano de nascimento: 2006")
pulalinha()
escreva("Caracteristica Etária :" + calculoIdade(Raysa))
escreva("<hr>")
escreva("<h3> - Código: 2 </h3>")
pulalinha()

var jordir = (ano - 2000)
escreva("Nome : Jordir ")
pulalinha()
escreva("Mês de nascimento: Maio ")
pulalinha()
escreva("Ano de nascimento: 2000")
pulalinha()
escreva("Caracteristica Etária : " + calculoIdade(jordir))
escreva("<hr>")
escreva("<h3> - Código: 3 </h3>")
pulalinha()

var Marcos = (ano - 1950)
escreva("Nome : Marcos ")
pulalinha()
escreva("Mês de nascimento: Novembro")
pulalinha()
escreva("Ano de nascimento: 1950")
pulalinha()
escreva("Caracteristica Etária :  " + calculoIdade(Marcos))
escreva("<hr>")


