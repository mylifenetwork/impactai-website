const footercontent = [
  {
    title: "Company",
    contents: [
      {
        sub_title: "Privacy Policy",
        route: "/privacy-policy",
      },
      {
        sub_title: "Cookies Policy",
        route: "/cookies-policy",
      },
    ],
  },
  {
    title: "Product",
    contents: [
      {
        sub_title: "Sign Language Translation",
        route: "/projects/sign-language-translation-project",
      },
      {
        sub_title: "About Us",
        route: "/about-us",
      },
      {
        sub_title: "Technology Partners",
        route:
          window.location.pathname === "/"
            ? "#tech-partners-cnt"
            : "/#tech-partners-cnt",
      },
    ],
  },
  {
    title: "Knowledge",
    contents: [
      {
        sub_title: "Blog",
        route: "https://www.linkedin.com/company/impact-ai-hk ",
      },
      {
        sub_title: "Contact Us",
        route: "/contact-us",
      },
    ],
  },
];
export default footercontent;
