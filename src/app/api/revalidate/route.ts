import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(req: NextRequest) {
  try {
    const { secret, tags } = await req.json()

    if (!secret || secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const tagsArray: string[] = Array.isArray(tags)
      ? tags
      : typeof tags === 'string' && tags.length > 0
        ? [tags]
        : []

    if (tagsArray.length === 0) {
      return NextResponse.json({ message: 'No tags provided' }, { status: 400 })
    }

    for (const tag of tagsArray) {
      revalidateTag(tag)
    }

    return NextResponse.json({ revalidated: true, tags: tagsArray })
  } catch {
    return NextResponse.json({ message: 'Invalid payload' }, { status: 400 })
  }
}


