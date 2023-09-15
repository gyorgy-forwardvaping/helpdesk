import TicketDetail from "@/components/TicketDetail";

export default function TicketDetails({ params }) {
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <TicketDetail params={params} />
        </main>

    )
}