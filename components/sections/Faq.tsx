import ReactMarkdown from 'react-markdown'

/**
 * FAQ section (core).
 *
 * Design notes:
 *   Accordion. One open by default.
 *
 * Component recipe:
 *   Accordion
 *
 * PostHog events:
 *   (autocapture only)
 *
 * Acceptance criteria:
 *   - All questions render below the fold without horizontal scroll.
 */
export function Faq() {
    const copy = "## Frequently asked questions\n\n**How do you verify vet records?**\nWe partner with vet clinics who upload directly.\n\n**Is matching guaranteed to be compatible?**\nNo guarantee \u2014 we score compatibility, owners still meet first."
    return (
        <section className="py-16 px-6 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{copy}</ReactMarkdown>
            </div>
        </section>
    )
}
