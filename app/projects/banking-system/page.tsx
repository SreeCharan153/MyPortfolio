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

const BankingSystemCaseStudy = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto space-y-12">
      {/* Back */}
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
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text pb-6">
          Secure Banking System – FastAPI + PostgreSQL
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A hardened banking backend with strict role-based access, hashed PIN
          authentication, immutable-style ledgers, and atomic money operations.
          Built to simulate real financial constraints such as account locking,
          fraud detection and concurrency safety.
        </p>

        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <Badge>FastAPI</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>JWT Auth</Badge>
          <Badge>Audit Logs</Badge>
          <Badge>RBAC</Badge>
          <Badge>Atomic Transactions</Badge>
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

      {/* Architecture */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>System Architecture</CardTitle>
          <CardDescription>
            Modular separation across auth, money operations, RBAC and
            audit-event logging.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Image
            src="/banking_architecture.svg"
            alt="Banking Architecture"
            width={900}
            height={500}
            className="rounded-lg shadow"
          />
          <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
            <li>Next.js client → FastAPI backend</li>
            <li>JWT-based session and permission enforcement</li>
            <li>Strict SQL transactions wrapping all money operations</li>
            <li>Audit trail ensures accountability and traceability</li>
          </ul>
        </CardContent>
      </Card>

      {/* RBAC */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Role-Based Access Control</CardTitle>
          <CardDescription>
            Separation of duties between Customer, Teller, and Admin.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">{`ROLE MATRIX

                    Customer   Teller   Admin
------------------------------------------------
View Balance         ✔️         ✔️        ✔️
Deposit/Withdraw     ✔️         ✔️        ✔️
Transfer Money       ✔️         ✔️        ✔️
Create Account       ❌         ✔️        ✔️
Lock/Unlock Account  ❌         ✔️        ✔️
View All Users       ❌         ❌        ✔️
View Audit Logs      ❌         ❌        ✔️`}</pre>

          <p className="text-muted-foreground mt-3">
            Permission checks occur on both the route layer and inside SQL
            procedures to prevent privilege escalation.
          </p>
        </CardContent>
      </Card>

      {/* Database Schema */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Database Schema</CardTitle>
          <CardDescription>
            Highly normalised schema with ledger-style history tables.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <pre className="p-4 rounded-lg bg-secondary/50 overflow-x-auto text-sm">{`users (id, user_name, password, role)
accounts (id, account_no, name, pin, balance, failed_attempts, is_locked, user_id)
history (id, account_id, amount, type, timestamp)
audit_logs (id, actor, action, details, ip, user_agent, timestamp)`}</pre>

          <p>
            PINs use bcrypt hashing and failed login attempts automatically
            lock the account. The <strong>history</strong> table works like a
            mini-ledger capturing all financial activity.
          </p>
        </CardContent>
      </Card>

      {/* API Endpoints */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>API Endpoints</CardTitle>
          <CardDescription>Organised by feature domain.</CardDescription>
        </CardHeader>

        <CardContent>
          <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">{`AUTH
POST /register_account
PUT  /change_pin
POST /login

ACCOUNTS
GET  /get_account_by_account_no
GET  /get_accounts
GET  /get_all_potential_accounts

MONEY OPS
POST /deposit
POST /withdraw
POST /transfer_to_another_account

HISTORY + AUDIT
GET  /history/{account_no}
GET  /get_all_audit_logs  (admin only)
DELETE /delete_all_history (demo)
DELETE /delete_all_audit_logs (demo)`}</pre>
        </CardContent>
      </Card>

      {/* Request Lifecycle */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Request Lifecycle</CardTitle>
          <CardDescription>Full validation pipeline.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <ul className="list-disc ml-6 space-y-2">
            <li>JWT decoded → role + permissions verified</li>
            <li>Account state validated (locked, failed attempts)</li>
            <li>SELECT ... FOR UPDATE ensures row-level locking</li>
            <li>Money operation + history entry wrapped in transaction</li>
            <li>Audit log written</li>
          </ul>
        </CardContent>
      </Card>

      {/* Concurrency */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Concurrency Guarantees</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 text-muted-foreground">
          <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">{`BEGIN;
SELECT * FROM accounts WHERE id='A' FOR UPDATE;
SELECT * FROM accounts WHERE id='B' FOR UPDATE;
UPDATE accounts ...;
INSERT INTO history ...;
COMMIT;`}</pre>

          <ul className="list-disc ml-6 space-y-2">
            <li>FOR UPDATE ensures no concurrent withdrawal corrupts balance.</li>
            <li>Strict serialisation of money movement.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Audit Logs */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Audit Logging</CardTitle>
          <CardDescription>Forensics, fraud detection, and debugging.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <ul className="list-disc ml-6 space-y-2">
            <li>Every action is traced with actor, IP, device, and timestamp.</li>
            <li>Crucial for detecting teller misuse and fraud patterns.</li>
            <li>Real banks use WORM storage; this demo allows clearing for testing.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Challenges */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Challenges & Solutions</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc ml-6 space-y-2">
            <li>Race conditions → fixed using SELECT FOR UPDATE + atomic commits.</li>
            <li>PIN brute-force → automatic account lock after repeated failures.</li>
            <li>Maintaining traceability → strict audit event generation.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Limitations */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
          <CardDescription>Honest constraints compared to real banking infra.</CardDescription>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-2">
          <p>• No multi-factor authentication for high-value actions.</p>
          <p>• No distributed transactions or cross-ledger coordination.</p>
          <p>• Audit logs not append-only (demo constraint).</p>
          <p>• No AML/KYC integration or fraud-detection engine.</p>
        </CardContent>
      </Card>

      {/* Learnings */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>What I Learned</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-2">
          <p>✅ ACID transactions for financial safety</p>
          <p>✅ Secure auth flows: bcrypt + JWT</p>
          <p>✅ How banks protect ledgers and audit trails</p>
          <p>✅ Structuring modular APIs with FastAPI routers</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankingSystemCaseStudy;