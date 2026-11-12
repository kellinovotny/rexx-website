import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Rexx",
  description:
    "The basic ground rules for using Rexx. Plain language, no surprises.",
}

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: {lastUpdated}
        </p>

        <div className="prose-content text-foreground space-y-10 leading-relaxed">
          <section>
            <p className="text-lg">
              These are the basic ground rules for using Rexx. We&rsquo;ve
              tried to keep them in plain language. By downloading or using
              the Rexx iOS app, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The short version</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rexx is a personal recommendation tracker. Use it for that.</li>
              <li>
                Don&rsquo;t try to break it, abuse it, or use it to harm
                anyone.
              </li>
              <li>
                Subscriptions to Rexx Plus are handled by Apple through the
                App Store. Apple&rsquo;s usual subscription terms apply.
              </li>
              <li>
                We provide Rexx as-is and can&rsquo;t guarantee it will be
                bug-free or available 24/7.
              </li>
              <li>
                If something is unclear, email{" "}
                <a
                  href="mailto:feedback@therexxapp.com"
                  className="text-[var(--rexx-blue)] underline underline-offset-2 hover:opacity-80"
                >
                  feedback@therexxapp.com
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What Rexx is</h2>
            <p>
              Rexx is a mobile app that helps you save and organize
              recommendations from people you trust &mdash; books, movies,
              restaurants, podcasts, and so on. Your recommendations are
              stored in your own iCloud account. We don&rsquo;t see them and
              don&rsquo;t store them on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your account</h2>
            <p>
              Rexx doesn&rsquo;t require you to create an account with us.
              The app uses your existing Apple ID and iCloud account through
              Apple CloudKit. You&rsquo;re responsible for the security of
              your Apple ID and the device you use Rexx on.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Rexx Plus subscriptions
            </h2>
            <p className="mb-3">
              Rexx is free to download. Some features require a subscription
              to <strong>Rexx Plus</strong>, available as a monthly or yearly
              auto-renewing subscription through the App Store.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Payment is charged to your Apple ID at confirmation of
                purchase.
              </li>
              <li>
                The subscription auto-renews unless you cancel at least 24
                hours before the end of the current period.
              </li>
              <li>
                You can manage and cancel your subscription in your Apple
                ID&rsquo;s subscription settings (Settings &rarr; [your name]
                &rarr; Subscriptions on iOS).
              </li>
              <li>
                Refund requests are handled by Apple under their standard
                refund policy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptable use</h2>
            <p className="mb-3">When using Rexx, please don&rsquo;t:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Reverse-engineer, decompile, or attempt to extract the
                app&rsquo;s source code
              </li>
              <li>
                Use the app to harass, defame, or harm others, or to violate
                the law
              </li>
              <li>
                Attempt to disrupt, overload, or attack the app&rsquo;s
                servers or services
              </li>
              <li>
                Use Rexx in any way that infringes someone else&rsquo;s
                intellectual property
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your content</h2>
            <p>
              The recommendations, notes, and other data you save in Rexx
              belong to you. We don&rsquo;t claim any ownership of them. Since
              your data is stored in your own iCloud account, deleting Rexx
              from your device does not delete it &mdash; it stays in iCloud
              under Apple&rsquo;s terms until you remove it there.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Third-party services
            </h2>
            <p>
              Rexx uses a few third-party services to function: Apple
              CloudKit (for storing your data), Google Firebase Analytics
              (for anonymous usage statistics), Apple&rsquo;s on-device speech
              recognition (for the Tell Rexx voice feature), and RevenueCat
              (for managing subscription status). Each is subject to its own
              terms and privacy policies. See the{" "}
              <Link
                href="/privacy"
                className="text-[var(--rexx-blue)] underline underline-offset-2 hover:opacity-80"
              >
                Privacy Policy
              </Link>{" "}
              for details on what each one collects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              No warranty / as-is
            </h2>
            <p>
              Rexx is provided <strong>as-is</strong> and{" "}
              <strong>as available</strong>, without warranty of any kind. We
              do our best to keep it working well, but we can&rsquo;t
              guarantee it will be free of bugs, available without
              interruption, or that it will meet your specific needs. To the
              extent permitted by law, we disclaim all implied warranties
              including merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, Rexx and its creator
              are not liable for any indirect, incidental, special, or
              consequential damages arising out of your use of (or inability
              to use) the app. Our total liability for any claim related to
              Rexx is limited to the amount you&rsquo;ve paid us in the 12
              months before the claim arose &mdash; or $0 if you&rsquo;re a
              free user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p>
              You can stop using Rexx at any time by deleting the app and
              cancelling any active Rexx Plus subscription through Apple. We
              reserve the right to suspend or end access to the app for
              users who violate these terms or otherwise misuse the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to terms</h2>
            <p>
              If these terms change in a meaningful way, we&rsquo;ll update
              the &ldquo;Last updated&rdquo; date at the top of this page and,
              when relevant, surface a notice in the app. Continuing to use
              Rexx after a change means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing law</h2>
            <p>
              These terms are governed by the laws of the United States,
              without regard to conflict-of-law principles. Any dispute that
              can&rsquo;t be resolved by talking it out will be handled in
              the courts of the United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>
              Questions about these terms? Email{" "}
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
