// console.log("hello");

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

	 class Sketch {
		constructor(options){ 
		this.container = options.domElement
		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight

		this.camera = new THREE.PerspectiveCamera( 70, this.width / this.height, 0.01, 10 );
		this.camera.position.z = 1;
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setPixelRatio(2)

		this.controls = new OrbitControls(this.camera, this.renderer.domElement )
		this.controls.enableDamping = true;

		this.time = 0
	}

	resize(){
		this.container.appendChild(this.renderer.domElement)
		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight
		this.renderer.setSize( this.width, this.height )
		this.camera.aspect = this.width/this.height
		this.camera.updateProjectionMatrix()
	}

	setupResize(){
		window.addEventListener('resize', this.resize.bind(this))
	}

	addObjects(){
		this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
		this.material = new THREE.MeshNormalMaterial();

		this.mesh = new THREE.Mesh( this.geometry, this.material );
		this.scene.add( this.mesh );

	}

	render(){

		this.renderer.render( this.scene, this.camera );
		this.controls.update(); 
		requestAnimationFrame(this.render.bind(this))
	}
}

export {Sketch}

