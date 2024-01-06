export interface IPrivacyPolicy {
  title: string;
  intro?: string;
  article: IArticle[];
}

export interface IArticle {
  subTitle?: string;
  paragraph: string;
}

export const privacyPolicyLastUpdated = new Date(2024, 0, 1);

export const privacyPolicy: IPrivacyPolicy[] = [
  {
    title: "Categories of Information Collected",
    intro: "The type of information we collect depends on how you use the Services. Generally, we collect the following information:",
    article: [
      {
        subTitle: "Identifiers / Contact Information:",
        paragraph: "Name, email address and unique IDs.",
      },
      {
        subTitle: "Protected Characteristics:",
        paragraph: "Age and gender.",
      },
      {
        subTitle: "Profile Inferences:",
        paragraph:
          "Inferences made from your information to help create a personalized profile so we can identify goods and services that may be of interest and update the meta athlete data.",
      },
      {
        subTitle: "Sensitive Information:",
        paragraph: "Account credentials (user name and password - Encrypted).",
      },
    ],
  },
  {
    title: "How We Use Information",
    intro: "We use the information we collect in an anonymous way in order to maintain the meta data as follows:",
    article: [
      {
        subTitle: "Meta Data:",
        paragraph: "Provide you and other users with analyzed data content which was assessed in order to define the meta data.",
      },
      {
        subTitle: "Protection and Privacy:",
        paragraph: "Protect your vital interests or those of another person (for example, another user).",
      },
    ],
  },
  {
    title: "Sources of Information We Collect",
    intro: "The only information we collect is the one you provide us directly, such as when you set up an account, sign-up, update your progress or contact us.",
    article: [],
  },
  {
    title: "When We Share Information",
    intro: "The only way we share information is meta data anonymously as statistics only.",
    article: [],
  },
  {
    title: "Data Rights",
    intro: "You have certain rights over your personal information, including the right to:",
    article: [
      {
        paragraph: "Request access to or a copy of your personal information.",
      },
      {
        paragraph: "Request deletion of your personal information",
      },
      {
        paragraph: "Request correction or modification of your personal information",
      },
      {
        paragraph:
          "Be informed about the personal information we collect and/or process about you, the sources of personal information, and the third parties with whom information was shared or sold and for what purposes",
      },
      {
        paragraph: "Withdraw consent, if processing is based on consent",
      },
    ],
  },
  {
    title: "Data Retention",
    intro:
      "We’ll keep your information for as long as necessary to provide you with the Services, fulfil our legal obligations, and/or exercise, defend or establish our rights.",
    article: [],
  },
  {
    title: "Data Security",
    intro:
      "We follow generally accepted industry standards and maintain appropriate safeguards to help protect the security, integrity, and privacy of the information we collect about you. These security measures are designed to protect against the accidental or unlawful destruction, loss, misuse, alteration, and unauthorized disclosure of, or access to, the information under our control. However, no system can be 100% secure and we cannot guarantee our security measures.",
    article: [],
  },
  {
    title: "Changes to Privacy Policy",
    intro:
      "We reserve the right to make changes to this Privacy Policy. Please check back from time to time to review these changes. If we change this Privacy Policy in a material way, we will provide appropriate notice to you and, as appropriate, provide additional choices regarding such change. As permitted by applicable law, your continued use of the Services means that you accept these changes.",
    article: [],
  },
];
