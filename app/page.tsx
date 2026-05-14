import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Faq } from '@/components/sections/Faq'

export default function Page() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Features />
            <Faq />
        </main>
    )
}
