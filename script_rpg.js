const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}


function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
{
    id:1,
    text:'tu zones dans ta rue, une 8.6 tiède à la main, la vie est belle, tu écoutes le dernier PNL, quand soudain... Au tournant de la rue, tu vois apparaître un sompteux scooter chromé, et un male ALPHA.  \n *WESH ALORS C JU-JU-JUL*',
    options:[
        {
            text:'WESH ALORS LE SANG',
            nextText:100
        },
        {
            text:'Bonjour Monsieur ?',
            nextText:2
        }
    ]
},
{
    id:2,
    text:'*Wsh cousin.e tu voudrais m’aider ?? je dois ramener mon scoot mais j’ai la twingo à ramener aussi, je te paye la chicha TKT bro si tu m’aide*',
    options:[
        {
            text:'Désolée mais c’est muerte, j’ai pas le permis B bro',
            nextText:3
        },
        {
            text:'Vazy GO frere je peux essayer le scoot après ??',
            nextText:4
        }
    ]
},
{
    id:3,
    text:'*ah bah TKT je vais demander a qqun d’autre..* Et il s’en alla sur les route de France, son sac à go pour oublier, 10 ans plus tard, en regardant M6 tu repense à ce qui aurait pu arriver... Maintenant Jul est artiste du millénaire et dire que tu aurais pu être avec lui, dans votre bus de tournée... \n FIN',
    options:[
        {
            text:'RECOMMENCER ?',
            nextText:1
        },
    ]
},
{
    id:4,
    text:'*PTN MERCÉ TU ME SAUVES LA LIFE* \n Tu chille dans la twingo, Skyrock braille et tu fais semblant de ne pas trouver l’interview de Big Flo et Oli par Difool et Romano super drôle. La circulation est tranquille dans le centre-ville de Marseille...',
    options:[
        {
            text:'SUIVANT',
            nextText:5
        }
    ]
},
{
    id:5,
    text:'QUAND TOUT A COUP \n D’un buisson surgi Orelsan \n *J’AVAIS UN PETIT DIABLE SUR MON EPAULE MAINTENANT G TA TETE SUR MON EPAULE UwU* \n Orelsan te bloque la route, tu dois prendre une décision et vite !',
    options:[
        {
            text:'Tu fonces vers lui en driftant, tu es tellement un génie de la conduite \n que tu fais une roue arrière',
            nextText:6
        },
        {
            text:'Tu piles, effayé.e, tu as peur de lui et tu ne voudrais pas abimer la twingo quand meme !',
            nextText:7
        },
    ]
},
{
    id:6,
    text:'Dans tout ton génie, ta conduite est si souple, sportive et kaarismatique \n que Orelsan saute dans le caniveau ! \n Jul, qui te regardait dans son rétroviseur est très impressionné',
    options:[
        {
            text:'SUIVANT',
            nextText:8
        }
    ]
},
{
    id:7,
    text:'Malheureusement, comme la plupart des gens ne respectent pas les distances de sécurité, \n une voiture fonce dans ta twingo car tu as pilé... Orelsan est surpris par le bruit et fuit la scène ! \n Jul, qui te regardait dans son rétroviseur est déçu de tes capacités derrière le volant',
    options:[
        {
            text:'SUIVANT',
            nextText:8
        }
    ]
},
{
    id:8,
    text:'Le trajet continue tranquillement \n étonnement, Jul ne roule pas si vite que ça avec son scooter débridé et la twingo n’est clairement pas débridée...\n Jul met son clignotant à droite, en face d’un immeuble dorée avec une tête d’alien sur la façade. ça doit être le studio ? \n Il est temps de se garer ',
    options:[
        {
            text:' Tu fais le plus beau créneau que tu as jamais fais de ta vie et te gare devant l’immeuble.',
            nextText:10
        },
        {
            text:' Tu ne peux pas te contenir, elle est vraiment bien cette voiture. Tu appuie sur l’accélerateur et vole la caisse, Adios Jul !',
            nextText:9
        }
    ]
},
{
    id:9,
    text:'*PTN JE V TE RETROUVER CHIEN DE LA CASSE* \n Tu es maintenant le propriétaire d’une twingo JUL, c’est un peu stylé, toi et ton bolide partez dans le soleil couchant...\n FIN',
    options:[
        {
            text:'RECOMMENCER ?',
            nextText:1
        }
    ]
},
{
    id:10,
    text:'*T’AS VU TROP STYLÉ MON STUDIO ??!* \n En effet, il est plutôt chan-max, outre l’alien, les disques d’or et de platine sont accrochés en plein centre du hall. Plus loin quand vous entrez dans le studio principal, tu es accueilli par 4 mecs sur un canap’ avec 5 chichas',
    options:[
        {
            text:'SUIVANT',
            nextText:11
        }
    ]
},
{
    id:11,
    text:'Tu chilles avec tes nouveaux bros depuis déjà un bout de temps, dehors il fait nuit. Tu entends qqun arriver dans le couloir, la porte s’ouvre. \n AYA NAKAMURA viens d’entrer !!! *Wesh alors Jul, tjrs chaud pr un feat ??*',
    options:[
        {
            text:'SUIVANT',
            nextText:12
        }
    ]
},
{
    id:12,
    text:'Pdt que Jul et Aya discutent de leur nouveau son, tu fais connaissance. \n Alors que la fin de la soirée thé/chicha improvisée touche à sa fin tu hésites à tenter ta chance',
    options:[
        {
            text:'CHAFFER AYA',
            nextText:13
        },
        {
            text:'CHAFFER JUL',
            setState:{ Accept: true, Interet: true, Mepris: false } ,
            nextText:16
        },
        {
            text:'FINIR TON THÉ',
            setState:{ Accept: true, Mepris: false } ,
            nextText:17
        },
    ]
},
{
    id:13,
    text:'Tu prends ton courage à deux mains : pour la séduire tu lui dis ',
    options:[
        {
            text:'TU POURRAIS ÊTRE LA PLUS BONNE DE MES COPINES ;)',
            nextText:14
        },
        {
            text:'EH MADMOISELLE T CHARMANTE ??',
            setState: { Mepris: true, Accept: false },
            nextText:15
        
        },
        {
            text:'Finalement, tu n’oses rien dire ',
            setState: { Accept: true, Mepris: false },
            nextText:17
        }
    ]
},
{
    id:14,
    text:'Certes, ta punchline était un peu nulle. Néanmoins, Aya à trouvé ça drôle ! Tu as calé l’affaire et bombé le torse ah ouais. \n Elle te ressort cette punchline à chaque fois que tu la retrouve dans les backstages, et ce pour les années à venir \n FIN :)',
    options:[
        {
            text:'RECOMMENCER',
            nextText:1
        }
    ]
},
{
    id:15,
    text:' *J’suis pas ta catin Djadja nan, Y’a pas moyen* \n Clairement, tes techniques ne sont pas au point… Jul et Aya te regardent d’un air méprisant',
    options:[
        {
            text:'SUIVANT',
            nextText:17
        }
    ]
},
{
    id:16,
    text:' *Jul a l’air flatté . Tu l’entends murmurer *y’a ce gros boule dans la cuisine, je suis sous résine j’hallucine*',
    options:[
        {
            text:'SUIVANT',
            nextText:17
        }
    ]
},
{
    id:17,
    text:'*GO GROSSE SOIRÉE, DANS L’CARRÉ VIP EN SURVET’* annonce Jul, qui commence a être gêné par l’ambiance. Tout le monde met sa plus belle doudoune, pas de pacotille, chemise ouverte, chaîne en or qui brille',
    options:[
        {
            text:'SUIVANT',
            nextText:18
        }
    ]
},
{
    id:18,
    text:'T’arrives sur la piste genre en moonwalk, tu es suffisamment dans un sale état pour que ça te paraisse une bonne idée. Maître Gims vient d’arriver avec SCH dans le carré vip et ils discutent avec Jul (est tu étonné.e à ce stade ?). Le DJ, qui ressemble à quelqu’un que tu as vu dans une émission de TV réalité, met du Jason Derulo. *SHOGUN TONIIIIIIIGHT*',
    options:[
        {
            text:'SUIVANT',
            nextText:19
        }
    ]
},
{
    id:19,
    text:'Gims, qui devait s’ennuyer avec Jul et les autres, t’aborde : *Je vais te faire vivre un dream, ça te dit une battle de dance ?? ',
    options:[
        {
            text:'Tu refuses, même fortement alcoolisé, tu n’as jamais été fan de danse',
            nextText:24
        },
        {
            text:'CARREMENT tu te lance dans ta routine habituelle, entre la danse Fortnite et les chorés de TikTokeur',
            nextText:20
        },
        {
            text:'CARREMENT, tu enchaîne signe de Jul, “twerk” et battre des bras comme un.e zouz sous MD',
            nextText:20
        }
    ]
},
{
    id:20,
    text:'Gims a l’air subjugué, pour en finir une bonne fois pour toute',
    options:[
        {
            text:'Tu tentes un porté Dirty Dancing avec lui',
            nextText:21
        },
        {
            text:'Tu refais un signe de Jul',
            nextText:22
        },
        {
            text:'Tu fais du breakdance',
            nextText:23
        },
        {
            text:'TU REFAIS UN SIGNE DE JUL',
            nextText:22
        }
    ]
},
{
    id:21,
    text:'Evidement, malgré tes muscle saillants et ta motivation, tu fais tomber Gims. Celui-ci s’exclame *ENTRE NOUS C MORT* Le videur te tèj’ dehors, tu as quand même fais tomber un de ses meilleurs clients et en plus tu as cassé ses lunettes de soleil \n Tu ne regrette pas cette soirée, tu auras vu Gims sans lunettes, fumé la chicha avec Jul et Aya Nakamura et conduit une Twingo. C qd même stylé \n FIN',
    options:[
        {
            text:'RECOMMENCER',
            nextText:1
        }
]
},
{
    id:22,
    text:'Evidement, ou en tout cas dans ton esprit, tu gagnes haut la main cette battle. Jul te regardait depuis le carré VIP et il as l’air plutôt convaincu',
    options:[
        {
            text:'SUIVANT',
            nextText:24
        }
        
]
},
{
    id:23,
    text:'Evidement, ou en tout cas dans ton esprit, tu gagnes haut la main cette battle. Tu regardes vers le carré vip, mais Jul est en pleine conversation avec SCH…',
    options:[
        {
            text:'SUIVANT',
            nextText:24
        }
        
]
},
{
    id:24,
    text:'De retour à votre table, la boîte va bientôt fermer. Il est temps de rentrer chez toi ',
    options:[
        {
            text:'ALLEZ SALUT C’ÉTAIT COOL MERCI',
            nextText:25
        },
        {
            text:'Finalement, pris d’un élan de confiance tu donnes ton numéro à Jul',
            nextText:27
        }
        
]
},
{
    id:27,
    text:'Jul te regarde droit dans les yeux',
    options:[
        {
            text:'SUIVANT',
            requiredState: (currentState) => currentState.Mepris,
            nextText:28
        },
        {
            text:'SUIVANT',
            requiredState: (currentState) => currentState.Accept,
            nextText:29
        }
]
},
{
    id:28,
    text:'Eh déso mais non merci, c’était pas correct ta façon de parler à Aya* \n Et juste comme ça Jul s’en va, alors que le soleil commence a se lever. Ce moment te donne mauvaise conscience et tu donnerais cher pour revenir en arrière et faire mieux. \n FIN :(',
    options:[
        {
            text:'RECOMMENCER',
            nextText:1
        }
]
},
{
    id:29,
    text:'*Eh mercé !! C’était une grosse soirée, TKT je t’appelle la prochaine fois !* \n Et en effet, il t’as rappelé, d’ailleurs tu es invité à sa prochaine tournée avec les bros. Jamais tu n’aurais imaginé devenir le pote de Jul mais tu ne regrette rien \n FIN',
    options:[
        {
            text:'RECOMMENCER',
            nextText:1
        }
]
},
{
    id:25,
    text:' et tu rentres chez toi, même si c’était que pour une soirée tu es content.e d’avoir rencontrer toute tes idoles, tu regrette parfois de ne pas avoir fais un pas vers Jul… \n FIN',
    options:[
        {
            text:'RECOMMENCER',
            nextText:1
        }
]
},



//PERFECT RUN !!!
{
    id:100,
    text:'*Wsh cousin.e tu voudrais m’aider ?? je dois ramener mon scoot mais j’ai la twingo à ramener aussi, je te paye la chicha TKT bro si tu m’aide*',
    options:[
        {
            text:'Désolée mais c’est muerte, j’ai pas le permis B bro',
            nextText:3
        },
        {
            text:'Vazy GO frere je peux essayer le scoot après ??',
            nextText:101
        }
    ]
},
{
    id:101,
    text:'*PTN MERCÉ TU ME SAUVES LA LIFE* \n Tu chille dans la twingo, Skyrock braille et tu fais semblant de ne pas trouver l’interview de Big Flo et Oli par Difool et Romano super drôle. La circulation est tranquille dans le centre-ville de Marseille...',
    options:[
        {
            text:'SUIVANT',
            nextText:102
        }
    ]
},
{
    id:102,
    text:'QUAND TOUT A COUP \n D’un buisson surgi Orelsan \n *J’AVAIS UN PETIT DIABLE SUR MON EPAULE MAINTENANT G TA TETE SUR MON EPAULE UwU* \n Orelsan te bloque la route, tu dois prendre une décision et vite !',
    options:[
        {
            text:'Tu fonces vers lui en driftant, tu es tellement un génie de la conduite \n que tu fais une roue arrière',
            nextText:103
        },
        {
            text:'Tu piles, effayé.e, tu as peur de lui et tu ne voudrais pas abimer la twingo quand meme !',
            nextText:7
        },
    ]
},
{
    id:103,
    text:'Dans tout ton génie, ta conduite est si souple, sportive et kaarismatique \n que Orelsan saute dans le caniveau ! \n Jul, qui te regardait dans son rétroviseur est très impressionné',
    options:[
        {
            text:'SUIVANT',
            nextText:104
        }
    ]
},
{
    id:104,
    text:'Le trajet continue tranquillement \n étonnement, Jul ne roule pas si vite que ça avec son scooter débridé et la twingo n’est clairement pas débridée...\n Jul met son clignotant à droite, en face d’un immeuble dorée avec une tête d’alien sur la façade. ça doit être le studio ? \n Il est temps de se garer ',
    options:[
        {
            text:' Tu fais le plus beau créneau que tu as jamais fais de ta vie et te gare devant l’immeuble.',
            nextText:105
        },
        {
            text:' Tu ne peux pas te contenir, elle est vraiment bien cette voiture. Tu appuie sur l’accélerateur et vole la caisse, Adios Jul !',
            nextText:9
        }
    ]
},

{
    id:105,
    text:'*T’AS VU TROP STYLÉ MON STUDIO ??!* \n En effet, il est plutôt chan-max, outre l’alien, les disques d’or et de platine sont accrochés en plein centre du hall. Plus loin quand vous entrez dans le studio principal, tu es accueilli par 4 mecs sur un canap’ avec 5 chichas',
    options:[
        {
            text:'SUIVANT',
            nextText:106
        }
    ]
},
{
    id:106,
    text:'Tu chilles avec tes nouveaux bros depuis déjà un bout de temps, dehors il fait nuit. Tu entends qqun arriver dans le couloir, la porte s’ouvre. \n AYA NAKAMURA viens d’entrer !!! *Wesh alors Jul, tjrs chaud pr un feat ??*',
    options:[
        {
            text:'SUIVANT',
            nextText:107
        }
    ]
},
{
    id:107,
    text:'Pdt que Jul et Aya discutent de leur nouveau son, tu fais connaissance. \n Alors que la fin de la soirée thé/chicha improvisée touche à sa fin tu hésites à tenter ta chance',
    options:[
        {
            text:'CHAFFER AYA',
            nextText:13
        },
        {
            text:'CHAFFER JUL',
            setState:{ Accept: true, Mepris: false } ,
            nextText:108
        },
        {
            text:'FINIR TON THÉ',
            setState:{ Accept: true, Mepris: false } ,
            nextText:17
        },
    ]
},
{
    id:108,
    text:' *Jul a l’air flatté . Tu l’entends murmurer *y’a ce gros boule dans la cuisine, je suis sous résine j’hallucine*',
    options:[
        {
            text:'SUIVANT',
            nextText:109
        }
    ]
},
{
    id:109,
    text:'*GO GROSSE SOIRÉE, DANS L’CARRÉ VIP EN SURVET’* annonce Jul, qui commence a être gêné par l’ambiance. Tout le monde met sa plus belle doudoune, pas de pacotille, chemise ouverte, chaîne en or qui brille',
    options:[
        {
            text:'SUIVANT',
            nextText:110
        }
    ]
},
{
    id:110,
    text:'T’arrives sur la piste genre en moonwalk, tu es suffisamment dans un sale état pour que ça te paraisse une bonne idée. Maître Gims vient d’arriver avec SCH dans le carré vip et ils discutent avec Jul (est tu étonné.e à ce stade ?). Le DJ, qui ressemble à quelqu’un que tu as vu dans une émission de TV réalité, met du Jason Derulo. *SHOGUN TONIIIIIIIGHT*',
    options:[
        {
            text:'SUIVANT',
            nextText:111
        }
    ]
},
{
    id:111,
    text:'Gims, qui devait s’ennuyer avec Jul et les autres, t’aborde : *Je vais te faire vivre un dream, ça te dit une battle de dance ?? ',
    options:[
        {
            text:'Tu refuses, même fortement alcoolisé, tu n’as jamais été fan de danse',
            nextText:24
        },
        {
            text:'CARREMENT tu te lance dans ta routine habituelle, entre la danse Fortnite et les chorés de TikTokeur',
            nextText:20
        },
        {
            text:'CARREMENT, tu enchaîne signe de Jul, “twerk” et battre des bras comme un.e zouz sous MD',
            nextText:112
        }
    ]
},
{
    id:112,
    text:'Gims a l’air subjugué, pour en finir une bonne fois pour toute',
    options:[
        {
            text:'Tu tentes un porté Dirty Dancing avec lui',
            nextText:21
        },
        {
            text:'Tu refais un signe de Jul',
            nextText:113
        },
        {
            text:'Tu fais du breakdance',
            nextText:23
        },
        {
            text:'TU REFAIS UN SIGNE DE JUL',
            nextText:113
        }
    ]
},
{
    id:113,
    text:'Evidement, ou en tout cas dans ton esprit, tu gagnes haut la main cette battle. Jul te regardait depuis le carré VIP et il as l’air plutôt convaincu',
    options:[
        {
            text:'SUIVANT',
            nextText:114
        }
        
]
},
{
    id:114,
    text:'De retour à votre table, la boîte va bientôt fermer. Il est temps de rentrer chez toi ',
    options:[
        {
            text:'ALLEZ SALUT C’ÉTAIT COOL MERCI',
            nextText:25
        },
        {
            text:'*JUL VIENT DE T’ATTRAPER LE BRAS*',
            nextText:115
        }
]
},

{
    id:115,
    text:'Contrairement à toute tes attentes, Jul t’as arrêté avant même que tu puisse dire au revoir. Sur un post-it 8.6 (trop stylé le sponsor) il te laisse son 06. Tu déplie enfin le papier le lendemain matin; dessus tu peux lire: \n *Tchikita, je peux être ton Jul, mon bijou si tu me quittes pas, j’te quitte pas* \n FIN :)',
    options:[
        {
            text:'RECOMMENCER',
            nextText:1
        }
]
},
]



startGame()