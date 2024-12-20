import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Des formules flexibles pour chaque aéroclub',
  description:
    'Que vous soyez un petit club ou une grande organisation, nous avons une formule adaptée à vos besoins et à votre budget.',
  plans: [
    {
      id: 'free',
      title: 'Offre de découverte',
      description: 'Une offre pour vous permettre de tester notre application.',
      price: 'prix à venir',
      isRecommended: true,
      features: [
        {
          title: "30 jours d'accès complet à toutes les fonctionnalités",
        },
        {
          title: "Accès au calendrier de réservations instructeur/élèves",
        },
        {
          title: "Accès au calendrier de location machines",
        },
      ],
      action: {
        href: '',
      },
    },
    {
      id: 'essentiel',
      title: "L'essentiel",
      description: 'Une offre essentielle mais pas moins efficace.',
      price: 'prix à venir',
      isRecommended: true,
      features: [
        {
          title: "Accès au calendrier instructeur/élève",
        },
        {
          title: "Paiement en ligne sécurisé ",
        },
        {
          title: "Frais de paiment en ligne compris dans l'offre",
        },
        {
          title: "modue location",
        },
        {
          title: "Calendrier location machines",
        },
        {
          title: "Accès sur mobile et desktop",
        },
        {
          title: "Sans engagement",
        },
        null,
        {
          title: 'Recherche beta testeur pour cette offre',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#waitlist',
        label: "Devenir beta testeur"
      },
    },
    {
      id: 'prenium',
      title: 'La prenium',
      description: 'Une offre complète les clubs les plus exigeants.',
      price: 'prix à venir',
      isRecommended: true,
      features: [
        {
          title: "Tous ce qui es compris dans l'offre essentiel",
        },
        {
          title: "Chat instructeur/élèves",
        },
        {
          title: "Suivi personnalisé des élèves",
        },
        {
          title: "Gestion des élèves ",
        },
        {
          title: "suivi des locations",
        },
        {
          title: "suivi des machines",
        },
        {
          title: "Sans engagement",
        },
        null,
        {
          title: 'Recherche beta testeur pour cette offre',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#waitlist',
        label: "Devenir beta testeur"
      },
    },
  ],
}
