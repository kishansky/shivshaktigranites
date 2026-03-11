import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageMeta = ({ title, description, keyword }) => {
  const location = useLocation();

  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set meta tags
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta(
      "keywords",
      `${description}, Mainix Tech,Main Tech,Main ix tech,Mainixtech,Mainix it service,Mainix Technology,Mainixtech,Mainix Tech,UAE IT company,IT services UAE,software development UAE,web development UAE,mobile app development UAE,cloud services UAE,business automation UAE,SaaS solutions UAE,IT infrastructure UAE,embedded electronics UAE,technology consulting UAE,digital marketing UAE,IT support UAE,technology solutions UAE,enterprise IT UAE,custom software UAE,app development UAE,e-commerce solutions UAE,hosting services UAE,cloud hosting UAE,email hosting UAE,cybersecurity UAE,web security UAE,graphic design UAE,content writing UAE,video animation UAE,advertising services UAE,website maintenance UAE,IT consulting UAE,technology company UAE,corporate IT solutions UAE,IT outsourcing UAE,smart home solutions UAE,automation solutions UAE,IoT solutions UAE,security systems UAE,attendance & access control UAE,monitoring solutions UAE,tech company Dubai,tech company Abu Dhabi,tech solutions UAE,best IT company UAE,top IT services UAE,IT solutions provider UAE,business software UAE,technology partner UAE,software consultancy UAE,custom IT solutions UAE,digital transformation UAE`
    );

    // Remove existing breadcrumb script if exists
    const existingScript = document.getElementById("breadcrumb-jsonld");
    if (existingScript) existingScript.remove();

    // Create breadcrumb JSON-LD
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbList = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${window.location.origin}/`,
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: decodeURIComponent(segment.replace(/-/g, " ")),
        item: `${window.location.origin}/${pathSegments.slice(0, index + 1).join("/")}`,
      })),
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "breadcrumb-jsonld";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbList,
    });
    document.head.appendChild(script);
  }, [title, description, keyword, location.pathname]);

  return null;
};

export default PageMeta;
