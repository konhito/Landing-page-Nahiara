/**
 * Pollinators Animation Module
 * This module adds animated bee and butterfly pollinators around the 3D flower model
 */

// Configuration for pollinators
const pollinatorsConfig = {
  // How many of each type to show
  count: {
    bees: 3,
    butterflies: 2,
  },
  // When to start showing pollinators (ms after scene loads)
  startDelay: 8000, // After flower intro animation completes
  // How long the fade-in animation takes (ms)
  fadeInDuration: 2000,
  // Movement parameters
  movement: {
    speed: 0.5, // Base movement speed
    radius: 5, // Base orbit radius around flower
    verticalRange: 3, // How high/low they can fly
    randomness: 0.3, // How random their movements are (0-1)
  },
};

/**
 * Initialize and manage pollinators in the scene
 * @param {THREE.Scene} scene - The Three.js scene
 * @param {THREE.Camera} camera - The camera
 * @param {Object} flowerModel - The main flower model
 */
function initPollinators(scene, camera, flowerModel) {
  console.log("Initializing pollinators animation system");

  // Container for all pollinator objects
  const pollinators = {
    bees: [],
    butterflies: [],
    loaded: false,
    visible: false,
  };

  // Get the center and size of the flower model
  const flowerBox = new THREE.Box3().setFromObject(flowerModel);
  const flowerCenter = flowerBox.getCenter(new THREE.Vector3());
  const flowerSize = flowerBox.getSize(new THREE.Vector3());
  const maxDim = Math.max(flowerSize.x, flowerSize.y, flowerSize.z);

  // Adjust radius based on flower size
  const orbitRadius = maxDim * 1.5;

  // Load pollinator models
  const gltfLoader = new THREE.GLTFLoader();
  let loadedCount = 0;
  const totalToLoad =
    pollinatorsConfig.count.bees + pollinatorsConfig.count.butterflies;

  // Load bee models
  for (let i = 0; i < pollinatorsConfig.count.bees; i++) {
    gltfLoader.load(
      "models/bee.glb",
      (gltf) => {
        const bee = gltf.scene;

        // Set initial position in a random orbit point around the flower
        const angle = Math.random() * Math.PI * 2;
        const height =
          flowerCenter.y +
          (Math.random() * 2 - 1) * pollinatorsConfig.movement.verticalRange;

        bee.position.set(
          flowerCenter.x + Math.sin(angle) * orbitRadius,
          height,
          flowerCenter.z + Math.cos(angle) * orbitRadius
        );

        // Add random rotation
        bee.rotation.y = Math.random() * Math.PI * 2;

        // Add animation properties
        bee.userData.angle = angle;
        bee.userData.orbitSpeed = 0.5 + Math.random() * 0.5;
        bee.userData.verticalSpeed = 0.2 + Math.random() * 0.3;
        bee.userData.verticalPos = 0;
        bee.userData.orbitRadius = orbitRadius * (0.8 + Math.random() * 0.4);
        bee.userData.baseHeight = height;

        // Make invisible initially
        bee.traverse(function (child) {
          if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 0;
          }
        });

        // Add to scene and tracking array
        scene.add(bee);
        pollinators.bees.push(bee);

        // Check if all models are loaded
        loadedCount++;
        if (loadedCount === totalToLoad) {
          pollinators.loaded = true;
          console.log("All pollinators loaded");

          // Start showing pollinators after delay
          setTimeout(() => {
            fadeInPollinators(pollinators);
          }, pollinatorsConfig.startDelay);
        }
      },
      undefined,
      (error) => {
        console.error("Error loading bee model:", error);
      }
    );
  }

  // Load butterfly models
  for (let i = 0; i < pollinatorsConfig.count.butterflies; i++) {
    gltfLoader.load(
      "models/butterfly.glb",
      (gltf) => {
        const butterfly = gltf.scene;

        // Set initial position in a random orbit point around the flower
        const angle = Math.random() * Math.PI * 2;
        const height =
          flowerCenter.y +
          (Math.random() * 2 - 1) * pollinatorsConfig.movement.verticalRange;

        butterfly.position.set(
          flowerCenter.x + Math.sin(angle) * orbitRadius,
          height,
          flowerCenter.z + Math.cos(angle) * orbitRadius
        );

        // Add random rotation
        butterfly.rotation.y = Math.random() * Math.PI * 2;

        // Add animation properties - butterflies move differently than bees
        butterfly.userData.angle = angle;
        butterfly.userData.orbitSpeed = 0.3 + Math.random() * 0.3; // Slower than bees
        butterfly.userData.verticalSpeed = 0.15 + Math.random() * 0.2; // More gentle vertical movement
        butterfly.userData.verticalPos = Math.random() * Math.PI * 2;
        butterfly.userData.orbitRadius =
          orbitRadius * (0.9 + Math.random() * 0.3);
        butterfly.userData.baseHeight = height;
        butterfly.userData.flapSpeed = 0.2 + Math.random() * 0.1;
        butterfly.userData.flapPhase = Math.random() * Math.PI * 2;

        // Make invisible initially
        butterfly.traverse(function (child) {
          if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 0;
          }
        });

        // Add to scene and tracking array
        scene.add(butterfly);
        pollinators.butterflies.push(butterfly);

        // Check if all models are loaded
        loadedCount++;
        if (loadedCount === totalToLoad) {
          pollinators.loaded = true;
          console.log("All pollinators loaded");

          // Start showing pollinators after delay
          setTimeout(() => {
            fadeInPollinators(pollinators);
          }, pollinatorsConfig.startDelay);
        }
      },
      undefined,
      (error) => {
        console.error("Error loading butterfly model:", error);
      }
    );
  }

  // Function to fade in pollinators
  function fadeInPollinators(pollinators) {
    console.log("Fading in pollinators");
    pollinators.visible = true;

    const startTime = Date.now();
    const fadeIn = function () {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / pollinatorsConfig.fadeInDuration, 1);

      // Update opacity of all pollinators
      [...pollinators.bees, ...pollinators.butterflies].forEach(
        (pollinator) => {
          pollinator.traverse(function (child) {
            if (child.isMesh) {
              child.material.opacity = progress;
            }
          });
        }
      );

      if (progress < 1) {
        requestAnimationFrame(fadeIn);
      }
    };

    fadeIn();
  }

  // Return update function for animation loop
  return function updatePollinators(time) {
    if (!pollinators.loaded || !pollinators.visible) return;

    // Update bee positions
    pollinators.bees.forEach((bee, index) => {
      // Update angle based on speed
      bee.userData.angle +=
        bee.userData.orbitSpeed * pollinatorsConfig.movement.speed * 0.01;
      bee.userData.verticalPos += bee.userData.verticalSpeed * 0.01;

      // Calculate new position
      const newX =
        flowerCenter.x +
        Math.sin(bee.userData.angle) * bee.userData.orbitRadius;
      const newY =
        bee.userData.baseHeight + Math.sin(bee.userData.verticalPos) * 0.5;
      const newZ =
        flowerCenter.z +
        Math.cos(bee.userData.angle) * bee.userData.orbitRadius;

      // Add some randomness to movement
      const randomX =
        (Math.random() - 0.5) * pollinatorsConfig.movement.randomness;
      const randomY =
        (Math.random() - 0.5) * pollinatorsConfig.movement.randomness;
      const randomZ =
        (Math.random() - 0.5) * pollinatorsConfig.movement.randomness;

      // Update position
      bee.position.set(newX + randomX, newY + randomY, newZ + randomZ);

      // Make bee face direction of travel
      bee.lookAt(
        bee.position.x +
          Math.sin(bee.userData.angle + 0.1) * bee.userData.orbitRadius,
        bee.position.y,
        bee.position.z +
          Math.cos(bee.userData.angle + 0.1) * bee.userData.orbitRadius
      );

      // Add slight bobbing motion
      bee.rotation.z = Math.sin(time * 5 + index) * 0.1;
    });

    // Update butterfly positions
    pollinators.butterflies.forEach((butterfly, index) => {
      // Butterflies move more gracefully with pauses
      butterfly.userData.angle +=
        butterfly.userData.orbitSpeed *
        pollinatorsConfig.movement.speed *
        0.01 *
        (0.7 + 0.3 * Math.sin(time * 0.5 + index * 2)); // Variable speed

      butterfly.userData.verticalPos += butterfly.userData.verticalSpeed * 0.01;

      // Calculate new position with more pronounced vertical movement
      const newX =
        flowerCenter.x +
        Math.sin(butterfly.userData.angle) * butterfly.userData.orbitRadius;
      const newY =
        butterfly.userData.baseHeight +
        Math.sin(butterfly.userData.verticalPos) * 1.2;
      const newZ =
        flowerCenter.z +
        Math.cos(butterfly.userData.angle) * butterfly.userData.orbitRadius;

      // Butterflies have more gentle, flowing movement with less randomness
      const randomX =
        (Math.random() - 0.5) * pollinatorsConfig.movement.randomness * 0.5;
      const randomY =
        (Math.random() - 0.5) * pollinatorsConfig.movement.randomness * 0.5;
      const randomZ =
        (Math.random() - 0.5) * pollinatorsConfig.movement.randomness * 0.5;

      // Update position
      butterfly.position.set(newX + randomX, newY + randomY, newZ + randomZ);

      // Make butterfly face direction of travel
      butterfly.lookAt(
        butterfly.position.x +
          Math.sin(butterfly.userData.angle + 0.1) *
            butterfly.userData.orbitRadius,
        butterfly.position.y,
        butterfly.position.z +
          Math.cos(butterfly.userData.angle + 0.1) *
            butterfly.userData.orbitRadius
      );

      // Add wing flapping motion
      butterfly.rotation.z =
        Math.sin(time * 10 + butterfly.userData.flapPhase) * 0.3;
    });
  };
}
