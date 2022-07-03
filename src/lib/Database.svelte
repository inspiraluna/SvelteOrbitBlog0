<script>
 import SvelteIPFS from '/svelte-ipfs/'
//  import OrbitDB from 'orbit-db'
 
 export let ipfs = null
 export let orbitdb = null
 export let nodeId = null

 $: if (ipfs) (async () => {
    console.log(nodeId)
    //  orbitdb = await OrbitDB.createInstance(ipfs)
 })();
</script>

<SvelteIPFS bind:ipfsNode={ipfs} bind:orbitdb={orbitdb} bind:nodeId={nodeId} />
