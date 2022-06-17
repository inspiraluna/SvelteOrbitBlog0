<script>
 import SvelteIPFS from '/svelte-ipfs'
 import OrbitDB from 'orbit-db'
 
 export let ipfs = null
 export let orbitdb = null

 $: if (ipfs) (async () => {
     orbitdb = await OrbitDB.createInstance(ipfs)
 })();
</script>

<SvelteIPFS bind:ipfsNode={ipfs} />
