import { syncModels, addRecord } from "../services/recordService.js"

export async function handleSync(req, res) {
  res.json(await syncModels(req.body.last))
}
export async function handleAddRecord(req, res) {
  res.json(await addRecord(req.body))
}
