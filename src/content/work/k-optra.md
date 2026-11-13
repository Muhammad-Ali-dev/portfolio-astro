---
title: "K-Optra"
summary: "A real-time logistics dispatch platform with high-performance map interfaces, live driver tracking, WebSocket job-status updates, and a route-planning interface with Gantt view."
role: "Frontend Lead"
type: "Real-time logistics platform"
order: 4
kind: company
tier: flagship
featured: true
stack:
  - React
  - TypeScript
  - Leaflet.js
  - Canvas API
  - WebSockets
  - Zustand
highlights:
  - "Architected high-performance map interfaces rendering thousands of live fleet markers in a single Canvas layer."
  - "Cut scheduling processing time by 40% through optimised real-time rendering and asynchronous state management."
  - "Built live driver tracking and job-status updates over WebSockets."
  - "Delivered a route-planning interface with Gantt view, Leaflet.js maps, and order tracking."
links: []
seo:
  title: "K-Optra Case Study"
  description: "Case study for K-Optra: a real-time logistics dispatch platform with Canvas map rendering, WebSocket live tracking, and route planning with Gantt view."
  keywords:
    - K-Optra
    - logistics
    - real-time
    - React Leaflet
    - Canvas API
    - WebSockets
---

## Problem

K-Optra needed to render thousands of live fleet markers on a map in real time, while giving dispatchers a route-planning interface with Gantt scheduling and live job-status updates.

## Contribution

As frontend lead at Focus IT Services, I diagnosed a critical rendering bottleneck caused by individual DOM updates for each map marker, redesigned the rendering pipeline around a single Canvas layer, and built the WebSocket integration for live tracking and dispatch.

## High-performance map rendering

The original implementation updated individual DOM elements for each fleet marker, causing severe performance degradation at scale. I redesigned the approach around a single Canvas layer using the Canvas API and React Leaflet, rendering all markers in one composited pass. This cut scheduling processing time by 40% and kept the map smooth under real-world fleet loads.

## Live tracking and dispatch

Driver locations and job statuses stream over WebSockets. Dispatchers see live position updates and order status changes without polling. The route-planning interface combines a Gantt view for scheduling with Leaflet.js maps for spatial planning and order tracking.

## Technical decisions

Zustand manages real-time state for connected clients. Asynchronous state management decouples the WebSocket message stream from the rendering cycle, preventing UI jank under high message throughput. The Canvas rendering layer is kept separate from the React component tree to avoid unnecessary re-renders.
