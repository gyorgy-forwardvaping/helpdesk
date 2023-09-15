"use client"

import { notFound } from "next/navigation"
import { useEffect, useState } from "react"

export default function TicketDetail({ params }) {
    const [result, setResult] = useState('')

    const fetchResult = async () => {
        const response = await fetch(`/api/tickets/${params.id}`, {
            method: 'GET'
        })

        const resultJson = await response.json()

        setResult(resultJson)
        if (result.lengt === 0) {
            notFound()
        }
    }

    useEffect(() => {
        fetchResult()
    })
    return (
        <div className='card'>
            <h3>{result.title}</h3>
            <small>created by: {result.user_email}</small>
            <p>{result.body}</p>
            <div className={`pill ${result.priority}`}>
                {result.priority} priority
            </div>
        </div>
    )
}