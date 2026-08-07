export type ProfileLink = {
  label: string;
  shortLabel: string;
  href: string;
  description: string;
  icon: "scholar" | "github" | "orcid" | "researchgate";
};

export const profile = {
  name: "Nanxi Chen",
  chineseName: "陈南西",
  role: "PhD Candidate · Bridge Engineering",
  institution: "Tongji University",
  location: "Shanghai, China",
  orcid: "0009-0002-7693-2704",
  // Add the email address you want to publish here.
  email: "nxchen@tongji.edu.cn",
  // Add the exact ResearchGate profile URL here.
  researchGate: "",
  links: [
    {
      label: "Google Scholar",
      shortLabel: "Scholar",
      href: "https://scholar.google.com/citations?user=YGQD_t8AAAAJ&hl=zh-CN",
      description: "Publications & citations",
      icon: "scholar"
    },
    {
      label: "GitHub",
      shortLabel: "GitHub",
      href: "https://github.com/NanxiiChen?tab=repositories",
      description: "Open-source repositories",
      icon: "github"
    },
    {
      label: "ORCID",
      shortLabel: "ORCID",
      href: "https://orcid.org/0009-0002-7693-2704",
      description: "Researcher identifier",
      icon: "orcid"
    },
    {
      label: "ResearchGate",
      shortLabel: "ResearchGate",
      href: "",
      description: "Profile link to be added",
      icon: "researchgate"
    }
  ] satisfies ProfileLink[]
};

export const education = [
  {
    years: "2022 — Present",
    degree: "PhD Candidate",
    field: "Bridge Engineering",
    institution: "Tongji University",
    location: "Shanghai, China"
  },
  {
    years: "2018 — 2022",
    degree: "Bachelor of Engineering",
    field: "Civil Engineering",
    institution: "Tongji University",
    location: "Shanghai, China"
  }
];

export const researchAreas = [
  "Physics-informed ML",
  "Phase-field modelling",
  "Wind engineering",
  "Scientific computing"
];
