import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {

    return (
        <main className="px-7 pt-24 text-center">
            {params.id}
        </main>
    )
}