"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

const CaseStudyGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetDiv = containerRef.current!;
    createContinuousLoopingGallery(targetDiv);

    return () => {
      window.removeEventListener('resize', updateRendererSize);
    };
  }, []);

  function createContinuousLoopingGallery(targetDiv: HTMLDivElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    targetDiv.appendChild(renderer.domElement);

    function updateRendererSize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    }

    window.addEventListener('resize', updateRendererSize);
    updateRendererSize();

    renderer.setClearColor(0xffffff);

    const images: THREE.Mesh[] = [];
    const textElements: HTMLDivElement[] = [];
    const basePath = '/assets/images/case-study/';
    const totalImages = 20;
    const numCols = 4;
    const numRows = 3;
    let imageSize = calculateImageSize();

    function calculateImageSize() {
      if (window.innerWidth <= 991) {
        return 296;
      } else if (window.innerWidth <= 1199) {
        return 370;
      } else {
        return 769;
      }
    }

    const spacing = 16;
    const gridWidth = numCols * (imageSize + spacing) - spacing;
    const gridHeight = numRows * (imageSize + spacing) - spacing;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const i = row * numCols + col + 1;
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(`${basePath}${i}.jpg`);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const geometry = new THREE.PlaneGeometry(imageSize, imageSize);

        const imageMesh = new THREE.Mesh(geometry, material);
        const x = col * (imageSize + spacing) - gridWidth / 2;
        let y = gridHeight / 2 - row * (imageSize + spacing) - gridHeight / 2;

        if (col % 2 === 1) {
          y += 264;
        }

        imageMesh.position.set(x, y, -5);
        scene.add(imageMesh);
        images.push(imageMesh);

        // Add data-attribute for each card
        imageMesh.userData.cardNumber = i;

        const cardText = document.createElement('div');
        cardText.className = 'card-text';
        cardText.textContent = `Card ${i} - Special: ${getSpecialNumber(i)}`;
        cardText.style.color = 'white';
        cardText.style.fontSize = '24px';
        cardText.style.fontFamily = 'Arial, sans-serif';
        cardText.style.textAlign = 'center';
        cardText.style.position = 'absolute';
        cardText.style.top = '50%';
        cardText.style.left = '50%';
        cardText.style.transform = 'translate(-50%, -50%)';
        cardText.style.opacity = '0';
        targetDiv.appendChild(cardText);
        textElements.push(cardText);

        // Attach event listeners for hover effect
        imageMesh.addEventListener('mouseenter', () => handleCardHover(i));
        imageMesh.addEventListener('mouseleave', handleCardLeave);
      }
    }

    camera.position.set(0, 0, 600);

    let isDragging = false;
    let previousX = 0;
    let previousY = 0;

    function startDragging(event: React.PointerEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
      isDragging = true;
      previousX = event.clientX || event.touches[0].clientX;
      previousY = event.clientY || event.touches[0].clientY;
    }

    function drag(event: React.PointerEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
      if (isDragging) {
        const currentX = event.clientX || event.touches[0].clientX;
        const currentY = event.clientY || event.touches[0].clientY;
        const deltaX = currentX - previousX;
        const deltaY = currentY - previousY;

        for (let i = 0; i < images.length; i++) {
          const image = images[i];
          const textElement = textElements[i];

          const skewX = Math.max(-5, Math.min(5, deltaX * 0.005));
          const skewY = Math.max(-5, Math.min(5, -deltaY * 0.005));

          gsap.to(image.rotation, {
            x: skewX,
            y: skewY,
            duration: 0.2,
          });

          image.position.x += deltaX;
          image.position.y -= deltaY;

          textElement.style.top = `${(image.position.y + gridHeight / 2)}px`;
          textElement.style.left = `${(image.position.x + gridWidth / 2)}px`;
        }

        previousX = currentX;
        previousY = currentY;
      }
    }

    function stopDragging() {
      isDragging = false;
    }

    targetDiv.addEventListener('pointerdown', startDragging);
    targetDiv.addEventListener('pointermove', drag);
    targetDiv.addEventListener('pointerup', stopDragging);
    targetDiv.addEventListener('touchstart', startDragging);
    targetDiv.addEventListener('touchmove', drag);
    targetDiv.addEventListener('touchend', stopDragging);

    const animate = () => {
      requestAnimationFrame(animate);

      for (const image of images) {
        if (image.position.x > gridWidth / 2) {
          image.position.x -= gridWidth + spacing;
        } else if (image.position.x < -gridWidth / 2) {
          image.position.x += gridWidth + spacing;
        }

        if (image.position.y > gridHeight / 2) {
          image.position.y -= gridHeight + spacing;
        } else if (image.position.y < -gridHeight / 2) {
          image.position.y += gridHeight + spacing;
        }
      }

      renderer.render(scene, camera);
    };

    animate();
  }

  function handleCardHover(cardNumber: number) {
    const textElement = textElements.find((element) => {
      const parsedCardNumber = parseInt(element.textContent?.split(' ')[1] || '', 10);
      return parsedCardNumber === cardNumber;
    });

    if (textElement) {
      gsap.to(textElement, { opacity: 1, duration: 0.3 });
    }
  }

  function handleCardLeave() {
    gsap.to(textElements, { opacity: 0, duration: 0.3 });
  }

  function getSpecialNumber(cardNumber: number) {
    // Replace this with your logic to generate special numbers based on cardNumber
    return cardNumber * 2;
  }

  return <div ref={containerRef} />;
};

export default CaseStudyGallery;
