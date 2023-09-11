import { Data } from "../types";
import Air from "../assets/Drones/Air Scorpion/rendu-final-2.jpg";
import LIMOSA from "../assets/Drones/LIMOSA/drone final.38(2).jpg";

export const DRONE_DATA: Data = {
  pageTitle: "Cutting-Edge Security Drone Solutions",
  pageDescription: `At ASE, we understand the importance of advanced technology in safeguarding your environments. We offer two innovative security drone solutions designed to meet your surveillance needs with precision and efficiency:`,
  categories: [
    {
      productCategory: "EMPTY",
      productCategoryDescription:
        "With ASE's security drone solutions, you can enhance your surveillance capabilities, ensuring a proactive and efficient approach to safeguarding your assets and facilities. Trust our innovative technology to deliver comprehensive aerial security solutions.",
      products: [
        {
          title: "Air Scorpion:",
          description:
            "Experience the future of aerial surveillance with Air Scorpion, our multi-rotor drone. Engineered for stability and high autonomy, this drone offers exceptional performance. Its sleek design not only complements its functionality but also ensures it's ready to handle the most challenging surveillance tasks.",
          imageSrc: Air,
          downloads: ["link1", "link2"],
        },
        {
          title: "LIMOSA",
          description:
            "For extended surveillance coverage and versatility, LIMOSA is your ideal choice. This fixed- wing drone is purpose-built for surveillance missions. With LIMOSA, you can efficiently monitor wide areas, making it a valuable asset for security and surveillance operations. With ASE's security drone solutions, you can enhance your surveillance capabilities, ensuring a proactive and efficient approach to safeguarding your assets and facilities. Trust our innovative technology to deliver comprehensive aerial security solutions.",
          imageSrc: LIMOSA,
          downloads: ["link1", "link2"],
        },
      ],
    },
  ],
};
