"use strict";

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector(".Inner_Boundary canvas")});
const camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
camera.position.z = 400;


const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(200, 200, 200);
const material = new THREE.MeshPhongMaterial({
  color: 0x18dbae,
  // specular: 0xffffff,
  shininess: 5,
  shading: THREE.SmoothShading
});

const mesh = new THREE.Mesh(geometry, material);
const light1 = new THREE.PointLight(0xffffff, 1, 0);
light1.position.set(0, 0, 1000);

scene.add(mesh);
scene.add(light1);

function Update_Canvas_Size_To_Fill_Container() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width ||canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function animate(time) {
  time *= 0.001;
  Update_Canvas_Size_To_Fill_Container();  
  mesh.rotation.x = time * 1;
  mesh.rotation.y = time * 1;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);




