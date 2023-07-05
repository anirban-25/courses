import { Web3Storage } from 'web3.storage'

function getAccessToken () {
  return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

async function storeFiles (e) {
    const file = e.target.files[0];
    const client = makeStorageClient()
    const cid = await client.put(file)
    console.log('stored files with cid:', cid)
    return cid
  }

  async function retrieve (cid) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`)
    }
  
    // request succeeded! do something with the response object here...
  }