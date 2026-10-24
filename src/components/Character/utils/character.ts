import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                const name = child.name || "";
                if (name === "BODY.SHIRT" || name.includes("SHIRT")) {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  (mesh.material as any).color = new THREE.Color("#242b3d");
                  (mesh.material as any).roughness = 0.65;
                  (mesh.material as any).metalness = 0.1;
                } else if (name === "Pant" || name.includes("Pant")) {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  (mesh.material as any).color = new THREE.Color("#141724");
                  (mesh.material as any).roughness = 0.8;
                  (mesh.material as any).metalness = 0.05;
                } else if (name === "Shoe" || name.includes("Shoe")) {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  (mesh.material as any).color = new THREE.Color("#1e2230");
                  (mesh.material as any).roughness = 0.5;
                  (mesh.material as any).metalness = 0.15;
                } else if (name === "Sole" || name.includes("Sole")) {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  (mesh.material as any).color = new THREE.Color("#cbd5e1");
                  (mesh.material as any).roughness = 0.4;
                } else if (name === "Plane" && !name.includes(".")) {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  (mesh.material as any).color = new THREE.Color("#181a24");
                  (mesh.material as any).roughness = 0.35;
                  (mesh.material as any).metalness = 0.2;
                } else if (name === "Cube.002" || name.includes("Cube.002")) {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  (mesh.material as any).color = new THREE.Color("#282b36");
                  (mesh.material as any).roughness = 0.4;
                  (mesh.material as any).metalness = 0.5;
                } else if (name === "Plane.003" || name.includes("chair")) {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  (mesh.material as any).color = new THREE.Color("#15161f");
                  (mesh.material as any).roughness = 0.7;
                } else if (name === "Keyboard") {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  (mesh.material as any).color = new THREE.Color("#161720");
                  (mesh.material as any).roughness = 0.5;
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
