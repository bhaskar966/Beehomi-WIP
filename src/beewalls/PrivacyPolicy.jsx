import { useEffect } from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = "BeeWalls — Privacy Policy";
    })
    return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#333334]">
      {/* Header / Hero */}
      <section className="bg-[#333334] text-white rounded-4xl shadow-2xl">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#FCDA93] px-4 py-1 text-sm font-medium text-[#333334]">
            BeeWalls • Privacy Policy
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Bee Walls Privacy Policy</h1>
          <p className="mt-2 text-[#FCDA93]">Last updated: 05-09-2025</p>
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
                ["who-we-are", "Who we are"],
                ["scope", "Scope"],
                ["data-we-collect", "Data we collect"],
                ["how-we-use-data", "How we use data"],
                ["legal-bases", "Legal bases"],
                ["third-parties", "Third‑party services"],
                ["data-sharing", "Data sharing"],
                ["retention", "Data retention"],
                ["security", "Data security"],
                ["children", "Children’s privacy"],
                ["transfers", "International transfers"],
                ["choices-rights", "Your choices and rights"],
                ["do-not-track", "Do Not Track & sale/share"],
                ["changes", "Changes to this policy"],
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

          {/* Sections wrapper */}
          <section className="mx-auto max-w-4xl px-0 py-0 text-left">
            {/* Top-level sections spaced by 10 */}
            <article className="prose prose-neutral max-w-none text-left space-y-10 prose-headings:scroll-mt-24 prose-p:text-left prose-li:text-left prose-h2:text-left prose-h3:text-left">
              <section id="who-we-are">
                <h2 className="text-2xl font-semibold mt-0">1. Who we are</h2>
                <p>
                  BeeWalls (“App”, “Service”) is provided by Beehomi (“we”, “us”). Operating in: India (not registered).
                  Contact:{" "}
                  <a
                    className="font-medium text-[#333334] underline decoration-[#FCDA93] underline-offset-4"
                    href="mailto:beewalls.contact@beehomi.com"
                  >
                    beewalls.contact@beehomi.com
                  </a>
                  .
                </p>
              </section>

              <section id="scope">
                <h2 className="text-2xl font-semibold">2. Scope</h2>
                <p>
                  This Privacy Policy explains what data the App collects, how it is used and shared, how long it is
                  retained, and the choices available to users. It applies to all users of BeeWalls.
                </p>
              </section>

              <section id="data-we-collect">
                <h2 className="text-2xl font-semibold">3. Data we collect</h2>

                {/* Subsections spaced by 5 inside section 3 */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold">3.1 Crash diagnostics</h3>
                    <p>
                      Purpose: Diagnose and fix crashes and stability issues. Data: device model, OS version, app version,
                      stack traces, crash logs, and technical identifiers required for diagnostics. No names or postal
                      addresses are collected through crash logs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">3.2 Analytics and performance</h3>
                    <p>
                      Purpose: Measure and improve performance and user experience. Data: wallpaper loading latency/time,
                      category taps/clicks, favorite events (by wallpaper ID), and login method type (e.g., Google), plus
                      technical metadata (device/OS/app versions, timestamps). Used in aggregate and/or pseudonymous form
                      where possible.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">3.3 Authentication and account linkage</h3>
                    <p>
                      Purpose: Sign‑in and feature access (e.g., syncing favorites). Data: Google account unique
                      identifier (UID) via Firebase Authentication with Google Play Services. The Google UID is used as
                      the App User ID for purchases and to key favorites. Email is not used as the identifier for these
                      features.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">3.4 Favorites and content state</h3>
                    <p>
                      Purpose: Let users save and sync favorite wallpapers. Data: favorite wallpaper IDs stored in
                      Firestore keyed by Google UID (not by email).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">3.5 Purchases and subscriptions</h3>
                    <p>
                      Purpose: Validate purchases, manage subscriptions, and restore entitlements. Data: purchase
                      tokens/receipts, subscription status, product identifiers, and an App User ID set to the user’s
                      Google UID. Email may be stored alongside the purchase for receipts and billing support. Processing
                      is performed by our purchase platform provider.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">3.6 Email for payments</h3>
                    <p>
                      Purpose: Payment reference, receipts, and purchase‑related support. Data: email address submitted
                      during or after purchase flows. Emails are not used for marketing unless explicit consent is
                      obtained.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">3.7 No other PII</h3>
                    <p>
                      Other than the Google UID (used as an account identifier) and email collected for payment
                      reference/receipts, the App does not collect personal data that directly identifies a person by
                      name, postal address, or phone number.
                    </p>
                  </div>
                </div>
              </section>

              <section id="how-we-use-data">
                <h2 className="text-2xl font-semibold">4. How we use data</h2>
                <ul className="list-disc pl-6">
                  <li>
                    Provide core features: authenticate sessions; sync favorites; enable and restore premium entitlements
                    using the Google UID.
                  </li>
                  <li>
                    Improve performance and reliability: analyze crash and performance metrics; optimize load times; refine
                    navigation, search, and previews.
                  </li>
                  <li>
                    Purchases and support: validate purchases/subscriptions; issue receipts; provide billing/support
                    responses using the stored email where available.
                  </li>
                  <li>Security and fraud prevention: protect accounts and purchases; prevent abuse and unauthorized access.</li>
                </ul>
              </section>

              <section id="legal-bases">
                <h2 className="text-2xl font-semibold">5. Legal bases (where applicable)</h2>
                <ul className="list-disc pl-6">
                  <li>Performance of a contract: to provide authenticated access, favorites sync, and purchase entitlements.</li>
                  <li>
                    Legitimate interests: crash diagnostics, performance measurement, product improvement, and fraud
                    prevention balanced against privacy.
                  </li>
                  <li>Consent: where required by local law (e.g., certain analytics or optional communications).</li>
                </ul>
              </section>

              <section id="third-parties">
                <h2 className="text-2xl font-semibold">6. Third‑party services</h2>
                <ul className="list-disc pl-6">
                  <li>Crash reporting: Crashlytics (Firebase/Google) for diagnostics.</li>
                  <li>Analytics and performance: Firebase/Google Analytics for usage and performance metrics.</li>
                  <li>Authentication: Firebase Authentication with Google Play Services for sign‑in and Google UID.</li>
                  <li>Database: Firebase/Firestore for storing favorites keyed by Google UID.</li>
                  <li>
                    Purchases and subscriptions: RevenueCat for purchase validation, subscription status, entitlements, and
                    receipt emails where available.
                  </li>
                </ul>
                <p>
                  Each provider processes data strictly as needed to deliver its service. Their privacy terms apply to
                  their processing activities.
                </p>
              </section>

              <section id="data-sharing">
                <h2 className="text-2xl font-semibold">7. Data sharing</h2>
                <ul className="list-disc pl-6">
                  <li>We do not sell personal data.</li>
                  <li>
                    We share data with service providers listed above solely to operate, secure, and improve the Service
                    and to manage purchases and entitlements.
                  </li>
                  <li>
                    Legal and safety: We may disclose information to comply with laws, lawful requests, or to protect
                    rights, safety, and the integrity of the Service.
                  </li>
                </ul>
              </section>

              <section id="retention">
                <h2 className="text-2xl font-semibold">8. Data retention</h2>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold">8.1 Operational data</h3>
                    <p>
                      Crash logs and analytics are retained as needed for diagnostics, trend analysis, and service
                      improvement, then aggregated or deleted according to operational needs and provider defaults.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">8.2 Favorites and account data</h3>
                    <p>
                      Favorites (keyed to Google UID) are retained while the account remains active and until removal is
                      requested via the in‑app deletion path or by off‑app request (see Section 12). Once deleted, synced
                      favorites cannot be recovered.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">8.3 Purchases and subscriptions</h3>
                    <p>
                      Purchase and subscription records (including the Google UID as App User ID and, where available,
                      email for receipts/support) are retained indefinitely to preserve entitlement history, address
                      support/billing issues, and meet accounting/audit needs. These records are not deleted by the
                      in‑app deletion flow.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">8.4 Emails for payment reference</h3>
                    <p>
                      Emails stored with purchase records are retained with the purchase history. Transactional emails may
                      be retained as required by accounting/tax rules.
                    </p>
                  </div>
                </div>
              </section>

              <section id="security">
                <h2 className="text-2xl font-semibold">9. Data security</h2>
                <p>
                  We use industry‑standard safeguards, including encryption in transit (TLS/HTTPS), access controls, and
                  least‑privilege practices. No method of transmission or storage is completely secure, but we work
                  continuously to protect data.
                </p>
              </section>

              <section id="children">
                <h2 className="text-2xl font-semibold">10. Children’s privacy</h2>
                <p>
                  The Service is not directed to children under 13 (or the minimum age required by local law). We do not
                  knowingly collect personal data from children. If such data is identified, it will be deleted promptly.
                </p>
              </section>

              <section id="transfers">
                <h2 className="text-2xl font-semibold">11. International data transfers</h2>
                <p>
                  Data may be processed or stored in countries other than the user’s country of residence. Where required,
                  appropriate safeguards are applied by our providers.
                </p>
              </section>

              <section id="choices-rights">
                <h2 className="text-2xl font-semibold">12. Your choices and rights</h2>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold">12.1 Access and updates</h3>
                    <p>
                      Users may contact us at{" "}
                      <a
                        className="font-medium text-[#333334] underline decoration-[#FCDA93] underline-offset-4"
                        href="mailto:beewalls.contact@beehomi.com"
                      >
                        beewalls.contact@beehomi.com
                      </a>{" "}
                      to request information about data linked to their Google UID (e.g., favorites) and purchase email,
                      subject to verification.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">12.2 Deletion</h3>
                    <p>
                      In‑app deletion: Open BeeWalls → Settings → Delete Account → Confirm. This permanently deletes
                      synced BeeWalls data tied to the signed‑in Google account (for example: cloud favorites). This
                      action is immediate and cannot be undone.
                    </p>
                    <p>
                      Off‑app request: If the app is not installed, request deletion via{" "}
                      <a
                        className="font-medium text-[#333334] underline decoration-[#FCDA93] underline-offset-4"
                        href="mailto:beewalls.contact@beehomi.com?subject=BeeWalls%20Account%20Deletion%20Request&body=Please%20delete%20my%20BeeWalls%20account%20and%20associated%20synced%20data.%0A%0AGoogle%20account%20email%20used%20in%20BeeWalls%3A%20_________%0A%0AI%20understand%20that%20purchase%20records%20are%20retained%20and%20that%20this%20action%20cannot%20be%20undone."
                      >
                        beewalls.contact@beehomi.com
                      </a>
                      . A quick verification step may be required. Email requests are typically processed within 7 days
                      after verification.
                    </p>
                    <p>
                      Purchases are retained: Deleting BeeWalls data does not cancel or delete purchase/subscription
                      records. Manage cancellations in Google Play (Profile → Payments & subscriptions).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">12.3 Communications</h3>
                    <p>
                      Marketing emails are not sent without explicit consent. Transactional emails (e.g., receipts,
                      support responses) may still be sent as needed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">12.4 Analytics and diagnostics controls</h3>
                    <p>
                      Depending on device and OS, users may have options to limit certain analytics or diagnostics through
                      system settings. Some essential diagnostics may be required to operate the Service.
                    </p>
                  </div>
                </div>
              </section>

              <section id="do-not-track">
                <h2 className="text-2xl font-semibold">13. Do Not Track and “sale/share” disclosures</h2>
                <p>
                  We do not sell personal information. We do not engage in cross‑context behavioral advertising within the
                  app. The Service does not respond to Do Not Track signals. Users can use the controls described in
                  Section 12 and platform settings.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-semibold">14. Changes to this policy</h2>
                <p>
                  We may update this policy from time to time. Updates will be posted in‑app and/or on our website with an
                  updated “Last updated” date. Material changes will be communicated with reasonable notice.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-semibold">15. Contact</h2>
                <p>
                  For privacy inquiries, data access/deletion requests, or questions about this policy, contact:{" "}
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
          </section>
        </section>
      </main>
  );
}
