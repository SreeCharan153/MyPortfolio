"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ManageProCaseStudy = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto space-y-12">
      {/* BACK */}
      <Link
        href="/#projects"
        className="flex items-center text-sm text-muted-foreground hover:text-primary transition"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Projects
      </Link>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text pb-6">
          ManagePro — HRMS Platform
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A modular HR management system handling employee lifecycle, attendance,
          leave workflows and payroll — built with FastAPI, Supabase and React
          with strict role-based access control.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <Badge>FastAPI</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>Supabase</Badge>
          <Badge>JWT Auth</Badge>
          <Badge>RBAC</Badge>
          <Badge>React</Badge>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/YOUR_LINK"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <Github className="h-4 w-4" /> Source Code
          </Link>
        </div>
      </motion.div>

      {/* PROBLEM */}
      <Card>
        <CardHeader>
          <CardTitle>The Problem</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3">
          <p>
            Traditional HR systems are fragmented — employee data, attendance,
            and leave workflows are often handled across disconnected tools,
            leading to inefficiency and poor visibility.
          </p>
          <p>
            The goal was to design a **single backend system** that enforces
            strict role-based control while supporting real-world HR workflows.
          </p>
        </CardContent>
      </Card>

    <Card>
        <CardHeader>
            <CardTitle>Real API Integration</CardTitle>
            <CardDescription>
                Fully connected frontend with live backend data — no mock layers.
            </CardDescription>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-3">
            <p>
                All frontend modules consume live FastAPI endpoints through a centralized API client.
            </p>

            <ul className="list-disc ml-6 space-y-2">
                <li>JWT stored and attached via Authorization headers</li>
                <li>Dynamic role-based UI rendering from backend responses</li>
                <li>Attendance, employees, and leave data fetched in real-time</li>
                <li>Error states and loading states handled at component level</li>
            </ul>

            <p>
                This ensures consistency between backend rules and frontend behavior,
                eliminating data drift or UI-level bypasses.
            </p>
        </CardContent>
    </Card>

      {/* ARCHITECTURE */}
      <Card>
        <CardHeader>
          <CardTitle>System Architecture</CardTitle>
          <CardDescription>
            Built with clear separation between API, business logic and data.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-3">
          <p>
            The backend follows a **service-layer architecture**, isolating
            business rules from API routes to improve maintainability and scale.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>FastAPI routers for modular endpoints</li>
            <li>Service layer for domain logic</li>
            <li>Supabase PostgreSQL for persistence</li>
            <li>JWT-based authentication with role enforcement</li>
          </ul>
        </CardContent>
      </Card>

      {/* CORE FEATURES */}
      <Card>
        <CardHeader>
          <CardTitle>Core Features</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-3">
          <p>• Employee lifecycle management (create, update, deactivate)</p>
          <p>• Attendance system with check-in / check-out + work hour calculation</p>
          <p>• Leave workflow with approval pipeline</p>
          <p>• Payroll generation based on attendance data</p>
          <p>• Role-based access (Admin / HR / Employee)</p>
        </CardContent>
      </Card>

      {/* AUTH */}
      <Card>
        <CardHeader>
          <CardTitle>Authentication & Security</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-3">
          <p>
            Authentication is handled using JWT tokens containing user role and
            identity metadata.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Password hashing using bcrypt</li>
            <li>Role-based route protection</li>
            <li>Token-based session handling</li>
          </ul>
        </CardContent>
      </Card>

      {/* ENGINEERING DECISIONS */}
      <Card>
        <CardHeader>
          <CardTitle>Key Engineering Decisions</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-3">
          <p>
            • Used **service-layer pattern** to avoid fat route handlers
          </p>
          <p>
            • Enforced **role validation at backend**, not just frontend
          </p>
          <p>
            • Designed modules independently (auth, employees, attendance, leaves)
          </p>
          <p>
            • Computed work hours dynamically during checkout
          </p>
        </CardContent>
      </Card>

      {/* CHALLENGES */}
      <Card>
        <CardHeader>
          <CardTitle>Challenges</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-3">
          <p>
            • Maintaining consistent role enforcement across endpoints
          </p>
          <p>
            • Designing clean separation between API and business logic
          </p>
          <p>
            • Handling edge cases like overlapping leaves and attendance gaps
          </p>
        </CardContent>
      </Card>

      {/* LIMITATIONS */}
      <Card>
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-3">
          <p>
            • Some frontend pages still rely on mock data instead of live APIs
          </p>
          <p>
            • Limited automated test coverage
          </p>
          <p>
            • No analytics dashboard yet
          </p>
        </CardContent>
      </Card>

      {/* LEARNINGS */}
      <Card>
        <CardHeader>
          <CardTitle>What I Learned</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-2">
          <p>✓ Designing scalable backend architectures</p>
          <p>✓ Implementing JWT-based authentication</p>
          <p>✓ Structuring real-world business logic in services</p>
          <p>✓ Building role-secured APIs</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageProCaseStudy;