import ReactMarkdown from 'react-markdown'

/**
 * Hero section (core).
 *
 * Design notes:
 *   Centered, large hero with single CTA. Use brand.primary for the CTA button.
 *
 * Component recipe:
 *   div + h1 + p + Button
 *
 * PostHog events:
 *   - cta_clicked { location: 'hero', label: 'Start matching' }
 *
 * Acceptance criteria:
 *   - Hero fits in viewport above the fold on 1280×800.
 */
export function Hero() {
    const copy = "# Find compatible hedgehog matches in days, not months\n\nVerified vet records and genetic compatibility, built in.\n\n[Start matching \u2192](#)"
    return (
        <section className="py-16 px-6 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{copy}</ReactMarkdown>
            </div>
        </section>
    )
}
