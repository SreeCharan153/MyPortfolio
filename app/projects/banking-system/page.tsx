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
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BankingSystemCaseStudy = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto space-y-12">
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
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text pb-6">
          Secure Banking System — FastAPI + PostgreSQL
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A production-style banking backend with strict RBAC, hashed PIN
          authentication, account lock policies, immutable history logs, and
          fully ACID-safe money movement.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <Badge>FastAPI</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>JWT Auth</Badge>
          <Badge>RBAC</Badge>
          <Badge>Audit Logs</Badge>
          <Badge>Atomic TXNs</Badge>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="https://rupeewave.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </Link>
          <Link
            href="https://github.com/SreeCharan153/RupeeWave"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <Github className="h-4 w-4" /> Source Code
          </Link>
        </div>
      </motion.div>

      {/* ARCHITECTURE */}
      <Card className="bg-card/70 backdrop-blur-md border">
        <CardHeader>
          <CardTitle>System Architecture</CardTitle>
          <CardDescription>
            Modular structure for security, clarity and maintainability.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/banking_architecture.svg"
            width={900}
            height={500}
            alt="Architecture"
            className="rounded-lg shadow"
          />

          <ul className="list-disc ml-6 mt-4 text-muted-foreground space-y-2">
            <li>Next.js client → FastAPI backend</li>
            <li>JWT-based session and role enforcement</li>
            <li>Atomic SQL transactions for all money movement</li>
            <li>Centralised audit pipeline for traceability</li>
          </ul>
        </CardContent>
      </Card>

      {/* RBAC TABLE */}
      <Card className="bg-card/70 backdrop-blur-md border">
        <CardHeader>
          <CardTitle>Role-Based Access Control</CardTitle>
          <CardDescription>
            Responsibilities clearly separated across Customer, Teller and Admin.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="p-3 text-left">Capability</th>
                  <th className="p-3 text-center">Customer</th>
                  <th className="p-3 text-center">Teller</th>
                  <th className="p-3 text-center">Admin</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["View Balance", "✔️", "✔️", "✔️"],
                  ["Deposit / Withdraw", "✔️ (self)", "✔️", "✔️"],
                  ["Transfer Money", "✔️ (self)", "✔️", "✔️"],
                  ["Create Account", "❌", "✔️", "✔️"],
                  ["Lock/Unlock Account", "❌", "✔️", "✔️"],
                  ["View All Users", "❌", "❌", "✔️"],
                  ["View Audit Logs", "❌", "❌", "✔️"],
                ].map((row, idx) => (
                  <tr key={idx} className="border-t border-border">
                    <td className="p-3">{row[0]}</td>
                    <td className="p-3 text-center">{row[1]}</td>
                    <td className="p-3 text-center">{row[2]}</td>
                    <td className="p-3 text-center">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground mt-3">
            Permission checks run at both API and SQL layers to block privilege
            escalation.
          </p>
        </CardContent>
      </Card>

      {/* SCHEMA */}
      <Card className="bg-card/70 backdrop-blur-md border">
        <CardHeader>
          <CardTitle>Database Schema</CardTitle>
          <CardDescription>Ledger-style financial design.</CardDescription>
        </CardHeader>

        <CardContent>
          <pre className="p-4 bg-secondary/50 rounded-md text-sm overflow-x-auto">{`users      (id, user_name, password, role)
accounts   (id, account_no, name, pin_hash, balance, failed_attempts, is_locked, user_id)
history    (id, account_id, amount, type, timestamp)
audit_logs (id, actor, action, details, ip, user_agent, timestamp)`}</pre>

          <p className="text-muted-foreground mt-3">
            PINs are hashed using bcrypt. The history table acts as an
            append-only mini ledger recording all movement.
          </p>
        </CardContent>
      </Card>

      {/* CONCURRENCY */}
      <Card className="bg-card/70 backdrop-blur-md border">
        <CardHeader>
          <CardTitle>Concurrency Guarantees</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3">
          <pre className="p-4 bg-secondary/50 rounded-md text-sm overflow-x-auto">{`BEGIN;
SELECT * FROM accounts WHERE id='A' FOR UPDATE;
SELECT * FROM accounts WHERE id='B' FOR UPDATE;
UPDATE accounts ...
INSERT INTO history ...
COMMIT;`}</pre>

          <p>
            Row-level locks ensure that two withdrawals on the same account
            cannot run in parallel or corrupt balance.
          </p>
        </CardContent>
      </Card>

      {/* AUDIT LOGS */}
      <Card className="bg-card/70 backdrop-blur-md border">
        <CardHeader>
          <CardTitle>Audit Logging</CardTitle>
          <CardDescription>Every action leaves a trace.</CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc ml-6 space-y-2">
            <li>Stored: actor, action, IP, device, timestamp</li>
            <li>Crucial for fraud detection and misuse investigation</li>
            <li>Real banks enforce WORM — demo allows clearing logs</li>
          </ul>
        </CardContent>
      </Card>

      {/* CHALLENGES */}
      <Card className="bg-card/70 backdrop-blur-md border">
        <CardHeader>
          <CardTitle>Challenges & Solutions</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2">
          <p>• Eliminating race conditions → row-level locks</p>
          <p>• Brute-force PIN attempts → auto lockout</p>
          <p>• Guaranteed traceability → strict audit logs</p>
        </CardContent>
      </Card>

      {/* LIMITATIONS */}
      <Card className="bg-card/70 backdrop-blur-md border">
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2">
          <p>• No 2FA for high-risk ops</p>
          <p>• Audit logs not append-only</p>
          <p>• No AML/KYC pipeline</p>
          <p>• Single database (non-distributed)</p>
        </CardContent>
      </Card>

      {/* LEARNINGS */}
      <Card className="bg-card/70 backdrop-blur-md border">
        <CardHeader>
          <CardTitle>What I Learned</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-2">
          <p>✓ ACID-safe financial transactions</p>
          <p>✓ Secure auth (bcrypt + JWT)</p>
          <p>✓ Ledger and audit design</p>
          <p>✓ Modular FastAPI architecture</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankingSystemCaseStudy;
