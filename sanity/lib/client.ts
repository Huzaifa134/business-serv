import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"2024-01-08",
  dataset:"production",
  projectId,
  useCdn,
})
