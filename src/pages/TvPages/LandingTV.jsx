import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import vnrLogo from "/events/Technovista2025/tv25-icons/VNRVJIET-logo-files-03.png";
import dqLogo from "/events/Technovista2025/tv25-icons/dq-vector.png";
import LandingPageText from "../../components/TVComponents/LandingPageText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const LandingTV = () => {
  // Refs for DOM elements
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesMeshRef = useRef(null);
  const navigate = useNavigate();

  // Animation effect functions
  const createExplosion = (x, y, size) => {
    const explosion = document.createElement("div");
    explosion.className = "explosion";
    explosion.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0.4) 30%, rgba(255,215,0,0) 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 20;
      mix-blend-mode: screen;
      left: ${x}px;
      top: ${y}px;
      width: 0px;
      height: 0px;
    `;
    document.body.appendChild(explosion);

    gsap.to(explosion, {
      width: size,
      height: size,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      onComplete: () => document.body.removeChild(explosion),
    });

    createDebris(x, y, 10 + Math.floor(size / 10));
    createCracks(x, y, 3 + Math.floor(size / 50));
  };

  const createMajorExplosion = (x, y, size) => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createExplosion(x, y, size * (1 - i * 0.2)), i * 200);
    }

    createDebris(x, y, 50);
    createCracks(x, y, 12);

    const flash = document.createElement("div");
    flash.className =
      "fixed inset-0 bg-[#daa425]/30 z-[999] pointer-events-none";
    document.body.appendChild(flash);

    gsap.to(flash, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => document.body.removeChild(flash),
    });
  };

  const createDebris = (x, y, count) => {
    for (let i = 0; i < count; i++) {
      const debris = document.createElement("div");
      debris.className =
        "absolute w-0.5 h-0.5 bg-[#daa425] rounded-full pointer-events-none z-20";
      debris.style.left = `${x}px`;
      debris.style.top = `${y}px`;
      document.body.appendChild(debris);

      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 150;
      const duration = 0.5 + Math.random() * 1;

      gsap.to(debris, {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        opacity: 0,
        duration,
        ease: "power2.out",
        onComplete: () => document.body.removeChild(debris),
      });
    }
  };

  const createCracks = (x, y, count) => {
    for (let i = 0; i < count; i++) {
      const crack = document.createElement("div");
      crack.className =
        "absolute h-0.5 bg-[#daa425] z-20 shadow-[0_0_8px_2px_rgba(255,215,0,0.8)]";
      crack.style.left = `${x}px`;
      crack.style.top = `${y}px`;
      crack.style.width = "0px";
      crack.style.transformOrigin = "left center";
      document.body.appendChild(crack);

      const angle = Math.random() * Math.PI * 2;
      const length = 50 + Math.random() * 100;

      crack.style.transform = `rotate(${angle}rad)`;

      gsap.to(crack, {
        width: length,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(crack, {
            opacity: 0,
            duration: 2,
            delay: 0.5,
            ease: "power2.out",
            onComplete: () => document.body.removeChild(crack),
          });
        },
      });
    }
  };

  // Mouse event handlers
  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(cursorTrailRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
    });
  };

  const handleMouseDown = (e) => {
    gsap.to(cursorRef.current, { scale: 0.7, duration: 0.2 });
    for (let i = 0; i < 1; i++) {
      setTimeout(() => createCracks(e.clientX, e.clientY, 1), i * 100);
    }
    createExplosion(e.clientX, e.clientY, 100);
  };

  const handleMouseUp = () => {
    gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
  };

  // Main useEffect for setup
  useEffect(() => {
    // Set up mouse event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasContainerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffd700,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);
    particlesMeshRef.current = particlesMesh;

    camera.position.z = 20;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.x += 0.0003;
        particlesMeshRef.current.rotation.y += 0.0003;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Initial animations
    setTimeout(() => {
      createMajorExplosion(window.innerWidth / 2, window.innerHeight / 2, 300);

      setTimeout(() => {
        gsap.to(".nav", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
        gsap.to(".title", {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        });
        gsap.to(".subtitle", {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        });
        gsap.to(".date", {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.7,
          ease: "power3.out",
        });
        gsap.to(".cta-button", {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 1.1,
          ease: "elastic.out(1, 0.5)",
        });
      }, 800);
    }, 500);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Elements */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 rounded-full bg-[#daa425]/80 shadow-[0_0_15px_5px_rgba(255,215,0,0.5)] transform -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none mix-blend-screen"
      />
      <div
        ref={cursorTrailRef}
        className="fixed w-10 h-10 rounded-full bg-[#daa425]/20 transform -translate-x-1/2 -translate-y-1/2 z-[9998] pointer-events-none transition-all duration-100 ease-linear"
      />

      {/* Navigation */}
      <nav className="flex content-start nav fixed top-0 w-full px-4 pt-2 items-center z-40 opacity-0 bg-transparent">
        <div className="flex items-center gap-2">
          {/* DQ Logo */}
          <a
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
            className="h-[3rem] sm:h-[4rem] md:h-[5rem] lg:h-[6rem] xl:h-[5rem] transition-transform duration-300 flex items-center cursor-pointer"
          >
            <img
              src={dqLogo}
              alt="DQ Club Logo"
              className="h-full w-auto object-contain p-3"
            />
          </a>

          {/* Separator */}
          <div className="text-white opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          </div>

          {/* VNR Logo */}
          <div
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[3.5rem] cursor-pointer transition-transform duration-300  flex items-center"
            onClick={() => window.open("https://vnrvjiet.ac.in", "_blank")}
          >
            <img
              src={vnrLogo}
              alt="VnrVjiet Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen w-full relative overflow-hidden bg-black flex items-center justify-center px-4 py-16 select-none">
        {/* Three.js Canvas */}
        <div
          ref={canvasContainerRef}
          className="absolute inset-0 w-full h-full z-10"
        />

        {/* Golden Highlight */}
        <div className="absolute inset-0 w-full h-full z-10 bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

        {/* Content */}
        <div className="z-30 text-white text-center max-w-7xl mx-auto w-full">
          {/* <h1 className="title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#daa425] opacity-0 translate-y-8 mb-4 tracking-wider">
            Technovista
          </h1> */}
          <img
            src="/events/Technovista2025/tv25-icons/landing-page-text.png"
            alt="Technovista Title"
            className="mx-auto w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] xl:w-[45%] max-w-[1000px] h-auto mb-6"
          />

          <p className="font-mono subtitle text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl mb-6 text-white/80 leading-snug sm:leading-normal opacity-0 translate-y-8 text-center px-4">
            Where Innovation Explodes Into Reality
          </p>

          <p className="font-mono date text-sm sm:text-base md:text-xl lg:text-2xl mb-8 text-[#daa425] opacity-0 translate-y-8">
            July 30 - August 1, 2025
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <button
              className="font-sans cta-button px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg md:text-lg bg-[#daa425] text-black rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.5)] opacity-0 scale-90 font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-all duration-300 ease-in-out"
              onClick={() => navigate("/technovista/register")}
            >
              Register Now
            </button>
            <button
              className="font-sans cta-button px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg md:text-lg text-[#daa425] rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.5)] opacity-0 scale-90 font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-all duration-300 ease-in-out"
              onClick={() => navigate("/technovista")}
            >
              Enter the Nexus
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTV;
