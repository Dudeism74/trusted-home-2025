import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

// 1. Force the code to find the token, no matter what you named it
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_API_WRITE_TOKEN

// 2. Configure the connection
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: token, // <--- This is the key that was likely missing or null before
  useCdn: false, // We must disable CDN to write data
  apiVersion: '2023-05-03',
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validation
    if (!email) {
      return NextResponse.json({ message: 'Email required' }, { status: 400 })
    }

    // 3. The Write Operation
    await client.create({
      _type: 'subscriber', 
      email: email,
      subscribedAt: new Date().toISOString(),
    })

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    console.error('Sanity Write Error:', error)
    return NextResponse.json({ message: 'Error saving email' }, { status: 500 })
  }
}
