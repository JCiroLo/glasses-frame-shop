import GlassFrameDummy from '../dummies/GlassFrame'
import { GlassFrameType } from '../typings/custom'

export default class GlassFrame {
  static async get (): Promise<{
    status: boolean
    data: GlassFrameType | undefined
  }> {
    return {
      status: true,
      data: GlassFrameDummy.get()
    }
  }

  static async getAll (): Promise<{
    status: boolean
    data: Array<GlassFrameType>
  }> {
    return {
      status: true,
      data: GlassFrameDummy.getAll()
    }
  }
}
