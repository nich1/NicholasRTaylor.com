const SITE_URL = "https://nicholasrtaylor.com";

export function PersonStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nick Taylor",
    url: SITE_URL,
    jobTitle: "Software Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of North Texas",
    },
    sameAs: [
      "https://github.com/nich1",
      "https://www.linkedin.com/in/nichtaylor/",
      "https://x.com/nich_main",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type WebsiteStructuredDataProps = {
  url: string;
  name: string;
  description: string;
};

export function WebsiteStructuredData({
  url,
  name,
  description,
}: WebsiteStructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
