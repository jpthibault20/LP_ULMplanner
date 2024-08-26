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
      price: 'Gratuit',
      features: [
        {
          title: "1 semaine d'accès complet à toutes les fonctionnalités",
        },
        {
          title: "5 heures réservables par mois après l'essai",
        },
        {
          title: "Accès au calendrier de réservations instructeur/élèves",
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
      price: '2€ / heure réservée',
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
      price: '3,50€ / heure réservée',
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
