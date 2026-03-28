import React from "react";
import LegalPageShell, { LegalSection } from "../components/LegalPageShell";
import {
  COMPANY_DISPLAY_NAME,
  COMPANY_LOCATION,
  COMPANY_SHORT_NAME,
  SUPPORT_EMAIL,
} from "../constants/legal";
import { WHATSAPP_URL, INSTAGRAM_URL } from "../constants/links";

const PrivacyPolicy = () => {
  return (
    <LegalPageShell
      title="Privacy Policy"
      intro={`This policy explains how ${COMPANY_DISPLAY_NAME} (“${COMPANY_SHORT_NAME}”, “we”, “us”) collects, uses, stores, and shares personal information when you use our website, mobile applications, recruitment flows, and related services.`}
      relatedLink={{ to: "/terms", label: "Terms & Conditions" }}
    >
      <LegalSection id="who-we-are" title="1. Who we are">
        <p>
          <strong>{COMPANY_DISPLAY_NAME}</strong> operates luxury event staffing
          and related hospitality services, based in {COMPANY_LOCATION}. For the
          purposes of applicable data protection laws in India (including the
          Digital Personal Data Protection Act, 2023, where applicable), we act as
          the data fiduciary / data controller for personal data described in
          this policy, unless another party is identified as controller (for
          example, your app store provider for certain device-level data).
        </p>
      </LegalSection>

      <LegalSection id="scope" title="2. Scope">
        <p>This policy applies to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Visitors to our website and landing pages</li>
          <li>Clients, prospects, and event organisers who contact or engage us</li>
          <li>
            Candidates applying through our recruitment or onboarding flows
            (including photo and profile submissions)
          </li>
          <li>Users of our mobile applications (when published)</li>
        </ul>
        <p>
          By using our services, you acknowledge this policy. If you do not
          agree, please discontinue use and contact us using the details below.
        </p>
      </LegalSection>

      <LegalSection id="what-we-collect" title="3. Information we collect">
        <p>Depending on how you interact with us, we may collect:</p>
        <p>
          <strong>Identity and contact data:</strong> name, phone number, email
          address, city or region, company name, role, and similar details you
          provide via forms, WhatsApp, email, or calls.
        </p>
        <p>
          <strong>Recruitment and talent data:</strong> photographs, physical
          attributes or measurements where you choose to provide them,
          experience, availability, identification documents if requested for
          verification, and any other information submitted through our
          recruitment forms or attachments.
        </p>
        <p>
          <strong>Transaction and booking-related data:</strong> details of
          enquiries, proposals, invoices, payment references, and event
          logistics necessary to deliver services.{" "}
          <strong>
            Card numbers, CVV, and full payment credentials are processed by
            our payment service providers; we do not store complete card data on
            our servers.
          </strong>
        </p>
        <p>
          <strong>Technical and usage data:</strong> IP address, browser type,
          device type, operating system, approximate location derived from IP,
          pages viewed, referring URLs, timestamps, and diagnostic or crash
          data from our apps (where enabled).
        </p>
        <p>
          <strong>Communications:</strong> records of messages you send us
          (including via WhatsApp or social channels where you initiate
          contact) and our responses, to the extent needed to provide support and
          maintain service quality.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use" title="4. How we use your information">
        <p>We use personal data for purposes including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Providing, arranging, and improving our staffing and event services</li>
          <li>Responding to enquiries, quotes, and client support requests</li>
          <li>
            Evaluating recruitment applications, onboarding, and roster management
          </li>
          <li>
            Processing payments and preventing fraud (via certified payment
            partners)
          </li>
          <li>
            Sending operational messages (booking confirmations, scheduling) and,
            where permitted, marketing you have opted into
          </li>
          <li>Complying with law, court orders, and regulatory requests</li>
          <li>
            Securing our systems, investigating misuse, and enforcing our terms
          </li>
          <li>Analytics and product improvement in aggregated or de-identified form where possible</li>
        </ul>
      </LegalSection>

      <LegalSection id="legal-basis" title="5. Legal bases (India)">
        <p>
          We process personal data where permitted under Indian law, typically
          because: (a) you have given consent (for example, submitting a
          recruitment form or accepting cookies where required); (b) processing is
          necessary to perform a contract with you or take steps before
          entering one; (c) we have a legitimate interest that is not overridden
          by your rights (such as network security or service improvement); or
          (d) we are required to comply with legal obligations.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="6. Sharing and disclosure">
        <p>We may share information with:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Service providers</strong> who assist us (hosting, email,
            analytics, customer relationship tools, payment gateways, and
            verification partners), bound by confidentiality and processing
            agreements where appropriate
          </li>
          <li>
            <strong>Professional advisers</strong> (lawyers, accountants) where
            necessary
          </li>
          <li>
            <strong>Authorities</strong> when required by law or to protect
            rights, safety, and property
          </li>
          <li>
            <strong>Business transfers</strong> in connection with a merger,
            acquisition, or sale of assets, with notice as required by law
          </li>
        </ul>
        <p>
          We do not sell your personal information in the conventional sense of
          selling lists to unrelated marketers.
        </p>
      </LegalSection>

      <LegalSection id="international" title="7. International transfers">
        <p>
          Our operations are centred in India. If we use tools or processors
          hosted outside India, we take steps consistent with applicable law to
          ensure appropriate safeguards (such as contractual clauses or your
          explicit consent where required).
        </p>
      </LegalSection>

      <LegalSection id="retention" title="8. Retention">
        <p>
          We retain personal data only as long as needed for the purposes above,
          including legal, accounting, and dispute resolution requirements.
          Recruitment materials may be retained for a limited period after a
          hiring decision unless you ask us to delete them earlier and we have
          no overriding legal reason to retain them.
        </p>
      </LegalSection>

      <LegalSection id="security" title="9. Security">
        <p>
          We implement reasonable technical and organisational measures to
          protect personal data against unauthorised access, alteration,
          disclosure, or destruction. No method of transmission over the
          internet is completely secure; you share information at your own risk
          beyond what industry-standard controls can reasonably address.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="10. Your rights">
        <p>
          Subject to applicable law, you may have the right to request access,
          correction, or deletion of your personal data; withdraw consent where
          processing is consent-based; object to certain processing; and lodge a
          complaint with the Data Protection Board of India or other competent
          authority once fully operational under the DPDP framework.
        </p>
        <p>
          To exercise these rights, contact us at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-[#7a5c40] underline underline-offset-4 hover:text-[#2a1a0e]"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          or via{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#7a5c40] underline underline-offset-4 hover:text-[#2a1a0e]"
          >
            WhatsApp
          </a>
          . We may need to verify your identity before fulfilling certain
          requests.
        </p>
      </LegalSection>

      <LegalSection id="children" title="11. Children">
        <p>
          Our services are not directed at individuals under 18. We do not
          knowingly collect personal data from children. If you believe a minor
          has provided us data, please contact us and we will take appropriate
          steps to delete it.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="12. Cookies and similar technologies">
        <p>
          We may use cookies, local storage, and similar technologies to
          operate the site, remember preferences, measure traffic, and improve
          user experience. You can control cookies through your browser
          settings; disabling some cookies may limit functionality.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="13. Third-party links and stores">
        <p>
          Our website or app may link to third-party sites (including{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#7a5c40] underline underline-offset-4 hover:text-[#2a1a0e]"
          >
            Instagram
          </a>
          , app stores, and payment pages). Those services have their own privacy
          policies; we are not responsible for their practices.
        </p>
        <p>
          Purchases or subscriptions processed through Apple App Store or Google
          Play are also subject to the respective platform terms and privacy
          policies.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="14. Changes to this policy">
        <p>
          We may update this policy from time to time. The “Last updated” date at
          the top will change when we do. For material changes, we will provide
          additional notice where appropriate (for example, on the website or in
          the app). Continued use after changes constitutes acceptance unless
          the law requires otherwise.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="15. Contact">
        <p>
          Questions about this Privacy Policy or our data practices:
        </p>
        <ul className="list-none pl-0 space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-[#7a5c40] underline underline-offset-4 hover:text-[#2a1a0e]"
            >
              {SUPPORT_EMAIL}
            </a>
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#7a5c40] underline underline-offset-4 hover:text-[#2a1a0e]"
            >
              Contact via WhatsApp
            </a>
          </li>
          <li>
            <strong>Location:</strong> {COMPANY_LOCATION}
          </li>
        </ul>
      </LegalSection>
    </LegalPageShell>
  );
};

export default PrivacyPolicy;
