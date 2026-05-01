export type CollectionItemType =
  | 'goods'
  | 'concert'
  | 'streaming'
  | 'vote'
  | 'magazine'
  | 'other'

export interface CollectionItem {
  id: string
  oshiId: string
  type: CollectionItemType
  title: string
  acquiredAt: string
  priceJpy: number | null
  imageUrl: string | null
  isGrail: boolean
  createdAt: string
}
