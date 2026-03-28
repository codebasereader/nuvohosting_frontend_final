import React from "react";
import { Link } from "react-router-dom";
import LegalPageShell, { LegalSection } from "../components/LegalPageShell";
import {
  COMPANY_DISPLAY_NAME,
  COMPANY_LOCATION,
  COMPANY_SHORT_NAME,
  SUPPORT_EMAIL,
} from "../constants/legal";
import { WHATSAPP_URL } from "../constants/links";

const TermsAndConditions = () => {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      intro={`These Terms & Conditions (“Terms”) govern your access to and use of the website, mobile applications, and services offered by ${COMPANY_DISPLAY_NAME} (“${COMPANY_SHORT_NAME}”, “we”, “us”). By using our services, you agree to these Terms.`}
      relatedLink={{ to: "/privacy-policy", label: "Privacy Policy" }}
    >
      <LegalSection id="acceptance" title="1. Acceptance">
        <p>
          By accessing our website, downloading or using our mobile apps,
          submitting an enquiry, booking services, or applying for recruitment,
          you confirm that you are at least 18 years old and have the legal
          capacity to enter into a binding agreement. If you use our services on
          behalf of an organisation, you represent that you are authorised to
          bind that organisation.
        </p>
      </LegalSection>

      <LegalSection id="services" title="2. Our services">
        <p>
          {COMPANY_DISPLAY_NAME} provides luxury event staffing, host and
          hostess services, and related hospitality support (including MICE,
          weddings, brand activations, and similar engagements) as described on
          our website and in written proposals or statements of work. Specific
          deliverables, timelines, fees, and cancellation terms are set out in
          separate booking confirmations, contracts, or invoices unless
          otherwise stated in writing.
        </p>
      </LegalSection>

      <LegalSection id="conduct" title="3. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Use our services or platforms for unlawful, harassing, defamatory,
            fraudulent, or discriminatory purposes
          </li>
          <li>
            Attempt to gain unauthorised access to our systems, other users’
            data, or third-party networks
          </li>
          <li>
            Scrape, crawl, or harvest data from our website or apps in violation
            of these Terms or applicable law
          </li>
          <li>
            Misrepresent your identity, qualifications, or affiliation,
            including in recruitment submissions
          </li>
          <li>
            Upload malware, spam, or content that infringes intellectual
            property or privacy rights of others
          </li>
        </ul>
        <p>
          We may suspend or terminate access if we reasonably believe a
          violation has occurred.
        </p>
      </LegalSection>

      <LegalSection id="bookings" title="4. Enquiries, bookings, and performance">
        <p>
          Quotes and proposals are invitations to treat unless expressly
          identified as binding offers. A contract is formed when we confirm
          acceptance in writing (including email or messaging apps used for
          business correspondence) and any required deposit or agreement is
          satisfied as specified.
        </p>
        <p>
          You are responsible for providing accurate event details, access
          instructions, and safety information. Delays or failures caused by
          incomplete or incorrect information may affect our ability to perform
          and may incur additional charges where reasonable.
        </p>
      </LegalSection>

      <LegalSection id="payments" title="5. Fees, invoicing, and payments">
        <p>
          Fees, taxes (including GST where applicable), travel or accommodation
          surcharges, and payment schedules will be communicated before or at
          confirmation. Unless otherwise agreed, late payment may attract
          interest or suspension of services as permitted by law.
        </p>
        <p>
          <strong>Payment processing:</strong> Card and wallet payments may be
          processed by third-party payment gateways and acquiring banks. By
          submitting payment details, you authorise us and our processors to
          charge the applicable amounts. You also agree to the payment
          provider’s terms and privacy policy. We do not store your full card
          number or CVV on our own infrastructure.
        </p>
        <p>
          <strong>Refunds:</strong> Refund eligibility depends on the specific
          booking terms, cancellation window, and work already performed.
          Deposits may be non-refundable where stated. Disputes should be raised
          promptly in writing; chargebacks should be a last resort after
          contacting us.
        </p>
      </LegalSection>

      <LegalSection id="recruitment" title="6. Recruitment and applications">
        <p>
          If you apply to work with us, you warrant that the information and
          media you submit are accurate and that you have the right to share
          them. You consent to our use of such materials for recruitment,
          vetting, rostering, and client presentations where appropriate to the
          role,           subject to our{" "}
          <Link
            to="/privacy-policy"
            className="font-medium text-[#7a5c40] underline underline-offset-4 hover:text-[#2a1a0e]"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          Submission of an application does not guarantee engagement. We may
          retain or delete application materials as described in our Privacy
          Policy.
        </p>
      </LegalSection>

      <LegalSection id="mobile-app" title="7. Mobile applications">
        <p>
          When our apps are distributed via Apple App Store or Google Play, your
          use is also governed by the applicable store terms. The store provider
          is not responsible for the app content or support except as required by
          those platforms.
        </p>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable
          licence to install and use the app for personal or internal business
          purposes related to our services. You may not copy, modify,
          distribute, sell, or reverse engineer the app except as allowed by
          mandatory law.
        </p>
        <p>
          In-app purchases or subscriptions, if offered, will be billed and
          managed by the relevant app store; renewal and cancellation follow
          store rules.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="8. Intellectual property">
        <p>
          All content on our website and apps (including text, graphics, logos,
          photographs, and layout) is owned by {COMPANY_DISPLAY_NAME} or its
          licensors. You may not use our marks or materials without prior written
          permission except for fair personal reference (e.g. linking to our
          public site).
        </p>
        <p>
          Client-provided materials remain your property, but you grant us a
          licence to use them as needed to deliver the agreed services.
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="9. Third-party services">
        <p>
          We may rely on third parties (including WhatsApp, cloud hosting,
          analytics, and payment partners). Their availability and practices are
          outside our full control. We are not liable for third-party failures
          beyond what is recoverable from those providers or as required by law.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="10. Disclaimers">
        <p>
          Our services are provided on an “as is” and “as available” basis to the
          fullest extent permitted by law. We disclaim implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement except where such disclaimers are not enforceable.
        </p>
        <p>
          Event outcomes depend on many factors outside our control (venues,
          weather, guest behaviour, third-party vendors). We commit to
          professional execution but cannot guarantee specific commercial
          results.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="11. Limitation of liability">
        <p>
          To the maximum extent permitted by applicable law in India,{" "}
          {COMPANY_DISPLAY_NAME} and its directors, employees, and contractors
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or for loss of profits, data, or
          goodwill, arising from your use of our services.
        </p>
        <p>
          Our aggregate liability for claims arising out of or related to these
          Terms or our services (other than liability that cannot be limited by
          law, such as death or personal injury caused by negligence where
          applicable) shall not exceed the total fees paid by you to us for the
          specific engagement giving rise to the claim in the three (3) months
          preceding the event, or INR 50,000, whichever is greater, unless a
          higher cap is set in a signed written contract.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="12. Indemnity">
        <p>
          You agree to indemnify and hold harmless {COMPANY_DISPLAY_NAME} from
          claims, damages, losses, and expenses (including reasonable legal
          fees) arising from your breach of these Terms, misuse of our services,
          violation of third-party rights, or negligent or wrongful conduct.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="13. Termination">
        <p>
          We may suspend or terminate access to our website, apps, or services
          at any time for operational, legal, or security reasons, or if you
          breach these Terms. Provisions that by their nature should survive
          (including intellectual property, disclaimers, limitation of
          liability, indemnity, and governing law) will survive termination.
        </p>
      </LegalSection>

      <LegalSection id="law" title="14. Governing law and disputes">
        <p>
          These Terms are governed by the laws of India. Subject to mandatory
          consumer protections, courts at Bengaluru, Karnataka shall have
          exclusive jurisdiction over disputes arising from these Terms or our
          services, unless we agree otherwise in writing.
        </p>
        <p>
          You may also pursue informal resolution by contacting us first; we
          encourage good-faith negotiation before litigation.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="15. Changes">
        <p>
          We may modify these Terms by posting an updated version on our website
          (and, where material, through in-app notice). The “Last updated” date
          will reflect changes. Continued use after the effective date
          constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection id="misc" title="16. Miscellaneous">
        <p>
          If any provision is held invalid, the remainder remains enforceable.
          Failure to enforce a provision is not a waiver. These Terms constitute
          the entire agreement regarding the subject matter here, superseding
          prior oral understandings, except where a separate signed contract
          governs a specific engagement.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="17. Contact">
        <p>For legal notices or questions about these Terms:</p>
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

export default TermsAndConditions;
