const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelector('.pokemon-card')

listaSelecaoPokemons.forEach(pokemon =>{

    pokemon.addEventListener('click',() =>{

        //pegando a class OPEN 
        const cartaoPokemonAberto = document.querySelector('.open')
        
        // Removendo a class OPEN
        cartaoPokemonAberto.classList.remove('open')


            // pegando o ID do pokemon
        const idPokemonSelecionado = pokemon.attributes.id.value

        // pegando  a variavel que pega os valores dos ID e junto com os card
        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        //fazendo o efeito de cor na  troca de pokemon de acordo com o selecione
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add('ativo')

    })
})