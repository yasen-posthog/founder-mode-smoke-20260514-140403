import ReactMarkdown from 'react-markdown'

/**
 * Features section (core).
 *
 * Design notes:
 *   Three-column grid on md+, stacked on mobile.
 *
 * Component recipe:
 *   div.grid + Card x3
 *
 * PostHog events:
 *   - feature_card_clicked { feature: string }
 *
 * Acceptance criteria:
 *   - Cards equal height across the row.
 */
export function Features() {
    const copy = "## What makes us different\n\n- **Vet record verification** \u2014 every hedgehog has a vetted health summary\n- **Genetic compatibility** \u2014 score every match before you commit\n- **Local meetups** \u2014 book intro sessions at partner vet clinics"
    return (
        <section className="py-16 px-6 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{copy}</ReactMarkdown>
            </div>
        </section>
    )
}
