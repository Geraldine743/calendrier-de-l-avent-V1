const quotes = [
    {
      "quote": "La vie est de faire un impact, et non pas faire un revenu.",
      "author": "Kevin Kruse"
    },
    {
      "quote": "Tout ce que l’esprit de l’homme peut concevoir et croire, il peut l’accomplir.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Ne vous efforcez pas de réussir, mais plutôt d'avoir de la valeur.",
      "author": "Albert Einstein"
    },
    {
      "quote": "Deux routes divergeaient dans un bois, et j'ai pris celle la moins fréquentée, et cela a fait toute la différence.",
      "author": "Robert Frost"
    },
    {
      "quote": "J’attribue mon succès à ceci : je n’ai jamais donné ni accepté d’excuse.",
      "author": "Florence Nightingale"
    },
    {
      "quote": "Vous ratez 100 % des tirs que vous ne tentez pas.",
      "author": "Wayne Gretzky"
    },
    {
      "quote": "Le plus difficile est la décision d'agir, le reste n'est qu'une question de ténacité.",
      "author": "Amelia Earhart"
    },
    {
      "quote": "La définition d’un objectif est le point de départ de toute réussite.",
      "author": "W. Clement Stone"
    },
    {
      "quote": "La vie, c’est ce qui vous arrive pendant que vous êtes occupé à faire d’autres projets.",
      "author": "John Lennon"
    },
    {
      "quote": "Nous devenons ce à quoi nous pensons.",
      "author": "Earl Nightingale"
    },
    {
      "quote": "La vie est composée à 10 % de ce qui m’arrive et à 90 % de la façon dont je réagis à cela.",
      "author": "Charles Swindoll"
    },
    {
      "quote": "La façon la plus courante dont les gens renoncent à leur pouvoir est de penser qu’ils n’en ont pas.",
      "author": "Alice Walker"
    },
    {
      "quote": "L'esprit est tout. Ce que vous pensez, vous le devenez.",
      "author": "Buddha"
    },
    {
      "quote": "Votre temps est limité, alors ne le gaspillez pas à vivre la vie de quelqu’un d’autre.",
      "author": "Steve Jobs"
    },
    {
      "quote": "Je ne suis pas le produit des circonstances, mais celui de mes décisions.",
      "author": "Stephen Covey"
    },
    {
      "quote": "Chaque enfant est un artiste. Le problème est de savoir comment le rester une fois adulte.",
      "author": "Pablo Picasso"
    },
    {
      "quote": "Tout ce que vous pouvez faire, ou rêvez de faire, entreprenez-le. L'audace est porteuse de génie, de puissance et de magie. ",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "quote": "La vie se rétrécit ou s’étend en proportion du courage de chacun.",
      "author": "Anais Nin"
    },
    {
      "quote": "La seule personne que vous êtes destiné à devenir est la personne que vous décidez d’être.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "quote": "Avancez avec confiance vers vos rêves. Vivez la vie que vous avez imaginée.",
      "author": "Henry David Thoreau"
    },
    {
      "quote": "Certaines choses attirent votre regard, mais ne recherchez que celles qui capturent le cœur.",
      "author": " Ancient Indian Proverb"
    },
    {
      "quote": "Croyez que vous pouvez y arriver et vous y êtes déjà à mi-chemin.",
      "author": "Theodore Roosevelt"
    },
    {
      "quote": "Commencez là où vous êtes. Utilisez ce que vous avez. Faites ce que vous pouvez.",
      "author": "Arthur Ashe"
    },
    {
      "quote": "Tombez sept fois et relevez-vous huit fois",
      "author": "Japanese Proverb"
    },
    {
      "quote": "Quand je lâche prise sur ce que je suis, je deviens ce que je pourrais être.",
      "author": "Lao Tzu"
    },
    {
      "quote": "La vie ne se mesure pas au nombre de respirations que nous prenons, mais aux moments qui nous coupent le souffle.",
      "author": "Maya Angelou"
    },
    {
      "quote": "Le bonheur n'est pas quelque chose d'immédiat. Il vient de vos propres actions.",
      "author": "Dalai Lama"
    },
    {
      "quote": "Trop d’entre nous ne vivent pas leurs rêves parce qu’ils vivent leurs peurs.",
      "author": "Les Brown"
    },
    {
      "quote": "Les limites ne vivent que dans notre esprit. Mais si nous utilisons notre imagination, nos possibilités deviennent illimitées.",
      "author": "Jamie Paolinetti"
    },
    {
      "quote": "Pour réussir, votre désir de réussite doit être plus grand que votre peur de l’échec.",
      "author": "Bill Cosby"
    },
    {
      "quote": "Une personne qui n’a jamais fait d’erreur n’a jamais rien essayé de nouveau.",
      "author": " Albert Einstein"
    },
    {
      "quote": "La personne qui dit que c'est impossible ne doit pas interrompre la personne qui le fait..",
      "author": "Chinese Proverb"
    },
    {
      "quote": "Il n’est jamais trop tard pour être ce que vous auriez pu être.",
      "author": "George Eliot"
    },
    {
      "quote": "Vous devenez ce que vous croyez.",
      "author": "Oprah Winfrey"
    },
    {
      "quote": "Je préférerais mourir de passion que d'ennui.",
      "author": "Vincent van Gogh"
    },
    {
      "quote":  "Construisez vos propres rêves, ou quelqu'un d'autre vous embauchera pour construire les siens.",
      "author": "Farrah Gray"
    },
    {
      "quote": "Peu importe la lenteur avec laquelle vous roulez, tant que vous ne vous arrêtez pas.",
      "author": "Confucius"
    },
    {
      "quote": "N’oubliez pas que ne pas obtenir ce que vous voulez est parfois un merveilleux coup de chance.",
      "author": "Dalai Lama"
    },
    {
      "quote": "On ne peut pas épuiser sa créativité. Plus on l'utilise, plus on en a.",
      "author": "Maya Angelou"
    },
    {
      "quote": "Rêvez grand et osez échouer.",
      "author": "Norman Vaughan"
    },
    {
      "quote": "Nos vies commencent là où se terminer le jour où nous devenons silencieux sur des choses qui comptent.",
      "author": "Martin Luther King Jr."
    },
    {
      "quote": "Faites ce que vous pouvez, là où vous êtes, avec ce que vous avez.",
      "author": "Teddy Roosevelt"
    },
    {
      "quote": "Si vous faites ce que vous avez toujours fait, vous obtiendrez ce que vous avez toujours obtenu.",
      "author": "Tony Robbins"
    },
    {
      "quote": "Vous pourriez être déçu si vous échouez, mais vous êtes condamné si vous n’essayez pas.",
      "author": "Beverly Sills"
    },
    {
      "quote": "N’oubliez pas que personne ne peut vous faire sentir inférieur sans votre consentement.",
      "author": "Eleanor Roosevelt"
    },

  ]
  
  export default quotes