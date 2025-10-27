const LIST = [
    {
        id: 1,
        link: 'https://animekowkira.netlify.app/',
        name: 'Projeto: Animes - Rocketseat',
        bio: 'Projeto criado com as aulas da semana do NLW, usando HMTL, CSS e JavaScript.'
    },
    {
        id: 2,
        link: 'https://gera.netlify.app/',
        name: 'Projeto: Show me the Money',
        bio: 'Segundo desafio do Gama Academy, desenvolvimento de uma Landing Page de um evento usando HTML, CSS e JavaScript.'
    },
    {
        id: 3,
        link: 'https://moradiassabara.netlify.app/',
        name: 'Projeto: Transformação Digital',
        bio: 'Realizado a transformação digital da ONG Moradias Sabará, com HTML, CSS e JavaScript.'
    },
    {
        id: 4,
        link: 'https://nlw-kira-1.netlify.app/',
        name: 'Projeto: Beauty Salon - Rocketseat',
        bio: 'Projeto criado com as aulas da semana do NLW, usando HMTL, CSS e JavaScript.'
    }   
]

const AppProjects = new Vue({
    el: '#appProjects',
    data: {
        title: 'Projetos',
        userName: 'Gislaine Oliveira',
        projects: LIST

    }
})