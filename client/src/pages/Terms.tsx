import { ReactNode } from "react";
import { motion } from "framer-motion";
import { AbstractHeroBg } from "@/components/ui/abstract-hero-bg";

const LAST_REVISED = "May 7, 2026";

const TOC = [
  { number: "1", id: "accounts", title: "Accounts" },
  { number: "2", id: "access", title: "Access to and Right to Use the Pilot Services" },
  { number: "3", id: "participation", title: "Pilot Participation Requirements and Stipend for Medication Taker Users" },
  { number: "4", id: "data", title: "Aggregate Data and Customer Data" },
  { number: "5", id: "indemnification", title: "Indemnification" },
  { number: "6", id: "third-party", title: "Third-Party Links" },
  { number: "7", id: "disclaimers", title: "Disclaimers" },
  { number: "8", id: "liability", title: "Limitation on Liability" },
  { number: "9", id: "termination", title: "Term and Termination" },
  { number: "10", id: "general", title: "General" },
];

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
              <span className="font-semibold text-foreground min-w-[1.75rem]">{item.number}.</span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        <span className="mr-2">{number}.</span>
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function SubSection({ number, title, children }: { number: string; title?: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg md:text-xl font-semibold text-foreground">
        <span className="mr-2">{number}</span>
        {title}
      </h3>
      <div className="space-y-3 pl-0 md:pl-2">{children}</div>
    </div>
  );
}

function NestedItem({ marker, title, children }: { marker: string; title?: string; children: ReactNode }) {
  return (
    <div className="space-y-2 pl-4 md:pl-6 border-l-2 border-border/60">
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground mr-1">{marker}</span>
        {title && <span className="font-semibold text-foreground">{title} </span>}
        {children}
      </p>
    </div>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{children}</p>;
}

function Callout({ children, variant = "warning" }: { children: ReactNode; variant?: "warning" | "info" }) {
  const styles =
    variant === "warning"
      ? "border-primary/40 bg-primary/5"
      : "border-border bg-muted/40";
  return (
    <div className={`my-2 p-5 md:p-6 rounded-2xl border ${styles}`}>
      <div className="text-sm md:text-base font-semibold text-foreground leading-relaxed uppercase tracking-wide space-y-3">
        {children}
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
        <a href="mailto:support@rx360.com" className="text-primary hover:underline">support@rx360.com</a>
      </p>
      <p className="text-muted-foreground">
        <span className="font-semibold text-foreground">In-App: </span>
        Support feature in the Settings menu
      </p>
    </div>
  );
}

export default function Terms() {
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
            Pilot Terms of Service
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
            The following Pilot Terms of Service (the &ldquo;Pilot Terms&rdquo;) apply to your access and use of Rx360 Inc.&rsquo;s
            (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) pilot program (&ldquo;Pilot&rdquo;), which includes the wellness kiosk,
            wristbands, chargers, and other electronic devices, related mobile applications, and all associated electronic
            communications, content, features, and services made available in the foregoing by Company (collectively altogether,
            the &ldquo;Pilot Services&rdquo;). The Pilot Services may also be subject to additional guidelines, policies, terms, or rules,
            which will be posted on the Pilot Services or otherwise provided at the time of your onboarding into the Pilot at
            Company&rsquo;s wellness kiosk or otherwise through a Company representative. All such additional terms, policies,
            guidelines, and rules are incorporated by reference into these Pilot Terms. By participating in the Pilot, you
            acknowledge that the Pilot Services are for feasibility testing and general wellness purposes only and are not
            medical devices nor intended for medical or clinical use, diagnosis, or treatment.
          </P>

          <Callout>
            These Pilot Terms set forth the legally binding terms and conditions that govern your particpation in and use of
            the Pilot Services. By accessing or using the Pilot Services, you are accepting these Pilot Terms. You must be at
            least 18 years old to access and use the Pilot Services. If you do not agree with all of the provisions of these
            Pilot Terms, do not access and/or use the Pilot Services.
          </Callout>

          <Callout>
            Please be aware that Section 10.3 contains provisions governing how to resolve disputes between you and Company.
            Among other things, Section 10.3 includes an agreement to arbitrate which requires, with limited exceptions, that
            all disputes between you and us shall be resolved by binding and final arbitration. Section 10.3 also contains a
            class action and jury trial waiver. Please read Section 10.3 carefully.
          </Callout>

          <Callout>
            <p>Unless you opt out of the agreement to arbitrate within 30 days:</p>
            <p>
              (1) you will only be permitted to pursue disputes or claims and seek relief against us on an individual basis,
              not as a plaintiff or class member in any class or representative action or proceeding and you waive your right
              to participate in a class action lawsuit or class-wide arbitration; and
            </p>
            <p>
              (2) you are waiving your right to pursue disputes or claims and seek relief in a court of law and to have a
              jury trial.
            </p>
          </Callout>

          <TableOfContents />

          <Section id="accounts" number="1" title="Accounts">
            <SubSection number="1.1" title="User Accounts.">
              <NestedItem marker="(a)" title="Account Creation.">
                In order to have access to and use the Pilot Services as an individual/consumer user, you must register for a
                user account (an &ldquo;Account&rdquo;) and provide certain required information about yourself as prompted by the account
                registration form such as name, email address, and phone number. You represent and warrant that: (a) all
                required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of
                such information; and (c) you will not impersonate someone else, provide an email address or phone number other
                than your own, create multiple Accounts, or transfer your Account to another person or allow another person to
                access your Account without our approval. You may delete your Account at any time, for any reason, by sending
                an email to us at <a href="mailto:support@rx360.com" className="text-primary hover:underline">support@rx360.com</a> or,
                where available, via the functionality in the Pilot Services. Company may suspend or terminate your Account in
                accordance with Section 9.
              </NestedItem>
              <NestedItem marker="(b)" title="Account Types and Features.">
                Accounts are available at no cost to users and include access to the then-current features of the Pilot for
                each Account type:
              </NestedItem>
              <div className="pl-8 md:pl-12 space-y-3">
                <NestedItem marker="(i)" title="Medication Taker Account.">
                  If you are a medication taker, your account will have the ability to sign-in and load your Customer Data
                  (defined below) (including via self-scanning) and access medication schedules and lists and medication
                  activity tracking (collectively, &ldquo;Medication Dashboards&rdquo;), automated medication reminders (&ldquo;Medication
                  Reminders&rdquo;), the option to share medication information and other information with your caregivers and/or
                  loved ones (&ldquo;Support Circle Sharing&rdquo;), real-time location sharing with your designated caregivers and/or
                  loved ones in Support Circle Sharing (&ldquo;Location Tracking&rdquo;), and tracking of falls with the ability to
                  contact a designated caregiver and/or loved one in your Support Circle Sharing in such situations (&ldquo;Fall
                  Tracking&rdquo;). If you opt-in to Support Circle Sharing, you understand acknowledge that caregiver and/or loved
                  ones who you have chosen to provide access to are not medical providers (such as physicians or pharmacists)
                  or emergency responders, that Company does not vet, verify, or guarantee the responsiveness or identity of
                  any individual you designate as a caregiver or loved one, and Company is not responsible for their actions
                  or failure to act upon viewing (or not viewing) Medication Dashboards, receiving Medication Reminders,
                  viewing (or not viewing) Location Tracking, or being contacted via Fall Tracking.
                </NestedItem>
                <NestedItem marker="(ii)" title="Caregiver/Family or Friend Account.">
                  If you are a caregiver or a loved one to medication taker user(s) of the Pilot Services who have opted in to
                  Support Circle Sharing, your account will have the ability to access and view the medication taker(s)&rsquo;
                  medication schedules and lists and medication activity, receive Medication Reminders for the medication
                  taker(s), receive real-time location information for medication taker(s) through Location Tracking, and
                  receive alerts and calls about detected falls of the medication taker(s) through Fall Tracking.
                </NestedItem>
                <NestedItem marker="(iii)" title="Features Acknowledgement.">
                  Company does not guarantee that Medication Dashboards, Medication Reminders, Support Circle Sharing,
                  Location Tracking, or Fall Tracking will be accurate, sent or available in real time, or that the underlying
                  mobile device hardware, GPS, or cellular network connection will be functional or accurate. Medication
                  Dashboards, Medication Reminders, Support Circle Sharing, Location Tracking, and Fall Tracking are provided
                  for informational purposes only and are not designed or intended for use in the diagnosis of disease or
                  other conditions or in the cure, mitigation, treatment, or prevention of disease or other conditions. Your
                  use or reliance on Medication Dashboards, Medication Reminders, Support Circle Sharing, Location Tracking,
                  or Fall Tracking is strictly at your own risk and you are solely responsible for all decisions made and
                  actions taken or not taken based on your use of or reliance on Medication Dashboards, Medication Reminders,
                  Support Circle Sharing, Location Tracking, or Fall Tracking. Consult with your physician or pharmacist (or,
                  if you are a caregiver or loved one, medication taker(s)&rsquo; physician or pharmacist) before you make any
                  decisions or take or not take any action based on Medication Dashboards, Medication Reminders, Support
                  Circle Sharing, Location Tracking, or Fall Tracking. Do not rely on Medication Dashboards, Medication
                  Reminders, or Support Circle Sharing as your primary method for medication management or Support Circle
                  Sharing, Location Tracking, or Fall Tracking as your primary method of physical safety or detecting or
                  reporting emergencies. The Pilot Services (including but not limited to the Medication Dashboards,
                  Medication Reminders, Support Circle Sharing, Location Tracking, and Fall Tracking, which are provided for
                  beta-testing purposes only) are not a replacement for professional medical monitoring or emergency medical
                  services. You are responsible for maintaining independent methods for tracking medications and ensuring your
                  own (or if you are a caregiver or loved one, medication taker(s)&rsquo;) safety, and you agree that Company is
                  not liable for any physical injury, property damage, or other harm resulting from a failure or inaccuracy of
                  the Medication Dashboards, Medication Reminders, Support Circle Sharing, Location Tracking, or Fall Tracking
                  features.
                </NestedItem>
              </div>
            </SubSection>
            <SubSection number="1.2" title="Account Responsibilities.">
              <P>
                You are responsible for maintaining the confidentiality of your Account login information and are fully
                responsible for all activities that occur under your Account. You agree to immediately notify Company of any
                unauthorized use or suspected unauthorized use of your Account or any other breach of security. Company cannot
                and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
              </P>
            </SubSection>
          </Section>

          <Section id="access" number="2" title="Access to and Right to Use the Pilot Services">
            <SubSection number="2.1" title="License.">
              <P>
                Subject to these Pilot Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license
                to access and use the Pilot Services solely for your own personal, noncommercial use in compliance with
                applicable laws and regulations for a three (3) day period starting from your onboarding into the Pilot either
                at Company&rsquo;s wellness kiosk, via a Company representative, or, for caregiver or loved one users, from your
                designation in the Pilot Services as a caregiver and/or loved one for a medication taker user (&ldquo;Pilot
                Period&rdquo;); provided that the Pilot Period for a caregiver or loved one user shall not exceed the Pilot Period
                of the associated medication taker user(s).
              </P>
            </SubSection>

            <SubSection number="2.2" title="Certain Restrictions.">
              <P>
                The rights granted to you in these Pilot Terms are subject to the following restrictions: (a) you shall not
                permit any third party to access the Pilot Services; (b) you shall not license, sublicense, sell, rent, lease,
                transfer, assign, distribute, host, or otherwise commercially exploit the Pilot Services, whether in whole or
                in part, or any content displayed on or made available in the Pilot Services; (c) you shall not modify, make
                derivative works of, disassemble, decompile, decode, or reverse engineer any part of the Pilot Services or
                permit others to do so; (d) you shall not access the Pilot Services in order to build a similar or competitive
                website, product, or service; and (d) except as expressly stated herein, no part of the Pilot Services or any
                content displayed on or may available in the Pilot Services may be copied, reproduced, distributed,
                republished, downloaded, displayed, posted or transmitted in any form or by any means. Unless otherwise
                indicated, any future release, update, or other addition to functionality of the Pilot Services shall be
                subject to these Pilot Terms. All copyright and other proprietary notices on the Pilot Services (or on any
                content displayed on the Pilot Services) must be retained on all copies thereof.
              </P>
            </SubSection>

            <SubSection number="2.3" title="Modification.">
              <P>
                Company reserves the right, at any time and for any reason, to change, modify, update, interrupt, suspend, or
                discontinue the Pilot Services (in whole or in part) with or without notice to you. This may result in content
                or features in the Pilot Services being added, removed, or modified. You agree that Company will not be liable
                to you or to any third party for any change, modification, update, interruption, suspension, or
                discontinuation of the Pilot Services or any part thereof.
              </P>
            </SubSection>

            <SubSection number="2.4" title="Support or Maintenance.">
              <P>
                You acknowledge and agree that Company will have no obligation to provide you with any support or maintenance
                in connection with the Pilot Services. Notwithstanding the foregoing, for medication taker users, Company may,
                at no charge to you, have a representative available at Company&rsquo;s wellness kiosk or otherwise to assist you
                with onboarding into the Pilot, including assisting you with your self-scanning to load Customer Data into the
                Pilot Services.
              </P>
            </SubSection>

            <SubSection number="2.5" title="Ownership.">
              <P>
                Excluding any Customer Data that you may provide, you acknowledge that all the intellectual property rights,
                including copyrights, patents, trademarks, and trade secrets, in the Pilot Services and their content,
                including, without limitation, all modifications, enhancements, and derivative works, are owned by Company or
                Company&rsquo;s suppliers. Neither these Pilot Terms (nor your access to or use of the Pilot Services) transfers to
                you or any third party any rights, title or interest in or to such intellectual property rights, except for
                the limited access rights expressly set forth in Section 2.1. Company and its suppliers reserve all rights not
                expressly granted in these Pilot Terms. There are no implied licenses granted under these Pilot Terms.
              </P>
            </SubSection>

            <SubSection number="2.6" title="Additional Terms for Apple and Android Devices.">
              <P>
                The following terms apply when you access the Pilot Services through either the Apple App Store or Google Play
                (each an &ldquo;App Distributor&rdquo;):
              </P>
              <NestedItem marker="(a)">
                these Pilot Terms are concluded between you and Company, not with either App Distributor, and Company (not
                either App Distributor) is solely responsible for the Pilot Services;
              </NestedItem>
              <NestedItem marker="(b)">
                the license granted to you for our Pilot Services is limited to a non-transferable license to use the Pilot
                Services on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in
                accordance with the usage rules set forth in the applicable App Distributor&rsquo;s terms of service;
              </NestedItem>
              <NestedItem marker="(c)">
                we are responsible for providing any maintenance and support services with respect to the Pilot Services as
                specified in the terms and conditions contained in these Pilot Terms or as otherwise required under applicable
                law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and
                support services with respect to the Pilot Services;
              </NestedItem>
              <NestedItem marker="(d)">
                in the event of any failure of the Pilot Services to conform to any applicable warranty, you may notify the
                applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the
                purchase price, if any, paid for the Pilot Services, and to the maximum extent permitted by applicable law,
                the App Distributor will have no other warranty obligation whatsoever with respect to the Pilot Services;
              </NestedItem>
              <NestedItem marker="(e)">
                the applicable App Distributor is not responsible for addressing any claims you have or any claims of any
                third party relating to the Pilot Services or your possession and use of the Pilot Services, including, but
                not limited to: (i) product liability claims; (ii) any claim that the Pilot Services fails to conform to any
                applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or
                similar legislation;
              </NestedItem>
              <NestedItem marker="(f)">
                in the event of any third-party claim that the Pilot Services or your possession and use of the Pilot Services
                infringes that third party&rsquo;s intellectual property rights, we will be solely responsible for the
                investigation, defense, settlement and discharge of any such intellectual property infringement claim to the
                extent required by this Pilot Terms;
              </NestedItem>
              <NestedItem marker="(g)">
                you represent and warrant that (a) you are not located in a country that is subject to a U.S. government
                embargo, or that has been designated by the U.S. government as a &ldquo;terrorist supporting&rdquo; country; and (b) you
                are not listed on any U.S. government list of prohibited or restricted parties;
              </NestedItem>
              <NestedItem marker="(h)">
                you must comply with applicable third-party terms of agreement when using the Pilot Services; and
              </NestedItem>
              <NestedItem marker="(i)">
                you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions
                in these Pilot Terms, and that each App Distributor will have the right (and will be deemed to have accepted
                the right) to enforce the terms and conditions in these Pilot Terms against you as a third-party beneficiary
                thereof.
              </NestedItem>
            </SubSection>

            <SubSection number="2.7" title="No Medical or Clinical Care or Advice.">
              <P>
                Company is not a medical or pharmacy group and does not provide medical or clinical advice, care, and/or
                treatment. The Pilot Services are not medical devices and the Pilot Services (including Medication Dashboards,
                Medication Reminders, Support Circle Sharing, Location Tracking, and Fall Tracking made available therein) are
                intended for informational purposes only as a wellness tool. The Pilot Services (including Medication
                Dashboards, Medication Reminders, Support Circle Sharing, Location Tracking, and Fall Tracking made available
                therein) are not designed or intended for use in the diagnosis of disease or other conditions, or in the cure,
                mitigation, treatment, or prevention of disease or other conditions. The Pilot Services are not a replacement
                for professional medical or clinical advice, diagnosis, or treatment. Before using the Pilot Services or
                making any changes to your (or, if you are a caregiver or loved one, medication taker(s)&rsquo;) medication or
                health routines based on the output of the Pilot Services, consult your (or, if you are a caregiver or loved
                one, medication taker(s)&rsquo;) physician or pharmacist. By using the Pilot Services, you assume inherent risks
                including any injury that may result from such activity.
              </P>
            </SubSection>

            <SubSection number="2.8" title="No Emergency Care.">
              <P>
                The Pilot Services are not for medical emergencies or urgent situations and are not a life-safety or emergency
                notification system and should not be used as a substitute for professional medical or clinical advice,
                emergency services, or caregiver supervision. You should not disregard or delay seeking medical or clinical
                advice or emergency care for yourself (or, if you are a caregiver or loved one, for medication taker(s)) based
                on anything that appears or does not appear in the Pilot Services. If you believe you (or, if you are a
                caregiver or loved one, medication taker(s)) are experiencing an emergency, call 9-1-1 immediately.
              </P>
            </SubSection>

            <SubSection number="2.9" title="Cautionary Notes.">
              <P>
                Please be cautious that the Hardware (defined below) you are wearing does not get caught on fixed structures
                or heavy objects. If you experience redness or skin irritation on your wrist while wearing Hardware, remove it
                immediately. If symptoms persist longer than 2-3 days of not using the Hardware, please contact a medical
                professional.
              </P>
            </SubSection>

            <SubSection number="2.10" title="Beta Testing Disclaimer.">
              <P>
                You acknowledge that the Pilot Services are currently provided in beta form for feasibility and software
                testing purposes. As a beta version, the Pilot Services may contain bugs, errors, or defects and may not
                perform as intended. Hardware components may malfunction or provide inaccurate data during this testing phase.
                You agree that the Pilot Services are provided as-is for the purpose of gathering Feedback (defined below) and
                that Company is not liable for any data loss, service interruptions, hardware malfunctions, or device issues
                resulting from these beta-specific conditions.
              </P>
            </SubSection>

            <SubSection number="2.11" title="Access to the Pilot Services from Outside the United States.">
              <P>
                Access to and use of the Pilot Services is limited exclusively to users located in the United States. Services
                are not available to users located outside the United States. Using the Pilot Services may be prohibited or
                restricted in certain countries. If you use the Pilot Services from outside of the United States, you are
                fully responsible for complying with the laws and regulations of the territory from which you access or use
                the Pilot Services.
              </P>
            </SubSection>

            <SubSection number="2.12" title="Feedback.">
              <P>
                If you provide Company with any feedback, ideas, thoughts, comments or suggestions regarding the Pilot
                Services (&ldquo;Feedback&rdquo;), you hereby assign to Company all rights in and to such Feedback and agree that Company
                shall have the right to use and fully exploit, without any attribution or compensation, such Feedback and
                related information in any manner it deems appropriate, including, without limitation, the testing,
                development, maintenance, improvement, and commercial launch of the Pilot Services and Company&rsquo;s other
                products and services. For clarity, all responses provided in any Feedback Survey (defined below) are
                considered Feedback under this Section 2.12 and shall be the sole and exclusive property of the Company to use
                for product improvement or any other lawful purpose without compensation to you.
              </P>
            </SubSection>

            <SubSection number="2.13" title="Privacy.">
              <P>
                In addition, when using or accessing the Pilot Services, you shall be subject to our{" "}
                <a href="/privacy" className="text-primary hover:underline">Pilot Privacy Policy</a>. Please review our{" "}
                <a href="/privacy" className="text-primary hover:underline">Pilot Privacy Policy</a>.
              </P>
            </SubSection>
          </Section>

          <Section
            id="participation"
            number="3"
            title="Pilot Participation Requirements and Stipend for Medication Taker Users"
          >
            <SubSection number="3.1" title="Pilot Participation Requirement.">
              <P>
                Participation in the Pilot is voluntary. To opt-in to patriciate in the Pilot as a medication taker user, you
                will be required to: (i) onboard into the Pilot at Company&rsquo;s wellness kiosk or otherwise through a Company
                representative, including by scanning or entering your medication information into the Pilot Services; (ii)
                actively wear and use the Pilot Services during the Pilot Period as instructed during onboarding; (iii) return
                the wristband, charger, and other electronic device portions of the Pilot Services (&ldquo;Hardware&rdquo;) to Company&rsquo;s
                wellness kiosk or otherwise to Company&rsquo;s representative within five (5) days of the end of the Pilot Period;
                and (iv) complete a feedback survey (&ldquo;Feedback Survey&rdquo;) at the conclusion of the Pilot Period regarding your
                wellness journey and your experience with the Pilot Services (including Feedback on product design and ease of
                use).
              </P>
            </SubSection>

            <SubSection number="3.2" title="Pilot Participation Stipend.">
              <P>
                If you complete the Pilot as a medication taker user by meeting all the requirements of Section 3.1, Company
                will provide you with its then-current participation stipend (as disclosed to you during your onboarding
                process) within fifteen (15) days of your completion of all the requirements of Section 3.1 by sending you an
                electronic gift card or digital payment to the email address you provided at the time of onboarding.
              </P>
            </SubSection>

            <SubSection number="3.3" title="Failure to Return Hardware.">
              <P>
                You may be held responsible for the replacement cost of Hardware that has been failed to be returned, lost, or
                intentionally damaged.
              </P>
            </SubSection>
          </Section>

          <Section id="data" number="4" title="Aggregate Data and Costumer Data">
            <SubSection number="4.1" title="Aggregate Data.">
              <P>
                &ldquo;Aggregate Data&rdquo; means all anonymous, aggregated content, data, statistics, user and usage data, and other
                information generated by the Pilot Services which may include Customer Data (defined below), provided that no
                such information will directly identify and cannot reasonably be used to identify individual users. You
                acknowledge and agree that Company shall own all right, title and interest in and to the Aggregate Data,
                including, without limitation, all modifications, enhancements, derivative works, and intellectual property
                rights thereto, and may use such Aggregate Data for any lawful purpose in connection with its business,
                including improving or otherwise enhancing or developing the Pilot Services or Company&rsquo;s other products or
                services or commercially launching them, providing other Company products or services, or marketing or
                advertising the Pilot Services and Company&rsquo;s other services and products.
              </P>
            </SubSection>

            <SubSection number="4.2" title="Customer Data.">
              <P>
                &ldquo;Customer Data&rdquo; means any and all electronic data and information submitted by or for you to the Pilot
                Services, including sensitive personal information and other personal information. You acknowledge that you
                are solely responsible for verifying the accuracy of all Customer Data submitted to the Pilot Services,
                including medication information scanned or entered into the Pilot Services and that you must compare your
                medication information against your official prescription labels provided by your pharmacy. As between you and
                Company, and except as set forth in Sections 4.1 and 4.3, you will own and retain all right, title and
                interest in and to Customer Data. You hereby represent and warrant that that Customer Data does not violate
                our Acceptable Use Policy (defined in Section 4.4). Company is not obligated to backup any Customer Data and
                you are solely responsible for creating and maintaining your own backup copies of your Customer Data if you
                desire. For medication taker users, you also understand, acknowledge, and agree that, if you opt-in to Support
                Circle Sharing, your Customer Data is shared with your designated caregivers and/or loved ones and that
                Company has no control over, and is not responsible for, any further use or disclosure of Customer Data by
                such caregivers and/or loved ones.
              </P>
            </SubSection>

            <SubSection number="4.3" title="License.">
              <P>
                You hereby grant (and you represent and warrant that you have the right to grant) to Company a worldwide,
                royalty-free, non-exclusive, irrevocable, perpetual right to access, use, reproduce, modify, distribute,
                incorporate into other works, and prepare derivative works based on Customer Data for the purpose of providing
                the Pilot Services and to improve, enhance, develop, commercially launch, market, and advertise the Pilot
                Services and Company&rsquo;s other services and products without any further notice or compensation to you of any
                kind; provided that, to the degree sensitive personal information is contained within Customer Data, the
                license to such sensitive personal information to Company for purposes of improving, enhancing, developing,
                commercially launching, marketing, and advertising the Pilot Services and Company&rsquo;s other services and
                products will be limited to de-identified sensitive personal information only. The foregoing license includes
                use of Customer Data to compile, use and disclose Aggregate Data. Company will be entitled to retain and use
                Aggregate Data and de-identified sensitive personal information in perpetuity.
              </P>
            </SubSection>

            <SubSection number="4.4" title="Acceptable Use Policy.">
              <P>The following terms constitute our &ldquo;Acceptable Use Policy&rdquo;:</P>
              <NestedItem marker="(a)">
                You agree not to use the Pilot Services to collect, upload, transmit, display, or distribute any Customer Data
                (i) that violates any third-party right, including any copyright, trademark, patent, trade secret, moral
                right, privacy right, right of publicity, or any other intellectual property or proprietary right; (ii) that
                is unlawful, harassing, abusive, degrading, intimidating, tortious, threatening, harmful, invasive of
                another&rsquo;s privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic,
                obscene, patently offensive, promotes illegal or harmful activities or substances, promotes racism, bigotry,
                hatred, or physical harm of any kind against any group or individual, or is otherwise objectionable; (iii)
                that is harmful to minors in any way; or (iv) that is in violation of any law, regulation, or obligations or
                restrictions imposed by any third party.
              </NestedItem>
              <NestedItem marker="(b)">
                In addition, you agree not to: (i) upload, transmit, or distribute to or through the Pilot Services any
                computer viruses, worms, or any software intended to damage or alter a computer system or data; (ii) send
                through the Pilot Services unsolicited or unauthorized advertising, promotional materials, junk mail, spam,
                chain letters, pyramid schemes, or any other form of duplicative or unsolicited messages, whether commercial
                or otherwise; (iii) use the Pilot Services to harvest, collect, gather or assemble information or data
                regarding other users, including e-mail addresses, without their consent; (iv) interfere with, disrupt, or
                create an undue burden on servers or networks connected to the Pilot Services, or violate the regulations,
                policies or procedures of such networks; (v) attempt to gain unauthorized access to the Pilot Services (or to
                other computer systems or networks connected to or used together with the Pilot Services), whether through
                password mining or any other means; (vi) harass or interfere with any other user&rsquo;s use and enjoyment of the
                Pilot Services; (vi) use software or automated agents or scripts to produce multiple accounts on the Pilot
                Services, or to generate automated searches, requests, or queries to (or to strip, scrape, or mine data from)
                the Pilot Services; (vii) use the Pilot Services for any commercial, revenue generating endeavor, or
                competitive purposes, including to create any product or service that competes with, or is designed to compete
                with, any of Company&rsquo;s products or services; (vii) use the Pilot Services, or any portion thereof, for the
                benefit of any third party or in any manner not permitted by these Pilot Terms; (viii) violate any applicable
                laws, rules, or regulations in connection with your access or use of the Pilot Services; (ix) remove, alter,
                or obscure any proprietary notice (including any notice of copyright or trademark) posted by us; or (x) make
                the functionality of the Pilot Services available to multiple users through any means.
              </NestedItem>
            </SubSection>

            <SubSection number="4.5" title="Enforcement.">
              <P>
                We reserve the right (but have no obligation) to review, refuse, screen, edit, and/or remove any Customer
                Data, and to investigate and/or take appropriate action against you in our sole discretion if you violate the
                Acceptable Use Policy or any other provision of these Pilot Terms or otherwise create liability for us or any
                other person. Such action may include removing or modifying your Customer Data, terminating your rights to
                access and use the Pilot Services (including terminating your Account, as applicable) in accordance with
                Section 9, and/or reporting you to law enforcement authorities.
              </P>
            </SubSection>

            <SubSection number="4.6" title="User Acknowledgment of Data Silo.">
              <P>
                You acknowledge that the Pilot Services are provided solely by Company. For medication taker users onboarded
                via Company&rsquo;s wellness kiosk, you agree that all Customer Data you submit to the Pilot Services will be
                managed by Company and will not be shared with the pharmacy hosting Company&rsquo;s wellness kiosk. The host
                pharmacy is not a provider of the Pilot Services and has no access to your Customer Data unless you
                independently have provided the same information to them as part of your independent relationship with them.
              </P>
            </SubSection>
          </Section>

          <Section id="indemnification" number="5" title="Indemnification">
            <P>
              You agree to defend, indemnify, and hold Company (and its affiliates, officers, directors, employees,
              contractors, suppliers, agents, and other representatives) harmless, including costs and attorneys&rsquo; fees, from
              any claim or demand made by any third party due to or arising out of (a) your access to or use of the Pilot
              Services, (b) your violation of these Pilot Terms or the Pilot Privacy Policy, (c) your Customer Data, or (d)
              your violation of any law, regulation, or other legal requirement. Company reserves the right, at your expense,
              to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you
              agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior
              written consent of Company. Company will use reasonable efforts to notify you of any such claim, action or
              proceeding upon becoming aware of it.
            </P>
          </Section>

          <Section id="third-party" number="6" title="Third-Party Links">
            <SubSection number="6.1" title="Third-Party Links.">
              <P>
                The Pilot Services may contain access or links to third-party websites, products, and/or services
                (collectively, &ldquo;Third-Party Links&rdquo;). Such Third-Party Links are not under the control of Company, and Company
                is not responsible for any Third-Party Links, including but not limited to not being liable for any losses or
                harmed caused by such third parties or any charges you incur in relation to such third parties. Company
                provides access to these Third-Party Links only as a convenience to you, and does not review, approve,
                monitor, endorse, warrant, or make any representations with respect to Third-Party Links. You use all
                Third-Party Links at your own risk and should apply a suitable level of caution and discretion in doing so.
                When you access or click on any of the Third-Party Links, the applicable third party&rsquo;s terms and policies
                apply, including the third party&rsquo;s privacy and data gathering practices. You should make whatever
                investigation you feel necessary or appropriate before proceeding with any use or transaction in connection
                with such Third-Party Links.
              </P>
            </SubSection>

            <SubSection number="6.2" title="Release.">
              <P>
                You hereby release and forever discharge the Company (and our affiliates, officers, directors, employees,
                contractors, suppliers, agents, other representatives successors, and assigns) from, and hereby waive and
                relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation,
                liability, action and cause of action of every kind and nature (including personal injuries, death, and
                property damage), that has arisen or arises directly or indirectly out of, or that relates directly or
                indirectly to, any Third-Party Links.
              </P>
              <Callout>
                If you are a California resident, you hereby waive California Civil Code Section 1542 in connection with the
                foregoing, which states: &ldquo;A general release does not extend to claims that the creditor or releasing party
                does not know or suspect to exist in his or her favor at the time of executing the release, and that if known
                by him or her, would have materially affected his or her settlement with the debtor or realeased party.&rdquo;
              </Callout>
            </SubSection>
          </Section>

          <Section id="disclaimers" number="7" title="Disclaimers">
            <Callout>
              The Pilot Services (including the Medication Dashboards, Medication Reminders, Support Circle Sharing, Location
              Tracking, and Fall Tracking made availble therein) are provided on an &ldquo;as-is&rdquo; and &ldquo;as available&rdquo; basis, and
              Company (and our suppliers) expressly disclaim any and all warranties and conditions of any kind, whether
              express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a
              particular purpose, title, quiet enjoyment, accuracy, or non-infringement. We (and our suppliers) make no
              warranty that the Pilot Services (including the Medication Dashboards, Medication Reminders, Support Circle
              Sharing, Location Tracking, and Fall Tracking made available therein) will meet your requirements, will be
              available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of
              viruses or other harmful code, complete, legal, or safe. If applicable law requires any warranties with respect
              to the Pilot Services, all such warranties are limited in duration to ninety (90) days from the date of first
              use.
            </Callout>
            <Callout>
              Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to
              you. Some jurisdictions do not allow limitations on how long an implied warranty lasts, so the above limitation
              may not apply to you.
            </Callout>
          </Section>

          <Section id="liability" number="8" title="Limitation on Liability">
            <Callout>
              To the maximum extent permitted by law, in no event shall Company (or our suppliers) be liable to you or any
              third party for any lost profits, lost data, costs of procurement of substitute products, or any indirect,
              consequential, exemplary, incidental, special or punitive damages arising from or relating to these Pilot Terms
              or your access to or use of, or inability to use, the Pilot Services (including the Medication Dashboards,
              Medication Reminders, Support Circle Sharing, Location Tracking, and Fall Tracking made availble therein), even
              if Company has been advised of the possibility of such damages. Access to, and use of, the Pilot Services
              (including the content made availble therein such as Medication Dashboards, Medication Reminders, Support
              Circle Sharing, Location Tracking, and Fall Tracking) is at your own discretion and risk, and you will be
              solely responsible for any damage or injury to you, your person, or your device or computer system or loss of
              data resulting therefrom.
            </Callout>
            <Callout>
              To the maximum extent permitted by law, notwithstanding anything to the contrary contained herein, Company&rsquo;s
              liability to you for any damages arising from or related to these Pilot Terms or the provision of the Pilot
              Services (including the Medication Dashboards, Medication Reminders, Support Circle Sharing, Location Tracking,
              and Fall Tracking made availble therein) to you (for any cause whatsoever and regardless of the form of the
              action), will at all times be limited to a maximum of fifty US Dollars (U.S. $50). The existence of more than
              one claim will not enlarge this limit. You agree that our suppliers will have no liability of any kind arising
              from or relating to this agreement.
            </Callout>
            <Callout>
              Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential
              damages, so the above limitation or exclusion may not apply to you.
            </Callout>
          </Section>

          <Section id="termination" number="9" title="Term and Termination">
            <P>
              Subject to this Section, these Pilot Terms will remain in full force and effect during the Pilot Period and, if
              you are a medication taker user, until your return of Hardware to Company&rsquo;s wellness kiosk or otherwise to a
              Company representative, your completion of your Feedback Survey, and your receipt of the corresponding stipend.
              We may suspend or terminate your rights to access and use the Pilot Services (including your Account) at any
              time for any reason at our sole discretion, including for any use of the Pilot Services in violation of these
              Pilot Terms. You may terminate this agreement and your participation in the Pilot at any time by no longer
              accessing the Pilot Services, returning Hardware to Company&rsquo;s wellness kiosk where you were onboarded or
              otherwise to a Company representative, deleting all mobile application portions of the Pilot Services from your
              personal devices, and deleting your Account by sending an email to us at{" "}
              <a href="mailto:support@rx360.com" className="text-primary hover:underline">support@rx360.com</a> or, where
              available, via the functionality in the Pilot Services; stopping access, returning Hardware, and deleting your
              Account and all mobile applications from your personal devices is your sole method of terminating this
              agreement. Upon termination of your rights under these Pilot Terms, your right to access and use the Pilot
              Services and your Account will terminate immediately. You understand that any termination of your Account may
              involve deletion of the Customer Data associated with your Account from our live databases. Company will not
              have any liability whatsoever to you for any termination of your rights under these Pilot Terms, including for
              termination of your Account or deletion of your Customer Data. Even after your rights under these Pilot Terms
              are terminated, the following provisions of these Pilot Terms will survive and remain in effect: Sections 2.2,
              2.5 through 2.10, and 2.12, Section 3.2, Section 4, and Sections 5 through 10.
            </P>
          </Section>

          <Section id="general" number="10" title="General">
            <SubSection number="10.1" title="Changes.">
              <P>
                These Pilot Terms are subject to occasional revision, and if we make any substantial changes, we may notify
                you by sending you an e-mail to the last e-mail address you provided to us (if any), and/or by prominently
                posting notice of the changes on our Pilot Services. You are responsible for providing us with your most
                current e-mail address. In the event that the last e-mail address that you have provided us is not valid, or
                for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail
                containing such notice will nonetheless constitute effective notice of the changes described in the notice.
                Continued use of our Pilot Services following notice of such changes shall indicate your acknowledgement of
                such changes and agreement to be bound by the terms and conditions of such changes.
              </P>
            </SubSection>

            <SubSection number="10.2" title="Applicable Law.">
              <P>
                You agree that the laws of the state of California and applicable federal laws, without regard to conflicts
                of laws provisions, will govern these Pilot Terms and any dispute that may arise between you and Company.
              </P>
            </SubSection>

            <SubSection number="10.3" title="Dispute Resolution.">
              <P>
                Please read the following arbitration agreement in this Section 10.3 (the &ldquo;Arbitration Agreement&rdquo;) carefully.
                It requires you to arbitrate disputes with Company, its parent companies, subsidiaries, affiliates, successors
                and assigns and all of their respective officers, directors, employees, agents, and representatives
                (collectively, the &ldquo;Company Parties&rdquo;) and limits the manner in which you can seek relief from the Company
                Parties.
              </P>
              <NestedItem marker="(a)" title="Applicability of Arbitration Agreement.">
                You agree that any past or present dispute, claim or controversy between you and any of the Company Parties
                relating in any way to the your participation in the Pilot, the Pilot Services, any communications you
                receive, any product or service provided by the Company, or these Pilot Terms (collectively, &ldquo;Disputes&rdquo;)
                will be resolved by final and binding arbitration, rather than in court, except as otherwise explicitly set
                out in this Arbitration Agreement such as that (1) you and the Company Parties may assert individualized
                claims in small claims court if the claims qualify, remain in such court and advance solely on an individual,
                non-class basis; and (2) you or the Company Parties may seek equitable relief in court for infringement or
                other misuse of intellectual property rights (such as trademarks, trade dress, domain names, trade secrets,
                copyrights, and patents). This Arbitration Agreement shall survive the expiration or termination of these
                Pilot Terms and shall apply, without limitation, to all claims that arose or were asserted before you agreed
                to these Pilot Terms (in accordance with the preamble) or any prior version of these Pilot Terms.
              </NestedItem>
              <NestedItem marker="(b)" title="Notice Requirement and Informal Dispute Resolution.">
                Before either party may seek arbitration, the party must first send to the other party a written Notice of
                Dispute (&ldquo;Notice&rdquo;) describing the nature and basis of the Dispute, and the requested relief. A Notice to
                the Company should be sent via email to{" "}
                <a href="mailto:legal@rx360.com" className="text-primary hover:underline">legal@rx360.com</a> and via mail to
                Rx360 Inc., 4471 Dean Martin Dr., Suite 4109, Las Vegas, NV 89103. After the Notice is received, you and the
                Company may attempt to resolve the Dispute informally. If you and the Company do not resolve the Dispute
                within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding. Any
                statute of limitations will be tolled during the thirty (30) day resolution process. The amount of any
                settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has
                determined the amount of the award, if any, to which either party is entitled.
              </NestedItem>
              <NestedItem marker="(c)" title="Arbitration Rules.">
                Arbitration shall be initiated through the American Arbitration Association (&ldquo;AAA&rdquo;), an established
                alternative dispute resolution provider (&ldquo;ADR Provider&rdquo;) that offers arbitration as set forth in this
                section. If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider.
                The rules of the ADR Provider shall govern all aspects of the arbitration, including but not limited to the
                method of initiating and/or demanding arbitration, except to the extent such rules are in conflict with the
                Pilot Terms. The AAA Consumer Arbitration Rules (&ldquo;Arbitration Rules&rdquo;) governing the arbitration are
                available online at <a href="https://www.adr.org" target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">www.adr.org</a> or by calling the AAA at 1-800-778-7879. The arbitration shall be conducted by a
                single, neutral arbitrator. Any Disputes where the total amount of the award sought is less than Ten Thousand
                U.S. Dollars (US $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option
                of the party seeking relief. For Disputes where the total amount of the award sought is Ten Thousand U.S.
                Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules. Unless
                the parties agree otherwise, any hearing will be held in Los Angeles County or, upon your request, in the
                city closest to your location where AAA maintains an office. If you reside outside of the U.S., the
                arbitrator shall give the parties reasonable notice of the date, time and place of any oral hearings. Unless
                otherwise agreed to, all arbitration proceedings shall be held in English. Any judgment on the award rendered
                by the arbitrator may be entered in any court of competent jurisdiction. Each party shall bear its own costs
                (including attorney&rsquo;s fees) and disbursements arising out of the arbitration and agreed that payment of all
                filing, administration and arbitrator fees for the ADR Provider will be governed by the Arbitration Rules.
              </NestedItem>
              <NestedItem marker="(d)" title="Additional Rules for Non-Appearance Based Arbitration.">
                If non-appearance based arbitration is elected, the arbitration shall be conducted by telephone, online
                and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the
                arbitration. The arbitration shall not involve any personal appearance by the parties or witnesses unless
                otherwise agreed by the parties.
              </NestedItem>
              <NestedItem marker="(e)" title="Time Limits.">
                If you or the Company pursue arbitration, the arbitration action must be initiated and/or demanded within the
                statute of limitations (i.e., the legal deadline for filing a claim) and within any deadline imposed under the
                Arbitration Rules for the pertinent claim.
              </NestedItem>
              <NestedItem marker="(f)" title="Authority of Arbitrator.">
                If arbitration is initiated, the arbitrator will have exclusive authority to decide all issues relating to
                the formation, interpretation, applicability, enforceability, and scope of this Arbitration Agreement and to
                decide the rights and liabilities, if any, of you and the Company Parties, and the Dispute will not be
                consolidated with any other matters or joined with any other cases or parties. The arbitrator shall have the
                authority to grant motions dispositive of all or part of any claim. The arbitrator shall have the authority
                to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under
                applicable law, the Arbitration Rules, and the Pilot Terms. The arbitrator shall issue a written award and
                statement of decision describing the essential findings and conclusions on which any award (or decision not
                to render an award) is based, including the calculation of any damages awarded. The arbitrator shall follow
                the applicable law. The arbitrator has the same authority to award relief on an individual basis that a judge
                in a court of law would have. The award of the arbitrator is final and binding upon you and the Company.
                Judgment on the arbitration award may be entered in any court having jurisdiction.
              </NestedItem>
              <NestedItem marker="(g)" title="Waiver of Jury Trial.">
                <span className="uppercase font-semibold text-foreground">
                  The parties hereby waive their constitutional and statutory rights to go to court and have a trial in front
                  of a judge or a jury,
                </span>{" "}
                instead electing that all Disputes shall be resolved exclusively by arbitration under this Arbitration
                Agreement. Arbitration procedures are typically more limited, more efficient and less costly than rules
                applicable in a court and are subject to very limited review by a court. In the event any litigation should
                arise between you and the Company Parties in any state or federal court in a suit to vacate or enforce an
                arbitration award or otherwise,{" "}
                <span className="uppercase font-semibold text-foreground">
                  you and the Company Parties waive all rights to a jury trial,
                </span>{" "}
                instead electing that the Dispute be resolved by a judge.
              </NestedItem>
              <NestedItem marker="(h)" title="Waiver of Class or Consolidated Actions.">
                <span className="uppercase font-semibold text-foreground">
                  All claims and disputes within the scope of this Arbitration Agreement must be arbitrated or litigated on
                  an individual basis and not on a class, representative, or colective basis, and the parties hereby waive
                  all rights to have any dispute be brought, heard, administered, resolved, or arbitrated on a class,
                  collective, representative, or mass action basis. Only individual relief is available, and claims of more
                  than one customer or user cannot be arbitrated or litigated jointly or consolidated with those of any other
                  customer or user.
                </span>
              </NestedItem>
              <NestedItem marker="(i)" title="Confidentiality.">
                All aspects of the arbitration proceeding, including but not limited to the award of the arbitrator and
                compliance therewith, shall be strictly confidential. The parties agree to maintain confidentiality unless
                otherwise required by law. This paragraph shall not prevent a party from submitting to a court of law any
                information necessary to enforce this Arbitration Agreement, to enforce an arbitration award, or to seek
                injunctive or equitable relief.
              </NestedItem>
              <NestedItem marker="(j)" title="Severability.">
                If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by
                a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall
                be severed and the remainder of the Arbitration Agreement shall continue in full force and effect.
              </NestedItem>
              <NestedItem marker="(k)" title="Right to Waive.">
                Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party
                against whom the claim is asserted. Such waiver shall not waive or affect any other portion of this
                Arbitration Agreement.
              </NestedItem>
              <NestedItem marker="(l)" title="Survival of Agreement.">
                This Arbitration Agreement will survive the termination of your relationship with Company.
              </NestedItem>
              <NestedItem marker="(m)" title="Small Claims Court.">
                Notwithstanding the foregoing, either you or the Company may bring an individual action in small claims
                court.
              </NestedItem>
              <NestedItem marker="(n)" title="Emergency Equitable Relief.">
                Notwithstanding the foregoing, either party may seek emergency equitable relief before a state or federal
                court in order to maintain the status quo pending arbitration. A request for interim measures shall not be
                deemed a waiver of any other rights or obligations under this Arbitration Agreement.
              </NestedItem>
              <NestedItem marker="(o)" title="Claims Not Subject to Arbitration.">
                Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and
                infringement or misappropriation of Company&rsquo;s patent, copyright, trademark, trade secrets, or other
                intellectual property rights shall not be subject to this Arbitration Agreement.
              </NestedItem>
              <NestedItem marker="(p)" title="Courts.">
                In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the
                parties hereby agree to submit to the personal jurisdiction of the state and federal courts located within
                Los Angeles County, California, for such purpose.
              </NestedItem>
              <NestedItem marker="(q)" title="Opt-Out.">
                You will retain the right to opt out of arbitration entirely and litigate any Dispute if you provide us with
                written notice of your desire to do so via email to{" "}
                <a href="mailto:legal@rx360.com" className="text-primary hover:underline">legal@rx360.com</a> and via mail to
                Rx360 Inc., 4471 Dean Martin Dr., Suite 4109, Las Vegas, NV 89103 within thirty (30) days following the date
                you first become subject to this Arbitration Agreement. Your written notice must include your name, mailing
                address, email address, and a clear statement that you want to opt out of this Arbitration Agreement. If you
                do not opt-out of this arbitration agreement within the thirty (30) day period, you and Company shall be
                bound by the terms of this Arbitration Agreement in full. If you opt-out of this Arbitration Agreement within
                the thirty (30) day period, all other parts of these Pilot Terms will continue to apply to you. Opting out of
                this Arbitration Agreement has no effect on any other arbitration agreements that you may currently have with
                us.
              </NestedItem>
              <NestedItem marker="(r)" title="Changes.">
                Notwithstanding any provision in these Pilot Terms to the contrary, we agree that if Company makes any future
                material change to this Arbitration Agreement, you may reject that change within 30 days of such change
                becoming effective by writing Company via email to{" "}
                <a href="mailto:legal@rx360.com" className="text-primary hover:underline">legal@rx360.com</a> and via mail to
                Rx360 Inc., 4471 Dean Martin Dr., Suite 4109, Las Vegas, NV 89103. Unless you reject the change within 30
                days of such change becoming effective by writing to Company in accordance with the foregoing, your continued
                use of the Pilot Services following the posting of changes to this Arbitration Agreement constitutes your
                acceptance of any such changes. Changes to this Arbitration Agreement do not provide you with a new
                opportunity to opt out of the Arbitration Agreement if you have previously agreed to a version of these Pilot
                Terms and did not validly opt out of arbitration. If you reject any change or update to this Arbitration
                Agreement, and you were bound by an existing agreement to arbitrate Disputes arising out of or relating in
                any way to your participation in the Pilot, your access to or use of the Pilot Services, any communications
                you receive, any product or service provided by the Company, the Pilot Services, or these Pilot Terms, the
                provisions of this Arbitration Agreement as of the date you first accepted these Pilot Terms (or accepted any
                subsequent changes to these Pilot Terms) remain in full force and effect. Company will continue to honor any
                valid opt outs of the Arbitration Agreement that you made to a prior version of these Pilot Terms.
              </NestedItem>
            </SubSection>

            <SubSection number="10.4" title="California Users Consumer Rights Notice.">
              <P>
                Under California Civil Code Section 1789.3, California users of the Pilot Services are entitled to the
                following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services
                of the California Department of Consumer Affairs may be contacted in writing at 1625 N. Market Blvd., Suite N
                112, Sacramento, California 95834, or by telephone at (800) 952-5210.
              </P>
            </SubSection>

            <SubSection number="10.5" title="Export.">
              <P>
                The Pilot Services may be subject to U.S. export control laws and may be subject to export or import
                regulations in other countries. You agree not to export, reexport, or transfer, directly or indirectly, any
                technology or U.S. technical data acquired from Company, or any products utilizing such technology or data,
                in violation of the United States export laws or regulations. You also represent that you are not on any U.S.
                government denied-party list and that you will not access or use the Pilot Services in a U.S. embargoed
                country or region or in violation of any U.S. export law or regulation.
              </P>
            </SubSection>

            <SubSection number="10.6" title="Electronic Communications.">
              <P>
                The communications between you and Company use electronic means, whether you use the Pilot Services or send
                us emails, or whether Company posts notices on the Pilot Services or communicates with you via email. Please
                note that by providing your mobile number, you are agreeing to be contacted by us at the number you have
                provided, including via calls. For contractual purposes, you (a) consent to receive communications from
                Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures,
                and other communications that Company provides to you electronically satisfy any legal requirement that such
                communications would satisfy if it were in a hardcopy writing. The foregoing does not affect your
                non-waivable rights. You also understand acknowledge, and agree that are solely responsible for any messaging
                or data rates, fees, or charges incurred from your mobile service provider as a result of receiving
                Medication Reminders or Fall Tracking alerts or calls, using Location Tracking, or otherwise accessing the
                Pilot Services.
              </P>
            </SubSection>

            <SubSection number="10.7" title="Entire Terms.">
              <P>
                These Pilot Terms (including any guidelines, policies, terms, or rules posted by us on the Pilot Services or
                otherwise provided to you at the time of onboarding) constitute the entire agreement between you and us
                regarding the use of the Pilot Services. Our failure to exercise or enforce any right or provision of these
                Pilot Terms shall not operate as a waiver of such right or provision. These Pilot Terms operate to the
                fullest extent permissible by law. We shall not be responsible or liable for any loss, damage, delay, or
                failure to act caused by any occurrences beyond our reasonable control, including, without limitation, acts
                of God, strikes or other labor disturbances, war, whether declared or not, sabotage, disease, epidemic, or
                pandemic, disruptions in communications, power, or other utilities, and/or any other cause or causes, whether
                similar or dissimilar to those herein specified, which cannot reasonably be controlled by us. The section
                titles in these Pilot Terms are for convenience only and have no legal or contractual effect. The word
                &ldquo;including&rdquo; means &ldquo;including without limitation&rdquo;. If any provision of these Pilot Terms is, for any reason,
                held to be invalid or unenforceable, the other provisions of these Pilot Terms will be unimpaired and the
                invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum
                extent permitted by law. Your relationship to Company is that of an independent contractor, and neither party
                is an agent or partner of the other and there is no joint venture, partnership, employment, or agency
                relationship created between you and us as a result of these Pilot Terms or use of the Pilot Services. These
                Pilot Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or
                otherwise transferred by you without Company&rsquo;s prior written consent, and any attempted assignment,
                subcontract, delegation, or transfer in violation of the foregoing will be null and void. Company may freely
                assign these Pilot Terms and any or all of our rights and obligations under these Pilot Terms to others at
                any time. The terms and conditions set forth in these Pilot Terms shall be binding upon assignees. You agree
                that these Pilot Terms will not be construed against us by virtue of having drafted them. You hereby waive
                any and all defenses you may have based on the electronic form of these Pilot Terms and the lack of signing
                by the parties hereto to execute these Pilot Terms.
              </P>
            </SubSection>

            <SubSection number="10.8" title="Copyright/Trademark Information.">
              <P>
                Copyright &copy; 2026 Rx360 Inc. All rights reserved. All trademarks, logos and service marks (&ldquo;Marks&rdquo;)
                displayed on the Pilot Services are our property or the property of other third parties. You are not
                permitted to use these Marks without our prior written consent or the consent of such third party which may
                own the Marks.
              </P>
            </SubSection>

            <SubSection number="10.9" title="Contact Information.">
              <P>
                If you discover any violation of the Pilot Terms by others, or you have any questions about the Pilot, Pilot
                Services or these Pilot Terms, please contact us at:
              </P>
              <ContactCard />
            </SubSection>
          </Section>
        </div>
      </section>
    </div>
  );
}
