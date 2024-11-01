import { MovieDTO } from "./MovieDTO";

const movies = [
    {
        "id": 1,
        "title": "Duro de Matar",
        "genre": "Ação",
        "year": 1988,
        "description": "O policial John McClane tenta salvar reféns em um prédio tomado por terroristas."
    },
    {
        "id": 2,
        "title": "Mad Max: Estrada da Fúria",
        "genre": "Ação",
        "year": 2015,
        "description": "Em um deserto pós-apocalíptico, Max ajuda uma guerreira rebelde e um grupo de mulheres a escapar de um tirano."
    },
    {
        "id": 3,
        "title": "John Wick",
        "genre": "Ação",
        "year": 2014,
        "description": "Após perder sua esposa, um assassino aposentado volta à ativa para vingar seu cachorro morto."
    },
    {
        "id": 4,
        "title": "Velozes e Furiosos",
        "genre": "Ação",
        "year": 2001,
        "description": "Policial disfarçado se infiltra em gangues de corrida de rua para investigar roubos de carga."
    },
    {
        "id": 5,
        "title": "Gladiador",
        "genre": "Ação",
        "year": 2000,
        "description": "Um general romano é traído e se torna gladiador em busca de vingança contra o imperador."
    },
    {
        "id": 6,
        "title": "Indiana Jones e os Caçadores da Arca Perdida",
        "genre": "Aventura",
        "year": 1981,
        "description": "O arqueólogo Indiana Jones busca a Arca da Aliança antes dos nazistas."
    },
    {
        "id": 7,
        "title": "Jumanji",
        "genre": "Aventura",
        "year": 1995,
        "description": "Dois irmãos descobrem um jogo de tabuleiro mágico que libera criaturas perigosas."
    },
    {
        "id": 8,
        "title": "Piratas do Caribe: A Maldição do Pérola Negra",
        "genre": "Aventura",
        "year": 2003,
        "description": "O capitão Jack Sparrow luta contra piratas amaldiçoados para recuperar seu navio."
    },
    {
        "id": 9,
        "title": "Jurassic Park",
        "genre": "Aventura",
        "year": 1993,
        "description": "Um parque de dinossauros geneticamente recriados se torna um perigo quando as criaturas escapam."
    },
    {
        "id": 10,
        "title": "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
        "genre": "Aventura",
        "year": 2005,
        "description": "Quatro crianças descobrem o mundo mágico de Nárnia e ajudam a derrotar uma feiticeira."
    },
    {
        "id": 11,
        "title": "O Âncora: A Lenda de Ron Burgundy",
        "genre": "Comédia",
        "year": 2004,
        "description": "A vida de um âncora de TV é abalada quando uma jornalista tenta se estabelecer no mundo dominado por homens."
    },
    {
        "id": 12,
        "title": "Se Beber, Não Case!",
        "genre": "Comédia",
        "year": 2009,
        "description": "Três amigos perdem o noivo durante uma despedida de solteiro em Las Vegas e tentam encontrá-lo."
    },
    {
        "id": 13,
        "title": "As Branquelas",
        "genre": "Comédia",
        "year": 2004,
        "description": "Dois agentes disfarçados assumem a identidade de duas socialites para proteger testemunhas de um crime."
    },
    {
        "id": 14,
        "title": "Todo Poderoso",
        "genre": "Comédia",
        "year": 2003,
        "description": "Um homem recebe poderes divinos temporários e descobre as dificuldades de ser Deus."
    },
    {
        "id": 15,
        "title": "Escola de Rock",
        "genre": "Comédia",
        "year": 2003,
        "description": "Um músico fracassado se passa por professor substituto e forma uma banda com seus alunos."
    },
    {
        "id": 16,
        "title": "O Poderoso Chefão",
        "genre": "Drama",
        "year": 1972,
        "description": "A história da família Corleone, uma das mais poderosas famílias mafiosas dos EUA."
    },
    {
        "id": 17,
        "title": "Um Sonho de Liberdade",
        "genre": "Drama",
        "year": 1994,
        "description": "Dois homens se tornam amigos na prisão e encontram redenção através de atos de decência."
    },
    {
        "id": 18,
        "title": "Forrest Gump",
        "genre": "Drama",
        "year": 1994,
        "description": "A vida extraordinária de um homem simples que testemunha eventos históricos."
    },
    {
        "id": 19,
        "title": "Clube da Luta",
        "genre": "Drama",
        "year": 1999,
        "description": "Dois homens criam um clube de luta clandestino como forma de escapismo."
    },
    {
        "id": 20,
        "title": "A Lista de Schindler",
        "genre": "Drama",
        "year": 1993,
        "description": "A história de um empresário alemão que salva judeus durante o Holocausto."
    },
    {
        "id": 21,
        "title": "Interestelar",
        "genre": "Ficção Científica",
        "year": 2014,
        "description": "Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade."
    },
    {
        "id": 22,
        "title": "Matrix",
        "genre": "Ficção Científica",
        "year": 1999,
        "description": "Um programador descobre que vive em uma realidade simulada e se junta a um grupo de rebeldes para lutar."
    },
    {
        "id": 23,
        "title": "Blade Runner: O Caçador de Androides",
        "genre": "Ficção Científica",
        "year": 1982,
        "description": "Um detetive caçador de andróides precisa rastrear e eliminar replicantes fugitivos."
    },
    {
        "id": 24,
        "title": "De Volta para o Futuro",
        "genre": "Ficção Científica",
        "year": 1985,
        "description": "Um adolescente viaja acidentalmente para o passado e interfere na história de seus pais."
    },
    {
        "id": 25,
        "title": "A Chegada",
        "genre": "Ficção Científica",
        "year": 2016,
        "description": "Linguista tenta se comunicar com alienígenas para entender suas intenções na Terra."
    },
    {
        "id": 26,
        "title": "Diário de uma Paixão",
        "genre": "Romance",
        "year": 2004,
        "description": "Um casal de diferentes classes sociais enfrenta desafios para manter seu amor."
    },
    {
        "id": 27,
        "title": "Orgulho e Preconceito",
        "genre": "Romance",
        "year": 2005,
        "description": "Elizabeth Bennet enfrenta preconceitos e descobre o verdadeiro caráter de Mr. Darcy."
    },
    {
        "id": 28,
        "title": "Cidade dos Anjos",
        "genre": "Romance",
        "year": 1998,
        "description": "Um anjo se apaixona por uma médica humana e questiona sua imortalidade."
    },
    {
        "id": 29,
        "title": "Titanic",
        "genre": "Romance",
        "year": 1997,
        "description": "Romance entre uma jovem rica e um artista a bordo do Titanic."
    },
    {
        "id": 30,
        "title": "Querido John",
        "genre": "Romance",
        "year": 2010,
        "description": "Um soldado e uma jovem trocam cartas e enfrentam a distância em seu relacionamento."
    },
    {
        "id": 31,
        "title": "Os Outros",
        "genre": "Suspense",
        "year": 2001,
        "description": "Uma mãe e seus filhos vivem isolados em uma casa com regras estritas, temendo fantasmas."
    },
    {
        "id": 32,
        "title": "Garota Exemplar",
        "genre": "Suspense",
        "year": 2014,
        "description": "Um homem se torna suspeito do desaparecimento de sua esposa em meio a mistérios."
    },
    {
        "id": 33,
        "title": "Ilha do Medo",
        "genre": "Suspense",
        "year": 2010,
        "description": "Dois agentes investigam o desaparecimento de uma paciente em um hospital psiquiátrico."
    },
    {
        "id": 34,
        "title": "O Sexto Sentido",
        "genre": "Suspense",
        "year": 1999,
        "description": "Um psicólogo tenta ajudar um menino que vê espíritos de pessoas mortas."
    },
    {
        "id": 35,
        "title": "Prenda-me se For Capaz",
        "genre": "Suspense",
        "year": 2002,
        "description": "Um agente do FBI persegue um jovem e brilhante vigarista."
    },
    {
        "id": 36,
        "title": "Invocação do Mal",
        "genre": "Terror",
        "year": 2013,
        "description": "Investigadores paranormais ajudam uma família a enfrentar uma entidade demoníaca."
    },
    {
        "id": 37,
        "title": "O Iluminado",
        "genre": "Terror",
        "year": 1980,
        "description": "Um homem se torna violento enquanto cuida de um hotel isolado com sua família."
    },
    {
        "id": 38,
        "title": "A Bruxa",
        "genre": "Terror",
        "year": 2015,
        "description": "Uma família enfrenta forças sinistras ao se isolar em uma floresta no século XVII."
    },
    {
        "id": 39,
        "title": "Hereditário",
        "genre": "Terror",
        "year": 2018,
        "description": "Uma família é atormentada por eventos perturbadores após a morte da matriarca."
    },
    {
        "id": 40,
        "title": "It: A Coisa",
        "genre": "Terror",
        "year": 2017,
        "description": "Crianças enfrentam uma entidade que assume a forma de um palhaço assustador."
    },
    {
        "id": 41,
        "title": "A Marcha dos Pinguins",
        "genre": "Documentário",
        "year": 2005,
        "description": "Documentário sobre a jornada de pinguins-imperadores para se reproduzirem na Antártida."
    },
    {
        "id": 42,
        "title": "O Dilema das Redes",
        "genre": "Documentário",
        "year": 2020,
        "description": "Exploração do impacto das redes sociais na sociedade moderna e na saúde mental."
    },
    {
        "id": 43,
        "title": "Na Natureza Selvagem",
        "genre": "Documentário",
        "year": 2007,
        "description": "A história de um jovem que abandona a vida comum e busca a liberdade na natureza."
    },
    {
        "id": 44,
        "title": "Eu Não Sou Seu Negro",
        "genre": "Documentário",
        "year": 2016,
        "description": "Exploração do racismo nos EUA através das palavras de James Baldwin."
    },
    {
        "id": 45,
        "title": "Amy",
        "genre": "Documentário",
        "year": 2015,
        "description": "A vida e carreira da cantora Amy Winehouse e sua trágica luta contra vícios."
    }
]

    
export function moviesGetAll(): MovieDTO[] {
    return movies;
}