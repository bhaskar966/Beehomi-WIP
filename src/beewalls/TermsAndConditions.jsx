import { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "BeeWalls — Terms & Conditions";
  })
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#333334]">
      {/* Header / Hero */}
      <section className="bg-[#333334] text-white rounded-4xl shadow-2xl">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#FCDA93] px-4 py-1 text-sm font-medium text-[#333334]">
            BeeWalls • Terms & Conditions
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Bee Walls Terms and Conditions</h1>
          <p className="mt-2 text-[#FCDA93]">Last updated: 04-09-2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl px-6 py-10 sm:mx-auto text-left">
        {/* On-page nav */}
        <nav
          className="mb-8 rounded-xl border border-[#F3E8C8] bg-white/70 backdrop-blur-sm"
          aria-label="On this page"
        >
          <ul className="grid gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["intro", "Introduction"],
              ["provider", "Provider & contact"],
              ["definitions", "Definitions"],
              ["license", "License & ownership"],
              ["attribution", "Public attribution"],
              ["acceptable-use", "Acceptable use"],
              ["accounts", "Accounts & identifiers"],
              ["tiers", "Free vs premium"],
              ["subscriptions", "Subscriptions & access"],
              ["billing", "Billing & refunds"],
              ["availability", "Availability & changes"],
              ["ip", "Intellectual property"],
              ["enforcement", "Enforcement & termination"],
              ["third-parties", "Third‑party terms"],
              ["disclaimers", "Disclaimers & liability"],
              ["law", "Governing law"],
              ["changes", "Changes to Terms"],
              ["contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href} className="text-left">
                <a
                  className="inline-flex w-full items-center justify-between rounded-lg px-4 py-2 text-sm hover:bg-[#FCDA93]/30 text-left"
                  href={`#${href}`}
                >
                  <span className="text-left">{label}</span>
                  <span aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <section className="mx-auto max-w-4xl text-left">
          <article className="prose prose-neutral max-w-none text-left space-y-10 prose-headings:scroll-mt-24 prose-p:text-left prose-li:text-left prose-h2:text-left prose-h3:text-left">
            <section id="intro">
              <h2 className="text-2xl font-semibold mt-0">1) Introduction and acceptance</h2>
              <p>
                These Terms and Conditions (“Terms”) govern the use of BeeWalls (the “App”, “Service”) provided by
                Beehomi (“we”, “us”). By installing or using the App, the user agrees to these Terms and the BeeWalls
                Privacy Policy referenced in‑app and on the store listing. If the user does not agree, do not install
                or use the App. Mandatory consumer rights that apply in a user’s jurisdiction remain unaffected.
              </p>
            </section>

            <section id="provider">
              <h2 className="text-2xl font-semibold">2) Provider and contact</h2>
              <p>
                Provider: Beehomi. Operating in: India (not registered). Contact:{" "}
                <a
                  className="font-medium text-[#333334] underline decoration-[#FCDA93] underline-offset-4"
                  href="mailto:beewalls.contact@beehomi.com"
                >
                  beewalls.contact@beehomi.com
                </a>
                .
              </p>
            </section>

            <section id="definitions">
              <h2 className="text-2xl font-semibold">3) Definitions</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold">3.1 Personal use</h3>
                  <p>
                    Non‑commercial use by an individual on owned devices, including setting wallpapers, creating
                    personal device themes and screenshots, and sharing device photos with the wallpaper visible.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">3.2 Public platform</h3>
                  <p>
                    Publicly accessible social media, video/streaming platforms, blogs, websites, app stores, or other
                    public digital channels.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">3.3 Premium</h3>
                  <p>
                    Paid access to premium wallpapers and premium features for a subscription term (or lifetime
                    entitlement where expressly purchased).
                  </p>
                </div>
              </div>
            </section>

            <section id="license">
              <h2 className="text-2xl font-semibold">4) License scope and ownership</h2>
              <ul className="list-disc pl-6">
                <li>
                  License: Subject to these Terms, Beehomi grants a limited, non‑exclusive, non‑transferable, revocable
                  license to download, apply, and modify wallpapers for personal, non‑commercial use on owned devices.
                </li>
                <li>
                  No ownership: Subscriptions or purchases do not transfer ownership of wallpapers, the App, or any
                  intellectual property; they grant time‑bound access rights and feature entitlements only.
                </li>
                <li>
                  No redistribution: Resale, sublicensing, redistribution, or inclusion of wallpapers in packs,
                  repositories, catalogs, or apps outside BeeWalls is prohibited. Automated scraping, bulk downloads, or
                  programmatic exporting are prohibited.
                </li>
              </ul>
            </section>

            <section id="attribution">
              <h2 className="text-2xl font-semibold">5) Public attribution requirement</h2>
              <ul className="list-disc pl-6">
                <li>
                  When a wallpaper is displayed on a public platform, attribution is required by tagging “Beehomi” on
                  that platform. If tagging is not supported, include a reasonably prominent link to the BeeWalls Google
                  Play listing in the caption/description/credits.
                </li>
                <li>
                  Example: “Wallpaper via BeeWalls (Beehomi)” + BeeWalls Play listing link: [Add your Play link here].
                </li>
                <li>
                  If the App indicates a creator credit, include that creator’s handle/name alongside Beehomi
                  attribution.
                </li>
              </ul>
            </section>

            <section id="acceptable-use">
              <h2 className="text-2xl font-semibold">6) Acceptable and prohibited use</h2>
              <ul className="list-disc pl-6">
                <li>No unlawful use or infringement of third‑party rights.</li>
                <li>
                  Do not remove or alter attribution, watermarks, or proprietary notices where present; do not upload
                  BeeWalls wallpapers to public stock sites or repositories.
                </li>
                <li>
                  Do not scrape, crawl, harvest, bulk‑download, mirror, or programmatically export the catalog or assets.
                </li>
                <li>
                  Do not bypass paywalls or technical protections, and do not reverse engineer, decompile, disassemble,
                  or attempt to access backend endpoints other than through the App as intended, subject to any
                  non‑waivable rights under applicable law.
                </li>
              </ul>
            </section>

            <section id="accounts">
              <h2 className="text-2xl font-semibold">7) Accounts and identifiers</h2>
              <p>
                Authentication is via Google Play Services (Firebase Auth). Premium entitlements and favorites are
                associated with the user’s Google account UID. Email is not used as the account identifier. Users are
                responsible for securing their device and account. Sharing or transferring accounts is not permitted.
              </p>
            </section>

            <section id="tiers">
              <h2 className="text-2xl font-semibold">8) Free vs premium rights</h2>
              <ul className="list-disc pl-6">
                <li>
                  Same rules: Free and premium users are subject to the same usage rules and restrictions set out in
                  these Terms.
                </li>
                <li>
                  Premium expands accessible content and features only; it does not change the underlying license terms
                  or transfer ownership.
                </li>
              </ul>
            </section>

            <section id="subscriptions">
              <h2 className="text-2xl font-semibold">9) Subscriptions and access model</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold">9.1 Time‑limited subscriptions</h3>
                  <p>
                    Premium subscriptions (e.g., monthly, yearly) grant access to premium wallpapers and premium
                    features only during the paid term. If the subscription ends and is not renewed, premium access and
                    entitlements are revoked until renewed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">9.2 Lifetime subscription</h3>
                  <p>
                    A “lifetime” subscription provides access to premium wallpapers and premium features for the
                    lifetime of the product offering as made available by Beehomi, subject to service availability,
                    platform changes, and these Terms. It does not guarantee perpetual availability of specific
                    wallpapers or features and does not transfer ownership.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">9.3 Entitlement binding</h3>
                  <p>
                    Premium entitlements are bound to the Google account UID of the purchasing account and are not
                    transferable.
                  </p>
                </div>
              </div>
            </section>

            <section id="billing">
              <h2 className="text-2xl font-semibold">10) Billing, renewals, and refunds</h2>
              <ul className="list-disc pl-6">
                <li>
                  Billing/renewals are handled by the platform (e.g., Google Play). Subscriptions auto‑renew unless
                  cancelled before the renewal date, per platform process. Manage subscriptions and cancellations in
                  platform account settings.
                </li>
                <li>
                  Refunds are governed by platform policies and applicable law. Beehomi may not issue direct refunds
                  outside the platform. Please refer to the platform’s refund help center for eligibility and process.
                </li>
              </ul>
            </section>

            <section id="availability">
              <h2 className="text-2xl font-semibold">11) Availability and changes</h2>
              <ul className="list-disc pl-6">
                <li>
                  Collections, wallpapers, and features may be updated, rotated, or withdrawn at Beehomi’s discretion.
                  Service availability is not guaranteed; outages or changes may occur without notice.
                </li>
                <li>
                  Trials or promos convert to paid access unless cancelled before the trial ends per platform process.
                  Limits (e.g., one trial per account) may apply.
                </li>
              </ul>
            </section>

            <section id="ip">
              <h2 className="text-2xl font-semibold">12) Intellectual property</h2>
              <p>
                The BeeWalls app, UI, branding, and curation are owned by Beehomi. Wallpapers are owned by or licensed
                to Beehomi and are licensed to end users under these Terms. No implied rights are granted.
              </p>
            </section>

            <section id="enforcement">
              <h2 className="text-2xl font-semibold">13) Enforcement, suspension, and termination</h2>
              <ul className="list-disc pl-6">
                <li>
                  Beehomi may rate‑limit, suspend, or terminate access and revoke licenses for violations, suspected
                  abuse, fraud, scraping, tampering, or infringement. Premium access may be revoked upon subscription
                  lapse or violations.
                </li>
                <li>
                  Takedown and notices: For missing attribution or misuse on public platforms, Beehomi may request
                  correction or removal. Report suspected misuse via{" "}
                  <a
                    className="font-medium text-[#333334] underline decoration-[#FCDA93] underline-offset-4"
                    href="mailto:beewalls.contact@beehomi.com"
                  >
                    beewalls.contact@beehomi.com
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section id="third-parties">
              <h2 className="text-2xl font-semibold">14) Third‑party services and terms</h2>
              <p>
                The App integrates platform billing and other third‑party services. The user agrees to applicable
                third‑party terms (e.g., Google Play). Conflicts may affect access, billing, and refunds subject to
                those terms.
              </p>
            </section>

            <section id="disclaimers">
              <h2 className="text-2xl font-semibold">15) Disclaimers and limitation of liability</h2>
              <ul className="list-disc pl-6">
                <li>
                  The Service and content are provided “as is” and “as available.” To the extent permitted by law,
                  Beehomi disclaims warranties of merchantability, fitness for a particular purpose, and
                  non‑infringement.
                </li>
                <li>
                  To the maximum extent permitted by law, Beehomi’s total liability for claims arising out of or
                  relating to the Service is limited to the amounts paid by the user for premium in the 12 months
                  preceding the claim. Beehomi is not liable for indirect, incidental, special, consequential, or
                  punitive damages. Mandatory consumer rights remain unaffected.
                </li>
              </ul>
            </section>

            <section id="law">
              <h2 className="text-2xl font-semibold">16) Governing law and venue</h2>
              <p>
                These Terms are governed by the laws of India, without regard to conflict of laws principles. If a court
                of competent jurisdiction is required, the parties consent to courts in India, subject to any mandatory
                consumer protection jurisdiction rules.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-2xl font-semibold">17) Changes to these Terms</h2>
              <p>
                Beehomi may update these Terms from time to time. Material changes will be notified through reasonable
                means (e.g., in‑app notice). Continued use after the effective date constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-semibold">18) Contact</h2>
              <p>
                For questions about these Terms, contact:{" "}
                <a
                  className="font-medium text-[#333334] underline decoration-[#FCDA93] underline-offset-4"
                  href="mailto:beewalls.contact@beehomi.com"
                >
                  beewalls.contact@beehomi.com
                </a>
                .
              </p>
            </section>
          </article>

          {/* Footer helper
          <div className="mt-12 rounded-xl border border-[#F3E8C8] bg-[#FCDA93]/30 p-6">
            <p className="text-sm text-[#333334]">
              Tip: Link this page in‑app (Settings → Legal) and on your Google Play listing and checkout/paywall.
              Consider showing a brief “By continuing, you accept the Terms” notice near purchase flows.
            </p>
          </div> */}
        </section>
      </section>
    </main>
  );
}
