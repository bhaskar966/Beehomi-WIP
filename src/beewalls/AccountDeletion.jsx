import { useEffect } from "react";

export default function AccountDeletion() {
  useEffect(() => {
    document.title = "BeeWalls — Account & Data Deletion";
  })
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#333334]">
      {/* Header / Hero */}
      <section className="bg-[#333334] text-white rounded-4xl shadow-2xl">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#FCDA93] px-4 py-1 text-sm font-medium text-[#333334]">
            Bee Walls • Account & Data Deletion
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            BeeWalls — Account and Data Deletion
          </h1>
          <p className="mt-2 text-[#FCDA93]">Last updated: 05-09-2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl px-6 py-10 sm:mx-auto text-left">
        {/* In-page nav (optional, minimal) */}
        <nav
          className="mb-8 rounded-xl border border-[#F3E8C8] bg-white/70 backdrop-blur-sm"
          aria-label="On this page"
        >
          <ul className="grid gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["overview", "Overview"],
              ["in-app", "In‑app path"],
              ["deleted", "What is deleted"],
              ["retained", "What is retained"],
              ["off-app", "If app not installed"],
              ["timing", "Processing time"],
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

        <section className="mx-auto max-w-4xl text-left">
          <article className="prose prose-neutral max-w-none text-left space-y-10 prose-headings:scroll-mt-24 prose-p:text-left prose-li:text-left prose-h2:text-left">
            <section id="overview">
              <h2 className="text-2xl font-semibold mt-0">Overview</h2>
              <p>
                BeeWalls provides an in‑app option to delete account‑linked data. This permanently removes synced
                BeeWalls data tied to the signed‑in Google account and cannot be recovered.
              </p>
            </section>

            <section id="in-app">
              <h2 className="text-2xl font-semibold">In‑app deletion path</h2>
              <ul className="list-disc pl-6">
                <li>Open BeeWalls → Settings → Delete Account → Confirm.</li>
                <li>Deletion is immediate for synced BeeWalls data and is irreversible.</li>
              </ul>
            </section>

            <section id="deleted">
              <h2 className="text-2xl font-semibold">What is deleted</h2>
              <ul className="list-disc pl-6">
                <li>Synced BeeWalls data associated with the Google account (for example: favorites stored in the cloud).</li>
                <li>Once confirmed, this data cannot be recovered.</li>
              </ul>
            </section>

            <section id="retained">
              <h2 className="text-2xl font-semibold">What is retained</h2>
              <ul className="list-disc pl-6">
                <li>
                  Purchase and subscription records are retained indefinitely for entitlement integrity, fraud prevention,
                  and accounting/audit purposes. Deleting data in‑app does not remove these records.
                </li>
                <li>
                  Manage cancellations in Google Play (Profile → Payments & subscriptions) if needed.
                </li>
              </ul>
            </section>

            <section id="off-app">
              <h2 className="text-2xl font-semibold">If the app is not installed</h2>
              <p>
                Request deletion via email at{" "}
                <a
                  className="font-medium text-[#333334] underline decoration-[#FCDA93] underline-offset-4"
                  href="mailto:beewalls.contact@beehomi.com?subject=BeeWalls%20Account%20Deletion%20Request&body=Please%20delete%20my%20BeeWalls%20account%20and%20associated%20synced%20data.%0A%0AGoogle%20account%20email%20used%20in%20BeeWalls%3A%20_________%0A%0AI%20understand%20that%20purchase%20records%20are%20retained%20and%20that%20this%20action%20cannot%20be%20undone."
                >
                  beewalls.contact@beehomi.com
                </a>
                . Include the Google account email used in BeeWalls; a quick verification step may be required.
              </p>
            </section>

            <section id="timing">
              <h2 className="text-2xl font-semibold">Processing time</h2>
              <ul className="list-disc pl-6">
                <li>In‑app deletions: immediate for synced data after confirmation.</li>
                <li>Email requests: typically processed within 7 days after verification.</li>
              </ul>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p>
                If there is an issue using the in‑app deletion option or the email method, contact:{" "}
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

          {/* Footer helper */}
          {/* <div className="mt-12 rounded-xl border border-[#F3E8C8] bg-[#FCDA93]/30 p-6">
            <p className="text-sm text-[#333334]">
              Tip: Use this page’s URL in Play Console → App content → Data safety → Account deletion (Delete Account URL).
            </p>
          </div> */}
        </section>
      </section>
    </main>
  );
}
