import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiClock,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiMessageSquare,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { VscGraphLine } from "react-icons/vsc";
import { FaCalendar, FaCalendarAlt, FaHistory, FaMobile, FaMoneyBill, FaPlane, FaPlaneArrival, FaTimes, FaTimesCircle } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="AeroClubConnect"
        description=""
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        {/* <TestimonialsSection /> */}

        <PricingSection />

        <WaitlistSection /> {/* Ajoutez la section Waitlist ici */}

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Gérez votre
                <Br /> Aéro-club facilement
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Une application dédiée aux aéro-club pour simplifier les réservations, la gestion des instructeurs, des élèves, et des locations

              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="8" spacing="8">
                {/* <NextjsLogo height="28px" /> <ChakraLogo height="20px" /> */}
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/#waitlist">
                  Suivre le projet
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  // layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="32"
        features={[
          {
            title: "Location",
            icon: FaPlane,
            description: "Gérez facilement la location de vos machinesavec notre service intuitif : planifiez, suivez les réservations, et facilitez les paiements en toute simplicité",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Gestion élèves",
            icon: IoMdSchool,
            description:
              "Organisez efficacement la gestion des élèves : inscriptions simplifiées, suivi des disponibilités, planification des cours et communications facilitées.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Paiment intégré",
            icon: FaMoneyBill1Wave,
            description:
              "Simplifiez les transactions avec notre système de paiement intégré : réservez, payez, et gérez vos activités en toute sécurité et transparence.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Disponibilité instructeur",
            icon: FaCalendarAlt,
            description:
              "Les instructeurs peuvent facilement indiquer leurs disponibilités en temps réel, permettant une gestion simplifiée des plannings et des réservations.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Participez à notre développement et soyez récompensé !">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Nous sommes en pleine phase de développement de notre application dédiée aux éro-club. À ce stade, nous n’avons pas encore de produit final à proposer, mais votre avis est essentiel pour créer une solution qui répond à vos besoins. En participant à notre enquête, vous contribuez à façonner notre outil et, en remerciement, vous recevrez des récompenses exclusives une fois l’application lancée !<br />  Cliquez sur le lien ci-dessous pour répondre à notre questionnaire et partager vos idées
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            px="8"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
            cursor="pointer"
            onClick={() => window.location.href = 'https://forms.gle/4NxghHNWCuQwWuwPA'}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Lien de notre questionnaire
              </Text>{" "}
            </Box>

          </Flex>
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="Notre vision pour les aéro-club">
        <Text color="muted" fontSize="lg">
          Découvrez notre vision d&apos;une plateforme qui simplifie la gestion des aéro-club. Notre objectif est de créer un outil intuitif qui facilite les réservations, la planification et les paiements, tout en optimisant le temps des instructeurs et des membres. Rejoignez-nous dans cette aventure et aidez-nous à façonner l&apos;avenir des aéro-club !
        </Text>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="Vol-évasion avec JP-développement"
        description="Fondateur"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        Grâce à l’expertise combinée de notre équipe web et d’un aéroclub de l’Est de la France, nous développons une application sur mesure pour les aéroclubs, avec des fonctionnalités spécifiques et une expérience utilisateur adaptée aux réalités du terrain.
      </HighlightsTestimonialItem>

      <HighlightsItem
        colSpan={[1, null, 2]}
        title=" Pourquoi notre projet est unique"
      >
        <Text color="muted" fontSize="lg">
          Ce qui distingue notre application des autres, c’est notre approche unique : un partenariat solide entre des experts en développement web et un aéroclub expérimenté. Cette collaboration nous permet de comprendre en profondeur les besoins des aéro-club et de créer une solution sur mesure. Avec une équipe engagée sur tous les aspects, de la technologie à l’expérience terrain
        </Text>
        {/* <Wrap mt="8">
          {[
            "authentication",
            "navigation",
            "crud",
            "settings",
            "multi-tenancy",
            "layouts",
            "billing",
            "a11y testing",
            "server-side rendering",
            "documentation",
            "onboarding",
            "storybooks",
            "theming",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap> */}
      </HighlightsItem>

    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Fonctionnalités Clés de
          <Br /> Notre Application pour les Aéroclubs
        </Heading>
      }
      description={
        <>
          Notre application simplifie la gestion des aéroclubs avec des fonctionnalités conçues pour répondre aux besoins spécifiques des instructeurs, des élèves, et des gestionnaires.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Calendrier.",
          icon: FaCalendar,
          description:
            "Planifiez et gérez facilement les réservations de vols, cours et événements avec un calendrier intuitif.",
          variant: "inline",
        },
        {
          title: "Suivi des disponibilités.",
          icon: FiClock,
          description:
            "Les instructeurs peuvent indiquer leurs disponibilités en temps réel, facilitant la planification et les inscriptions.",
          variant: "inline",
        },
        {
          title: "Gestion des élèves.",
          icon: GiNotebook,
          description:
            "Suivi des progrès des élèves, gestion des inscriptions et des communications en un seul endroit.",
          variant: "inline",
        },
        {
          title: "Paiement en ligne sécurisé.",
          icon: FaMoneyBill,
          description:
            "Intégration de solutions de paiement sécurisées pour faciliter les transactions et les abonnements.",
          variant: "inline",
        },
        {
          title: "Location d’ULM.",
          icon: FaPlaneArrival,
          description:
            "Gérez les réservations et la disponibilité des ULM pour les locations avec une interface claire et simple.",
          variant: "inline",
        },
        {
          title: "Rapports et statistiques.",
          icon: VscGraphLine,
          description:
            "Accédez à des rapports détaillés sur les réservations, les paiements et les performances pour une meilleure gestion.",
          variant: "inline",
        },
        {
          title: "Historique des vols.",
          icon: FaHistory,
          description:
            "Consultez un historique détaillé des vols et des sessions de formation pour un suivi précis des activités et des performances.",
          variant: "inline",
        },
        {
          title: "Plateforme mobile.",
          icon: FaMobile,
          description:
            "Accédez à toutes les fonctionnalités de l’application depuis votre smartphone pour une gestion facile et flexible en déplacement.",
          variant: "inline",
        },
        {
          title: "Outils de communication intégrés.",
          icon: FiMessageSquare,
          description:
            "Facilitez la communication entre instructeurs, élèves et membres du club avec des outils de messagerie et de notifications intégrés.",
          variant: "inline",
        }
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Les offres seront ajuster une fois le projet lancé.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);




    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      setTimeout(() => {
        setLoading(false);
        setEmail("");
        toast({
          title: "Inscription réussie.",
          description: "Merci pour votre inscription. Vous serez informé dès que nous aurons plus d'informations.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }, 1000);
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
    }






    // Simulate API call

  };

  return (
    <Box py="20" id="waitlist">
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", md: "row" }} // Stack en colonne sur les petits écrans, en ligne sur les écrans moyens et grands
          spacing={10}
          align={{ base: "stretch", md: "flex-start" }} // Alignement des enfants pour les petits écrans (étirés), ajustement sur les plus grands
          justify="space-between"
        >
          <Stack spacing={4} maxW={{ base: "100%", md: "50%" }}> {/* Ajustement de la largeur pour les petits écrans */}
            <Heading as="h2" size="xl" textAlign="left">
              Rejoignez notre liste de beta testeur
            </Heading>
            <Text fontSize="lg" color="gray.400" textAlign="left">
              Inscrivez-vous pour être parmi les premiers informés lorsque notre application sera prête. La liste d&apos;attente vous donnera un accès exclusif à la première version de notre application.
            </Text>
          </Stack>
          <Box
            color={"#1D2025"}
            as="form"
            onSubmit={handleSubmit}
            bg={useColorModeValue("white", "gray.800")}
            p="8"
            rounded="md"
            shadow="md"
            maxW="md"
            borderRadius="md"
            border="1px"
            w={{ base: "100%", md: "50%" }} // Utilisation de w="100%" sur petits écrans
          >
            <FormControl id="email" isRequired>
              <FormLabel color="white">Email</FormLabel>
              <Input
                borderRadius="md"
                border="1px"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre adresse e-mail"
              />
              <FormHelperText>
                Ce n&apos;est pas une newsletter, c&apos;est une liste d&apos;inscription pour être informé lorsque nous aurons des mises à jour importantes.
              </FormHelperText>
            </FormControl>
            <Button
              mt="4"
              colorScheme="primary"
              type="submit"
              isLoading={loading}
            >
              Inscrivez-vous
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};


export default Home;


