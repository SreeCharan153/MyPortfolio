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
          A production-style banking backend with hashed PIN authentication,
          atomic money operations, transaction history, audit logs, and account
          locking. Built with SQL transactions to ensure balances are never corrupted.
        </p>

        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <Badge>FastAPI</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>JWT Auth</Badge>
          <Badge>Audit Logs</Badge>
          <Badge>Role-Based Access</Badge>
          <Badge>Atomic Ops</Badge>
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
            Separation between auth, money ops, history & logging.
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
            <li>Next.js client → FastAPI services</li>
            <li>JWT authentication for protected requests</li>
            <li>Atomic SQL transactions for money operations</li>
            <li>Audit logs track every sensitive action</li>
          </ul>
        </CardContent>
      </Card>

      {/* ✅ Database Schema */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Database Schema</CardTitle>
          <CardDescription>Normalised with foreign keys and ledger tracking.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <pre className="p-4 rounded-lg bg-secondary/50 overflow-x-auto text-sm">
{`users (id, user_name, password, role)
accounts (id, account_no, name, pin, balance, failed_attempts, is_locked, user_id)
history (id, account_id, amount, type, timestamp)
audit_logs (id, actor, action, details, ip, user_agent, timestamp)`}</pre>

          <p>
            PINs are bcrypt-hashed before storing. The <strong>history</strong> table
            records every transaction, giving a full ledger like a real bank.
          </p>
        </CardContent>
      </Card>

      {/* ✅ API Endpoints */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>API Endpoints</CardTitle>
          <CardDescription>Structured around authentication & safe money flow.</CardDescription>
        </CardHeader>

        <CardContent>
          <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">
{`AUTH
POST /register_account
PUT  /change_pin
POST /login
POST /withdraw
POST /deposit

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
GET  /get_all_audit_logs
DELETE /delete_all_history
DELETE /delete_all_audit_logs`}
          </pre>
        </CardContent>
      </Card>

      {/* ✅ Sample Request/Response */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Sample Requests & Responses</CardTitle>
          <CardDescription>Used for debugging & testing.</CardDescription>
        </CardHeader>

        <CardContent>
          <pre className="bg-secondary/50 p-4 text-sm rounded-lg overflow-x-auto">
{`# Deposit
POST /deposit
{
  "account_no": "AC00123",
  "amount": 500
}

# Response
{
  "message": "Deposit successful",
  "new_balance": 12500.0
}

# Withdraw
POST /withdraw
{
  "account_no": "AC00123",
  "amount": 250
}

# Response
{
  "message": "Withdrawal successful",
  "new_balance": 12250.0
}

# Transfer
POST /transfer_to_another_account
{
  "from": "AC00123",
  "to": "AC00456",
  "amount": 200
}

# Response
{
  "message": "Transfer completed",
  "from_balance": 12050.0,
  "to_balance": 8120.0
}`}
          </pre>
        </CardContent>
      </Card>

      {/* PIN Security */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>PIN Security & Login Safety</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">
{`def hash_pin(self, pin: str) -> str:
    return hashpw(pin.encode(), gensalt()).decode()

def verify_pin(self, pin: str, hashed_pin: str) -> bool:
    return checkpw(pin.encode(), hashed_pin.encode())`}
          </pre>

          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Stores only hashed PIN strings</li>
            <li>Failed attempts increment counter</li>
            <li>If limit passed → account automatically locked</li>
          </ul>
        </CardContent>
      </Card>

      {/* Atomic Transactions */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Atomic Money Operations</CardTitle>
        </CardHeader>

        <CardContent>
          <pre className="p-4 rounded-lg bg-secondary/50 text-sm overflow-x-auto">
{`BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id='A';
UPDATE accounts SET balance = balance + 100 WHERE id='B';
INSERT INTO history (...);
COMMIT;`}
          </pre>

          <p className="mt-3 text-muted-foreground">
            If any query fails → <strong>ROLLBACK</strong>.  
            Balances are never corrupted.
          </p>
        </CardContent>
      </Card>

      {/* Audit Logs */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>Audit Logging</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 text-muted-foreground">
          <ul className="list-disc ml-6 space-y-2">
            <li>Records actor, action, IP, device, timestamp</li>
            <li>Detects fraud or suspicious activity</li>
            <li>Helps debugging & accountability</li>
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
            <li>Race conditions → solved using SQL transactions</li>
            <li>Bruteforce PIN attacks → automatic account lock</li>
            <li>Data analysis → audit logs track every action</li>
          </ul>
        </CardContent>
      </Card>

      {/* Learnings */}
      <Card className="backdrop-blur-md bg-card/70 border border-border">
        <CardHeader>
          <CardTitle>What I Learned</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-2">
          <p>✅ ACID guarantees & transaction safety</p>
          <p>✅ Hashed credentials & secure auth flows</p>
          <p>✅ Modular API design with FastAPI routers</p>
          <p>✅ Why banks maintain immutable ledgers</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankingSystemCaseStudy;
