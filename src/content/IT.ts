import { Data } from "../types";
import P1 from "../assets/IT Solutions/Data Center.png";
import P2 from "../assets/IT Solutions/Wireless-web-photo.jpg";
import P3 from "../assets/IT Solutions/data center swtching solution.jpg";
import P4 from "../assets/IT Solutions/storage.jpg";
import P5 from "../assets/IT Solutions/network_solution.jpg";

export const IT_DATA: Data = {
  pageTitle: "ASE: Your Partner in Integrated IT Solutions",
  pageDescription: `At ASE, we go beyond being just a provider of IT products and solutions. As a trusted system integrator, we work closely with our clients to deliver the best-in-class IT products and solutions. Explore our comprehensive IT solutions, each designed to meet specific needs:`,
  categories: [
    {
      productCategory: "EMPTY",
      productCategoryDescription:
        "ASE is your trusted partner for integrated IT solutions that drive your business growth. Trust our expertise to build a robust IT infrastructure tailored to your specific requirements.",
      products: [
        {
          title: "Data Center Solution",
          description:
            "Our cutting-edge data center solution offers a robust and scalable infrastructure for storing, managing, and securing your critical data. We provide you with the latest technologies to ensure optimal data center performance.",
          imageSrc: P1,
          downloads: ["link1", "link2"],
        },
        {
          title: "Wireless Solutions",
          description:
            "To address your business's wireless connectivity needs, our wireless solutions are designed to offer reliable coverage and fast connectivity for your employees or customers.",
          imageSrc: P2,
          downloads: ["link1", "link2"],
        },
        {
          title: "Network Solution",
          description:
            "Our network solution expertise allows you to build a strong and secure network environment tailored to your specific requirements. We ensure that your network infrastructure is high-performing and scalable.",
          imageSrc: P5,
          downloads: ["link1", "link2"],
        },
        {
          title: "Data Center Switching Solution",
          description:
            "Data center switches play a crucial role in managing data traffic within your infrastructure. Our advanced switching solutions enable you to efficiently manage data flow within your data center.",
          imageSrc: P3,
          downloads: ["link1", "link2"],
        },
        {
          title: "Storage Solutions",
          description:
            "Efficient storage management is critical for any business. Our storage solutions are designed to meet your storage needs cost-effectively while ensuring data availability and security.",
          imageSrc: P4,
          downloads: ["link1", "link2"],
        },
      ],
    },
  ],
};
