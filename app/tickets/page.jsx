
import TicketList from "@/components/TicketList"
import Loading from "@/components/loading"

export default async function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>
            <TicketList apiRoute="/api/tickets" />
        </main>
    )
}
