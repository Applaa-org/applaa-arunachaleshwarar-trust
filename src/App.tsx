import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Public Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Donate from "./pages/Donate";
import Transparency from "./pages/Transparency";
import Impact from "./pages/Impact";
import Volunteer from "./pages/Volunteer";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

// User Dashboards
import DonorDashboard from "./pages/dashboard/DonorDashboard";
import VolunteerDashboard from "./pages/dashboard/VolunteerDashboard";

// Admin Panel
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDonations from "./pages/admin/AdminDonations";
import AdminCampaigns from "./pages/admin/AdminCampaigns";
import AdminBeneficiaries from "./pages/admin/AdminBeneficiaries";
import AdminCompliance from "./pages/admin/AdminCompliance";
import AdminReports from "./pages/admin/AdminReports";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Public routes
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const programsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/programs',
  component: Programs,
})

const programDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/programs/$slug',
  component: ProgramDetail,
})

const donateRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/donate',
  component: Donate,
})

const transparencyRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/transparency',
  component: Transparency,
})

const impactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/impact',
  component: Impact,
})

const volunteerRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/volunteer',
  component: Volunteer,
})

const newsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/news',
  component: News,
})

const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const galleryRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: Gallery,
})

// Dashboard routes
const donorDashboardRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/donor',
  component: DonorDashboard,
})

const volunteerDashboardRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard/volunteer',
  component: VolunteerDashboard,
})

// Admin routes
const adminDashboardRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminDashboard,
})

const adminDonationsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/donations',
  component: AdminDonations,
})

const adminCampaignsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/campaigns',
  component: AdminCampaigns,
})

const adminBeneficiariesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/beneficiaries',
  component: AdminBeneficiaries,
})

const adminComplianceRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/compliance',
  component: AdminCompliance,
})

const adminReportsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/reports',
  component: AdminReports,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  programsRoute,
  programDetailRoute,
  donateRoute,
  transparencyRoute,
  impactRoute,
  volunteerRoute,
  newsRoute,
  contactRoute,
  galleryRoute,
  donorDashboardRoute,
  volunteerDashboardRoute,
  adminDashboardRoute,
  adminDonationsRoute,
  adminCampaignsRoute,
  adminBeneficiariesRoute,
  adminComplianceRoute,
  adminReportsRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;