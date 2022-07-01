# On17 - ReactJS | Aula 02
![image](https://media2.giphy.com/media/D567hs4Dex0GEnAKOY/giphy.gif)

## Recebam minhas boas vindas!

✅ Chamada

✅ Acordos

✅ Apresentação das monitoras

<br>
<br>

______

## Revisão 

| `Conteúdo da aula 01`                     |  |
| --------------------------- | ------------------ |
| O que é e quem usa react?             
| Preparando o ambiente e "Olá, Mundo!"
| Componentes
| Props

<br>
<br>


---

# 🚀 Vambora pra o conteúdo da aula 2?

> ⚠️ Após essa aula você estará preparada com a base conceitual de React e uso de React Hooks.  O objetivo específico da aula é facilitar o entendimento do conceito de estado e introdução ao React Hooks.



| `Conteúdos da aula:`                     |  |
| --------------------------- | ------------------ |
| Estados e eventos            
| Listas e chaves
| React Hooks (useState e useEffect)

<br>
<br>

# 🧠 Visão geral: O que é estado?  
Estado é o super poder que vai renderizar quase que em tempo real, o componente com as informações atualizadas de acordo com a interação da pessoa usuária ou regras que criamos no componente.

Diferente das props, a gente não repassa o estado pra o componente  quando vai utilizá-lo, mas a gente cria o estado dentro do próprio componente usando variaveis que terão seus valores atualizados. 

É importante também saber que o estado não muda, ou seja, ele nunca vai ser alterado, mas vai ser sobreposto a partir do seu estado atual.

Vamos entender melhor, já já, quando formos aprender hooks.

`Acesse a documentação oficial`: [ReactJS](https://pt-br.reactjs.org/)          

<br>

# 😎 Eventos no react

Agora, sabe os eventos de interação das usuárias que a gente usa no javascript? Com react também podemos usar. :) 
Vamos aprender como usar o onChange(para capturar input) e o onClick(para capturar título). 

Mas por quê a gente não vai ver tudo de evento?
 
São muitas possibilidades e não teríamos tempo suficiente. Mas essa aula aqui é uma introdução para que você saiba que tudo isso existe e que você pode e deve continuar estudando. 

Belezinha? <3

## Mão no código:

| Recurso | Descrição |
| --- | --- |
| `onClick` | Mostrando no console o evento de click funcionando! |

| Recurso | Descrição |
| --- | --- |
| `OnChange` | Mostrando no console o valor digitado num formulário!! |

# Listas e Chaves

Mapeando dados no React.

Talvez você esteja se sentindo um pouco confusa e se perguntando quando finalmente vai criar um projetinho inteiro e que faça sentido. Calma!

Dando spoiler, nossa última aula será para a criação de um projeto lindão, mas até lá estou te preparando pra entender os principais conceitos de react que iremos usar.

Agora chegou a vez de entendermos como lidar com listas no React. Imagina que internamente tenhamos um array de objetos de filmes assim:

```
const filmes = [
    {
        id: 1,
        nome: "The Social Dilemma",
        genero: "documentário",
        capa: "https://static.wixstatic.com/media/00d1a3_e8a01dfe8cf0489d8ed6001d1ab6286f~mv2.jpeg/v1/fill/w_1000,h_1500,al_c,q_90,usm_0.66_1.00_0.01/00d1a3_e8a01dfe8cf0489d8ed6001d1ab6286f~mv2.jpeg"

    },
    {
        id: 2,
        nome: "Us",
        genero: "terror",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png"

    },
    {
        id: 3,
        nome: "Bubble Boy",
        genero: "comédia romântica",
        capa: "https://images-na.ssl-images-amazon.com/images/I/51hCG-ULh5L._AC_SY445_.jpg"

    },
    {
        id: 4,
        nome: "Get Out",
        genero: "terror",
        capa: "https://miro.medium.com/max/675/0*afTCZX9mMynUvqi2.jpg"

    }

]

export default filmes
```
Qual seria a melhor forma de pegar esses dados e passar para nosso componente Lista que irá aparecer na nossa tela tipo na netflix, rs. Bem tipo mesmo! haha

```
import filmes from '../Services/dados'

const Lista = () =>{
    return(
        <div>
            {filmes.map(filme => 
                <div>
                    <h1 key={filme.id}>
                        {filme.nome}
                    </h1>
                    <p>
                        {filme.genero}
                    </p>
                    <img alt={filme.nome} src={filme.capa}/>
                </div>
            )
                
            }
        </div>
    )
}

export default Lista
```
## Mão no código:

| Recurso | Descrição |
| --- | --- |
| `Vamos consumir dados internos no react` | Vamos criar uma lista com uns 10 objetos , onde cada um possui quatro propriedades/valores e por fim vamos mapear esses objetos na nossa tela |

# ❤️ React hooks

Em 2018, os hooks chegaram como uma solução para que não precisassemos escrever componentes usando classes.
Nós temos hooks internos, que são algumas funções prontas que podemos usar em nossos projetos de react. E temos também a possibilidade de criar nossos próprios hooks costumizados.

Quando você se deparar por aí com alguma função dentro do react escrita assim, esses são os hooks: useState, useEffect, useMemo, useCallback entre outros.

Hoje, vamos aprender useState e useEffect. Já tô ansiosa para as coisas incríveis que vamos construir juntas.

## State - useState

Lembra o exemplo do perfil do instagram na aula anterior? Eu disse que uma das soluções para se fazer isso é usando props. 

Um complemento seria usando state, que é o super poder passado para o componente para que ele possa lidar com dados e atualizar a tela toda vez que um evento acontecer (com uma pessoa usuária interagindo ou alguma configuração que a gente tenha criado).

Vamos aprender praticando:

1) Antes de tudo você precisa importar de dentro do react o hook useState

```
import { useState } from 'react'
```

2) Dentro do seu componente antes do retorno você destrutura um array que recebe duas informações
 >> uma variável onde vamos guardar nosso valor inicial e suas futuras atualizações
 >> uma função que vai receber a lógica para atualizar a variável

```
const [contador, setContador] = useState(0)
```
> dentro do seu estado inicial podemos passar valores de qualquer tipo de dados em javacript, nesse caso aqui começamos com o número zero, mas poderia ser um array, um objeto, uma string entr outros.

3) Podemos declarar a lógica da nossa função que irá atualizar nossa variável

```
setContador(contador += 1)
```
4) Podemos dizer quando queremos que nossa função atualizadora seja chamada a partir de uma configuração ou de um evento
```
setInterval(
  setContador(contador += 1),
  1000
)
```
ou 

```
function handleClick() {
  setContador(contador += 1)
}
```
5) Usar nosso evento no html do componente

```
<button onClick= {handleClick}>click me</button>
```

6) Chamar o estado no html do
```
<p>{contador}</>
```

**Exemplos:**
| Recurso | Descrição |
| --- | --- |
| `Contador de clicks` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela a quantidade de vezes que um botão está sendo clicado. |

| Recurso | Descrição |
| --- | --- |
| `Contador` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela um contador que soma 1 ou diminui 1 toda vez que o botão for clicado.|

| Recurso | Descrição |
| --- | --- |
| `Relógio` |  Vamos criar um componente que retorna nosso horário local e atualiza automaticamente na tela|

## UseEffect - Consumindo API em React

O useEffect é o hook que nos possibilita gerar efeitos colaterais na tela quando alguma variável modifica. Com um exemplo vai ficar bem melhor de entender. Vamos lá!

1) Antes de tudo você precisa importar de dentro do react o hook useEffect

```
import { useEffect } from 'react'
```

2) Dentro do seu componente antes do retorno chama a função useEffect que recebe dois parametros.
 >> uma arrow function que vai determinar a ação do efeito colateral
 >> um array que recebe as dependências, ou seja as variáveis que determinam quando essas mudanças devem acontecer

```
useEffect(() => {
  setLista()
}, [])
```
> quando esse array aparece vazio, significa que a interface irá receber os efeitos colaterais quando a tela for carregada

> geralmente utilizamos useEffect com useState

**Exemplos:**

| Recurso | Descrição |
| --- | --- |
| `API` |  Chegou o grande momento de consumir uma api externa e renderizar os dados na tela, vamos usar o useEffect e useState para isso. |

| Recurso | Descrição |
| --- | --- |
| `Busca` | Vamos consumir uma api externa, mostrar lista na tela e através de uma busca, vamos mudar o estado apenas mostrando na tela o item digitado. |


### `Entregavel da semana` 
Vamos criar um projetinho react do zero com direito a componetização, uso de props, consumo de API, uso de listas/keys e uso de hooks.

O Projetinho será: "Meu portfólio da reprograma"

1- Banner com o título do projeto

2- Faça uma seção se apresentando.

3- Faça uma seção mostrando seus projetos - Escolha 4 projetos que fez na reprograma crie uma lista de objetos com as informações de id, nome, descrição, conteúdo aprendido com aquele projeto, imagem com print ou gif do projeto, link do github ou link do netlify.

4- Faça uma seção ver todos os repositórios - Consuma a API do github e traga todos os seus projetos mapeando na tela em cards com nome, descrição e link 

5- Faça o footer - com o crédito de autora do projeto

`- Eu fiz o meu, vem aqui entender melhor e se inspirar`: [Meu portfólio da reprograma](https://exemplo-site2.netlify.app/) 

> Passo a passo:
1) Crie um projeto react com vite
2) Apague as informações default
3) Crie componentes para cada seção (Serão 5 conforme acima)
4) Import no App.jsx os componentes criados para montar o seu portfólio, perceba os erros/warnings que o terminal/console mostra, resolva e faça todos os componentes renderizar na tela 
5) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu e usou nesta segunda aula. E suba no classroom.
6) Tente fazer em tempo hábil pra aproveitar a aula de quinta e as monitorias pra tirar dúvidas.
7) Arraseee! E qualquer coisa, me chama!

---

_Foi incrível iniciar essa jornada com você! Qualquer dúvida ou sugestão, chama no contatinho!_

### Vamos nos conectar!

- [youtube](https://www.youtube.com/queroserdev)
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)

<br>
Feito com 💜 por Simara Conceição