import db from '@/lib/mysql'
import { NextResponse } from 'next/server'
export async function GET(req) {
    try {
        const [res] = await db.query('SELECT id, title, body, priority, user_email FROM helpdesk.tickets')
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return new Response(error, {
            status: 500,
            message: 'something wrong with the query?'
        })
    }
}