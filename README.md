# 🏥 EpicHealth C4 Omnichannel Platform

![EpicHealth Dashboard](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive healthcare omnichannel platform dashboard for managing patient metrics, marketing campaigns, AI-assisted workflows, and the complete patient journey.

## Features

- 📊 **Dashboard Metrics** - Real-time key performance indicators
- 📈 **Patient Volume Charts** - Monthly patient data visualization
- 🎯 **Quick Actions** - One-click access to common tasks
- 📋 **Activity Feed** - Recent system activities and updates
- 👥 **RFM Segmentation** - Patient cohort management
- 🤖 **AI Assistant** - Intelligent query console
- 📢 **Marketing Studio** - Campaign creation and management
- 📝 **Campaign Templates** - Pre-built campaign workflows
- 📊 **Marketing Performance** - ROI and channel analytics
- 🗺️ **Patient Journey Map** - End-to-end journey visualization

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6967628940088e3d76970112&clone_repository=6967655f40088e3d769701ae)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "You are a senior frontend engineer and UX designer. Build a single-page responsive dashboard for a healthcare omnichannel platform called "EpicHealth – C4 Omnichannel Platform". Overall goals: Clean, modern, data-heavy admin dashboard. Emphasize patient metrics, marketing performance, and AI tooling. Layout and content should closely match this reference page: https://696760b9265aca6c24ff73e5--cosmic-shortbread-50ac5d.netlify.app/"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Cosmic](https://www.cosmicjs.com/docs) - Headless CMS

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the EpicHealth bucket

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

## Cosmic SDK Examples

### Fetching Dashboard Settings
```typescript
const { object: settings } = await cosmic.objects.findOne({
  type: 'dashboard-settings'
}).depth(1)
```

### Fetching All Metrics
```typescript
const { objects: metrics } = await cosmic.objects.find({
  type: 'dashboard-metrics'
}).depth(1)
```

### Fetching Marketing Campaigns
```typescript
const { objects: campaigns } = await cosmic.objects.find({
  type: 'marketing-campaigns'
}).depth(1)
```

## Cosmic CMS Integration

This application uses the following Cosmic object types:
- **Dashboard Settings** - Platform configuration and navigation
- **Dashboard Metrics** - Key performance indicators
- **Monthly Patient Data** - Patient volume by month
- **Quick Actions** - Action buttons configuration
- **Recent Activities** - Activity feed items
- **Patient Segments** - RFM and event-based segments
- **AI Assistant Config** - AI assistant settings
- **Marketing Campaigns** - Active marketing campaigns
- **Campaign Templates** - Reusable campaign templates
- **Journey Stages** - Patient journey stages
- **Marketing Performance** - ROI and channel metrics

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Push your code to GitHub
2. Connect to Netlify
3. Add environment variables
4. Deploy

<!-- README_END -->