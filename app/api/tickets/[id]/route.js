import db from '@/lib/mysql'
import { NextResponse } from 'next/server'
export async function GET(req, { params: { id } }) {
    try {
        const [res] = await db.query('SELECT id, title, body, priority, user_email FROM helpdesk.tickets WHERE id = ?', id)

        return NextResponse.json(res[0])
    } catch (error) {
        return new Response(error, {
            status: 500,
            message: 'something wrong with the query?'
        })
    }
}
