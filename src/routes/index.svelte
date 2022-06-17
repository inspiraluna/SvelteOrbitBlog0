<script>
 import SvelteIPFS from '/svelte-ipfs'

 let ipfsNode
</script>

<SvelteIPFS bind:ipfsNode />

<main>
    <h1>Hello!</h1>
    {#if ipfsNode}
	<div>
	    {#await ipfsNode.id()}
		Waiting node...
	    {:then identity}
		<p>
		    Success!<br/>
		    NodeId: { identity && identity.id }<br/>
		    {#await ipfsNode.add("Hello world")}
			Loading...
		    {:then node}
			CID: {node.cid}
		    {:catch err}
			Error in adding: {err}
		    {/await}
		</p>
	    {:catch err}
		Error occurred: {err}
	    {/await}
	</div>
    {/if}
</main>
