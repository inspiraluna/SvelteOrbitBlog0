<script>
 import Database from '$lib/Database.svelte'

 export let ipfs
</script>

<Database bind:ipfs />

<main>
    <h1>Hello!</h1>
    {#if ipfs}
	<div>
	    {#await ipfs.id()}
		Waiting node...
	    {:then identity}
		<p>
		    Success!<br/>
		    NodeId: { identity && identity.id }<br/>
		    {#await ipfs.add("Hello world")}
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
