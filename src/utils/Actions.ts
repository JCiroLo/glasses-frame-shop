import { GlassFrameType } from '../typings/custom'
import GlassFrame, { GetPropsType } from '../dummies/GlassFrame'

export const formatText = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1).split('_').join(' ')
}

export const get = async (
  props: GetPropsType
): Promise<{
  status: boolean
  data: GlassFrameType | undefined
}> => {
  return {
    status: true,
    data: GlassFrame.get(props)
  }
}

export const getAll = async (): Promise<{
  status: boolean
  data: Array<GlassFrameType>
}> => {
  return {
    status: true,
    data: GlassFrame.getAll()
  }
}
