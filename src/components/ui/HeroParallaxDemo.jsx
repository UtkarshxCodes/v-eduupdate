"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

export const products = [
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1673515335586-f9f662c01482?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV4cGVyaWVuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "V-EDU",
    link: "www.v-edu.us",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}