---
title: "Billboard Digitalizer"
summary: "An AI campaign recommendation platform with a RAG chatbot (LangChain, OpenAI APIs) grounding recommendations in billboard location, pricing, and past-campaign data, with a dynamic pricing engine and role-based dashboards."
role: "Full-stack Lead"
type: "AI campaign recommendation platform"
order: 2
kind: company
tier: flagship
featured: true
stack:
  - React
  - Node.js
  - LangChain
  - OpenAI API
  - TypeScript
  - Tailwind CSS
highlights:
  - "Built a RAG chatbot (LangChain, OpenAI APIs) grounding campaign recommendations in billboard location, pricing, and past-campaign data."
  - "Delivered a full-stack platform with a dynamic pricing engine and role-based dashboards."
  - "React frontend with Node.js backend, integrating OpenAI tool-calling patterns for structured recommendations."
links: []
seo:
  title: "Billboard Digitalizer Case Study"
  description: "Case study for Billboard Digitalizer: an AI campaign recommendation platform using RAG, LangChain, OpenAI APIs, dynamic pricing, and role-based dashboards."
  keywords:
    - Billboard Digitalizer
    - RAG
    - LangChain
    - OpenAI
    - AI recommendation
    - React
    - Node.js
---

## Problem

Billboard advertising clients needed a smarter way to plan and price campaigns — one that grounds recommendations in real data: billboard location, historical pricing, and past campaign performance, rather than manual lookups.

## Contribution

As full-stack lead at Focus IT Services, I designed and built the end-to-end platform — the RAG pipeline, dynamic pricing engine, role-based dashboards, and the React frontend backed by a Node.js API.

## RAG recommendation engine

The core of the platform is a retrieval-augmented generation (RAG) chatbot built with LangChain and the OpenAI API. When a client asks for campaign recommendations, the chatbot retrieves relevant billboard location data, pricing history, and past campaign results from the knowledge base before generating a response. This grounds every recommendation in real business data rather than relying on model knowledge alone.

OpenAI tool-calling patterns allow the chatbot to query structured pricing and location data dynamically during a conversation, producing actionable, data-backed suggestions.

## Dynamic pricing engine

A dynamic pricing engine adjusts campaign costs based on billboard location, demand, seasonality, and campaign parameters. Pricing is computed server-side in Node.js and surfaced through the role-based dashboards.

## Technical decisions

The React frontend communicates with a Node.js backend that owns the LangChain orchestration and OpenAI API calls. Role-based dashboards separate client-facing views (recommendations, pricing) from admin views (billboard management, campaign analytics). The RAG pipeline uses a retrieval layer over structured business data to keep recommendations accurate and auditable.
