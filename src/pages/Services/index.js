const lista = {
    Cortes: 
    {
        'linguiça': 17.49, 'picanha Suína': 26.98, 'panceta': 25.98, 'coração': 34.69, 'coxinha da Asa': 13.99, 'coxa e sobrecoxa desossada': 12.99, 'picanha Bovina': 62.99, 'fraldinha': 42.39, 'alcatra': 45.99, 'maminha': 41.49, 'contra Filé': 45.39,
    },
    Acompanhamentos:
    {
        'pão de alho': 12.98, 'queijo coalho': 23.98, 'farofa pronta': 10.98, 'pão': 20.00, 'vinagrete': 20.97, 'arroz': 20.00,
    },
    Suprimento:
    {
        'carvão': 37.99, 'copos': 6.49, 'guardanapos': 2.49, 'pratos': 3.39, 'talheres': 10.99, 'fósforos/acendedores': 3.49,
    },
    Bebidas:
    {
        'refrigerante': 6.89, 'suco': 10.94, 'cerveja': 3.19, 'água': 2.99, 'chá gelado': 6.69,
    },

}

const receitaria = {
    linguiça: {
        'id': 1, 'título': 'APERITIVO DE LINGUIÇA TOSCANA E MUÇARELA DEFUMADA', 'dificuldade': 'iniciante', 'tempo': 30, 'rendimento': 15, 'ingrediente': '700 g de Linguiça Toscana Swift\n2 colheres (sopa) de Ervas Finas Swift (10 g)\n1 colher (sopa) de Alho Picado Swift (10 g)\n1 xícara (chá) de Farofa Apimentada Swift (100 g)\n3 espetos de Espetinho de Queijo Mussarela Bolinha Defumada Swift (186 g)', 'modo de preparo': '1 - Retire o recheio da linguiça e coloque no multiprocessador.\n2 - Coloque as ervas, o alho e a farofa. Processe até formar uma massa homogênea.\n3 - Refrigere por 30 minutos antes de usar.\n4 - Retire a muçarela dos espetos.\n5 - Divida a massa de linguiça em 15 porções.\n6 - Abra a porção de linguiça na palma da mão, coloque o queijo no centro e feche bem, em formato de bolinhas. Faça isso com todas as bolinhas de muçarela.\n6 - Na grelha de churrasqueira, em brasa média, doure todos os lados das bolinhas.', 'image': 'https://swiftbr.vteximg.com.br/arquivos/aperitivo-de-linguica-toscana-e-mucarela-defumada.jpg'
     },
     picanhaSuína:{
        'id': 2, 'título': 'PICANHA SUÍNA COM CONFIT DE TOMATES', 'dificuldade': 'iniciante', 'tempo': 70, 'rendimento': 5, 'ingrediente': '1 peça de Picanha Suína Assa Fácil Swift\n180 g de tomates grape\n½ xícara (chá) de azeite\n3 dentes de alho laminado\n½ colher (chá) rasa de açúcar\n1 colher (chá) rasa de sal\n1 colher (chá) de Lemon & Herbs Swift\n2 colheres (chá) de Cebola, Alho e Salsa Swift ramos de tomilho a gosto', 'modo de preparo': '1 - Asse a picanha assa fácil conforme instrução da embalagem.\n2 - Higienize e corte os tomates ao meio.\n3 - Regue com metade do azeite uma assadeira pequena, disponha os tomates e o alho laminado. Polvilhe com açúcar e sal. Misture o Lemon & Herbs e Cebola, alho e salsa e salpique sobre os tomates.\n4 - Distribua os ramos de tomilho, regue com o restante do azeite e leve ao forno a 150 °C por aproximadamente 40 minutos.\n5 - Sirva a picanha fatiada, acompanhada do confit de tomates.', 'image': 'https://swiftbr.vteximg.com.br/arquivos/picanhasuina-confittomate.jpg'
     },
     panceta: {
        'id': 3, 'título': 'ESPETINHOS DE PANCETA E PÃO DE CALABRESA', 'dificuldade': 'iniciante', 'tempo': 60, 'rendimento': 4, 'ingrediente':'1 embalagem de Espetinho de Panceta Swift\n1 embalagem de Pão Calabresa com Queijo Swift\n1 berinjela\n2 colheres (chá) de sal\n½ pimentão vermelho em cubos\n½ pimentão amarelo em cubos\n2 colheres (sopa) de Cebola Picada Swift\n1 colher (sopa) de Alho picado Swift\n1 colher (sopa) de vinagre\n2 colheres (chá) de Orégano Swift\nsal e Mix de Pimentas Swift a gosto\ncebolinha picada a gosto', 'modo de preparo': '1 - Asse os espetinhos de panceta na churrasqueira, virando-os de tempo em tempo para que assem por igual, até o ponto desejado.\n2 - Asse os pães calabresa com queijo na churrasqueira, tendo o cuidado de deixar a abertura virada para cima, para não perder o recheio.\n3 - Corte a berinjela em 4 partes e os pimentões em cubos.\n4 - Coloque a berinjela em um recipiente, cubra com água e sal e deixe descansar por 30 minutos.\n5 - Escorra a berinjela e coloque em uma assadeira untada com azeite. Adicione os pimentões, a cebola picada e o alho picado. Cubra com papel-alumínio e leve ao forno preaquecido a 180 °C por 20 minutos, misturando na metade do tempo.\n6 - Tempere com vinagre, orégano, sal e mix de pimentas. Deixe esfriar e salpique cebolinha picada.\n7 - Sirva os espetinhos e os pães calabresa com queijo acompanhados da salada de berinjela.', 'image': 'https://swiftbr.vteximg.com.br/arquivos/ids/180565/espetinho-panceita-innatura.jpg'
     },
     coração: {
        'id': 4, 'título': 'SANDUÍCHE DE CORAÇÃO DE FRANGO COM MUÇARELA', 'dificuldade': 'intermediário', 'tempo': 40, 'rendimento': 8, 'ingrediente': '1 kg de Coração de Frango Swift\n4 colheres (sopa) de azeite\n2 colheres (sopa) de manteiga\n2 colheres (sopa) de Alho Picado Swift\n1 colher (sopa) de Cebola, Alho e Salsa Swift\nsal e Mix de Pimenta Swift a gosto\no suco de um limão\n 8 colheres (sopa) de maionese\n1 colher (sopa) de tempero Lemon & Herbs Swift\n310 g de Espetinho de Queijo Muçarela Bolinha Defumada Swift tomatinhos cereja a gosto\nCebola Crispy Swift a gosto\n480 g de Pão Francês Rústico Swift', 'ingrediente': '1 - Descongele os corações de frango e retire o excesso de gordura.\n2 - Em uma frigideira, aqueça o azeite e a manteiga e frite os corações, mexendo de vez em quando para que dourem por igual. Acrescente o alho picado, o tempero de cebola, alho e salsa, o sal, a pimenta e o suco de limão. Refogue até que estejam macios.\n3 - Tempere a maionese com o lemon & herbs. Reserve.\n4 - Tire as bolinhas de muçarela do espeto, corte em fatias e misture aos corações refogados.\n5 - Aqueça os pães conforme o indicado na embalagem.\n6 - Abra os pães, espalhe uma camada de maionese temperada, distribua uma farta porção do refogado de coração e muçarela defumada. Complete com tomatinhos cortados ao meio, cebola crispy e folhas de rúcula.', 'image': 'https://swiftbr.vteximg.com.br/arquivos/sanduiche.jpg'
     },
     coxinhaDaAsa: {
        'id': 5, 'título': 'COXINHA DA ASA PICANTE', 'dificuldade': 'intermediário', 'tempo': 30, 'rendimento': 6, 'ingrediente': 'Coxinha da Asa Swift do Campo 1kg\n2 colheres (sopa) de molho de soja\n½ xícara (chá) de água\n2 dentes de alho picados\n½ pimenta-dedo-de-moça sem sementes picada\n1 pedaço (5 cm) de gengibre descascado e picado\n1 colher (sopa) de páprica doce\nSal Grosso Swift a gosto', 'modo de preparo': '1 - No liquidificador bata todos os ingredientes até formar uma mistura homogênea.\n2 - Coloque as coxinhas em uma assadeira e tempere com o molho.\n3 - Cubra a assadeira e deixe marinando na geladeira por uma hora.\n4 - Na churrasqueira com a brasa bem quente coloque as coxinhas e asse até dourar bem dos dois lados aproximadamente por 20 minutos.\n5 - Sirva em seguida.', 'image':'https://swiftbr.vteximg.com.br/arquivos/coxinha-da-asa-picante.jpg'
    },
    coxaESobrecoxa: {
        'id': 6, 'título': 'SOBRECOXA DE FRANCO COM BACON E LEGUMES', 'dificuldade': 'iniciante', 'tempo': 45, 'rendimento': 4, 'ingrediente': '1 kg de Sobrecoxa de Frango Swift\n250 g de Bacon Fatiado Swift\nTempero para Aves Swift a gosto\nSal Granulado para Parrilla com Pimenta a gosto\n3 colheres (sopa) de mostarda\nChimichurri Swift a gosto\nCebola, Alho e Salsa Swift a gosto\n1 colher (sopa) de óleo de gergelim\n½ embalagem de Cenoura Baby Swift\n½ embalagem de Brócolis Swift\n½ embalagem de Couve-Flor Swift\n    3 colheres (sopa) de manteiga\n2 colheres (sopa) de azeite\nErvas Finas Swift a gosto', 'modo de preparo': '1 - Tempere o frango com o chimichurri, o tempero cebola, alho e salsa, o sal granulado para parrilla com pimenta e misture.\n2 - Envolva as tiras de Bacon no frango já marinado.\n3 - Coloque o frango em assadeira ou refratário, leve ao forno preaquecido a 160 ºC e asse entre 25 a 35 minutos.\n4 - Em uma frigideira aquecida, adicione o azeite e a manteiga. Acrescente a cenoura, brócolis e couve-flor.\n5 - Adicione uma pitada de sal e ervas finas.\n6 - Deixe cozinhando por 5 minutos até secar todo o líquido.\n7 - Emprate o frango junto com os legumes.', 'image':'https://swiftbr.vteximg.com.br/arquivos/sobrecoxa-fango-com-bacon-legumes.jpg?v=637932425433770000'
    },
    picanhaBovina: {
        'id': 7, 'título': 'PICANHA NO FORNO COM PASTA DE MANJERICÃO E FRITAS', 'dificuldade': 'iniciante', 'tempo': 50, 'rendimento': 6, 'ingrediente': '1 peça de Picanha Prata Swift\nSal para Parrilla Swift a gosto\nMix de Pimentas Swift a gosto\n1 colher (sopa) de azeite\n2 colheres (sopa) de manteiga em temperatura ambiente\n3 colheres (sopa) de manjericão fresco picado\nBatata Pré-Frita Congelada Swift a gosto', 'ingrediente': '1 - Preaqueça o forno a 200 °C.\n2 - Tempere a picanha com o sal para parrilla e o mix de pimentas.\n3 - Aqueça uma frigideira grande em fogo alto. Disponha o azeite e leve a picanha para dourar em fogo alto por 3 minutos de cada lado.\n4 - Transfira para uma assadeira e leve ao forno por 20 minutos.\n5 - Misture em um pote pequeno a manteiga e o manjericão.\n6 - Retire a carne do forno. Disponha a pasta de manjericão na carne enquanto descansa por aproximadamente 10 minutos antes de fatiar.\n7 - Fatie e sirva quente com batatas fritas ou assadas no forno.', 'image': 'https://swiftbr.vteximg.com.br/arquivos/picanha-forno-pesto-manjericao.jpg'
    },
}
