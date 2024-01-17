import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client} from '@/lib/SanityClient'
// import {} from '@/lib/SanityClient'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source)
  
}
