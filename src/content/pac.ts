import { Data } from "../types";

export const PAC_DATA: Data = {
  pageTitle: "PHYSICAL ACCESS CONTROL",
  pageDescription:
    "Physical access control refers to the measures and techniques used to restrict and control access to physical spaces or resources, such as buildings, rooms, equipment, or information systems. Physical access control systems can involve a variety of tools and technologies, including locks, keys, cards, biometric sensors, and security cameras.",
  categories: [
    {
      productCategory: "Readers",
      productCategoryDescription: "This is a description of Readers",
      products: [
        {
          title: "EM ID 125 kHz W26/34 RFID reader + Digicode keypad",
          description:
            "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageSrc: "systems.tn/img/suprema-bioentry.jpg",
          downloads: ["link1", "link2"],
          specs: {
            operating_voltage: "12 V DC",
            operating_current: "less than 1000mA",
            capacity: "1600 PCS cards and PIN code",
            card_format: "M/ID /125KHz",
            reading_range: "3-10cm",
            operating_temperature: "-25°C ~ +75°C",
            access_ways: "Card, Code, Card+Code",
            waterproof_degree: "IP68",
            certifications: ["CE", "RoHS", "FCC"],
            size: "1227620(mm)",
          },
        },
        {
          title: "SUPREMA BioEntry W2 RFID Fingerprint IP Outdoor Reader",
          description:
            "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageSrc: "systems.tn/img/suprema-bioentry.jpg",
          downloads: ["link1", "link2"],
          specs: {
            biometric_sensor_type: "Optical Sensor (OP5)",
            template_extractor_matcher: "SUPREMA / ISO 19794-2 / ANSI 378",
            lfd: "LFD",
            cpu: "1.2 GHz Quad Core",
            memory: "2GB Flash + 256MB RAM",
            max_user: "500,000 (1:1), 100,000(1:N)",
            max_template:
              "1,000,000(1:1), 200,000(1:N), [1 finger =2 templates] 1,000,000 (text)",
            max_logs: "Supported",
            led: "Multi-color",
            sound: "Multi-tone buzzer",
            ethernet: "10/100 Mbps, auto MDI/MDI-X",
            "rs-485": "1ch Host or Slave (Selectable), OSDP V2.1.6",
            wiegand: "1ch Input or Output (Selectable)",
            ttl: "2ch Input",
            relay: "1 Relay",
            poe: "Supported (IEEE 802.3af compliant)",
            ingress_protection: "IP67",
            impact_protection: "IK09",
            tamper: "Supported",
            power: {
              voltage: "DC 12V",
              current: "Max. 600 mA",
            },
            operating_temperature: "-20°C ~ 50°C",
            operating_humidity: "0% ~ 80%, non-condensing",
            dimensions: "50 x 172 x 43.5mm",
            certificates: ["CE", "FCC", "KC", "RoHS", "REACH", "WEEE"],
            rf_options: [
              "125kHz HID Prox",
              "125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire EV1/EV2*, FeliCa, NFC",
            ],
          },
        },
      ],
    },
    {
      productCategory: "Controllers",
      productCategoryDescription: "This is a description of Controllers",
      products: [
        {
          title: "EM ID 125 kHz W26/34 RFID reader + Digicode keypad",
          description: "This is a descrtiption of the product",
          imageSrc: "systems.tn/img/suprema-bioentry.jpg",
          downloads: ["link1", "link2"],
          specs: {
            operating_voltage: "12 V DC",
            operating_current: "less than 1000mA",
            capacity: "1600 PCS cards and PIN code",
            card_format: "M/ID /125KHz",
            reading_range: "3-10cm",
            operating_temperature: "-25°C ~ +75°C",
            access_ways: "Card, Code, Card+Code",
            waterproof_degree: "IP68",
            certifications: ["CE", "RoHS", "FCC"],
            size: "1227620(mm)",
          },
        },
        {
          title: "ASE 4 door controller",
          pending: true,
          description: "COMING SOON",
          imageSrc: "systems.tn",
          downloads: [],
          specs: {},
        },
      ],
    },
    {
      productCategory: "E-Gate",
      productCategoryDescription: "this is a category description",
      products: [
        {
          title: "Swing gate H306B",
          description:
            "with full stainless steel housing and special finish, our Q306W could work outdoor directly without any requirement for canopy or shelter. Arylics are used as swing arm and filling parts to make it more visual comfort. Normal and wide lane solution could be provided as per customers requirement for physically challenged people.With above features,Q306W is widely applied in places as conference centre,Office entrance,Amusement Park,Government hall,etc",
          imageSrc: "systems.tn/img/suprema-bioentry.jpg",
          downloads: ["link1", "link2"],
          specs: {
            "Technical Data": "test",
            "Arm Material": "test",
            "Passage width": "test",
            "Throughput rate": "test",
            "Power supply": "test",
            "Operational voltage": "test",
            "Max power consumption": "test",
            Frequency: "test",
            "Prectection level": "test",
            "Working temperature": "test",
            "Dimension excluding bars": "test",
            "Net weight including bars": "test",
          },
        },
      ],
    },
    {
      productCategory: "A.S.E Software management system ",
      productCategoryDescription:
        "this is a category description about A.S.E Software management system ",
      products: [
        {
          title: "NO SOFTWARE AVAILABLE",
          pending: true,
          description: "COMING SOON",
          imageSrc: "systems.tn",
          downloads: [],
          specs: {},
        },
      ],
    },
  ],
};
