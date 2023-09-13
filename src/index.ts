import { Context, Schema } from 'koishi'

import { initExecute } from './bind/execute'
import initCmd from './cmd'
export const name = 'test'
export const using = []
export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  console.log('init');
  initExecute(ctx)
  initCmd(ctx)
}

