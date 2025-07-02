export interface UseCase {
  href: string;
  title: string;
  description: string;
  images: Image[];
  textParagraphs: TextParagraph[];
}

interface TextParagraph {
  title: string;
  description: string;
}

interface Image {
  image: string;
  alt: string;
  composition: string;
}

export const useCases: { [key: string]: UseCase } = {
  cities: {
    href: "/use-case/cities",
    title: "Cities",
    description: "Improve public transport efficiency and rider satisfaction.", 
    images: [
      { image: "https://placehold.co/600x400/ecfdf5/054f31", alt: "Smart city with connected public transport", composition: "1" },
      { image: "https://placehold.co/600x400/d1fadf/054f31", alt: "Bus operator monitoring a dashboard", composition: "2" },
      { image: "https://placehold.co/600x400/a6f4c5/054f31", alt: "Person using a mobile app to check bus times", composition: "3" },
      { image: "https://placehold.co/600x400/6ce9a6/054f31", alt: "Crowd of people at a music festival", composition: "4" },
      { image: "https://placehold.co/600x400/32d583/054f31", alt: "University campus with shuttle bus", composition: "5" },
      { image: "https://placehold.co/600x400/12b76a/054f31", alt: "Airport terminal with shuttle buses outside", composition: "6" },
    ],
    textParagraphs: [
      { title: "Title 1",
        description: "Description 1" },
      { title: "Title 2",
        description: "Description 2" },
      { title: "Title 3",
        description: "Description 3" },
    ],
  },
  operators: {
    href: "/use-case/operators",
    title: "Transport Operators",
    description: "Optimize your fleet and operations with our tools.",
    images: [
      { image: "https://placehold.co/600x400/ecfdf5/054f31", alt: "Smart city with connected public transport", composition: "1" },
      { image: "https://placehold.co/600x400/d1fadf/054f31", alt: "Bus operator monitoring a dashboard", composition: "2" },
      { image: "https://placehold.co/600x400/a6f4c5/054f31", alt: "Person using a mobile app to check bus times", composition: "3" },
      { image: "https://placehold.co/600x400/6ce9a6/054f31", alt: "Crowd of people at a music festival", composition: "4" },
      { image: "https://placehold.co/600x400/32d583/054f31", alt: "University campus with shuttle bus", composition: "5" },
      { image: "https://placehold.co/600x400/12b76a/054f31", alt: "Airport terminal with shuttle buses outside", composition: "6" },
    ],
    textParagraphs: [
      { title: "Title 1",
        description: "Description 1" },
      { title: "Title 2",
        description: "Description 2" },
      { title: "Title 3",
        description: "Description 3" },
    ],
  },
} 