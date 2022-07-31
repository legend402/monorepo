import { ExtractPropTypes } from 'vue'


export const type = ['default', 'primary', 'success', 'warning', 'danger']

export const size = ['large', 'normal', 'small', 'mini'];


export const selectProps = {
  type: {
    type: String,
    values: type
  },
  size: {
    type: String,
    values: size
  }
}

export type HSelectProps = ExtractPropTypes<typeof selectProps>