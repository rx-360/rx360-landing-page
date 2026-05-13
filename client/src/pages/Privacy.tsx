import { ReactNode } from "react";
import { motion } from "framer-motion";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";

const LAST_REVISED = "May 7, 2026";

const TOC = [
  { number: "1", id: "scope", title: "Scope" },
  { number: "2", id: "info-collected", title: "Personal Information We Collect" },
  { number: "3", id: "how-we-use", title: "How We Use Your Personal Information" },
  { number: "4", id: "how-we-disclose", title: "How We Disclose Your Personal Information" },
  { number: "5", id: "choices-rights", title: "Your Privacy Choices and Rights" },
  { number: "6", id: "security", title: "Security of Your Information" },
  { number: "7", id: "intl-transfers", title: "International Data Transfers" },
  { number: "8", id: "retention", title: "Retention of Personal Information" },
  { number: "9", id: "ccpa", title: "Supplemental Privacy Notice for California" },
  { number: "10", id: "children", title: "Children's Information" },
  { number: "11", id: "other", title: "Other Provisions" },
  { number: "12", id: "contact", title: "Contact Us" },
];

function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        <span className="text-primary mr-2">{number}.</span>
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function SubSection({ marker, title, children }: { marker?: string; title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg md:text-xl font-semibold text-foreground">
        {marker && <span className="text-primary/80 mr-2">{marker}</span>}
        {title}
      </h3>
      <div className="space-y-3 pl-0 md:pl-2">{children}</div>
    </div>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{children}</p>;
}

function BulletList({ children }: { children: ReactNode }) {
  return <ul className="list-disc list-outside pl-6 space-y-3 marker:text-primary">{children}</ul>;
}

function Bullet({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <li className="text-base md:text-lg text-muted-foreground leading-relaxed pl-1">
      {title && <span className="font-semibold text-foreground">{title} </span>}
      {children}
    </li>
  );
}

function SubBulletList({ children }: { children: ReactNode }) {
  return (
    <ul className="list-[circle] list-outside pl-6 space-y-2 mt-2 marker:text-primary/60">{children}</ul>
  );
}

function SubBullet({ children }: { children: ReactNode }) {
  return <li className="text-base text-muted-foreground leading-relaxed pl-1">{children}</li>;
}

function TableOfContents() {
  return (
    <div className="my-8 p-6 md:p-8 rounded-2xl border border-border bg-muted/30">
      <h2 className="text-base font-bold text-foreground mb-5 uppercase tracking-wide">Table of Contents</h2>
      <ol className="space-y-2.5">
        {TOC.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-base text-muted-foreground hover:text-primary transition-colors inline-flex gap-2"
            >
              <span className="font-semibold text-primary min-w-[1.75rem]">{item.number}.</span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CcpaTable({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-border overflow-hidden bg-muted/10">
      <div className="hidden md:grid md:grid-cols-3 gap-4 p-4 bg-muted/50 font-bold text-xs uppercase tracking-wide text-foreground">
        <div className="md:col-span-2">Category of Personal Information Collected by Company</div>
        <div>Category of Third Parties Information is Disclosed to for a Business Purpose</div>
      </div>
      <div className="divide-y divide-border">{children}</div>
    </div>
  );
}

function CcpaRow({
  category,
  description,
  recipients,
}: {
  category: string;
  description: ReactNode;
  recipients: ReactNode[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-5">
      <div className="md:col-span-2">
        <h4 className="font-semibold text-foreground mb-2">{category}</h4>
        <div className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</div>
      </div>
      <div>
        <p className="md:hidden text-xs uppercase tracking-wide font-bold text-foreground mb-2">Disclosed to:</p>
        <ul className="list-disc list-outside pl-5 space-y-1 marker:text-primary text-sm md:text-base text-muted-foreground">
          {recipients.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="my-4 p-6 md:p-8 rounded-2xl border border-border bg-muted/30">
      <p className="font-bold text-foreground mb-2">Rx360 Inc.</p>
      <p className="text-muted-foreground">4471 Dean Martin Dr., Suite 4109</p>
      <p className="text-muted-foreground mb-4">Las Vegas, NV 89103</p>
      <p className="text-muted-foreground">
        <span className="font-semibold text-foreground">Telephone (Toll Free): </span>
        <a href="tel:+18778007936" className="text-primary hover:underline">877-800-7936</a>
      </p>
      <p className="text-muted-foreground">
        <span className="font-semibold text-foreground">Email: </span>
        <a href="mailto:privacy@rx360.com" className="text-primary hover:underline">privacy@rx360.com</a>
      </p>
      <p className="text-muted-foreground">
        <span className="font-semibold text-foreground">In-App: </span>
        Support feature in the Settings menu
      </p>
    </div>
  );
}

export default function Privacy() {
  return (
    <div className="w-full bg-background min-h-screen">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <AbstractHeroBg />
        <div className="container max-w-5xl mx-auto px-4 relative z-10 py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold tracking-wide uppercase mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Pilot Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/70"
          >
            Last revised on: {LAST_REVISED}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <P>
            This Pilot Privacy Policy (&ldquo;Pilot Privacy Policy&rdquo;) is designed to help you understand how Rx360 Inc.
            (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, and shares your personal information when you participate in
            its pilot program (&ldquo;Pilot&rdquo;) and to help you understand and exercise your privacy rights.
          </P>
          <P>
            By registering for, downloading, accessing or using any part of the Pilot Services (as defined below), you accept
            and agree to this Pilot Privacy Policy, whether or not you are a registered user or have an account. You should
            not use the Pilot Services if you don&rsquo;t agree with this Pilot Privacy Policy or any other agreement that governs
            your use of the Pilot Services.
          </P>
          <P>
            Capitalized terms that are not defined in this Pilot Privacy Policy have the meaning given to them in our{" "}
            <a href="/terms" className="text-primary hover:underline">Pilot Terms of Service</a>.
          </P>

          <TableOfContents />

          <Section id="scope" number="1" title="Scope">
            <P>
              This Privacy Policy applies to personal information processed by us via our pilot program (&ldquo;Pilot&rdquo;), which
              includes the wellness kiosk, wristbands, chargers, and other electronic devices, related mobile applications,
              and all associated electronic communications, content, features, and services made available in the foregoing
              by Company (collectively altogether, the &ldquo;Pilot Services&rdquo;).
            </P>
            <P>
              Please note that Company is not a medical or pharmacy group and does not provide medical or clinical advice,
              care, and/or treatment. The Pilot Services are not medical devices and are intended for informational purposes
              only as a wellness tool.
            </P>
          </Section>

          <Section id="info-collected" number="2" title="Personal Information We Collect">
            <P>
              The categories of personal information we collect depend on how you interact with us, our Pilot Services, and
              the requirements of applicable law. We collect information that you provide to us, information we obtain
              automatically when you use our Pilot Services, and information from other sources such as third-party services
              and organizations, as described below.
            </P>

            <SubSection marker="A." title="Information You Provide to Us Directly">
              <P>We may collect the following personal information that you provide to us.</P>
              <BulletList>
                <Bullet title="Account Creation.">
                  We may collect information when you create an account, such as your full name, email address, phone number,
                  and password.
                </Bullet>
                <Bullet title="Information Provided Through the Pilot and Pilot Services.">
                  We may collect any information you provide through the Pilot and Pilot Services, such as any information
                  that you voluntarily choose to provide through use of the Pilot Services or through your uploading of
                  Customer Data to the Pilot Services (including medication information scanned or entered into the Pilot
                  Services) or through your participation in Feedback Surveys. Such information which you voluntarily provide
                  or upload to the Pilot Services may include age, sex, gender identity or gender expression, medical
                  information, and health information.
                </Bullet>
                <Bullet title="Your Communications with Us.">
                  We may collect personal information, such as your name, email address, or phone number when you request
                  information about our Pilot Services, request customer or technical support, or otherwise communicate with
                  us.
                </Bullet>
                <Bullet title="Surveys.">
                  We may contact you to participate in surveys. If you decide to participate, you may be asked to provide
                  certain information which may include personal information.
                </Bullet>
              </BulletList>
            </SubSection>

            <SubSection marker="B." title="Information Collected Automatically">
              <P>We may collect personal information automatically when you use our Pilot Services.</P>
              <P>
                For example, we may log your geolocation data and internet or other electronic network activity information
                such as IP addresses, mobile carrier, unique device identifier, device model, operating system type, battery
                level, Bluetooth connectivity status, and data from sensors within the Hardware (e.g., accelerometer, where
                applicable), and information about your use of and actions on the Pilot Services as follows:
              </P>
              <BulletList>
                <Bullet title="Software Development Kits (SDKs) and Mobile Identifiers.">
                  We, as well as third parties that provide analytics or functionality on our Pilot Services, may use SDKs,
                  mobile identifiers, and local storage (&ldquo;Technologies&rdquo;) to automatically collect information. SDKs are
                  blocks of code provided by third parties (like Google or Apple) that are embedded in our mobile app to
                  track usage, report crashes, and facilitate connection to your wearable.
                </Bullet>
                <Bullet title="Sensor and Wearable Data.">
                  We automatically collect data generated by the Hardware, including movement data, fall detection signals,
                  and connectivity logs to facilitate the Pilot Services. This data is transmitted either directly from the
                  Hardware to our servers (via cellular or Wi-Fi) or via Bluetooth through your mobile device, depending on
                  the Hardware&rsquo;s capabilities and your connectivity settings. This transmission occurs in the background to
                  ensure real-time fall detection and you may manage this by adjusting your device&rsquo;s connection settings,
                  though doing so will disable Location Tracking and Fall Tracking features.
                </Bullet>
                <Bullet title="Background Location Tracking.">
                  Because certain features (such as Location Tracking and Fall Tracking) require real-time location
                  awareness, the Pilot Services may collect your geolocation data even when the app is closed or running in
                  the background. See{" "}
                  <a href="#choices-rights" className="text-primary hover:underline">
                    &ldquo;Your Privacy Choices and Rights&rdquo;
                  </a>{" "}
                  to manage your location settings.
                </Bullet>
              </BulletList>
              <P>Our uses of these Technologies fall into the following general categories:</P>
              <BulletList>
                <Bullet title="Operationally Necessary.">
                  This includes Technologies that allow you access to our Pilot Services and applications and tools that are
                  required to identify irregular app behavior, prevent fraudulent activity and improve security or that allow
                  you to make use of our functionality;
                </Bullet>
                <Bullet title="Performance-Related.">
                  We may use Technologies to assess and improve the performance of our Pilot Services, including as part of
                  our analytic practices to help us understand how individuals use our Pilot Services (see Analytics below);
                  and
                </Bullet>
                <Bullet title="Functionality-Related.">
                  We may use Technologies that allow us to remember your presences or offer you enhanced functionality when
                  accessing or using our Pilot Services. This may include identifying you when you sign into our Pilot
                  Services or keeping track of your specified preferences.
                </Bullet>
              </BulletList>
              <P>
                See{" "}
                <a href="#choices-rights" className="text-primary hover:underline">
                  &ldquo;Your Privacy Choices and Rights&rdquo;
                </a>{" "}
                below to understand your choices regarding these Technologies.
              </P>
              <BulletList>
                <Bullet title="Analytics.">
                  We may use Technologies and other third-party tools (such as Google Analytics) to process analytics
                  information on our Pilot Services.
                </Bullet>
                <Bullet title="Metadata.">
                  When you upload or create Customer Data, you automatically upload certain metadata that is connected to the
                  Customer Data to the Pilot Services. Metadata describes other data and provides information about your
                  Customer Data that will not always be evident to you. For example, in connection with your Customer Data,
                  the metadata can describe how, when, where, and by whom the piece of Customer Data was created, collected,
                  or modified and how that content is formatted. Additionally, metadata includes data generated by Hardware,
                  such as timestamps for movement events and diagnostic logs.
                </Bullet>
              </BulletList>
            </SubSection>

            <SubSection marker="C." title="Information Collected from Other Sources">
              <P>
                We may obtain information about you from other sources, including through third-party services and
                organizations such as business partners with whom we may jointly be offering products or services or
                analytics providers.
              </P>
            </SubSection>
          </Section>

          <Section id="how-we-use" number="3" title="How We Use Your Personal Information">
            <P>
              We use your personal information for a variety of business purposes, including to provide our Pilot Services,
              for administrative purposes, and to market our products and services, as described below.
            </P>

            <SubSection marker="A." title="Provide Our Pilot Services">
              <P>We use your personal information to provide you with our Pilot Services, such as:</P>
              <BulletList>
                <Bullet>Managing your information and accounts;</Bullet>
                <Bullet>Enabling you to use our Pilot Services;</Bullet>
                <Bullet>Operating and maintaining the Pilot Services;</Bullet>
                <Bullet>Providing access to certain areas, functionalities, and features of our Pilot Services;</Bullet>
                <Bullet>Answering requests for customer or technical support;</Bullet>
                <Bullet>
                  Communicating with you about your account and activities on our Pilot Services, your stiped for completed
                  participation in the Pilot, and policy changes; and
                </Bullet>
                <Bullet>Providing you with your stipend for completed participation in the Pilot.</Bullet>
              </BulletList>
            </SubSection>

            <SubSection marker="B." title="Administrative Purposes">
              <P>We use your personal information for various administrative purposes, such as:</P>
              <BulletList>
                <Bullet>
                  Pursuing our legitimate interests such as research and development (including improving the performance of
                  our Medication Dashboards, Medication Reminders, Support Circle Sharing, Location Tracking, Fall Tracking,
                  and Hardware), network and information security, and fraud prevention;
                </Bullet>
                <Bullet>
                  Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and
                  prosecuting those responsible for that activity;
                </Bullet>
                <Bullet>Measuring and analyzing use of and interest and engagement in our Pilot Services;</Bullet>
                <Bullet>Improving, upgrading, or enhancing our Pilot Services;</Bullet>
                <Bullet>Developing new products and services;</Bullet>
                <Bullet>Ensuring internal quality control and safety;</Bullet>
                <Bullet>
                  Authenticating and verifying individual identities, including requests to exercise your rights under this
                  policy;
                </Bullet>
                <Bullet>Debugging to identify and repair errors with our Pilot Services;</Bullet>
                <Bullet>Auditing relating to interactions, transactions and other compliance activities;</Bullet>
                <Bullet>Enforcing our agreements and policies; and</Bullet>
                <Bullet>Complying with our legal obligations.</Bullet>
              </BulletList>
            </SubSection>

            <SubSection marker="C." title="Marketing and Advertising our Products and Services">
              <P>
                We may use personal information to analyze our customer base, products and services, and trends and traffic
                and to provide you with content and advertisements. We may provide you with these materials as permitted by
                applicable law.
              </P>
              <P>
                Some of the ways we may market to you include email campaigns and non-targeted advertising. If you have any
                questions about our marketing practices or if you would like to opt out of the use of your personal
                information for marketing purposes, you may contact us at any time as set forth in{" "}
                <a href="#contact" className="text-primary hover:underline">&ldquo;Contact Us&rdquo;</a> below.
              </P>
            </SubSection>

            <SubSection marker="D." title="Other Purposes">
              <P>
                We also use your personal information for other purposes as requested by you or as permitted by applicable
                law.
              </P>
              <BulletList>
                <Bullet title="Consent.">
                  We may use personal information for other purposes that are clearly disclosed to you at the time you
                  provide personal information or with your consent.
                </Bullet>
                <Bullet title="De-identified and Aggregated Information.">
                  We may use personal information and other information about you to create de-identified and/or aggregated
                  information, such as de-identified demographic information, information about the devices from which you
                  access our Pilot Services, or other analyses we create.
                </Bullet>
              </BulletList>
            </SubSection>
          </Section>

          <Section id="how-we-disclose" number="4" title="How We Disclose Your Personal Information">
            <P>
              We do not sell your personal information or share it for cross-context behavioral advertising or targeted
              advertising.
            </P>
            <P>
              We disclose your information to third parties for a variety of business purposes, including to provide our
              Pilot Services, to protect us or others, or in the event of a major business transaction such as a merger,
              sale, or asset transfer, as described below.
            </P>

            <SubSection marker="A." title="Disclosures to Provide our Pilot Services">
              <P>The categories of third parties with whom we may share your personal information are described below.</P>
              <BulletList>
                <Bullet title="Caregivers and/or Loved Ones.">
                  We share your personal information with your designated caregivers and loved ones when you have opted into
                  Support Circle Sharing. Once your personal information is shared with designated caregivers and/or loved
                  ones, Company has no control over, and is not responsible for, any further use or disclosure of your
                  personal information.
                </Bullet>
                <Bullet title="Service Providers.">
                  We may share your personal information with our third-party service providers who use that information to
                  help us provide or improve our Pilot Services and/or who create, deliver and assess our advertising or
                  marketing campaigns. This includes service providers that provide us with IT support, hosting, cloud
                  services, data security services, analytics, marketing services, stipend processing, email communication
                  software, software development, hardware development, customer service, and other related services.
                </Bullet>
                <Bullet title="Business Partners.">
                  We may share your personal information with business partners to provide you with a product or service you
                  have requested. We may also share your personal information to business partners with whom we jointly offer
                  products or services.
                </Bullet>
                <Bullet title="Affiliates.">We may share your personal information with our affiliates.</Bullet>
                <Bullet title="APIs/SDKs.">
                  We may use third-party Application Program Interfaces (&ldquo;APIs&rdquo;) and Software Development Kits (&ldquo;SDKs&rdquo;) as
                  part of the functionality of our Pilot Services. For more information about our use of APIs and SDKs,
                  please contact us as set forth in{" "}
                  <a href="#contact" className="text-primary hover:underline">&ldquo;Contact Us&rdquo;</a> below.
                </Bullet>
              </BulletList>
            </SubSection>

            <SubSection marker="B." title="Disclosures to Protect Us or Others">
              <P>
                We may access, preserve, and disclose any information we store associated with you to external parties if we,
                in good faith, believe doing so is required or appropriate to: comply with law, law enforcement, national
                security requests, and legal process, such as a court order or subpoena; protect your, our, or others&rsquo;
                rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with an
                investigation or prosecution of suspected or actual illegal activity.
              </P>
            </SubSection>

            <SubSection marker="C." title="Disclosure in the Event of Merger, Sale, or Other Asset Transfers">
              <P>
                If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy,
                receivership, purchase or sale of assets, or transition of service to another provider, your personal
                information may be sold or transferred as part of such a transaction, as permitted by law and/or contract.
              </P>
            </SubSection>

            <SubSection marker="D." title="Disclosures With Your Consent">
              <P>
                We may share your personal information to external parties for other purposes pursuant to your consent or at
                your direction.
              </P>
            </SubSection>
          </Section>

          <Section id="choices-rights" number="5" title="Your Privacy Choices and Rights">
            <SubSection title="Your Privacy Choices.">
              <P>
                The privacy choices you may have about your personal information are determined by applicable law and are
                described below.
              </P>
              <BulletList>
                <Bullet title="Email Communications.">
                  If you receive an unwanted email from us, you can use the unsubscribe link found at the bottom of the email
                  to opt out of receiving future emails. Note that you will continue to receive transaction-related emails
                  regarding Pilot Services you have requested. We may also send you certain non-promotional communications
                  regarding us and our Pilot Services, and you will not be able to opt out of those communications (e.g.,
                  communications regarding our Pilot Services or updates to our Pilot Terms of Service or this Pilot Privacy
                  Policy).
                </Bullet>
                <Bullet title="Push Notifications.">
                  We may send you push notifications through the Services. You may opt out of receiving these push
                  notifications by changing the settings on your device. Please note that opting out of push notifications
                  will disable features such as Medication Reminders and Fall Tracking alerts.
                </Bullet>
                <Bullet title="Phone Calls and Automated Alerts.">
                  By being designated as a caregiver or loved ones of a medication taker user who is partaking in Support
                  Circle Sharing, you agree to receive automated alerts and phone calls from us related to Fall Tracking. To
                  stop receiving these alerts and calls, you must either: (i) be removed as a designee in Support Circle
                  Sharing by the medication taker user; (ii) remove yourself as a designee for the medication taker in
                  Support Circle Sharing; (iii) or otherwise follow opt-out or unsubscribe prompts provided during the call
                  or within the mobile application settings. Please note that opting out of these alerts and calls will
                  prevent you from receiving time-sensitive safety information regarding a medication taker user.
                </Bullet>
                <Bullet title="Universal Opt-Out & Privacy Signals.">
                  Some browsers and devices broadcast Global Privacy Control (&ldquo;GPC&rdquo;) or &ldquo;Do Not Track&rdquo; (&ldquo;DNT&rdquo;) signals.
                  Because we do not sell your personal information or share it with third parties for cross-context
                  behavioral advertising, the Pilot Services do not change their behavior in response to these signals.
                </Bullet>
                <Bullet title="Mobile Devices.">
                  Your mobile device may include a feature that allows you to opt out of some types of tracking (&ldquo;Ask App
                  Not to Track&rdquo; on iOS and &ldquo;Delete advertising ID&rdquo; on Android). Please note that we do not engage in
                  cross-context behavioral advertising or targeted advertising.
                </Bullet>
                <Bullet title="Technologies.">
                  You may stop or restrict the placement of certain Technologies on your device or remove them by adjusting
                  your preferences as your device permits. However, if you adjust your preferences, our Pilot Services (such
                  as the Location Tracking and Fall Tracking features) may not work properly. Please note that for our
                  mobile application, we use Google Analytics for Firebase to assess and improve performance. Visit{" "}
                  <a
                    href="https://tools.google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline"
                  >
                    https://tools.google.com
                  </a>{" "}
                  for more information on Google&rsquo;s general privacy practices.
                </Bullet>
              </BulletList>
            </SubSection>

            <SubSection title="Your Privacy Rights.">
              <P>In accordance with applicable law, you may have the right to:</P>
              <BulletList>
                <Bullet>
                  <span className="font-semibold text-foreground">Access</span> Personal Information about you, including:
                  (i) confirming whether we are processing your personal information; (ii) obtaining access to or a copy of
                  your personal information; and (iii) receiving an electronic copy of personal information that you have
                  provided to us, or asking us to send that information to another company (the &ldquo;right of data portability&rdquo;);
                </Bullet>
                <Bullet>
                  <span className="font-semibold text-foreground">Request Correction</span> of your personal information
                  where it is inaccurate or incomplete. In some cases, we may provide self-service tools that enable you to
                  update your personal information;
                </Bullet>
                <Bullet>
                  <span className="font-semibold text-foreground">Request Deletion</span> of your personal information;
                </Bullet>
                <Bullet>
                  <span className="font-semibold text-foreground">Request Restriction of or Object to</span> our processing
                  of your personal information; and
                </Bullet>
                <Bullet>
                  <span className="font-semibold text-foreground">Withdraw your Consent</span> to our processing of your
                  personal information.
                </Bullet>
              </BulletList>
              <P>
                If you would like to exercise any of these rights, please contact us as set forth in{" "}
                <a href="#contact" className="text-primary hover:underline">&ldquo;Contact Us&rdquo;</a> below. We will process such
                requests in accordance with applicable laws.
              </P>
            </SubSection>
          </Section>

          <Section id="security" number="6" title="Security of Your Information">
            <P>
              We take steps to ensure that your personal information is treated securely and in accordance with this Pilot
              Privacy Policy. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any
              information you provide to us. We have taken appropriate safeguards to require that your personal information
              will remain protected and require our third-party service providers and partners to have appropriate
              safeguards as well. To the fullest extent permitted by applicable law, we do not accept liability for
              unauthorized disclosure.
            </P>
            <P>
              By using our Pilot Services or providing personal information to us, you agree that we may communicate with
              you electronically regarding security, privacy, and administrative issues relating to your use of our Pilot
              Services. If we learn of a security system&rsquo;s breach, we may attempt to notify you electronically by posting a
              notice on our Pilot Services or by sending an email to you.
            </P>
          </Section>

          <Section id="intl-transfers" number="7" title="International Data Transfers">
            <P>
              All information processed by us may be transferred, processed, and stored anywhere in the world, including,
              but not limited to, the United States or other countries, which may have data protection laws that are
              different from the laws where you live. We endeavor to safeguard your information consistent with the
              requirements of applicable laws.
            </P>
          </Section>

          <Section id="retention" number="8" title="Retention of Personal Information">
            <P>
              We store the personal information we collect as described in this Pilot Privacy Policy for as long as you use
              our Pilot Services or as necessary to fulfill the purpose(s) for which it was collected, provide our Pilot
              Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes,
              enforce our agreements, and comply with applicable laws.
            </P>
          </Section>

          <Section id="ccpa" number="9" title="Supplemental Privacy Notice for California">
            <P>
              This Supplemental Privacy Notice for California only applies to our processing of personal information of
              residents of California under the California Consumer Privacy Act and the California Privacy Rights Act
              (collectively, &ldquo;CCPA&rdquo;).
            </P>
            <P>
              The CCPA provide California residents with the right to know/right to access what categories of personal
              information Company has collected about them and whether Company disclosed that personal information for a
              business purpose. Such residents can find this information below:
            </P>

            <CcpaTable>
              <CcpaRow
                category="Identifiers."
                description="Real name, Internet Protocol address, unique personal identifier, online identifier, email address, account name, or other similar identifiers."
                recipients={[
                  "Service providers",
                  "Caregivers and/or loved ones when opted into by you (real name only)",
                ]}
              />
              <CcpaRow
                category="Information that identifies, relates to, describes, or is capable of being associated with, a particular individual."
                description={
                  <>
                    Personal information categories listed in the California Customer Records statute (Cal. Civ. Code &sect;
                    1798.80(e)). Name, telephone, or medical information or health information.
                  </>
                }
                recipients={[
                  "Service providers",
                  "Caregivers and/or loved ones when opted into by you",
                ]}
              />
              <CcpaRow
                category="Characteristics of protected classifications under California or federal law."
                description="Age, sex, gender, gender identity or gender expression, and disability."
                recipients={["Service providers"]}
              />
              <CcpaRow
                category="Biometric information."
                description="Physiological or behavioral characteristics, gait patterns or rhythms, and health data. (This data is used to detect falls and assess wellness risks for Fall Tracking and is not used to uniquely identify you for security purposes)."
                recipients={[
                  "Service providers",
                  "Caregivers and/or loved ones when opted into by you (results of analysis of biometric information only)",
                ]}
              />
              <CcpaRow
                category="Internet or other electronic network activity."
                description="Information on a consumer's interaction with application and wearable device."
                recipients={[
                  "Service providers",
                  "Caregivers and/or loved ones when opted into by you (results of analysis of internet or other electronic network activity only)",
                ]}
              />
              <CcpaRow
                category="Geolocation data."
                description={
                  <>
                    Location-related information. (We collect information about your approximate or precise physical location
                    to facilitate Location Tracking (such as real-time location sharing with your designated caregivers
                    and/or loved ones in Support Circle Sharing) and Fall Tracking to provide fall detection alerts and/or
                    calls to your caregiver and/or loved one designees in Support Circle Sharing. This may include GPS
                    coordinates and other sensor data from your mobile device and wearable. Please note that you may limit
                    or disallow our collection, use, or sharing of location data on your mobile device by adjusting the
                    settings for our Pilot Services in your iOS or Android privacy settings. However, please note that
                    setting adjustments and disabling location services will cause Location Tracking, Fall Tracking, and
                    Support Circle Sharing to not work properly.)
                  </>
                }
                recipients={[
                  "Service providers",
                  "Caregivers and/or loved ones when opted into by you",
                ]}
              />
              <CcpaRow
                category="Sensory and Electronic Data."
                description="Audio, electronic, visual (photos/scans of medication lists), or similar information."
                recipients={[
                  "Service providers",
                  "Caregivers and/or loved ones when opted into by you (results of analysis of sensory and electronic data only)",
                ]}
              />
              <CcpaRow
                category="Inferences drawn from other personal information."
                description="Profile reflecting a person's predispositions and abilities."
                recipients={[
                  "Service providers",
                  "Caregivers and/or loved ones when opted into by you (results of analysis of inferences only)",
                ]}
              />
              <CcpaRow
                category="Sensitive personal information."
                description="Account log-in, password, credentials allowing access to the account, precise geolocation data, and personal and biometric information collected and analyzed concerning a person's health."
                recipients={[
                  "Service providers",
                  "Caregivers and/or loved ones when opted into by you (precise geolocation data and results of analysis of personal and biometric information only)",
                ]}
              />
            </CcpaTable>

            <SubSection title="Sources of Personal Information Collected.">
              <P>
                The categories of sources from which we collect personal information include information you directly
                provide to us such as through the Pilot and Pilot Services, information that is automatically collected by
                the Pilot Services and Technologies in the Pilot Services, information that may be shared with us by third
                parties such as analytics providers, and as further set forth in{" "}
                <a href="#info-collected" className="text-primary hover:underline">
                  &ldquo;Personal Information We Collect&rdquo;
                </a>{" "}
                above.
              </P>
            </SubSection>

            <SubSection title="Business Purposes for Collection and Use of Personal Information.">
              <P>
                Our business and commercial purposes for using personal information include providing the Pilot Services,
                administrative purposes, non-targeted advertising, as otherwise requested by you or permitted by law, and as
                otherwise set forth in{" "}
                <a href="#how-we-use" className="text-primary hover:underline">
                  &ldquo;How We Use Your Personal Information&rdquo;
                </a>{" "}
                above.
              </P>
            </SubSection>

            <SubSection title="Retention of Personal Information.">
              <P>
                We store and retain your personal information as long as necessary to fulfill the purposes of collection,
                for legitimate business or legal purposes, and as otherwise set forth in{" "}
                <a href="#retention" className="text-primary hover:underline">
                  &ldquo;Retention of Personal Information&rdquo;
                </a>{" "}
                above.
              </P>
            </SubSection>

            <SubSection title={"\u201CSales\u201D or \u201CSharing\u201D of Personal Information under CCPA."}>
              <P>
                Company does not &ldquo;sell&rdquo; personal information or &ldquo;share&rdquo; personal information for cross-contextual
                behavioral advertising (as those terms are defined under CCPA) nor do we have actual knowledge of any &ldquo;sale&rdquo;
                or &ldquo;sharing&rdquo; of personal information of minors under 16 years of age.
              </P>
            </SubSection>

            <SubSection title="Profiling and Targeting Advertising under CCPA.">
              <P>
                Company does not engage in profiling in furtherance of decisions that produce legal or similarly significant
                effects. Company also does not engage in cross-context behavioral advertising as defined in CCPA.
              </P>
            </SubSection>

            <SubSection title="Additional Rights Under CCPA">
              <P>California residents have the following rights:</P>
              <BulletList>
                <Bullet title="Right to Know/Access and Data Portability:">
                  The right to request that we disclose to you the personal information we collect, use, or disclose about
                  you, and information about our data practices as well as the right to obtain a copy of your personal
                  information.
                </Bullet>
                <Bullet title="Right to Request Correction:">
                  The right to request that we correct inaccurate personal information that we maintain about you.
                </Bullet>
                <Bullet title="Right to Request Deletion:">
                  The right to request that we delete any or all of your personal information that we have collected from or
                  about you, subject to certain exceptions. Please note that we may not delete your personal information if
                  it is necessary to:
                  <SubBulletList>
                    <SubBullet>
                      Complete the transaction for which we collected the personal information, provide a service that you
                      requested, take actions reasonably anticipated within the context of our ongoing business relationship
                      with you, or otherwise perform our contract with you;
                    </SubBullet>
                    <SubBullet>
                      Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or
                      prosecute those responsible for such activities;
                    </SubBullet>
                    <SubBullet>Debug products to identify and repair errors that impair existing intended functionality;</SubBullet>
                    <SubBullet>
                      Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or
                      exercise another right provided for by law;
                    </SubBullet>
                    <SubBullet>Comply with the California Electronic Communications Privacy Act;</SubBullet>
                    <SubBullet>
                      Engage in public or peer-reviewed scientific, historical, or statistical research in the public
                      interest that adheres to all other applicable ethics and privacy laws, when the information&rsquo;s
                      deletion may likely render impossible or seriously impair the research&rsquo;s achievement, if you
                      previously provided informed consent;
                    </SubBullet>
                    <SubBullet>
                      Enable solely internal uses that are reasonably aligned with consumer expectations based on your
                      relationship with us;
                    </SubBullet>
                    <SubBullet>Comply with a legal obligation; or</SubBullet>
                    <SubBullet>
                      Make other internal and lawful uses of that information that are compatible with the context in which
                      you provided it.
                    </SubBullet>
                  </SubBulletList>
                </Bullet>
                <Bullet title={"Right to Opt-Out of \u201CSale\u201D or \u201CSharing\u201D of Personal Information:"}>
                  The right to opt-out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information. Please note that we do not
                  &ldquo;sell&rdquo; personal information or &ldquo;share&rdquo; personal information for cross-context behavioral advertising as
                  those terms are defined under CCPA.
                </Bullet>
                <Bullet title="Right to Opt-Out of Profiling:">
                  The right to opt-out of the processing of your personal information for profiling in furtherance of
                  decisions that produce legal or similarly significant effects. We do not engage in profiling in
                  furtherance of decisions that produce legal or similarly significant effects.
                </Bullet>
                <Bullet title="Right to Non-Discrimination:">
                  The right not to receive discriminatory treatment for exercising your privacy rights.
                </Bullet>
                <Bullet title="Rights Relating to Sensitive Personal Information.">
                  You may choose to provide us with certain information that is considered &ldquo;sensitive&rdquo; under applicable
                  State Privacy Laws, including but not limited to, precise geolocation data, health information, and login
                  and credentials. We only use or disclose this information as necessary to:
                  <SubBulletList>
                    <SubBullet>provide the Pilot Services to you;</SubBullet>
                    <SubBullet>
                      to prevent, detect, and investigate security incidents that compromise the availability, authenticity,
                      integrity, and confidentiality of stored or transmitted personal information;
                    </SubBullet>
                    <SubBullet>
                      to resist malicious, deceptive, fraudulent, or illegal actions directed at us and to prosecute those
                      responsible for those actions;
                    </SubBullet>
                    <SubBullet>to ensure the physical safety of natural persons;</SubBullet>
                    <SubBullet>for short-term, transient use;</SubBullet>
                    <SubBullet>
                      to perform services on behalf of the business, such as maintaining or servicing accounts, providing
                      customer service, processing or fulfilling orders and transactions, verifying customer information,
                      processing payments, providing financing, providing analytic services, providing storage, or providing
                      similar services;
                    </SubBullet>
                    <SubBullet>
                      to verify or maintain the quality or safety of our products, and to improve, upgrade, or enhance the
                      products or features offered by the business; and
                    </SubBullet>
                    <SubBullet>
                      to collect or process sensitive personal information where such collection or processing is not for the
                      purpose of inferring characteristics about a consumer (other than as may be necessary to provide the
                      Pilot Services to you).
                    </SubBullet>
                  </SubBulletList>
                </Bullet>
              </BulletList>
              <P>
                By providing such information to us, you consent and agree that we may store, process, use, and disclose
                such information to provide the Pilot Services and as set out above or as otherwise allowed by CCPA. Other
                than as may be necessary to provide the Pilot Services to you, we do not process sensitive personal
                information for the purposes of inferring characteristics about a consumer. Accordingly, we do not offer a
                &ldquo;Limit the Use of My Sensitive Personal Information&rdquo; option, as our use is limited to the exempt purposes
                defined under CCPA.
              </P>
            </SubSection>

            <SubSection title="Exercising Your Rights.">
              <P>
                If you are a resident of California and would like to exercise any of your rights under CCPA, please contact
                us as set forth in{" "}
                <a href="#contact" className="text-primary hover:underline">&ldquo;Contact Us&rdquo;</a> below. We will process such
                requests in accordance with applicable laws.
              </P>
            </SubSection>

            <SubSection title="Verification.">
              <P>
                To protect your privacy, we will take the following steps to verify your identity before fulfilling your
                request. When you make a request, we will ask you to provide sufficient information that allows us to
                reasonably verify you are the person about whom we collected personal information or an authorized
                representative, which may include asking you to answer questions regarding your account and use of our Pilot
                Services.
              </P>
            </SubSection>

            <SubSection title="Authorized Agent.">
              <P>
                Only you, or someone legally authorized to act on your behalf, may make a verifiable request related to your
                personal information. You may also make a verifiable request on behalf of your minor child. To designate an
                authorized agent, please contact us as set forth in{" "}
                <a href="#contact" className="text-primary hover:underline">&ldquo;Contact Us&rdquo;</a> below and provide written
                authorization signed by you and your designated agent
              </P>
            </SubSection>

            <SubSection title="Appeals.">
              <P>
                You may have the right to appeal a decision we make relating to requests to exercise your rights under CCPA.
                To appeal a decision, please send your request to us at the contact information set forth in{" "}
                <a href="#contact" className="text-primary hover:underline">&ldquo;Contact Us&rdquo;</a> below.
              </P>
            </SubSection>

            <SubSection title="Your Other California Privacy Rights">
              <P>
                Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to ask us for a
                notice describing what categories of personal information we share with third parties or corporate
                affiliates for those third parties or corporate affiliates&rsquo; direct marketing purposes. Please note that we
                do not share your personal information with any third parties or affiliates for their direct marketing
                purposes.
              </P>
            </SubSection>
          </Section>

          <Section id="children" number="10" title="Children's Information">
            <P>
              The Pilot Services are not directed to children under 18 (or other age as required by local law), and we do
              not knowingly collect personal information from children. We ask that minors (under the age of 18) not
              download or use the Pilot Services.
            </P>
            <P>
              If you are a parent or guardian and believe your child has uploaded personal information to our Pilot Services
              without your consent, you may contact us as described in{" "}
              <a href="#contact" className="text-primary hover:underline">&ldquo;Contact Us&rdquo;</a> below. If we become aware that
              a child has provided us with personal information in violation of applicable law, we will delete any personal
              information we have collected, unless we have a legal obligation to keep it, and terminate the child&rsquo;s
              account.
            </P>
          </Section>

          <Section id="other" number="11" title="Other Provisions">
            <SubSection title="App Stores.">
              <P>
                Your app store (e.g., Apple App Store or Google Play) may collect certain personal information in connection
                with your use of the Pilot Services. We have no control over the collection of such information by the
                third-party app store, and any such collection or use will be subject to that third party&rsquo;s applicable
                privacy policies.
              </P>
            </SubSection>

            <SubSection title="Third-Party Websites/Applications.">
              <P>
                The Pilot Services may contain links to other websites/applications and other websites/applications may
                reference or link to our Pilot Services. These third-party services are not controlled by us. We encourage
                our users to read the privacy policies of each website and application with which they interact. We do not
                endorse, screen or approve, and are not responsible for, the privacy practices or content of such other
                websites or applications. Providing personal information to third-party websites or applications is at your
                own risk.
              </P>
            </SubSection>

            <SubSection title="Supervisory Authority.">
              <P>
                If you are located in the European Economic Area, Switzerland, the United Kingdom, or Brazil, you have the
                right to lodge a complaint with a supervisory authority if you believe our processing of your personal
                information violates applicable law.
              </P>
            </SubSection>

            <SubSection title="Changes to our Privacy Policy.">
              <P>
                We may revise this Pilot Privacy Policy from time to time in our sole discretion. If there are any material
                changes to this Pilot Privacy Policy, we will notify you as required by applicable law. You understand and
                agree that you will be deemed to have accepted the updated Pilot Privacy Policy if you continue to use our
                Pilot Services after the new Pilot Privacy Policy takes effect. We encourage you to periodically review this
                page for the latest information on our privacy practices.
              </P>
            </SubSection>
          </Section>

          <Section id="contact" number="12" title="Contact Us">
            <P>
              If you have any questions about our privacy practices or this Pilot Privacy Policy, or to exercise your rights
              as detailed in this Pilot Privacy Policy, please contact us at:
            </P>
            <ContactCard />
          </Section>
        </div>
      </section>
    </div>
  );
}
