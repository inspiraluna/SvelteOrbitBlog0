// from:
// https://github.com/Gozala/replicator/blob/default/replicator/src/Service/IPFS.js
//
import IPFS from './modules/ipfs-core/index.js'
export const CID = IPFS.CID
export const use =
/**
   * @returns {Promise<IPFS>}
   */

  async () => {
    // @ts-ignore
    const config = {
      repo: '/orbitdb/03072022',
      start: true,
      preload: { 
        enabled: false
      },
      EXPERIMENTAL: {
        pubsub: true,
      },
      config: {
        Addresses: {
          Swarm: [
            // Use IPFS dev signal server
            // '/dns4/star-signal.cloud.ipfs.team/wss/p2p-webrtc-star',
            // '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
            // Use IPFS dev webrtc signal server
            '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
            '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
            '/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/',
            // Use local signal server
            // '/ip4/0.0.0.0/tcp/9090/wss/p2p-webrtc-star',
          ]
        },
      }
    }

    const context = /** @type {{ipfs: null|Promise<IPFS>|IPFS}} */ (globalThis)
    const ipfs = context.ipfs
    if (ipfs == null) {
      const node = await IPFS.create(config)
      context.ipfs = node
      const ipfs = await node
      context.ipfs = ipfs

      return ipfs
    } else {
      return await ipfs
    }
  }

export const start = () => async () => {
  await use()
}
