export const lista = {
    Cortes: 
    {
        'linguiça': 17.49, 'picanha Suína': 26.98, 'panceta': 25.98, 'coração': 34.69, 'coxinha da Asa': 13.99, 'coxa e sobrecoxa desossada': 12.99, 'picanha Bovina': 62.99, 'fraldinha': 42.39, 'alcatra': 45.99, 'contra Filé': 45.39,
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

export const listaCortes = [
    {
        id: 'c1', nome: 'Linguiça', preço: 17.49, check: false
    },
    {
        id: 'c2', nome: 'Picanha Suína', preço: 26.98, check: false
    },
    {
        id: 'c3', nome: 'Panceta', preço: 25.98, check: false
    },
    {
        id: 'c4', nome: 'Coração', preço: 34.69, check: false
    },
    {
        id: 'c5', nome: 'Coxinha da Asa', preço: 13.99, check: false
    },
    {
        id: 'c6', nome: 'Coxa e Sobrecoxa Desossada', preço: 12.99, check: false
    },
    {
        id: 'c7', nome: 'Fraldinha', preço: 42.39, check: false
    },
    {
        id: 'c8', nome: 'Picanha Bovina', preço: 62.99, check: false
    },
    {
        id: 'c9', nome: 'Alcatra', preço: 45.99, check: false
    },
    {
        id: 'c10', nome: 'Contra Filé', preço: 45.39, check: false
    },
];

export const listaAcompanhamento = [
    {
        id: 'a1', nome: 'Pão de Alho', preço: 12.98, check: false
    },
    {
        id: 'a2', nome: 'Queijo Coalho', preço: 23.98, check: false
    },
    {
        id: 'a3', nome: 'Farofa pronta', preço: 10.98, check: false
    },
    {
        id: 'a4', nome: 'Pão Francês', preço: 20.00, check: false
    },
    {
        id: 'a5', nome: 'Arroz', preço: 20.00, check: false
    },
    {
        id: 'a6', nome: 'Salada de maionese', preço: 20.97, check: false
    },
];

export const receitaria = {
    linguiça: {
        'id': 1, 'título': 'APERITIVO DE LINGUIÇA TOSCANA E MUÇARELA DEFUMADA', 'dificuldade': 'iniciante', 'tempo': 30, 'rendimento': 15, 'ingrediente': ['700 g de Linguiça Toscana Swift','colheres (sopa) de Ervas Finas Swift (10 g)','colher (sopa) de Alho Picado Swift (10 g)','xícara (chá) de Farofa Apimentada Swift (100 g)','3 espetos de Espetinho de Queijo Mussarela Bolinha Defumada Swift (186 g)'], 'modo de preparo': ['Retire o recheio da linguiça e coloque no multiprocessador.','Coloque as ervas, o alho e a farofa. Processe até formar uma massa homogênea.','Refrigere por 30 minutos antes de usar.','Retire a muçarela dos espetos.','Divida a massa de linguiça em 15 porções.','Abra a porção de linguiça na palma da mão, coloque o queijo no centro e feche bem, em formato de bolinhas. Faça isso com todas as bolinhas de muçarela.','Na grelha de churrasqueira, em brasa média, doure todos os lados das bolinhas.'], 'image': 'https://swiftbr.vteximg.com.br/arquivos/aperitivo-de-linguica-toscana-e-mucarela-defumada.jpg'
     },
     picanhaSuína:{
        'id': 2, 'título': 'PICANHA SUÍNA COM CONFIT DE TOMATES', 'dificuldade': 'iniciante', 'tempo': 70, 'rendimento': 5, 'ingrediente': ['1 peça de Picanha Suína Assa Fácil Swift','180 g de tomates grape','½ xícara (chá) de azeite','3 dentes de alho laminado','½ colher (chá) rasa de açúcar','1 colher (chá) rasa de sal','1 colher (chá) de Lemon & Herbs Swift','2 colheres (chá) de Cebola, Alho e Salsa Swift ramos de tomilho a gosto'], 'modo de preparo': ['Asse a picanha assa fácil conforme instrução da embalagem.','Higienize e corte os tomates ao meio.','Regue com metade do azeite uma assadeira pequena, disponha os tomates e o alho laminado. Polvilhe com açúcar e sal. Misture o Lemon & Herbs e Cebola, alho e salsa e salpique sobre os tomates.','Distribua os ramos de tomilho, regue com o restante do azeite e leve ao forno a 150 °C por aproximadamente 40 minutos.','Sirva a picanha fatiada, acompanhada do confit de tomates.'], 'image': 'https://swiftbr.vteximg.com.br/arquivos/picanhasuina-confittomate.jpg'
     },
     panceta: {
        'id': 3, 'título': 'ESPETINHOS DE PANCETA E PÃO DE CALABRESA', 'dificuldade': 'iniciante', 'tempo': 60, 'rendimento': 4, 'ingrediente':['1 embalagem de Espetinho de Panceta Swift','1 embalagem de Pão Calabresa com Queijo Swift','1 berinjela','2 colheres (chá) de sal','½ pimentão vermelho em cubos','½ pimentão amarelo em cubos','2 colheres (sopa) de Cebola Picada Swift','1 colher (sopa) de Alho picado Swift','1 colher (sopa) de vinagre','2 colheres (chá) de Orégano Swift','sal e Mix de Pimentas Swift a gosto','cebolinha picada a gosto'], 'modo de preparo': ['Asse os espetinhos de panceta na churrasqueira, virando-os de tempo em tempo para que assem por igual, até o ponto desejado.','Asse os pães calabresa com queijo na churrasqueira, tendo o cuidado de deixar a abertura virada para cima, para não perder o recheio.','Corte a berinjela em 4 partes e os pimentões em cubos.','Coloque a berinjela em um recipiente, cubra com água e sal e deixe descansar por 30 minutos.','Escorra a berinjela e coloque em uma assadeira untada com azeite. Adicione os pimentões, a cebola picada e o alho picado. Cubra com papel-alumínio e leve ao forno preaquecido a 180 °C por 20 minutos, misturando na metade do tempo.','Tempere com vinagre, orégano, sal e mix de pimentas. Deixe esfriar e salpique cebolinha picada.','Sirva os espetinhos e os pães calabresa com queijo acompanhados da salada de berinjela.'], 'image': 'https://swiftbr.vteximg.com.br/arquivos/ids/180565/espetinho-panceita-innatura.jpg'
     },
     coração: {
        'id': 4, 'título': 'SANDUÍCHE DE CORAÇÃO DE FRANGO COM MUÇARELA', 'dificuldade': 'intermediário', 'tempo': 40, 'rendimento': 8, 'ingrediente': ['1 kg de Coração de Frango Swift','4 colheres (sopa) de azeite','2 colheres (sopa) de manteiga','2 colheres (sopa) de Alho Picado Swift','1 colher (sopa) de Cebola, Alho e Salsa Swift','sal e Mix de Pimenta Swift a gosto','o suco de um limão','8 colheres (sopa) de maionese','1 colher (sopa) de tempero Lemon & Herbs Swift','310 g de Espetinho de Queijo Muçarela Bolinha Defumada Swift tomatinhos cereja a gosto','Cebola Crispy Swift a gosto','480 g de Pão Francês Rústico Swift'], 'ingrediente': ['Descongele os corações de frango e retire o excesso de gordura.','Em uma frigideira, aqueça o azeite e a manteiga e frite os corações, mexendo de vez em quando para que dourem por igual. Acrescente o alho picado, o tempero de cebola, alho e salsa, o sal, a pimenta e o suco de limão. Refogue até que estejam macios.','Tempere a maionese com o lemon & herbs. Reserve.','Tire as bolinhas de muçarela do espeto, corte em fatias e misture aos corações refogados.','Aqueça os pães conforme o indicado na embalagem.','Abra os pães, espalhe uma camada de maionese temperada, distribua uma farta porção do refogado de coração e muçarela defumada. Complete com tomatinhos cortados ao meio, cebola crispy e folhas de rúcula.'], 'image': 'https://swiftbr.vteximg.com.br/arquivos/sanduiche.jpg'
     },
     coxinhaDaAsa: {
        'id': 5, 'título': 'COXINHA DA ASA PICANTE', 'dificuldade': 'intermediário', 'tempo': 30, 'rendimento': 6, 'ingrediente': ['Coxinha da Asa Swift do Campo 1kg','2 colheres (sopa) de molho de soja','½ xícara (chá) de água','2 dentes de alho picados','½ pimenta-dedo-de-moça sem sementes picada','1 pedaço (5 cm) de gengibre descascado e picado','1 colher (sopa) de páprica doce','Sal Grosso Swift a gosto'], 'modo de preparo': ['No liquidificador bata todos os ingredientes até formar uma mistura homogênea.','Coloque as coxinhas em uma assadeira e tempere com o molho.','Cubra a assadeira e deixe marinando na geladeira por uma hora.','Na churrasqueira com a brasa bem quente coloque as coxinhas e asse até dourar bem dos dois lados aproximadamente por 20 minutos.','Sirva em seguida.'], 'image':'https://swiftbr.vteximg.com.br/arquivos/coxinha-da-asa-picante.jpg'
    },
    "picanhaSuína":{
        'id': 2, 'titulo': 'PICANHA SUÍNA COM CONFIT DE TOMATES', 'dificuldade': 'iniciante', 'tempo': 70, 'rendimento': 5, 'ingrediente': ['1 peça de Picanha Suína Assa Fácil Swift','180 g de tomates grape','½ xícara (chá) de azeite','3 dentes de alho laminado','½ colher (chá) rasa de açúcar','1 colher (chá) rasa de sal','1 colher (chá) de Lemon & Herbs Swift','2 colheres (chá) de Cebola, Alho e Salsa Swift ramos de tomilho a gosto'], 'modo de preparo': ['Asse a picanha assa fácil conforme instrução da embalagem.','Higienize e corte os tomates ao meio.','Regue com metade do azeite uma assadeira pequena, disponha os tomates e o alho laminado. Polvilhe com açúcar e sal. Misture o Lemon & Herbs e Cebola, alho e salsa e salpique sobre os tomates.','Distribua os ramos de tomilho, regue com o restante do azeite e leve ao forno a 150 °C por aproximadamente 40 minutos.','Sirva a picanha fatiada, acompanhada do confit de tomates.'], 'image': 'https://swiftbr.vteximg.com.br/arquivos/picanhasuina-confittomate.jpg'
    },
    "panceta": {
        'id': 3, 'titulo': 'ESPETINHOS DE PANCETA E PÃO DE CALABRESA', 'dificuldade': 'iniciante', 'tempo': 60, 'rendimento': 4, 'ingrediente':['1 embalagem de Espetinho de Panceta Swift','1 embalagem de Pão Calabresa com Queijo Swift','1 berinjela','2 colheres (chá) de sal','½ pimentão vermelho em cubos','½ pimentão amarelo em cubos','2 colheres (sopa) de Cebola Picada Swift','1 colher (sopa) de Alho picado Swift','1 colher (sopa) de vinagre','2 colheres (chá) de Orégano Swift','sal e Mix de Pimentas Swift a gosto','cebolinha picada a gosto'], 'modo de preparo': ['Asse os espetinhos de panceta na churrasqueira, virando-os de tempo em tempo para que assem por igual, até o ponto desejado.','Asse os pães calabresa com queijo na churrasqueira, tendo o cuidado de deixar a abertura virada para cima, para não perder o recheio.','Corte a berinjela em 4 partes e os pimentões em cubos.','Coloque a berinjela em um recipiente, cubra com água e sal e deixe descansar por 30 minutos.','Escorra a berinjela e coloque em uma assadeira untada com azeite. Adicione os pimentões, a cebola picada e o alho picado. Cubra com papel-alumínio e leve ao forno preaquecido a 180 °C por 20 minutos, misturando na metade do tempo.','Tempere com vinagre, orégano, sal e mix de pimentas. Deixe esfriar e salpique cebolinha picada.','Sirva os espetinhos e os pães calabresa com queijo acompanhados da salada de berinjela.'], 'image': 'https://swiftbr.vteximg.com.br/arquivos/ids/180565/espetinho-panceita-innatura.jpg'
    },
    "coração": {
        'id': 4, 'titulo': 'SANDUÍCHE DE CORAÇÃO DE FRANGO COM MUÇARELA', 'dificuldade': 'intermediário', 'tempo': 40, 'rendimento': 8, 'ingrediente': ['1 kg de Coração de Frango Swift','4 colheres (sopa) de azeite','2 colheres (sopa) de manteiga','2 colheres (sopa) de Alho Picado Swift','1 colher (sopa) de Cebola, Alho e Salsa Swift','sal e Mix de Pimenta Swift a gosto','o suco de um limão','8 colheres (sopa) de maionese','1 colher (sopa) de tempero Lemon & Herbs Swift','310 g de Espetinho de Queijo Muçarela Bolinha Defumada Swift tomatinhos cereja a gosto','Cebola Crispy Swift a gosto','480 g de Pão Francês Rústico Swift'], 'ingrediente': ['Descongele os corações de frango e retire o excesso de gordura.','Em uma frigideira, aqueça o azeite e a manteiga e frite os corações, mexendo de vez em quando para que dourem por igual. Acrescente o alho picado, o tempero de cebola, alho e salsa, o sal, a pimenta e o suco de limão. Refogue até que estejam macios.','Tempere a maionese com o lemon & herbs. Reserve.','Tire as bolinhas de muçarela do espeto, corte em fatias e misture aos corações refogados.','Aqueça os pães conforme o indicado na embalagem.','Abra os pães, espalhe uma camada de maionese temperada, distribua uma farta porção do refogado de coração e muçarela defumada. Complete com tomatinhos cortados ao meio, cebola crispy e folhas de rúcula.'], 'image': 'https://swiftbr.vteximg.com.br/arquivos/sanduiche.jpg'
    },
    "coxinhaDaAsa": {
        'id': 5, 'titulo': 'COXINHA DA ASA PICANTE', 'dificuldade': 'intermediário', 'tempo': 30, 'rendimento': 6, 'ingrediente': ['Coxinha da Asa Swift do Campo 1kg','2 colheres (sopa) de molho de soja','½ xícara (chá) de água','2 dentes de alho picados','½ pimenta-dedo-de-moça sem sementes picada','1 pedaço (5 cm) de gengibre descascado e picado','1 colher (sopa) de páprica doce','Sal Grosso Swift a gosto'], 'modo de preparo': ['No liquidificador bata todos os ingredientes até formar uma mistura homogênea.','Coloque as coxinhas em uma assadeira e tempere com o molho.','Cubra a assadeira e deixe marinando na geladeira por uma hora.','Na churrasqueira com a brasa bem quente coloque as coxinhas e asse até dourar bem dos dois lados aproximadamente por 20 minutos.','Sirva em seguida.'], 'image':'https://swiftbr.vteximg.com.br/arquivos/coxinha-da-asa-picante.jpg'
    },
    "coxaESobrecoxa": {
        'id': 6, 'titulo': 'SOBRECOXA DE FRANCO COM BACON E LEGUMES', 'dificuldade': 'iniciante', 'tempo': 45, 'rendimento': 4, 'ingrediente': ['1 kg de Sobrecoxa de Frango Swift','250 g de Bacon Fatiado Swift','Tempero para Aves Swift a gosto','Sal Granulado para Parrilla com Pimenta a gosto','3 colheres (sopa) de mostarda','Chimichurri Swift a gosto','Cebola, Alho e Salsa Swift a gosto','1 colher (sopa) de óleo de gergelim','½ embalagem de Cenoura Baby Swift','½ embalagem de Brócolis Swift','½ embalagem de Couve-Flor Swift','3 colheres (sopa) de manteiga','2 colheres (sopa) de azeite','Ervas Finas Swift a gosto'], 'modo de preparo': ['Tempere o frango com o chimichurri, o tempero cebola, alho e salsa, o sal granulado para parrilla com pimenta e misture.','Envolva as tiras de Bacon no frango já marinado.','Coloque o frango em assadeira ou refratário, leve ao forno preaquecido a 160 ºC e asse entre 25 a 35 minutos.','Em uma frigideira aquecida, adicione o azeite e a manteiga. Acrescente a cenoura, brócolis e couve-flor.','Adicione uma pitada de sal e ervas finas.','Deixe cozinhando por 5 minutos até secar todo o líquido.','Emprate o frango junto com os legumes.'], 'image':'https://swiftbr.vteximg.com.br/arquivos/sobrecoxa-fango-com-bacon-legumes.jpg?v=637932425433770000'
    },
    "picanhaBovina": {
        'id': 7, 'titulo': 'PICANHA NO FORNO COM PASTA DE MANJERICÃO E FRITAS', 'dificuldade': 'iniciante', 'tempo': 50, 'rendimento': 6, 'ingrediente': ['1 peça de Picanha Prata Swift','Sal para Parrilla Swift a gosto','Mix de Pimentas Swift a gosto','1 colher (sopa) de azeite','2 colheres (sopa) de manteiga em temperatura ambiente','3 colheres (sopa) de manjericão fresco picado','Batata Pré-Frita Congelada Swift a gosto'], 'modo de preparo': ['Preaqueça o forno a 200 °C.','Tempere a picanha com o sal para parrilla e o mix de pimentas.','Aqueça uma frigideira grande em fogo alto. Disponha o azeite e leve a picanha para dourar em fogo alto por 3 minutos de cada lado.','Transfira para uma assadeira e leve ao forno por 20 minutos.','Misture em um pote pequeno a manteiga e o manjericão.','Retire a carne do forno. Disponha a pasta de manjericão na carne enquanto descansa por aproximadamente 10 minutos antes de fatiar.','Fatie e sirva quente com batatas fritas ou assadas no forno.'], 'image': 'https://swiftbr.vteximg.com.br/arquivos/picanha-forno-pesto-manjericao.jpg'
    },
    "fraldinha": {
        'id': 8, 'titulo': 'FRALDINHA ASSADA', 'dificuldade': 'iniciante', 'tempo': 120, 'rendimento': 4, 'ingrediente': ['1 fraldinha inteira de cerca de 2 kg','2 colheres (sopa) de óleo','2 colheres (sopa) de molho inglês','1 colher (sopa) de chimichurri','1 colher (chá) de cominho moído','1 colher (café) de pimenta-do-reino moída','1 colher (sopa) rasa de sal','1 colher (chá) de semente de coentro moída'], 'modo de preparo': ['Limpe bem a carne.','Em seguida, junte todos os ingredientes dos temperos, inclusive o óleo, em uma vasilha e esfregue por toda a carne.','Coloque em uma vasilha tampada e deixe marinando na geladeira de um dia para o outro.','No dia seguinte, unte o fundo de um refratário com óleo e disponha a carne.','Cubra com papel alumínio com o lado brilhante voltado para dentro, de modo que fique bem vedado. Leve ao forno a 200º C por 1 hora e 30 minutos.','Retire o papel, com cuidado, e deixe por mais 30 minutos para dourar.','De vez em quando, abra o forno e vá regando a carne com o caldo que se forma, pois assim você garante uma carne mais úmida.','Para evitar que a carne fique muito seca, tenha cuidado para não deixar o caldo, que se forma, secar todo.','Retire do forno, fatie e regue as fatias de carne com o caldo que sobrou.','Sirva em seguida.'], 'image': 'https://static.itdg.com.br/images/640-400/fc3f51899ea5881aa86ca0c5d3cf5bc6/287111-original.jpg'
    },
    "alcatra": {
        'id': 9, 'titulo': 'ALCATRA NA PANELA', 'dificuldade': 'iniciante', 'tempo': 75, 'rendimento': 6, 'ingrediente': ['1 kg de alcatra','1 cebola picada','2 dentes de alho','2 colheres (sopa) de óleo de azeite ou óleo de soja','1 caldo de carne','Sal, pimenta do reino, vinagre e colorau a vontade para temperar','2 batatas grandes'], 'modo de preparo': ['Limpe a carne.','Após limpa, corte-a em cubinhos de 2 a 4 cm.','Tempere-as em uma bacia com o sal, a pimenta-do-reino, vinagre e colorau.','Corte as batatas em rodelas.','Refogue a cebola e o alho em uma panela de pressão, após refogados, coloque a carne e frite-a um pouco.','Após a carne adquirir cor, coloque água até cobrir tudo, ou um pouco menos, coloque as batatas e tampe a panela e deixe cozinhar por 20 minutos.','Após cozida, abra a panela, porém deixe a carne no fogo ainda, para que o caldo engrosse um pouco.','Sirva com arroz.'], 'image': 'https://static.itdg.com.br/images/640-400/08ba2f4e2ac9db7874d648e4f5bfaa1a/311277-original.jpg'
    },
    "contraFile": {
        'id': 11, 'titulo': 'CONTRA FILÉ COM BATATAS', 'dificuldade': 'iniciante', 'tempo': 30, 'rendimento': 6, 'ingrediente': ['8 bifes de contra file','2 dentes de alho amassados','1 limão','1 pitada de pimenta-do-reino moída','2 colheres de sopa de extrato de tomate','sal a gosto','8 batatas médias descascadas','2 colheres de sopa de óleo','1 xícara de água fervendo'], 'modo de preparo': ['Uma tigela tempere os contra files com o alho, a pimenta e o sal.','Esprema o limão por cima, misture tudo e deixe descansar por 10 minutinhos para tomar gosto.','Em uma panela de pressão, esquente o óleo e frite os bifes dos dois lados rapidamente, ou seja, não é para deixar torrar demais.','Quando todos estiverem fritos, junte todos na mesma panela de pressão, acescente o extrato de tomate misturando bem para dar uma cor bonita ao molho e acrescente as batatas descascadas.','Coloque a água fervendo, tampe a panela espere começar a pressão e desligue após 5 minutos de pressão.','Espere sair a pressão, destampe a panela, arrume tudo numa travessa, salpique salsinha ou coentro picadinhos (opcional) e sirva com arroz branco ou simplesmente com legumes cozidos no vapor.'], 'image': 'https://static.itdg.com.br/images/640-400/1416f1bbf8b88d03cc6d2df7088718e3/331097-original.jpg'
    },
}
