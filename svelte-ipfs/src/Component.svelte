<script>
	import { onMount } from "svelte";
	import OrbitDB from './modules/orbit-db/OrbitDB.js'
	// import * as IPFS from "./IPFS.js";
	let IPFS

	export let ipfsNode;
	export let nodeId;
	export let orbitdb;
	onMount(async () => {
		console.log('onMount')
		import("./IPFS.js").then(
			async (module) => {
				console.log('ipfs imported')
				IPFS = module;

				await IPFS.use();
				// console.info({ ipfs }); // avilable as a global variable
				ipfsNode = ipfs; // bind the prop to the global
				// Now you can use ipfs globally to do things like
				const identity = await ipfsNode.id();
				nodeId = identity.id;
				console.info("nodeId", nodeId);
				orbitdb = await OrbitDB.createInstance(ipfs);
			}
		);
	});
</script>
