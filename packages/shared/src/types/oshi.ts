export type OshiCategory =
  | 'idol'
  | 'anime'
  | 'vtuber'
  | 'sports'
  | 'actor'
  | 'musician'
  | 'other'

export interface Oshi {
  id: string
  userId: string
  name: string
  category: OshiCategory
  startedAt: string
  coverImageUrl: string | null
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface OshiCreateInput {
  name: string
  category: OshiCategory
  startedAt: string
  coverImageUrl?: string
  tags?: string[]
}
