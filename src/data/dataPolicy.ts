export interface IDataPolicy {
  title: string;
  article: IArticle[];
}

export interface IArticle {
  subTitle?: string;
  paragraph: string;
}

export const dataPolicyLastUpdated = new Date(2024, 0, 1);

export const dataPolicy: IDataPolicy[] = [
  {
    title: "Local Storage",
    article: [
      {
        paragraph: `Local storage refers to a web browser's capability to store data on a user's device. It allows web applications to save information locally on the user's computer, which can be accessed and retrieved later, even after the user has closed the browser or navigated away from the website. This feature is part of the broader set of web storage technologies`,
      },
      {
        subTitle: "How do we use local storage feature?",
        paragraph:
          "We store information about you the user to ease your navigation and use of the application. Sensitive information will never be stored on the client side and only experience supportive data will be stored in the local storage.",
      },
      {
        paragraph: "Examples of data stored in the local storage: Encrypted token, Object data that store themes, User preferences, Last visited page or state and ETC.",
      },
    ],
  },
  {
    title: "Cookies",
    article: [
      {
        subTitle: "What Are Cookies?",
        paragraph:
          "Cookies are very small text files that are placed on your device when you visit some websites, applications, or other web based services (for ease we are going to call them “Sites”) to help identify a computer, browser, or device.",
      },
      {
        paragraph: "- We do not use any type of cookies and rely on the 'Local Storage' as stated above.",
      },
    ],
  },
  {
    title: "Changes to Privacy Policy",
    article: [
      {
        paragraph:
          "We reserve the right to make changes to this Data Privacy Policy. Please check back from time to time to review these changes. If we change this Privacy Policy in a material way, we will provide appropriate notice to you and, as appropriate, provide additional choices regarding such change. As permitted by applicable law, your continued use of the Services means that you accept these changes.",
      },
    ],
  },
];
