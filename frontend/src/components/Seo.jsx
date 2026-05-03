import { useEffect } from "react";

const defaultMeta = {
  title: "Luxury Hair Co. | Premium Hair Bundles in Cape Town",
  description:
    "Luxury Hair Co. offers premium hair bundles in Cape Town with fast delivery, secure checkout, and expert styling support.",
  keywords:
    "hair bundles, luxury hair, Cape Town hair, premium hair extensions, hair bundles online, hair extensions South Africa",
  author: "Luxury Hair Co.",
  url: "https://luxuryhairco.example.com",
};

const getOrCreateMeta = (attribute, value, attrName = "name") => {
  const selector = `${attribute === "canonical" ? "link[rel='canonical']" : `meta[${attrName}='${attribute}']`}`;
  let element = document.head.querySelector(selector);

  if (!element) {
    if (attribute === "canonical") {
      element = document.createElement("link");
      element.setAttribute("rel", "canonical");
    } else {
      element = document.createElement("meta");
      element.setAttribute(attrName, attribute);
    }
    document.head.appendChild(element);
  }

  return element;
};

const Seo = ({ title, description, keywords, url, image }) => {
  useEffect(() => {
    const pageTitle = title || defaultMeta.title;
    const pageDescription = description || defaultMeta.description;
    const pageKeywords = keywords || defaultMeta.keywords;
    const pageUrl = url || defaultMeta.url;
    const pageImage = image || "/favicon.svg";

    document.title = pageTitle;
    getOrCreateMeta("description").setAttribute("content", pageDescription);
    getOrCreateMeta("keywords").setAttribute("content", pageKeywords);
    getOrCreateMeta("author").setAttribute("content", defaultMeta.author);

    getOrCreateMeta("og:title", pageTitle, "property").setAttribute("content", pageTitle);
    getOrCreateMeta("og:description", pageDescription, "property").setAttribute("content", pageDescription);
    getOrCreateMeta("og:type", "website", "property").setAttribute("content", "website");
    getOrCreateMeta("og:url", pageUrl, "property").setAttribute("content", pageUrl);
    getOrCreateMeta("og:image", pageImage, "property").setAttribute("content", pageImage);

    getOrCreateMeta("twitter:card").setAttribute("content", "summary_large_image");
    getOrCreateMeta("twitter:title").setAttribute("content", pageTitle);
    getOrCreateMeta("twitter:description").setAttribute("content", pageDescription);
    getOrCreateMeta("twitter:image").setAttribute("content", pageImage);

    const canonical = getOrCreateMeta("canonical");
    if (canonical.tagName.toLowerCase() === "link") {
      canonical.setAttribute("href", pageUrl);
    }
  }, [title, description, keywords, url, image]);

  return null;
};

export default Seo;
