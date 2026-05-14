import type { Metadata } from 'next'
import './globals.css'
import { PostHogProvider } from '@/lib/posthog'

export const metadata: Metadata = {
    title: "HedgehogMatch",
    description: "Find compatible hedgehog matches with verified vet records.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <PostHogProvider>{children}</PostHogProvider>
            </body>
        </html>
    )
}
