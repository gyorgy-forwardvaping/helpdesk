import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3x1">We Hit a Brick wall.</h2>
            <p>We could not find the ticket you where looking for.</p>
            <p>Go back to all <Link href="/tickets">Ticket</Link></p>
        </main>
    )
}