import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      {/* Problem Statement */}
      <section>
        <h2>What is the Problem?</h2>
        <p>
          The illegal wildlife trade threatens endangered species, disrupts ecosystems, and contributes to biodiversity loss.
          It fuels organized crime, spreads diseases, and weakens law enforcement due to corruption. Local communities and
          economies that rely on wildlife suffer, and the trade often funds conflict and exploitation. The global nature
          of the problem, with varying laws and enforcement, makes it difficult to control, endangering both wildlife and human societies.
        </p>
      </section>

      {/* Why We Are Doing This */}
      <section>
        <h2>Why Are We Doing It?</h2>
        <p>
          We are taking action against illegal wildlife trade because it threatens biodiversity, drives species to extinction,
          and disrupts ecosystems. This illegal activity also funds organized crime, weakens governance, and poses health
          risks by spreading diseases. Moreover, it harms local communities that depend on wildlife for tourism and livelihoods.
          By addressing this issue, we aim to protect endangered species, preserve ecosystems, and create a more sustainable,
          lawful world for both wildlife and humans.
        </p>
      </section>

      {/* Our Solution */}
      <section>
        <h2>What’s the Solution?</h2>
        <p>
          The solution to illegal wildlife trade through alert systems involves using real-time technology to detect and
          respond to trafficking activities. These systems help track illegal shipments, identify trafficking routes, and
          improve coordination among authorities, conservationists, and organizations. By sharing intelligence quickly,
          we can disrupt illegal trade networks, enhance law enforcement, and protect endangered species.
        </p>
      </section>

      {/* Illegal Wildlife Trade in Canada */}
      <section>
        <h2>Illegal Wildlife Trade in Canada</h2>
        <p>
          Illegal wildlife trade poses significant challenges to Canada's biodiversity and public health. The country is both
          a source and a destination for various wildlife species, with both legal and illegal trades impacting native and
          non-native animals.
        </p>
      </section>

      {/* Financial Scope of Wildlife Trade */}
      <section>
        <h2>Financial Scope of Wildlife Trade</h2>
        <p>
          Between 2016 and 2020, Canada's legal trade in live wild animals had an annual value of approximately
          <strong> CAD 85.7 million </strong> for exports and <strong> CAD 100.6 million </strong> for imports. Wild animal
          parts and derivatives (excluding aquaculture species) accounted for <strong> CAD 33.1 million </strong> in exports
          and <strong> CAD 39.1 million </strong> in imports.
        </p>
      </section>

      {/* Volume & Regulation of Wildlife Imports */}
      <section>
        <h2>Volume & Regulation of Wildlife Imports</h2>
        <p>
          From 2014 to 2019, at least <strong>1.8 million wild animals</strong> were imported into Canada. However, less than
          <strong> 8% </strong> of these required permits from regulatory agencies, and <strong> 93% </strong> of imported reptiles
          lacked proper taxonomic identification.
        </p>
      </section>

      {/* Public Perception & Demand for Stronger Regulations */}
      <section>
        <h2>Public Perception & Demand for Stronger Regulations</h2>
        <ul>
          <li>📢 <strong>84%</strong> of Canadians support stronger laws to reduce wildlife trade.</li>
          <li>😢 <strong>93%</strong> believe the wildlife trade is cruel and causes animal suffering.</li>
          <li>⚠️ <strong>89%</strong> think wildlife trade poses health risks, including pandemic threats.</li>
        </ul>
      </section>

      {/* Canada's Role in Global Wildlife Trade */}
      <section>
        <h2>Canada's Role in Global Wildlife Trade</h2>
        <p>
          Canada actively participates in global efforts against wildlife trafficking. In October 2023, Canadian enforcement officers
          took part in <strong>Operation Thunder 2023</strong>, leading to multiple seizures, including:
        </p>
        <ul>
          <li>📦 <strong>30 boxes</strong> of crocodile-oil cream.</li>
          <li>🦈 <strong>Shark fins</strong> found in two boxes and eight freezer bags.</li>
          <li>🪵 <strong>20 wood carvings</strong> made from African mahogany.</li>
          <li>🐍 <strong>Eight Green Tree Pythons</strong> seized.</li>
        </ul>
      </section>

      {/* Global Context */}
      <section>
        <h2>Global Context</h2>
        <p>
          Internationally, illegal wildlife trafficking is valued between <strong>USD 7.8 billion and USD 10 billion annually</strong>.
          When including illicit timber trade, it ranks as the <strong>4th-largest global illegal trade</strong>, after narcotics, human
          trafficking, and counterfeit products.
        </p>
      </section>

      {/* Sources */}
      <section>
        <h2>Sources</h2>
        <p>Data sourced from: <em>National Observer, World Animal Protection, The Guardian, FACETS Journal, Canada.ca, ICE.gov.</em></p>
      </section>
    </div>
  );
};

export default About;
