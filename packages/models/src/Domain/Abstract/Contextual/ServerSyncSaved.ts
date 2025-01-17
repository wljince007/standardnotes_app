import { useBoolean } from '@standardnotes/utils'
import { FilteredServerItem } from './FilteredServerItem'
import { ContentType } from '@standardnotes/common'

/**
 * The saved sync item payload represents the payload we want to map
 * when mapping saved_items from the server. We only want to map the
 * updated_at value the server returns for the item, and basically
 * nothing else.
 */
export interface ServerSyncSavedContextualPayload {
  content_type: ContentType
  created_at_timestamp: number
  created_at: Date
  deleted: boolean
  updated_at_timestamp: number
  updated_at: Date
  uuid: string
}

export function CreateServerSyncSavedPayload(from: FilteredServerItem): ServerSyncSavedContextualPayload {
  return {
    content_type: from.content_type,
    created_at_timestamp: from.created_at_timestamp,
    created_at: from.created_at,
    deleted: useBoolean(from.deleted, false),
    updated_at_timestamp: from.updated_at_timestamp,
    updated_at: from.updated_at,
    uuid: from.uuid,
  }
}
