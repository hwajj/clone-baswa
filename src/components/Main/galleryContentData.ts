import img01 from "@/assets/gallery_01.png";
import img02 from "@/assets/gallery_02.jpeg";
import img03 from "@/assets/gallery_03.jpeg";

interface GallerySideContent {
  title: string;
  desc: string;
  imgSrc: string;
}

interface GalleryChoice {
  title: string;
  select: string[];
}

const gallerySideContentData: GallerySideContent[] = [
  {
    title: "DTG",
    desc: `
      Fast installation and no requirement for 
      plasterboard means serious programme and cost 
      benefits. BASWA DTG adds an efficient acoustic 
      solution to the BASWA ecosystem – with BASWA 
      quality and performance.
    `,
    imgSrc: img01,
  },
  {
    title: "Commercial",
    desc: `
      BASWA is used worldwide in offices, universities, 
      museums, hotels and restaurants, private homes, 
      airports, theatres and swimming pools - creating 
      more inclusive, functional and healthier 
      environments..
    `,
    imgSrc: img02,
  },
  {
    title: "Home",
    desc: `
      Great room acoustics improve comfort and promote 
      health and wellbeing in the home. BASWA adapts to 
      your interiors, whether in a new design or existing
      building.
    `,
    imgSrc: img03,
  },
];

const galleryChoiceData: GalleryChoice[] = [
  {
    title: "Project type",
    select: ["New Building", "Existing Building"],
  },
  {
    title: "Area of application",
    select: [
      "Other",
      "Public Health",
      "Transport",
      "Sacred Building",
      "Hotel industry",
      "Retail",
      "Home",
    ],
  },
  {
    title: "Thermal-active",
    select: ["Yes", "No"],
  },
];

export { galleryChoiceData, gallerySideContentData };
