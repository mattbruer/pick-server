import { GenericRecord } from "../../db/index.js"

const models = [{ name: "GenericRecord", model: GenericRecord }]

export const syncModels = async (last) => {
  return Object.fromEntries(
    await Promise.all(
      models.map(({ name, model }) =>
        model
          .find(last ? { updatedAt: { $gt: new Date(+last) } } : {})
          .select("-createdAt -updatedAt -__v")
          .then((data) => [name, data])
      )
    )
  )
}

export const addRecord = async (data) => {
  await new GenericRecord(data).save()
}
