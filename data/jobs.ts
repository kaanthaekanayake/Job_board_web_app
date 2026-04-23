export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  location: string;
  salary: string;
  type: string;
  isNew?: boolean;
  isHot?: boolean;
  colorTheme: "blue" | "purple" | "orange" | "teal" | "pink" | "indigo";
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechNova Systems",
    description: "Join our core product team to build scalable, high-performance React and Next.js applications. You will be working directly on features that impact millions of users, implementing modern UI/UX designs.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    location: "Remote",
    salary: "$30-$45/hr",
    type: "Full-time",
    isNew: true,
    colorTheme: "blue"
  },
  {
    id: "2",
    title: "Machine Learning Engineer",
    company: "Cognitive AI",
    description: "Help us push the boundaries of artificial intelligence. You will be training large language models (LLMs), fine-tuning neural networks, and deploying models to production using Python and PyTorch.",
    tags: ["Python", "PyTorch", "LLMs"],
    location: "SF, CA",
    salary: "$120k-$150k",
    type: "Full-time",
    isHot: true,
    colorTheme: "purple"
  },
  {
    id: "3",
    title: "Backend Engineering Co-op",
    company: "DataStream",
    description: "Dive into distributed systems and microservices. You'll be writing Go and Rust to build scalable data pipelines processing millions of events per second in a fast-paced environment.",
    tags: ["Go", "Rust", "Kafka"],
    location: "NYC, NY",
    salary: "$35-$50/hr",
    type: "Internship",
    colorTheme: "orange"
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "CloudNative Labs",
    description: "Take ownership of features from database design to UI implementation. You'll work with Next.js on the frontend and Node.js on the backend to deliver seamless user experiences.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    location: "Remote",
    salary: "$90k-$110k",
    type: "Full-time",
    colorTheme: "teal"
  },
  {
    id: "5",
    title: "Data Science Intern",
    company: "FinTech Innovations",
    description: "Analyze financial datasets to identify trends and build predictive models. You'll work closely with quantitative analysts to improve our trading algorithms.",
    tags: ["Python", "Pandas", "SQL"],
    location: "Chicago, IL",
    salary: "$40/hr",
    type: "Internship",
    isNew: true,
    colorTheme: "pink"
  },
  {
    id: "6",
    title: "DevOps Engineer Junior",
    company: "OpsScale",
    description: "Automate our deployment pipelines and manage cloud infrastructure on AWS. You'll work with Docker, Kubernetes, and Terraform to ensure high availability.",
    tags: ["AWS", "Docker", "Kubernetes"],
    location: "Austin, TX",
    salary: "$85k-$100k",
    type: "Full-time",
    colorTheme: "indigo"
  },
  {
    id: "7",
    title: "Mobile App Developer",
    company: "AppSphere",
    description: "Create fluid and responsive mobile applications for iOS and Android using React Native. Experience with native modules is a big plus.",
    tags: ["React Native", "iOS", "Android"],
    location: "Remote",
    salary: "$95k-$115k",
    type: "Full-time",
    colorTheme: "blue"
  },
  {
    id: "8",
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    description: "Monitor network traffic for security breaches, investigate incidents, and help improve our security posture. You'll get hands-on experience with top-tier security tools.",
    tags: ["Security", "Network", "SIEM"],
    location: "Washington, DC",
    salary: "$80k-$95k",
    type: "Full-time",
    isHot: true,
    colorTheme: "purple"
  },
  {
    id: "9",
    title: "Cloud Solutions Architect Intern",
    company: "GlobalCloud",
    description: "Design and implement scalable cloud architectures. You will assist senior architects in migrating legacy systems to Azure and GCP.",
    tags: ["Azure", "GCP", "Architecture"],
    location: "Seattle, WA",
    salary: "$38/hr",
    type: "Internship",
    colorTheme: "orange"
  },
  {
    id: "10",
    title: "Game Developer",
    company: "PixelStudios",
    description: "Develop engaging gameplay mechanics and optimize performance for our upcoming 3D multiplayer title. Experience with Unity and C# required.",
    tags: ["Unity", "C#", "3D Graphics"],
    location: "Los Angeles, CA",
    salary: "$85k-$110k",
    type: "Full-time",
    colorTheme: "teal"
  },
  {
    id: "11",
    title: "UI/UX Designer & Developer",
    company: "CreativeTech",
    description: "Bridge the gap between design and engineering. Create beautiful prototypes in Figma and bring them to life using React and Framer Motion.",
    tags: ["Figma", "React", "Framer Motion"],
    location: "Remote",
    salary: "$90k-$120k",
    type: "Full-time",
    colorTheme: "pink"
  },
  {
    id: "12",
    title: "Blockchain Engineer Co-op",
    company: "Web3 Innovations",
    description: "Develop smart contracts and decentralized applications (dApps) on the Ethereum network. Deep understanding of Solidity and cryptography is expected.",
    tags: ["Solidity", "Ethereum", "Web3"],
    location: "Miami, FL",
    salary: "$45/hr",
    type: "Internship",
    isNew: true,
    colorTheme: "indigo"
  },
  {
    id: "13",
    title: "QA Automation Engineer",
    company: "QualityFirst",
    description: "Build robust automated testing frameworks to ensure the reliability of our web and mobile applications using Cypress and Selenium.",
    tags: ["Cypress", "Selenium", "Testing"],
    location: "Remote",
    salary: "$75k-$90k",
    type: "Full-time",
    colorTheme: "blue"
  },
  {
    id: "14",
    title: "Embedded Systems Intern",
    company: "IoT Devices Inc.",
    description: "Program microcontrollers and develop firmware for our next generation of smart home devices. Strong C/C++ skills are mandatory.",
    tags: ["C/C++", "Firmware", "IoT"],
    location: "Boston, MA",
    salary: "$32/hr",
    type: "Internship",
    colorTheme: "purple"
  },
  {
    id: "15",
    title: "AI Prompt Engineer",
    company: "NextGen AI",
    description: "Design, test, and refine prompts to maximize the performance of our customized LLMs. You will work closely with data scientists to evaluate model outputs.",
    tags: ["LLMs", "NLP", "Prompting"],
    location: "Remote",
    salary: "$80k-$100k",
    type: "Full-time",
    isHot: true,
    colorTheme: "orange"
  }
];
