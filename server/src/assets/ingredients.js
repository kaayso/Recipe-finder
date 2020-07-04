
const vegetables = [
  // vegetables
  {
    name: 'Chou vert',
    category: 'Légumes',
    image: '/images/vegetables/chou-vert.webp',
  },
  {
    name: 'Chou romanesco',
    category: 'Légumes',
    image: '/images/vegetables/chou-romanesco.webp',
  },
  {
    name: 'Ail',
    category: 'Légumes',
    image: '/images/vegetables/ail.webp',
  },
  {
    name: 'Avocat',
    category: 'Légumes',
    image: '/images/vegetables/avocat.webp',
  },
  {
    name: 'Betterave',
    category: 'Légumes',
    image: '/images/vegetables/betterave.webp',
  },
  {
    name: 'Carotte',
    category: 'Légumes',
    image: '/images/vegetables/carotte-vitamines.webp',
  },
  {
    name: 'Echalote',
    category: 'Légumes',
    image: '/images/vegetables/echalote.webp',
  },
  {
    name: 'Oignon',
    category: 'Légumes',
    image: '/images/vegetables/oignon.webp',
  },
  {
    name: 'Panais',
    category: 'Légumes',
    image: '/images/vegetables/panais.webp',
  },
  {
    name: 'Radis rouge',
    category: 'Légumes',
    image: '/images/vegetables/radis-rouge.webp',
  },
  {
    name: 'Radis noir',
    category: 'Légumes',
    image: '/images/vegetables/radis-noir.webp',
  },
  {
    name: 'Salsifis',
    category: 'Légumes',
    image: '/images/vegetables/salsifis.webp',
  },
  {
    name: 'Aubergine',
    category: 'Légumes',
    image: '/images/vegetables/aubergine.webp',
  },
  {
    name: 'Concombre',
    category: 'Légumes',
    image: '/images/vegetables/concombre.webp',
  },
  {
    name: 'Cornichon',
    category: 'Légumes',
    image: '/images/vegetables/cornichon.webp',
  },
  {
    name: 'Courgette',
    category: 'Légumes',
    image: '/images/vegetables/courgette.webp',
  },
  {
    name: 'Haricots verts',
    category: 'Légumes',
    image: '/images/vegetables/haricots-verts.webp',
  },
  {
    name: 'Petits pois',
    category: 'Légumes',
    image: '/images/vegetables/petits-pois.webp',
  },
  {
    name: 'Piment',
    category: 'Légumes',
    image: '/images/vegetables/piment.webp',
  },
  {
    name: 'Poivron jaune',
    category: 'Légumes',
    image: '/images/vegetables/poivron-jaune.webp',
  },
  {
    name: 'Poivron vert',
    category: 'Légumes',
    image: '/images/vegetables/poivron-vert.webp',
  },
  {
    name: 'Poivron rouge',
    category: 'Légumes',
    image: '/images/vegetables/poivron-rouge.webp',
  },
  {
    name: 'Tomates',
    category: 'Légumes',
    image: '/images/vegetables/tomates.webp',
  },
  {
    name: 'Tomatillo',
    category: 'Légumes',
    image: '/images/vegetables/tomatillo.webp',
  },
  {
    name: 'Bette ou blette',
    category: 'Légumes',
    image: '/images/vegetables/bette-ou-blette.webp',
  },
  {
    name: 'Chou de bruxelles',
    category: 'Légumes',
    image: '/images/vegetables/chou-de-bruxelles.webp',
  },
  {
    name: 'Cresson alénois',
    category: 'Légumes',
    image: '/images/vegetables/cresson.webp',
  },
  {
    name: 'Crosne',
    category: 'Légumes',
    image: '/images/vegetables/crosne.webp',
  },
  {
    name: 'Endive',
    category: 'Légumes',
    image: '/images/vegetables/endive.webp',
  },
  {
    name: 'Epinards',
    category: 'Légumes',
    image: '/images/vegetables/epinards.webp',
  },
  {
    name: 'Navet rave',
    category: 'Légumes',
    image: '/images/vegetables/navet-rave.webp',
  },
  {
    name: 'Ortie',
    category: 'Légumes',
    image: '/images/vegetables/ortie.webp',
  },
  {
    name: 'Oseille',
    category: 'Légumes',
    image: '/images/vegetables/oseille.webp',
  },
  {
    name: 'Poireaux',
    category: 'Légumes',
    image: '/images/vegetables/poireaux.webp',
  },
  {
    name: 'Rhubarbe',
    category: 'Légumes',
    image: '/images/vegetables/rhubarbe.webp',
  },
  {
    name: 'Salade batavia',
    category: 'Légumes',
    image: '/images/vegetables/salade-batavia.webp',
  },
  {
    name: 'Salade feuille de chêne',
    category: 'Légumes',
    image: '/images/vegetables/salade-feuille-de-chene.webp',
  },
  {
    name: 'Salade mâche rampon',
    category: 'Légumes',
    image: '/images/vegetables/salade-mache-rampon.webp',
  },
  {
    name: 'Salade frisée',
    category: 'Légumes',
    image: '/images/vegetables/salade-frisee.webp',
  },
  {
    name: 'Salade laitue romaine',
    category: 'Légumes',
    image: '/images/vegetables/salade-laitue-romaine.webp',
  },
  {
    name: 'Salade laitue rouge',
    category: 'Légumes',
    image: '/images/vegetables/salade-laitue-rouge.webp',
  },
  {
    name: 'Salade laitue verte',
    category: 'Légumes',
    image: '/images/vegetables/salade-laitue-verte.webp',
  },
  {
    name: 'Salade laitue iceberg',
    category: 'Légumes',
    image: '/images/vegetables/salade-laitue-iceberg.webp',
  },
  {
    name: 'Salade pissenlit',
    category: 'Légumes',
    image: '/images/vegetables/salade-pissenlit.webp',
  },
  {
    name: 'Asperges vertes',
    category: 'Légumes',
    image: '/images/vegetables/asperges-vertes.webp',
  },
  {
    name: 'Asperges blanches',
    category: 'Légumes',
    image: '/images/vegetables/asperges-blanches.webp',
  },
  {
    name: 'Bambou',
    category: 'Légumes',
    image: '/images/vegetables/pousses-de-bambou.webp',
  },
  {
    name: 'Céleri branche',
    category: 'Légumes',
    image: '/images/vegetables/celeri-branche.webp',
  },
  {
    name: 'Soja',
    category: 'Légumes',
    image: '/images/vegetables/soja-germes.webp',
  },
  {
    name: 'Potimaron potiron',
    category: 'Légumes',
    image: '/images/vegetables/potimaron-potiron.webp',
  },
  {
    name: 'Pousses de bambou',
    category: 'Légumes',
    image: '/images/vegetables/pousses-de-bambou.webp',
  },
  {
    name: 'Fenouil',
    category: 'Légumes',
    image: '/images/vegetables/fenouil.webp',
  },
  {
    name: 'Champignon',
    category: 'Légumes',
    image: '/images/vegetables/champignon.webp',
  },
  {
    name: 'Artichaut',
    category: 'Légumes',
    image: '/images/vegetables/artichaut.webp',
  },
  {
    name: 'Brocoli',
    category: 'Légumes',
    image: '/images/vegetables/brocoli.webp',
  },
  {
    name: 'Chou-fleur',
    category: 'Légumes',
    image: '/images/vegetables/chou-fleur.webp',
  },
  {
    name: 'Chou chinois',
    category: 'Légumes',
    image: '/images/vegetables/chou-chinois.webp',
  },
  {
    name: 'Chou blanc',
    category: 'Légumes',
    image: '/images/vegetables/chou-blanc.webp',
  },
  {
    name: 'Chou rouge',
    category: 'Légumes',
    image: '/images/vegetables/chou-rouge.webp',
  },
  {
    name: 'Chou frisé',
    category: 'Légumes',
    image: '/images/vegetables/chou-frise.webp',
  },
  {
    name: 'Chou fleur',
    category: 'Légumes',
    image: '/images/vegetables/chou-fleur.webp',
  },
  {
    name: 'Chou rave',
    category: 'Légumes',
    image: '/images/vegetables/chou-rave.webp',
  },
  {
    name: 'Chou pak choï',
    category: 'Légumes',
    image: '/images/vegetables/chou-pak-choi.webp',
  },
  {
    name: 'Basilic',
    category: 'Légumes',
    image: '/images/vegetables/basilic.webp',
  },
  {
    name: 'Ciboulette',
    category: 'Légumes',
    image: '/images/vegetables/ciboulette.webp',
  },
  {
    name: 'Citrouille',
    category: 'Légumes',
    image: '/images/vegetables/citrouille.webp',
  },
  {
    name: 'Céleri branche',
    category: 'Légumes',
    image: '/images/vegetables/celeri-branche.webp',
  },
  {
    name: 'Céleri rave',
    category: 'Légumes',
    image: '/images/vegetables/celeri-rave.webp',
  },
  {
    name: 'Coriandre',
    category: 'Légumes',
    image: '/images/vegetables/coriandre.webp',
  },
  {
    name: 'Estragon',
    category: 'Légumes',
    image: '/images/vegetables/estragon.webp',
  },
  {
    name: 'Marjolaine',
    category: 'Légumes',
    image: '/images/vegetables/marjolaine.webp',
  },
  {
    name: 'Menthe',
    category: 'Légumes',
    image: '/images/vegetables/menthe.webp',
  },
  {
    name: 'Origan',
    category: 'Légumes',
    image: '/images/vegetables/origan.webp',
  },
  {
    name: 'Patisson',
    category: 'Légumes',
    image: '/images/vegetables/patisson.webp',
  },
  {
    name: 'Persil',
    category: 'Légumes',
    image: '/images/vegetables/persil.webp',
  },
  {
    name: 'Romarin',
    category: 'Légumes',
    image: '/images/vegetables/romarin.webp',
  },
  {
    name: 'Sauge',
    category: 'Légumes',
    image: '/images/vegetables/sauge.webp',
  },
  {
    name: 'Thym',
    category: 'Légumes',
    image: '/images/vegetables/thym.webp',
  },
  {
    name: 'Rutabaga',
    category: 'Légumes',
    image: '/images/vegetables/rutabaga.webp',
  },
];

const fishs = [
  {
    name: 'Aiglefin ou églefin',
    category: 'Poissons',
    image: '/images/fishs/Aiglefin-ou-églefin.webp',
  },
  {
    name: 'Anchois',
    category: 'Poissons',
    image: '/images/fishs/Anchois.webp',
  },
  {
    name: 'Anguille',
    category: 'Poissons',
    image: '/images/fishs/Anguille.webp',
  },
  { name: 'Bar', category: 'Poissons', image: '/images/fishs/Bar.webp' },
  {
    name: 'Brochet',
    category: 'Poissons',
    image: '/images/fishs/Brochet.webp',
  },
  {
    name: 'Cabillaud/morue',
    category: 'Poissons',
    image: '/images/fishs/Cabillaud:morue.webp',
  },
  {
    name: 'Carpe',
    category: 'Poissons',
    image: '/images/fishs/Carpe.webp',
  },
  {
    name: 'Colin d’Alaska',
    category: 'Poissons',
    image: '/images/fishs/Colin-d’Alaska.webp',
  },
  {
    name: 'Daurade/dorade grise et dorade',
    category: 'Poissons',
    image: '/images/fishs/Daurade:dorade grise-et-dorade.webp',
  },
  {
    name: 'Dorade',
    category: 'Poissons',
    image: '/images/fishs/Dorade.webp',
  },
  {
    name: 'Eperlan',
    category: 'Poissons',
    image: '/images/fishs/Eperlan.webp',
  },
  {
    name: 'Espadon',
    category: 'Poissons',
    image: '/images/fishs/Espadon.webp',
  },
  {
    name: 'Esturgeon',
    category: 'Poissons',
    image: '/images/fishs/Esturgeon.webp',
  },
  {
    name: 'Féra du Léman',
    category: 'Poissons',
    image: '/images/fishs/Féra-du-Léman.webp',
  },
  {
    name: 'Flétan de l’Atlantique ou du Pacifique',
    category: 'Poissons',
    image: '/images/fishs/Flétan-de-l’Atlantique-ou-du-Pacifique.webp',
  },
  {
    name: 'Flétan du Groënland/noir/flétan',
    category: 'Poissons',
    image: '/images/fishs/Flétan-du-Groënland:noir:flétan.webp',
  },
  {
    name: 'Hareng',
    category: 'Poissons',
    image: '/images/fishs/Hareng.webp',
  },
  {
    name: 'Lieu jaune',
    category: 'Poissons',
    image: '/images/fishs/Lieu-jaune.webp',
  },
  {
    name: 'Lieu noir',
    category: 'Poissons',
    image: '/images/fishs/Lieu-noir.webp',
  },
  {
    name: 'Lotte',
    category: 'Poissons',
    image: '/images/fishs/Lotte.webp',
  },
  {
    name: 'Maquereau',
    category: 'Poissons',
    image: '/images/fishs/Maquereau.webp',
  },
  {
    name: 'Merlan',
    category: 'Poissons',
    image: '/images/fishs/Merlan.webp',
  },
  {
    name: 'Merlu/merlu européen',
    category: 'Poissons',
    image: '/images/fishs/Merlu:merlu-européen.webp',
  },
  {
    name: 'Mérou de Méditerranée/mérou brun ',
    category: 'Poissons',
    image: '/images/fishs/Mérou-de-Méditerranée:mérou-brun .webp',
  },
  {
    name: 'Omble chevalier',
    category: 'Poissons',
    image: '/images/fishs/Omble-chevalier.webp',
  },
  {
    name: 'Pangasius',
    category: 'Poissons',
    image: '/images/fishs/Pangasius.webp',
  },
  {
    name: 'Perche commune',
    category: 'Poissons',
    image: '/images/fishs/Perche-commune.webp',
  },
  {
    name: 'Perche du Nil',
    category: 'Poissons',
    image: '/images/fishs/Perche-du-Nil.webp',
  },
  {
    name: 'Raie bouclée',
    category: 'Poissons',
    image: '/images/fishs/Raie-bouclée.webp',
  },
  {
    name: 'Requin',
    category: 'Poissons',
    image: '/images/fishs/Requin.webp',
  },
  {
    name: 'Rouget barbet de roche',
    category: 'Poissons',
    image: '/images/fishs/Rouget-barbet-de-roche.webp',
  },
  {
    name: 'Saint pierre',
    category: 'Poissons',
    image: '/images/fishs/Saint-pierre.webp',
  },
  {
    name: 'Sardine',
    category: 'Poissons',
    image: '/images/fishs/Sardine.webp',
  },
  {
    name: 'Saumon',
    category: 'Poissons',
    image: '/images/fishs/Saumon.webp',
  },
  {
    name: 'Sébaste',
    category: 'Poissons',
    image: '/images/fishs/Sébaste.webp',
  },
  {
    name: 'Sole',
    category: 'Poissons',
    image: '/images/fishs/Sole.webp',
  },
  {
    name: 'Thon',
    category: 'Poissons',
    image: '/images/fishs/Thon.webp',
  },
  {
    name: 'Tilapia',
    category: 'Poissons',
    image: '/images/fishs/Tilapia.webp',
  },
  {
    name: 'Truite',
    category: 'Poissons',
    image: '/images/fishs/Truite.webp',
  },
  {
    name: 'Turbot',
    category: 'Poissons',
    image: '/images/fishs/Turbot.webp',
  },
  {
    name: 'Vivaneau campèche',
    category: 'Poissons',
    image: '/images/fishs/Vivaneau-campèche.webp',
  },
];

const starchy = [
  {
    name: 'Avoine',
    category: 'Féculents',
    image: '/images/starchy/Avoine.webp',
  },
  {
    name: 'Blé',
    category: 'Féculents',
    image: '/images/starchy/Blé.webp',
  },
  {
    name: 'Épeautre',
    category: 'Féculents',
    image: '/images/starchy/Épeautre.webp',
  },
  {
    name: 'Fèves',
    category: 'Féculents',
    image: '/images/starchy/Fèves.webp',
  },
  {
    name: 'Flageolets',
    category: 'Féculents',
    image: '/images/starchy/Flageolets.webp',
  },
  {
    name: 'Haricots secs',
    category: 'Féculents',
    image: '/images/starchy/Haricots-secs.webp',
  },
  {
    name: 'Igname',
    category: 'Féculents',
    image: '/images/starchy/Igname.webp',
  },
  {
    name: 'Lentilles',
    category: 'Féculents',
    image: '/images/starchy/Lentilles.webp',
  },
  {
    name: 'Maïs',
    category: 'Féculents',
    image: '/images/starchy/Maïs.webp',
  },
  {
    name: 'Manioc',
    category: 'Féculents',
    image: '/images/starchy/Manioc.webp',
  },
  {
    name: 'Millet',
    category: 'Féculents',
    image: '/images/starchy/Millet.webp',
  },
  {
    name: 'Orge',
    category: 'Féculents',
    image: '/images/starchy/Orge.webp',
  },
  {
    name: 'Patate douce',
    category: 'Féculents',
    image: '/images/starchy/Patate-douce.webp',
  },
  {
    name: 'Pois chiche',
    category: 'Féculents',
    image: '/images/starchy/Pois chiche.webp',
  },
  {
    name: 'Pois cassés',
    category: 'Féculents',
    image: '/images/starchy/Pois-cassés.webp',
  },
  {
    name: 'Pomme de terre',
    category: 'Féculents',
    image: '/images/starchy/Pomme-de-terre.webp',
  },
  {
    name: 'Riz',
    category: 'Féculents',
    image: '/images/starchy/Riz.webp',
  },
  {
    name: 'Seigle',
    category: 'Féculents',
    image: '/images/starchy/Seigle.webp',
  },
  {
    name: 'Topinambour',
    category: 'Féculents',
    image: '/images/starchy/Topinambour.webp',
  },
];


module.exports = vegetables.concat(fishs).concat(starchy);