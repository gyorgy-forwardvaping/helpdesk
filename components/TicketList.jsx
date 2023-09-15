"use client"
import Link from 'next/link'
import { fetcher } from '@/lib/fetcher'
import useSWR from 'swr'

export default function TicketList(apiRoute) {
    const { data, isLoading, isValidating } = useSWR(`http://localhost:3000${apiRoute.apiRoute}`, fetcher)


    if (isValidating) return <div>validating??? to load</div>
    if (isLoading) return <div>Loading...</div>
    return (
        <>
            {!isLoading && !isValidating && (
                data.map((ticket) => (
                    <div key={ticket.id} className="card my-5">
                        <Link href={`/tickets/${ticket.id}`}>
                            <h3>{ticket.title}</h3>
                            <p>{ticket.body.slice(0, 200)}...</p>
                            <div className={`pill ${ticket.priority}`}>
                                {ticket.priority} priority
                            </div>
                        </Link>
                    </div>
                ))
            )}

        </>
    )
}

