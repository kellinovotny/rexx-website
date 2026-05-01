import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — Rexx",
  description:
    "How Rexx collects, uses, and protects your data. We collect only what we need to make the app better, and never sell your information.",
}

export default function PrivacyPage() {
  const lastUpdated = "April 30, 2026"

  return (
    <main className="min-h-screen bg-background">
      <header className="container mx-auto max-w-3xl px-6 pt-12 pb-6">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Rexx
        </Link>
      </header>

      <article className="container mx-auto max-w-3xl px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: {lastUpdated}
        </p>

        <div className="prose-content text-foreground space-y-10 leading-relaxed">
          <section>
            <p className="text-lg">
              Rexx is built by a single person who cares about privacy. This
              policy explains, in plain language, what data the Rexx iOS app
              collects, why, and how it&rsquo;s handled. If something
              isn&rsquo;t clear, email{" "}
              <a
                href="mailto:feedback@therexxapp.com"
                className="text-[var(--rexx-blue)] underline underline-offset-2 hover:opacity-80"
              >
                feedback@therexxapp.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              The short version
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Your recommendations live in your own iCloud account via Apple
                CloudKit. They never touch our servers.
              </li>
              <li>
                We use Google Firebase Analytics to count usage and improve the
                app. The data is anonymous and never linked to your identity.
              </li>
              <li>
                We don&rsquo;t collect contact info, recommendation content,
                search queries, or anything personally identifiable.
              </li>
              <li>We don&rsquo;t sell data. We don&rsquo;t run ads.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              What we collect through analytics
            </h2>
            <p className="mb-3">
              Rexx uses Google Firebase Analytics to understand how people use
              the app so we can make it better. The only data Firebase collects
              from your device is:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Device ID</strong> &mdash; a Firebase-generated
                identifier (an &ldquo;App Instance ID&rdquo;) that lets us
                count unique devices and group sessions. This is{" "}
                <em>not</em> your Apple ID, your name, or your iCloud account.
              </li>
              <li>
                <strong>Product interactions</strong> &mdash; anonymous events
                like which screens you visit, which buttons you tap, and how
                long you spend in the app.
              </li>
            </ul>
            <p className="mt-4">
              This data is <strong>not linked to your identity</strong>,{" "}
              <strong>not used for advertising</strong>, and{" "}
              <strong>not shared with third parties for tracking purposes</strong>.
              It&rsquo;s processed by Google on our behalf under their{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[var(--rexx-blue)] underline underline-offset-2 hover:opacity-80"
              >
                Firebase Privacy and Security policies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              What we do <em>not</em> collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The names, phone numbers, or contact info of people you save
                recommendations from
              </li>
              <li>
                The titles, content, or notes of recommendations you save
              </li>
              <li>The text of search queries you type into Rexx</li>
              <li>Your location</li>
              <li>Your photos, microphone audio, or any device media</li>
              <li>
                Anything that personally identifies you outside the app
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Where your recommendations live
            </h2>
            <p>
              Rexx stores your saved recommendations in your own iCloud account
              using Apple CloudKit. They sync across your Apple devices through
              Apple&rsquo;s servers. We do not have access to them and they
              are never sent to our servers. If you delete the app or sign out
              of iCloud, your data is governed by Apple&rsquo;s privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contacts access</h2>
            <p>
              Rexx can ask for permission to access your contacts so you can
              quickly attribute a recommendation to a friend (e.g., &ldquo;From
              Jen&rdquo;). If you grant access, contact names are read on your
              device only when you&rsquo;re searching for a person to attach
              to a recommendation. Contact data is never uploaded to our
              servers and is never sent to Firebase or any third party. You
              can revoke this permission at any time in iOS Settings &rarr;
              Rexx.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Microphone access</h2>
            <p>
              The &ldquo;Tell Rexx&rdquo; voice feature uses your device&rsquo;s
              microphone and Apple&rsquo;s on-device speech recognition to
              transcribe what you say. The transcribed text is then parsed
              into a recommendation. Audio recordings are not stored, not
              uploaded, and not sent to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Subscriptions (Rexx Plus)
            </h2>
            <p>
              If you subscribe to Rexx Plus, the subscription is processed by
              Apple through the App Store, and managed by RevenueCat (a
              subscription analytics service) on our behalf. RevenueCat
              receives an anonymous user ID from Apple and the subscription
              status. It does not receive your name, email, or payment
              details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Children&rsquo;s privacy
            </h2>
            <p>
              Rexx is not directed at children under 13 and does not knowingly
              collect data from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Changes to this policy
            </h2>
            <p>
              If this policy changes in a meaningful way, we&rsquo;ll update
              the &ldquo;Last updated&rdquo; date at the top of this page and,
              when relevant, surface a notice in the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              Questions or concerns? Email{" "}
              <a
                href="mailto:feedback@therexxapp.com"
                className="text-[var(--rexx-blue)] underline underline-offset-2 hover:opacity-80"
              >
                feedback@therexxapp.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
