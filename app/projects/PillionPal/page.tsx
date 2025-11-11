"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PillionPalCaseStudy = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto space-y-12">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="flex items-center text-sm text-muted-foreground hover:text-primary transition"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Projects
      </Link>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text pb-4">
          PillionPal – Real-Time Ride-Sharing Backend
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          FastAPI backend powering a motorcycle & scooter ride-sharing platform.
          Supports secure OTP login, JWT sessions, WebSocket GPS streaming,
          user wallets, and mileage-based pricing through <strong>FairSplit</strong>.
        </p>

        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <Badge>FastAPI</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>WebSockets</Badge>
          <Badge>JWT Auth</Badge>
          <Badge>OTP Login</Badge>
          <Badge>FairSplit Engine</Badge>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="https://pillionpal.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </Link>

          <Link
            href="https://github.com/SreeCharan153/PillionPal-API"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <Github className="h-4 w-4" /> Source Code
          </Link>
        </div>
      </motion.div>

      {/* Architecture */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Backend Architecture</CardTitle>
          <CardDescription>Client → FastAPI → WebSockets → PostgreSQL</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/pillionpal_architecture_layered.svg"
            alt="PillionPal Architecture"
            width={900}
            height={500}
            className="rounded-lg shadow"
          />

          <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
            <li>OTP login → JWT session (access + refresh)</li>
            <li>Live WebSocket channel for driver ↔ rider location</li>
            <li>Wallet balance synced with ride completion</li>
            <li>FairSplit calculates fare using mileage & fuel factor</li>
            <li>Uses MapBox for distance & route visualization</li>
          </ul>
        </CardContent>
      </Card>

      {/* ✅ API Endpoints */}
      <Card className="backdrop-blur-md bg-card/70 border-border">
        <CardHeader>
          <CardTitle>API Endpoints</CardTitle>
          <CardDescription>
            JSON APIs consumed by Flutter mobile client.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-secondary/50 p-4 text-sm rounded-lg overflow-x-auto">
{`AUTH
POST /auth/send-otp               -> Sends OTP
POST /auth/verify-otp            -> Issues JWT tokens (HTTP-only cookies)
PUT  /auth/change_password       -> Change user password
DELETE /auth/delete_account      -> Removes account

BIKE & RIDER
POST /bike/register              -> Register bike details
POST /rider/register             -> Register rider profile
GET  /get-rider-details          -> Fetch bike & rider linked info

RIDES
POST /rider/request_ride         -> Rider requests trip
GET  /pillion/ride_requests      -> Pillion sees pending requests
PUT  /pillion/update_ride        -> Accept / cancel / complete ride

HISTORY
GET  /history/rider              -> Rider ride history
GET  /history/pillion            -> Completed pillion trips`}
          </pre>
        </CardContent>
      </Card>

      {/* ✅ Sample JSON Requests & Responses */}
      <Card className="backdrop-blur-md bg-card/70 border-border">
        <CardHeader>
          <CardTitle>Sample Requests & Responses</CardTitle>
          <CardDescription>Used by mobile client and testing scripts.</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-secondary/50 p-4 text-sm rounded-lg overflow-x-auto">
{`# Login (OTP Verification)
POST /auth/verify-otp
{
  "phone": "9876543210",
  "otp": "543210"
}

# Response
{
  "message": "Login successful",
  "token": "JWT_TOKEN",
  "refresh": "REFRESH_TOKEN"
}

# Requesting a Ride
POST /rider/request_ride
{
  "from": "MVP Colony",
  "to": "Rushikonda",
  "distance_km": 8
}

# Response
{
  "ride_id": 22,
  "fare": 58.0,
  "status": "waiting_for_pillion"
}

# WebSocket Live Location
ws://api.pillionpal.com/live?ride_id=22
{
  "latitude": 17.7829,
  "longitude": 83.3832,
  "speed": 42
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Auth */}
      <Card className="backdrop-blur-md bg-card/70 border-border">
        <CardHeader>
          <CardTitle>Authentication & Sessions</CardTitle>
          <CardDescription>Zero-password flow using OTP + JWT.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <p>✅ OTP verification issues JWT (access + refresh)</p>
          <p>✅ Tokens stored in HTTP-only cookies → cannot be stolen by JS</p>
          <p>✅ Refresh endpoint renews expired sessions safely</p>
        </CardContent>
      </Card>

      {/* Realtime GPS */}
      <Card className="backdrop-blur-md bg-card/70 border-border">
        <CardHeader>
          <CardTitle>Real-Time GPS (WebSockets)</CardTitle>
          <CardDescription>Driver broadcasts, rider receives live map updates.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <ul className="list-disc ml-6 space-y-2">
            <li>Low latency streaming</li>
            <li>Auto-reconnect on network drop</li>
            <li>Arrival detection & trip closure based on GPS</li>
          </ul>
        </CardContent>
      </Card>

      {/* FairSplit */}
      <Card className="backdrop-blur-md bg-card/70 border-border">
        <CardHeader>
          <CardTitle>FairSplit – Mileage-Based Pricing</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">
{`fare = base_fare + (distance_km * (1/mileage) * fuel_cost)`}
          </pre>
          <p>Fair to both rider & pillion based on real fuel usage.</p>
        </CardContent>
      </Card>

      {/* Wallet */}
      <Card className="backdrop-blur-md bg-card/70 border-border">
        <CardHeader>
          <CardTitle>Wallet System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-muted-foreground">
          <ul className="list-disc ml-6 space-y-2">
            <li>Balance stored in PostgreSQL</li>
            <li>Deduction only after ride success</li>
            <li>Ledger history for transparency</li>
          </ul>
        </CardContent>
      </Card>

      {/* Challenges */}
      <Card className="backdrop-blur-md bg-card/70 border-border">
        <CardHeader>
          <CardTitle>Challenges & Solutions</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc ml-6 space-y-2">
            <li>GPS delay → optimized broadcast interval</li>
            <li>Network drops → auto reconnect sync</li>
            <li>Ride fraud → audit timestamps + user actions</li>
          </ul>
        </CardContent>
      </Card>

      {/* Learnings */}
      <Card className="backdrop-blur-md bg-card/70 border-border">
        <CardHeader>
          <CardTitle>What I Learned</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2">
          <p>✅ WebSocket event pipelines</p>
          <p>✅ OTP login + JWT refresh tokens</p>
          <p>✅ Pricing & billing logic</p>
          <p>✅ Mobile network handling in real-time apps</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PillionPalCaseStudy;
