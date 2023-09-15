import db from '@/lib/mysql'
import { NextResponse } from 'next/server'

export async function POST(req) {
    const data = await req.json();

    const title = data.title,
        body = data.body,
        priority = data.priority,
        email = data.user_email

    if (title.length == 0) {
        return new Response(error, { status: 500, message: "Filed Title required" })
    }
    if (body.length == 0) {
        return new Response(error, { status: 500, message: "Filed Body required" })
    }
    if (priority.length == 0) {
        return new Response(error, { status: 500, message: "Filed Prioriy required" })
    }
    if (email.length == 0) {
        return new Response(error, { status: 500, message: "Filed Email required" })
    }

    try {

        let query = `INSERT INTO helpdesk.tickets (title, body, priority, user_email) VALUES ("${title}", "${body}", "${priority}", "${email}");`

        let [id] = await db.query(query)

        let status = '200'
        let message = 'ok'

        return NextResponse.json([status, message])

    } catch (error) {
        return new Response(error, {
            status: 500, message: "error happened"
        })
    }
}