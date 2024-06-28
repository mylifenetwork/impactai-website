import { MdHealthAndSafety } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { RiTreeFill } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import healthcare_image_1 from "../assets/medical_1.png";
import healthcare_image_2 from "../assets/medical_2.png";
import education_image_1 from "../assets/education_1.png";
import education_image_2 from "../assets/education_2.png";
import environment_image_1 from "../assets/environment_1.png";
import environment_image_2 from "../assets/environment_2.png";
import accessibility_image_1 from "../assets/accessibility_1.png";
import accessibility_image_2 from "../assets/accessibility_2.png";
import economy_image_1 from "../assets/economy_1.png";
import economy_image_2 from "../assets/economy_2.png";
import safety_image_1 from "../assets/safety_1.png";
import safety_image_2 from "../assets/safety_2.png";
const icon_small = {
  color: "var(--secondary-four)",
  fontSize: "45px",
};

let landingdisplaydata = [
  {
    category: "Healthcare",
    class: "health",
    image: healthcare_image_1,
    image_2: healthcare_image_2,
    description: "Transforming Health with Smart Diagnostics and Care",
    detailed_description:
      "Artificial Intelligence (AI) is revolutionizing healthcare by enhancing diagnostics, personalizing treatment plans, and improving patient outcomes. AI-driven tools can analyze vast datasets swiftly, identifying patterns and predicting disease outbreaks. According to a report by McKinsey, AI could generate $100 billion annually in value across the healthcare sector. Additionally, AI-powered chatbots provide 24/7 medical advice, significantly reducing the burden on healthcare systems.",
    stats: [
      {
        stat: "34%",
        icon: "",
        stat_desc: "Increase in Healthcare Efficiency",
        stat_link:
          "https://www.pwc.com/gx/en/industries/healthcare/publications/ai-robotics-new-health/survey-results.html",
      },
      {
        stat: "31%",
        stat_desc: "Faster Diagnoses",
        stat_link:
          "https://www.pwc.com/gx/en/industries/healthcare/publications/ai-robotics-new-health/survey-results.html",
        icon: "",
        graph: "",
      },
      {
        stat: "27%",
        icon: "",
        stat_desc: "Better Treatment Recommendations",
        stat_link:
          "https://www.pwc.com/gx/en/industries/healthcare/publications/ai-robotics-new-health/survey-results.html",
      },
    ],
    icon: (
      <MdHealthAndSafety
        style={{ fontSize: "80px", color: "var(--tertiary-light)" }}
      />
    ),
    icon_small: <MdHealthAndSafety style={icon_small} />,
  },
  {
    category: "Education",
    class: "education",
    image: education_image_2,
    image_2: education_image_1,
    description: "Personalizing Learning Experiences for All Ages",
    detailed_description:
      "Artificial Intelligence (AI) is transforming education by personalizing learning experiences, automating administrative tasks, and providing data-driven insights. AI-driven tools can adapt to individual student needs, offering customized resources and support. According to a report by HolonIQ, AI in education is expected to grow to $6 billion by 2025. Additionally, AI-powered platforms facilitate remote learning and improve accessibility, ensuring education for all.",
    stats: [
      {
        stat: "45%",
        stat_desc: "Tuition Cost Savings",
        stat_link: "https://www.rask.ai/research/ai-in-education",
        icon: "",
      },
      {
        stat: "39%",
        stat_desc: "Less Student Workload",
        stat_link: "https://www.rask.ai/research/ai-in-education",
        icon: "",
      },
      {
        stat: "75%",
        stat_desc: "Improved Learning Outcomes",
        stat_link:
          "https://www.holoniq.com/notes/artificial-intelligence-in-education-2023-survey-insights",
        icon: "",
      },
    ],
    icon: (
      <GiBookCover
        style={{ fontSize: "80px", color: "var(--tertiary-light)" }}
      />
    ),
    icon_small: <GiBookCover style={icon_small} />,
  },
  {
    category: "Environment",
    class: "environment",
    image: environment_image_1,
    image_2: environment_image_2,
    description: "Innovative AI Solutions for a Sustainable World",
    detailed_description:
      "Artificial Intelligence (AI) is making significant strides in addressing environmental challenges by optimizing resource management, predicting natural disasters, and monitoring ecological changes. AI-driven tools analyze vast amounts of environmental data, offering actionable insights for conservation efforts. According to PwC, AI applications could reduce global greenhouse gas emissions by up to 4% by 2030. Additionally, AI-powered systems help in identifying illegal deforestation and poaching activities more efficiently.",
    stats: [
      {
        stat: "4%",
        stat_desc: "Reduced Greenhouse Gases",
        stat_link: "https://dig.watch/trends/digital-and-environment",
        icon: "",
      },
      {
        stat: "30%",
        stat_desc: "Greater Harvest Yield",
        stat_link:
          "https://www.cfr.org/blog/artificial-intelligences-environmental-costs-and-promise",
        icon: "",
      },
      {
        stat: "40%",
        stat_desc: "Improved Energy Efficiency",
        stat_link: "https://research.aimultiple.com/sustainability-ai/",
        icon: "",
      },
    ],
    icon: (
      <RiTreeFill
        style={{ fontSize: "80px", color: "var(--tertiary-light)" }}
      />
    ),
    icon_small: <RiTreeFill style={icon_small} />,
  },
  {
    category: "Accessibility",
    class: "accessibility",
    image: accessibility_image_1,
    image_2: accessibility_image_2,
    description: "Breaking Barriers with Intelligent Assistive Technologies",
    detailed_description:
      "Artificial Intelligence (AI) is enhancing accessibility by developing tools that support individuals with disabilities, improving inclusivity and independence. AI-driven solutions can transcribe speech, convert text to speech, and provide real-time translation, making information more accessible. According to the World Bank, over 1 billion people, or 15% of the world's population, experience some form of disability. Additionally, AI-powered applications can assist in navigation for visually impaired individuals, ensuring safer and more efficient mobility.",
    stats: [
      {
        stat: "40%",
        stat_desc: "More Inclusive Communication",
        stat_link: "https://www.microsoft.com/en-us/accessibility/innovation",
        icon: "",
      },
      {
        stat: "91%",
        stat_desc: "Improvement in Quality of Life",
        stat_link:
          "https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/wp-content/uploads/2023/05/Empowering-persons-with-disabilities-through-digital-innovation.pdf",
        icon: "",
      },
      {
        stat: "74%",
        stat_desc: "Increased Access to Equal Education",
        stat_link:
          "https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/wp-content/uploads/2023/05/Empowering-persons-with-disabilities-through-digital-innovation.pdf",
        icon: "",
      },
    ],
    icon: (
      <IoAccessibility
        style={{ fontSize: "80px", color: "var(--tertiary-light)" }}
      />
    ),
    icon_small: <IoAccessibility style={icon_small} />,
  },
  {
    category: "Economy",
    class: "economy",
    image: economy_image_1,
    image_2: economy_image_2,
    description: "Inclusive Growth through Intelligent Solutions",
    detailed_description:
      "Artificial Intelligence (AI) is revolutionizing the economy by enhancing productivity, driving innovation, and enabling data-driven decision-making. AI-driven tools can optimize supply chains, improve customer service, and streamline operations across various industries. According to McKinsey, AI could add $13 trillion to the global economy by 2030. Additionally, AI-powered analytics can help businesses identify market trends and consumer preferences, leading to more strategic investments and competitive advantages.",
    stats: [
      {
        stat: "11%",
        stat_desc: "GDP Growth due to AI in the next 10 Years",
        stat_link:
          "https://www.businessinsider.com/ai-artificial-intelligence-productivity-economy-gdp-growth-impact-daron-acemoglu-2024-5#:~:text=AI%20will%20provide%20just%20a,next%20decade%2C%20MIT%20economist%20says.&text=The%20productivity%20boost%20that%20AI,%25%2C%20economist%20Daron%20Acemoglu%20wrote.",
        icon: "",
      },
      {
        stat: "50%",
        stat_desc: "Improved Cost Efficiencies",
        stat_link: "https://masterofcode.com/blog/benefits-of-generative-ai",
        icon: "",
      },
      {
        stat: "7%",
        stat_desc: "Better Forecasting Accuracy",
        stat_link: "https://masterofcode.com/blog/ai-statistics",
        icon: "",
      },
    ],
    icon: (
      <FaChartLine
        style={{ fontSize: "80px", color: "var(--tertiary-light)" }}
      />
    ),
    icon_small: <FaChartLine style={icon_small} />,
  },
  {
    category: "Safety",
    class: "safety",
    image: safety_image_2,
    image_2: safety_image_1,
    description: "Enhancing Public Safety with Predictive AI Solutions",
    detailed_description:
      "Artificial Intelligence (AI) is enhancing safety by improving threat detection, automating emergency responses, and analyzing data to predict and prevent incidents. AI-driven tools can monitor environments in real-time, identify potential hazards, and respond more quickly than human operators. According to MarketsandMarkets, the AI in safety market is projected to reach $38.2 billion by 2026. Additionally, AI-powered systems can significantly reduce human error, leading to safer workplaces and public spaces.",
    stats: [
      {
        stat: "90%",
        stat_desc: "Reduction in Road Accidents",
        stat_link:
          "https://www.forbes.com/sites/bernardmarr/2023/12/15/the-new-frontier-in-workplace-safety-data-analytics-and-ai/",
        icon: "",
      },
      {
        stat: "50%",
        stat_desc: "Improvement in Construction Safety",
        stat_link: "https://naspweb.com/blog/6375-2/",
        icon: "",
      },
      {
        stat: "90%",
        stat_desc: "Reduction in Cost of Frauds",
        stat_link: "https://www.ibm.com/ai-cybersecurity",
        icon: "",
      },
    ],
    icon: (
      <FaLock style={{ fontSize: "80px", color: "var(--tertiary-light)" }} />
    ),
    icon_small: <FaLock style={icon_small} />,
  },
];
export default landingdisplaydata;
