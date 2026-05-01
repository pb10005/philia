export type EmotionTag =
  | 'moved'
  | 'cried'
  | 'laughed'
  | 'surprised'
  | 'proud'
  | 'nostalgic'
  | 'excited'
  | 'peaceful'

export interface MemoryLog {
  id: string
  oshiId: string
  happenedAt: string
  emotionTags: EmotionTag[]
  intensity: number
  body: string
  mediaUrls: string[]
  createdAt: string
}

export interface MemoryLogCreateInput {
  oshiId: string
  happenedAt: string
  emotionTags: EmotionTag[]
  intensity: number
  body: string
  mediaUrls?: string[]
}
