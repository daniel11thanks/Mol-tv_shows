export type DescriptionList = {
  score: string
  show: ShowProps
}

export type ShowProps = {
  averageRuntime: number
  name: string
  image: { medium: string; original: string }
  id: number
  premiered: number
  status: string
  summary: string
  language: string
  genres: string
}
